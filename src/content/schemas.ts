// Typed schemas for every content collection. Collections are registered in src/content.config.ts
// as their first entries are written, so empty collections do not raise build warnings.
import { z } from 'astro:content';
import type { SchemaContext } from 'astro:content';

export const needOptions = [
  'Industrial radiator',
  'Heavy machinery radiator',
  'Heat exchanger',
  'HVAC solution',
  'Oil, air or fuel cooler',
  'Condenser or evaporator coil',
  'Repair or refurbishment',
  'Something else',
] as const;

export const faq = z.object({ q: z.string(), a: z.string() });

const seo = {
  seoTitle: z.string().max(60),
  description: z.string().min(70).max(155),
  draft: z.boolean().default(false),
};

export const serviceSchema = ({ image }: SchemaContext) =>
  z.object({
    ...seo,
    title: z.string(),
    navLabel: z.string().optional(),
    order: z.number().default(100),
    summary: z.string(),
    definition: z.string(),
    image: image(),
    imageAlt: z.string(),
    offerings: z.array(z.object({ title: z.string(), text: z.string() })).min(3),
    specs: z.object({
      caption: z.string(),
      rows: z.array(z.object({ label: z.string(), value: z.string() })).min(3),
    }),
    audience: z.array(z.string()).min(3),
    process: z.array(z.object({ title: z.string(), text: z.string() })).min(4),
    projectExample: z
      .object({ title: z.string(), scope: z.string(), result: z.string(), project: z.string().optional() })
      .optional(),
    faqs: z.array(faq).min(5).max(8),
    related: z.array(z.string()).default([]),
    cities: z.array(z.enum(['karachi', 'lahore', 'faisalabad'])).default(['karachi', 'lahore', 'faisalabad']),
    industries: z.array(z.string()).default([]),
    quoteNeed: z.enum(needOptions),
    waText: z.string(),
    brand: z.string().optional(),
  });

export const citySchema = ({ image }: SchemaContext) =>
  z.object({
    ...seo,
    title: z.string(),
    city: z.enum(['Karachi', 'Lahore', 'Faisalabad']),
    sites: z.array(z.string()),
    intro: z.string(),
    services: z.array(z.string()),
    industrialAreas: z.array(z.string()),
    geo: z.object({ lat: z.number(), lng: z.number() }).optional(),
    openingHours: z.string().default('[placeholder: opening hours]'),
    faqs: z.array(faq).min(4).max(8),
    image: image().optional(),
    imageAlt: z.string().optional(),
  });

export const industrySchema = ({ image }: SchemaContext) =>
  z.object({
    ...seo,
    title: z.string(),
    summary: z.string(),
    problems: z.array(z.object({ title: z.string(), text: z.string() })).min(3),
    equipment: z.array(z.string()),
    services: z.array(z.string()),
    caseStudy: z.string().optional(),
    faqs: z.array(faq).min(4).max(8),
    image: image().optional(),
    imageAlt: z.string().optional(),
  });

export const projectSchema = ({ image }: SchemaContext) =>
  z.object({
    ...seo,
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    city: z.string().optional(),
    problem: z.string(),
    solution: z.string(),
    equipment: z.array(z.string()),
    result: z.string(),
    photos: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    date: z.coerce.date().optional(),
  });

export const articleSchema = ({ image }: SchemaContext) =>
  z.object({
    ...seo,
    title: z.string(),
    author: z.string(),
    reviewer: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    services: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    image: image().optional(),
    imageAlt: z.string().optional(),
  });

export const glossarySchema = z.object({
  ...seo,
  term: z.string(),
  short: z.string(),
  related: z.array(z.string()).default([]),
  services: z.array(z.string()).default([]),
});

export const faqEntrySchema = z.object({ id: z.string(), q: z.string(), a: z.string(), topics: z.array(z.string()).default([]) });
