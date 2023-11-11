import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});


export default async function (req, res) {

  // Create a completion request to the OpenAI API
  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        "role": "system",
        "content": "When I write you \"Give me an excuse\" you can suggest to me a stupid, absurd, unique, and impossible excuse to not go to war with all lowercase letters.\n  \n  \n  1. I cannot go to war because my grandma got locked in a closet trying to find shoes.\n  2. I cannot go to war because yesterday I ate a whole bag of meteors and now I feel space-sick."
      },
      {
        "role": "user",
        "content": "Give me an excuse"
      },
      {
        "role": "assistant",
        "content": "i can't go to war because my pet fish is learning to whistle and i'm its only tutor."
      }
      ,
      {
        "role": "user",
        "content": "Give me an excuse"
      }
    ],
    temperature: 1.59,
    max_tokens: 810,
    top_p: 1,
    frequency_penalty: 1.21,
    presence_penalty: 1.18,
  });

  // Extract the response from the completion
  const excuse = response.choices[0]


  res.status(200).json({ result: excuse });
}