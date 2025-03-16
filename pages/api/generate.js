import OpenAI from "openai";
import { getLastTenExcuses } from "../../firebase"; // adjust the path if needed
import { getWeightedRandomPrompt, prompts } from "../../pages/prompts"; // import the weighted random prompt function

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
  // Retrieve the last 10 excuses from Firebase
  const previousExcuses = await getLastTenExcuses();
  const historyText = previousExcuses.length > 0 ? `previous excuses: ${previousExcuses.join(', ')}` : '';

  // Get a random prompt based on weights
  const selectedPrompt = getWeightedRandomPrompt();

  // Print the prompt number it chose
  const promptIndex = prompts.findIndex(prompt => prompt.text === selectedPrompt);
  console.log("Selected prompt number:", promptIndex + 1);

  // Get the temperature from the selected prompt
  const selectedTemperature = prompts[promptIndex].temperature;

  const messages = [
    {
      role: "system",
      content: `${selectedPrompt}
      
      It shouldn't be a reason that was already used in the previous excuses.

      List of previous excuses: ${historyText}
      `
    },
    {
      role: "user",
      content: "give me an excuse"
    }
  ];

  // Create a completion request to the OpenAI API
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
    temperature: selectedTemperature,
    max_tokens: 50,
    top_p: 0.85,
  });
  
  // Extract the response from the completion
  const excuse = response.choices[0];

  res.status(200).json({ result: excuse });
}
