'use server';

/**
 * @fileOverview Generates relevant testimonial quotes for a given industry sector using a generative AI tool.
 *
 * - generateTestimonial - A function that generates a testimonial quote.
 * - GenerateTestimonialInput - The input type for the generateTestimonial function.
 * - GenerateTestimonialOutput - The return type for the generateTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialInputSchema = z.object({
  sector: z.string().describe('The industry sector for which to generate a testimonial.'),
});
export type GenerateTestimonialInput = z.infer<typeof GenerateTestimonialInputSchema>;

const GenerateTestimonialOutputSchema = z.object({
  testimonial: z.string().describe('A testimonial quote relevant to the specified industry sector.'),
});
export type GenerateTestimonialOutput = z.infer<typeof GenerateTestimonialOutputSchema>;

export async function generateTestimonial(input: GenerateTestimonialInput): Promise<GenerateTestimonialOutput> {
  return generateTestimonialFlow(input);
}

const generateTestimonialPrompt = ai.definePrompt({
  name: 'generateTestimonialPrompt',
  input: {schema: GenerateTestimonialInputSchema},
  output: {schema: GenerateTestimonialOutputSchema},
  prompt: `You are a marketing expert tasked with generating a compelling testimonial quote for the following industry sector: {{{sector}}}. The testimonial should highlight the core benefits of using Surveyr in that sector, and sound authentic. The testimonial should be no more than 2 sentences long.

Generate a testimonial quote that would resonate with potential customers in this sector.`,
});

const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: GenerateTestimonialInputSchema,
    outputSchema: GenerateTestimonialOutputSchema,
  },
  async input => {
    const {output} = await generateTestimonialPrompt(input);
    return output!;
  }
);
