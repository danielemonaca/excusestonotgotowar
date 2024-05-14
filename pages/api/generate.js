import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export default async function (req, res) {

  // Create a completion request to the OpenAI API
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "system",
        "content": "When I write you \"Give me an excuse\" you can suggest to me a reasonable, bizarre, eclectic, playful, almost absurd, unique bu also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Even flora and fauna and fictitious objects and entities may be involved in the excuse but treated as if they follow human phenomenology, behaviour and misfortunes \n  \n  \n  1. I can't go to war because i forgot the how to breath while having dinner.\n  2. I can't go to war because yesterday I talked with a bag of boring meteors and now I feel space-sick."
      },
      {
        "role": "user",
        "content": "Give me an excuse"
      },
      {
        "role": "assistant",
        "content": "I can't go to war because my pet fish is learning to whistle and i'm its only tutor."
      }
      ,
      {
        "role": "user",
        "content": "Give me an excuse"
      }
    ],
    temperature: 0.8,
    max_tokens: 50,
    top_p: 0.85,
  });

  // Extract the response from the completion
  const excuse = response.choices[0]


  res.status(200).json({ result: excuse });
}