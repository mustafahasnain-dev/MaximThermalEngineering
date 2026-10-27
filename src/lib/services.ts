import { getCollection, type CollectionEntry } from 'astro:content';

export type Service = CollectionEntry<'services'>;

export const serviceUrl = (id: string) => `/services/${id}/`;
export const parentId = (id: string) => (id.includes('/') ? id.slice(0, id.lastIndexOf('/')) : undefined);

export async function getServices(): Promise<Service[]> {
  const all = await getCollection('services', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const childrenOf = (id: string, all: Service[]) => all.filter((s) => parentId(s.id) === id);
export const topLevel = (all: Service[]) => all.filter((s) => !parentId(s.id));
export const label = (s: Service) => s.data.navLabel ?? s.data.title;

export function breadcrumbs(entry: Service, all: Service[]) {
  const trail = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }];
  const pid = parentId(entry.id);
  const parent = pid ? all.find((s) => s.id === pid) : undefined;
  if (parent) trail.push({ name: label(parent), href: serviceUrl(parent.id) });
  trail.push({ name: label(entry), href: serviceUrl(entry.id) });
  return trail;
}

/**
 * Related block, built from frontmatter: explicit `related` first, then siblings, then the parent.
 * Ids that do not resolve to a published page are dropped so the build never ships a broken link.
 */
export function relatedServices(entry: Service, all: Service[], max = 5): Service[] {
  const byId = new Map(all.map((s) => [s.id, s]));
  const pid = parentId(entry.id);
  const siblings = pid ? childrenOf(pid, all).map((s) => s.id) : [];
  const ids = [...entry.data.related, ...siblings, ...(pid ? [pid] : [])];
  const out: Service[] = [];
  for (const id of ids) {
    const s = byId.get(id);
    if (s && s.id !== entry.id && !out.includes(s)) out.push(s);
    if (out.length >= max) break;
  }
  return out;
}
