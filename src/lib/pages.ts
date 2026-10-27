import type { Block } from './blocks';

export type PageData = {
  title: string;
  description: string;
  ogImage?: string;
  rows: Block[];
  project?: { img: string | null; alt: string; html: string; meta: string[] };
};

const files = import.meta.glob<PageData>('/src/data/pages/*.json', { eager: true, import: 'default' });

// File name -> page data. File names are the old URL paths with "/" written as "_".
export const pages = new Map(Object.entries(files).map(([p, d]) => [p.split('/').pop()!.replace(/\.json$/, ''), d]));

export function page(name: string): PageData {
  const d = pages.get(name);
  if (!d) throw new Error(`Missing page data: ${name}`);
  return d;
}

// Old WordPress titles end with " - Maxim Thermal Engineering"; keep them as they were.
export const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&#8211;/g, '–').replace(/&#038;/g, '&');
