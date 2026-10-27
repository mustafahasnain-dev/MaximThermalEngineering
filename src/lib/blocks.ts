// Helpers for rendering the blocks extracted from the old WPBakery pages.
export type St = { fs?: string; lh?: string; fw?: string; c?: string; ta?: string; tt?: string; ls?: string; mb?: string } | null | undefined;
export type Block = { t: string; [k: string]: any };

const px = (v?: string) => (v ? parseFloat(v) : 0);

// Inline text style. Large sizes go through CSS variables so they can shrink on small screens.
export function textStyle(st: St, opts: { size?: boolean; color?: boolean; margin?: boolean } = {}) {
  if (!st) return '';
  const { size = true, color = true, margin = false } = opts;
  const out: string[] = [];
  if (size && st.fs) {
    out.push(`--fs:${st.fs}`);
    if (st.lh && st.lh !== 'normal') out.push(`--lh:${st.lh}`);
  }
  if (st.fw) out.push(`font-weight:${st.fw}`);
  if (color && st.c) out.push(`color:${st.c}`);
  if (st.ta && st.ta !== 'start' && st.ta !== 'left') out.push(`text-align:${st.ta}`);
  if (st.tt && st.tt !== 'none') out.push(`text-transform:${st.tt}`);
  if (st.ls && st.ls !== 'normal') out.push(`letter-spacing:${st.ls}`);
  if (margin && st.mb) out.push(`margin-bottom:${st.mb}`);
  return out.join(';');
}

export const isBig = (st: St) => px(st?.fs) >= 30;

// The theme applied data-fontsize / data-lineheight with JavaScript; do it at build time instead.
export function fixHtml(html: string) {
  return html
    .replace(/<span class="et-font-size"([^>]*)>/g, (_m, attrs: string) => {
      const fs = attrs.match(/data-fontsize="([^"]+)"/)?.[1];
      const lh = attrs.match(/data-lineheight="([^"]+)"/)?.[1];
      const s = [fs && `font-size:${fs}`, lh && `line-height:${lh}`].filter(Boolean).join(';');
      return s ? `<span class="fsz" style="${s}">` : '<span>';
    })
    .replace(/ class="PDq2pG_selectionAnchorContainer"/g, '')
    .replace(/ data-section-id="[^"]*"/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/href="https?:\/\/(www\.)?maximthermalengg\.com\//g, 'href="/');
}

// Merge runs of single icon boxes into one list, and drop empty text.
export function normalise(items: Block[]): Block[] {
  const out: Block[] = [];
  for (const it of items) {
    if (it.t === 'text' && !String(it.html).replace(/<[^>]+>/g, '').trim()) continue;
    const prev = out[out.length - 1];
    if (it.t === 'icons' && it.single && prev?.t === 'icons' && prev.single) {
      prev.items = [...prev.items, ...it.items];
      continue;
    }
    out.push(it.t === 'icons' && it.single ? { ...it, items: [...it.items] } : it);
  }
  return out;
}

export function colPad(pad: string | undefined) {
  if (!pad) return { style: '', wide: false };
  const parts = pad.split(' ').map(px);
  const [t, r = t, b = t, l = r] = parts;
  const wide = Math.max(r, l) > 30;
  return { style: `padding:${t}px ${r}px ${b}px ${l}px`, wide };
}

export const gapOf = (cls: string[] = []) => +(cls.find((c) => c.startsWith('vc_column-gap-'))?.split('-').pop() ?? 0);
