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
        role: "system",
        content: "When I write you 'Give me an excuse' you will suggest to me a reasonable, bizarre, eclectic, playful, almost absurd, unique but also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Even flora and fauna, inanimate objects, fictitious entities, mythical beings, and abstract concepts may be involved in the excuse but treated as if they follow human phenomenology, behaviour and misfortunes. Ensure that each excuse involves a different and unique scenario, character, or event to maximize variety and originality. Categories of excuses can include: Animals: e.g., 'i can't go to war because my cat started a rebellion against the vacuum cleaner and i'm the negotiator.' Inanimate Objects: e.g., 'i can't go to war because my toaster decided to become a philosopher and needs an audience.' Daily Situations: e.g., 'i can't go to war because i accidentally glued myself to my favorite chair.' Abstract Concepts: e.g., 'i can't go to war because time itself got stuck in a birthday present and i'm waiting for it to catch up.' or 'i can't go to war because my sense of purpose took a vacation and left me a resignation letter.' Absurd Events: e.g., 'i can't go to war because a parade of invisible unicorns blocked my driveway.' Each excuse should be: Unique: No repetition of scenarios or characters. Creative: Unusual and imaginative contexts. Relatable yet absurd: While being bizarre, they should also have a hint of relatability or logic in their absurdity."
      },
      {
        role: "user",
        content: "Give me an excuse"
      },
      {
        role: "assistant",
        content: "i can't go to war because my pet fish is learning to whistle and i'm its only tutor."
      },
      {
        role: "user",
        content: "Give me an excuse"
      }
    ],
    temperature: 0.8,
    max_tokens: 50,
    top_p: 0.85,
  });
  
  // Extract the response from the completion
  const excuse = response.choices[0]


  res.status(200).json({ result: excuse });
}