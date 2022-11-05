import { Configuration, OpenAIApi } from "openai";
import rateLimit from '../../utils/rate-limit'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(),
    temperature: 1,
    max_tokens: 300,
  });

  
  const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
  })

  const excuse = completion.data.choices[0].text

  try {
    await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
    res.status(200).json({ result: excuse });
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }

}




function generatePrompt() {
  return `Suggest me 3 stupid,absurd, unique and impossible excuses to not go to war with all lowercase letters(nsfw is allowed)
  
  
  1. I cannot go to war because my grandma got locked in a closet trying to find shoes.
  2. I cannot go to war because yesterday I ate a whole bag of meteors and now I feel space-sick
  3. I cannot go to war because `;
}
