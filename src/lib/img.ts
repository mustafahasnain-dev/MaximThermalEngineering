import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

// Every image from the old site lives in src/assets/uploads under its original WordPress file name.
const files = import.meta.glob<ImageMetadata>('/src/assets/uploads/*.{jpg,jpeg,png,webp,gif}', { eager: true, import: 'default' });
const byName = new Map(Object.entries(files).map(([p, m]) => [p.split('/').pop()!, m]));

export function upload(name: string | null | undefined): ImageMetadata | undefined {
  if (!name) return undefined;
  return byName.get(name.split('/').pop()!.split('?')[0]);
}

// Optimised URL for a CSS background image.
export async function bgUrl(name: string | null | undefined, width = 1920): Promise<string | undefined> {
  const m = upload(name);
  if (!m) return undefined;
  if (m.format === 'svg' || name!.endsWith('.png') && /map_transparent/.test(name!)) return m.src;
  const img = await getImage({ src: m, width: Math.min(width, m.width), format: 'webp', quality: 78 });
  return img.src;
}
