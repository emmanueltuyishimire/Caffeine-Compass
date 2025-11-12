'use server';

import { personalizedCaffeineAssistant } from '@/ai/flows/personalized-caffeine-assistant';

export async function getAiAnswer(question: string): Promise<{ answer?: string; error?: string }> {
  if (!question) {
    return { error: 'Question cannot be empty.' };
  }
  try {
    const result = await personalizedCaffeineAssistant({ question });
    return { answer: result.answer };
  } catch (e) {
    console.error(e);
    // Provide a more user-friendly error message
    return { error: 'Sorry, I am having trouble connecting to my knowledge base. Please try again later.' };
  }
}
