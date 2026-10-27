import data from './posts.json';

export type Post = { slug: string; title: string; seoTitle: string; description: string; date: string; img: string | null; excerpt?: string; html: string };

// Newest first, as the old blog listed them.
export const posts: Post[] = data;
