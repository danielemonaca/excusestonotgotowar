  import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(),
    temperature: 0.8,
    max_tokens: 300,
  });

  const excuse = completion.data.choices[0].text

  res.status(200).json({ result: excuse });
}




function generatePrompt() {
  return `Suggest me 3 stupid,absurd, unique and impossible excuses to not go to war with all lowercase letters(nsfw is allowed)
  
  
  1. I cannot go to war because my grandma got locked in a closet trying to find shoes.
  2. I cannot go to war because yesterday I ate a whole bag of meteors and now I feel space-sick
  3. I cannot go to war because `;
}
