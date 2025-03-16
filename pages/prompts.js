const smallFantasiosa = "This must be a small sentence. When I write you 'Give me an excuse' you will suggest to me a reasonable, bizarre, unique but also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Ensure that it’s a rather small sentence, like the examples below. Categories of excuses can include: Animals: e.g., 'i can't go to war because my cat needs care.' Inanimate Objects: e.g., 'i can't go to war because i accidentally glued myself to my favorite chair.' Daily Situations: e.g., 'i can't go to war because i need the frozen pizza wednesday.' Abstract Concepts: e.g., 'i can't go to war because i'm tired.' or 'i can't go to war because it's my pre-birthday.' Absurd Events: e.g., 'i can't go to war because i like to be in line at the mail office.' Each excuse should be unusual, relatable yet absurd. While being bizarre, they should also have a hint of relatability or logic in their absurdity.";

const mediumFantasiosa = "When I write you 'Give me an excuse' you will suggest to me a reasonable, bizarre, eclectic, playful, unique but also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Even flora and fauna, inanimate objects, fictitious entities, mythical beings, and abstract concepts may be involved in the excuse but treated as if they follow human phenomenology, behaviour and misfortunes. Categories of excuses can include: Animals: e.g., 'i can't go to war because i think my merlin bird is planning a riot against my neighbor.' Inanimate Objects: e.g., 'i can't go to war because i need to buy a new pencil sharpener that doesn’t make me philosophize.' Daily Situations: e.g., 'i can't go to war because i have an interview for becoming a superleague mascot.' Abstract Concepts: e.g., 'i can't go to war because i don’t know how time works' or 'i can't go to war because the idea of waterfalls scares me.' Absurd Events: e.g., 'i can't go to war because a parade of ants wrote “peace” in my driveway.' Each excuse should be creative, unusual, relatable yet absurd. While being bizarre, they should also have a hint of relatability or logic in their absurdity.";

const veryFantasiosa = "When I write you 'Give me an excuse' you will suggest to me a reasonable, bizarre, eclectic, playful, almost absurd but also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Even flora and fauna, inanimate objects, fictitious entities, mythical beings, and abstract concepts may be involved in the excuse but treated as if they follow human phenomenology, behaviour and misfortunes. Categories of excuses can include: Animals: e.g., 'i can't go to war because my cat started a rebellion against the vacuum cleaner and i'm the negotiator.' Inanimate Objects: e.g., 'i can't go to war because my toaster decided to become a philosopher and needs an audience.' Daily Situations: e.g., 'i can't go to war because i accidentally glued myself to my favorite chair.' Abstract Concepts: e.g., 'i can't go to war because time itself got stuck in a birthday present and i'm waiting for it to catch up.' or 'i can't go to war because my sense of purpose took a vacation and left me a resignation letter.' Absurd Events: e.g., 'i can't go to war because a parade of invisible unicorns blocked my driveway.' Creative: Unusual and imaginative contexts. Relatable yet absurd: While being bizarre, they should also have a hint of relatability or logic in their absurdity.";

const smallveryFantasiosa = "This must be a small sentence.When I write you 'Give me an excuse' you will suggest to me a reasonable, bizarre, eclectic, playful, almost absurd but also relatable, usually unlikely and very specific excuse to not go to war with all lowercase letters. All kinds of typical human behaviour, actions, events and needs can be included. Even flora and fauna, inanimate objects, fictitious entities, mythical beings, and abstract concepts may be involved in the excuse as characters but treated as if they follow human phenomenology, behaviour and misfortunes. Ensure that it’s a rather small sentence, like the examples below. Categories of excuses can include: Animals: e.g., 'i can't go to war because my catlord says so.' Inanimate Objects: e.g., 'i can't go to war because the freezer just won a marathon.' Daily Situations: e.g., 'i can't go to war because they don’t accept elves #elflover.' Abstract Concepts: e.g., 'i can't go to war because i could cry oranges.' Absurd Events: e.g., 'i can't go to war because it’s snail strike day.' Each excuse should be unusual and absurd. While being bizarre, they should also have a small hint of relatability or logic in their absurdity.";

export const prompts = [
    { text: smallFantasiosa, weight: 2, temperature: 0.5 },   
    { text: mediumFantasiosa, weight: 4, temperature: 0.7 },  
    { text: veryFantasiosa, weight: 3, temperature: 0.8 },    
    { text: smallveryFantasiosa, weight: 1, temperature: 0.9 } 
];

/**
 * Selects a random prompt based on the assigned weights
 * @returns {string} The selected prompt text
 */
export function getWeightedRandomPrompt() {
    // Calculate the total weight
    const totalWeight = prompts.reduce((sum, prompt) => sum + prompt.weight, 0);
    
    // Generate a random number between 0 and the total weight
    const randomValue = Math.random() * totalWeight;
    
    // Find the prompt that corresponds to the random value
    let weightSum = 0;
    for (const prompt of prompts) {
        weightSum += prompt.weight;
        if (randomValue <= weightSum) {
            return prompt.text;
        }
    }
    
    // Fallback (should never reach here if weights are positive)
    return prompts[0].text;
}



