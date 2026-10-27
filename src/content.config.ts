import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { serviceSchema, faqEntrySchema } from './content/schemas';

// Later stages register: cities, industries, projects, articles, glossary (schemas in ./content/schemas.ts).
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: serviceSchema,
});

const faqs = defineCollection({
  loader: file('./src/content/faqs.json'),
  schema: faqEntrySchema,
});

export const collections = { services, faqs };
