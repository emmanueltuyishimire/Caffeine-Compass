'use server';
/**
 * @fileOverview A personalized caffeine assistant AI agent.
 *
 * - personalizedCaffeineAssistant - A function that handles the personalized caffeine assistance process.
 * - PersonalizedCaffeineAssistantInput - The input type for the personalizedCaffeineAssistant function.
 * - PersonalizedCaffeineAssistantOutput - The return type for the personalizedCaffeineAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCaffeineAssistantInputSchema = z.object({
  question: z.string().describe('The user question about caffeine.'),
});
export type PersonalizedCaffeineAssistantInput = z.infer<typeof PersonalizedCaffeineAssistantInputSchema>;

const PersonalizedCaffeineAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question about caffeine.'),
});
export type PersonalizedCaffeineAssistantOutput = z.infer<typeof PersonalizedCaffeineAssistantOutputSchema>;

export async function personalizedCaffeineAssistant(input: PersonalizedCaffeineAssistantInput): Promise<PersonalizedCaffeineAssistantOutput> {
  return personalizedCaffeineAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCaffeineAssistantPrompt',
  input: {schema: PersonalizedCaffeineAssistantInputSchema},
  output: {schema: PersonalizedCaffeineAssistantOutputSchema},
  prompt: `You are a personalized caffeine assistant. Answer the user's question about caffeine using the site's calculators and database.

Question: {{{question}}}`,
});

const personalizedCaffeineAssistantFlow = ai.defineFlow(
  {
    name: 'personalizedCaffeineAssistantFlow',
    inputSchema: PersonalizedCaffeineAssistantInputSchema,
    outputSchema: PersonalizedCaffeineAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
