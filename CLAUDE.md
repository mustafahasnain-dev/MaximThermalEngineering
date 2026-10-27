# Maxim Thermal Engineering: Astro website

> **Current direction (2026-10-27):** the owner asked for an exact copy of the old WordPress site
> (https://www.maximthermalengg.com/): same pages, URLs, copy, images, colours (#C62828) and font
> (Nunito Sans). This overrides the design, brand and lead-system sections below until the owner says
> otherwise. Page content lives in `src/data/pages/*.json` (extracted from the old WPBakery rows) and is
> rendered by `src/components/wp/Blocks.astro`. Blog posts are in `src/data/posts.json`. Original images
> are in `src/assets/uploads/` under their WordPress file names.

Rebuild of https://www.maximthermalengg.com/ (WordPress) as a fast, lead-driven static site.
The goal of every page is to produce quote requests, WhatsApp chats and phone calls.

## Source of truth for design

The `design/` folder holds the approved homepage design. Match it closely.

- `design/Main.dc.html`: desktop homepage (all sections, copy, behaviour)
- `design/Mobile.dc.html`: mobile first screen and bottom action bar
- `design/Tracking.dc.html`: the analytics events every button and form must send
- `design/ds/maxim-thermal/tokens.json`: design system tokens

The `.dc.html` files use a custom format (`<x-dc>`, `<sc-for>`, `<sc-if>`, a `DCLogic` class). They are
reference only. Do not copy them into the site. Rebuild each section as an Astro component.

Where `tokens.json` and the homepage design disagree, **follow the homepage design**
(tokens.json says Montserrat and #E3242B; the live site and design use Nunito; the owner set the red to #C62829).

## Stack and rules

- Astro, static output. No React/Vue unless a feature truly needs it. Use small vanilla JS islands
  (finder, FAQ accordion, forms, video pause).
- Content in Astro content collections (Markdown/MDX): services, cities, projects, FAQs.
- Hosting: Netlify. Forms post to a Netlify function that appends to a Google Sheet and sends an
  email notification. Keep a honeypot field; add Turnstile only if spam appears.
- English only.
- Performance budget: Lighthouse 95+ on mobile. Images through `astro:assets` (AVIF/WebP, sized,
  lazy-loaded except the hero). Self-host fonts or use `display=swap`. Keep JS minimal.
- Accessibility: WCAG 2.1 AA. Visible focus, 44px minimum touch targets, labels on all fields,
  `aria-expanded` on accordions, `aria-live` on the finder result, a pause control for the hero video.

## Brand

- Font: Nunito (400, 600, 700, 800, 900)
- Red `#C62829` (hover `#A51F21`), ink `#1B1D21`, muted `#4B5058`, light grey `#F3F4F6`,
  dark `#1F2125` / `#14161A`, WhatsApp green `#0F7A3E`, accent blue `#1E6FBA` (labels only)
- Square corners. Red banner headings in white uppercase.
- Tone: plain, technical, confident. No hype words.

## Contact and business facts

- Phone and WhatsApp (Business): +92 331 2448064
  - WhatsApp link: `https://wa.me/923312448064?text=<encoded message>`
  - Phone link: `tel:+923312448064`
- Real stats (use only these): 1600+ projects completed, 400+ corporate industrial clients,
  20+ ongoing projects, 3 cities (Karachi, Faisalabad, Lahore)
- Locations:
  - Head office, Karachi: Plot #257, Sector 5, Korangi Industrial Area, Karachi
  - Workshop, Karachi: L-68, Sector 48 "C", near Coast Guard, Korangi, Karachi
  - Factory, Faisalabad: 3 km 76 R.B Rasool Pur, Sheikhupura Road, Faisalabad
  - Workshop, Lahore: Babu Sabu Band Rd, Shera Kot, Lahore
- Packing machines are NOT a Maxim Thermal service. They belong to a separate company,
  https://www.maximmachines.com/. Mention it only as a footer link: "Group company: Maxim Machines".
- Never invent numbers, client names, testimonials, certifications or project results.
  Use clearly marked `[placeholder]` text until real content is supplied.

## Lead system (most important)

- Forms: hero quote form (name, phone, need, city, urgency, optional details), call-back box
  (phone only), checklist form (WhatsApp or email), contact form.
- Every submission includes hidden fields: page URL, form name, UTM source/medium/campaign,
  referrer, timestamp.
- After submit, redirect to `/thank-you/` (used as the conversion page).
- Breakdown choice shows a "call now" prompt with the phone number.
- Mobile bottom bar on all pages: Call, WhatsApp, Quote.
- Each service section has its own specific quote button and pre-filled WhatsApp message.

## Tracking (GA4)

Follow `design/Tracking.dc.html`. Events: `generate_lead`, `whatsapp_click`, `phone_click`,
`finder_select`, `finder_cta`, `cta_quote`, `directions_click`. Mark `generate_lead`,
`whatsapp_click` and `phone_click` as key events. Also set up Search Console and Microsoft Clarity.

## SEO and AEO

- One H1 per page, unique title and meta description, canonical URLs, sitemap, robots.txt.
- Schema: Organization, LocalBusiness per city, Service, Product where relevant, FAQPage,
  Article, BreadcrumbList.
- FAQ sections written as direct answers (first sentence answers the question).
- 301 redirects from every old WordPress URL (list them in `public/_redirects`).
- Page structure: `/`, `/services/<service>/`, `/locations/<city>/`, `/projects/`, `/about/`,
  `/contact/`, `/thank-you/`, `/faq/`.

## Build order

Do one phase per request and stop for review after each.

1. Foundation: scaffold, layout, tokens, header, footer, mobile action bar
2. Homepage sections, matching `design/Main.dc.html`
3. Lead engine: forms, Netlify function, Google Sheet, email, thank-you page
4. Tracking events
5. SEO and AEO: schema, sitemap, redirects
6. Service pages, then city pages, then projects and blog

Do not start a phase until asked. Before starting, state the plan in a few lines.

## Still needed from the owner

Logo (SVG preferred), real photos, hero video (MP4 under 4 MB, 15 to 20 s, muted loop) and poster
image, client logos, project results, testimonials, certifications, confirmation of the brands list
(CAT, Perkins, Cummins, Atlas Copco, CompAir, Ingersoll Rand, Kaeser, BOGE), the quote checklist
content, Google Sheet ID and service account, and the list of old WordPress URLs.
