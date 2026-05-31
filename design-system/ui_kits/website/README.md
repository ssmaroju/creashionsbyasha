# CreASHions by Asha — Website UI Kit

A high-fidelity, click-through recreation of the **boutique e-commerce website** Asha
can build to replace her Etsy-only setup. This is the surface the whole design system
was built for: her own platform, her story, her colors, her real products.

> These are **cosmetic, mostly-fake** recreations meant for design + prototyping — not
> production code. Cart, search, and forms are visual only.

## Run it
Open `index.html`. It's a small React app (loaded via in-browser Babel) wired to a
state-based router — no build step. Click around: browse the shop, filter by category,
open a product, adjust size/quantity, "add to cart," read the story.

## Screens (routes)
| Route | File | What it shows |
|---|---|---|
| Home | `Home.jsx` | Hero, promo strip, bestsellers, collections, process/video, reviews, custom CTA |
| Shop / Catalog | `Shop.jsx` | Full product grid with category filter + sort |
| Collections | `Collections.jsx` | The 5 themes (Coastal, Floral, Western, Festive, Spiritual) with palettes |
| Product | `Product.jsx` | Gallery, size + personalization (size changes price), qty, add-to-cart |
| Custom | `Custom.jsx` | No-pressure custom-order request form + “how custom works” |
| My Story | `Story.jsx` | Maker's story, values, process video block |

## Editing the shop — for Asha (no code)
The catalog and homepage text live in **`content/store.json`** — the single source of
truth. Two ways to edit it:
- **`admin.html`** — a no-code “Studio” page: edit/add/delete products and homepage text
  in friendly forms, then **Download** the updated `store.json` and drop it into
  `content/`. Open it in a browser; link from the site footer when live.
- **`content/store.json`** directly — plain text; shape documented in
  **`content/HOW-TO-EDIT.md`** (written for a non-developer).

Product photos go in **`assets/products/`**; the JSON references them by **file name**
only. The app loads `store.json` at startup (`App.jsx` → `boot()`), falling back to an
embedded copy in `data.js` if the file can't be fetched.

## Components (`Components.jsx`)
Small, reusable, exported to `window`:
- **`Header`** — sticky blurred nav with the CreASHions wordmark + cart badge
- **`Footer`** — navy footer with newsletter signup
- **`ProductCard`** — image, badge, save heart, name, price, rating; hover lift + zoom
- **`Tag`** — pill badges (free / ready-to-ship / bestseller / sale)
- **`Stars`** — gold star rating
- **`Icon`** — Lucide-style line icons (search, bag, heart, truck, play, check, …)
- **`Dragonfly`** — the brand glyph (line motif), drifts gently as a flourish

## Data (`data.js` + `content/store.json`)
`content/store.json` holds `site` (homepage text), `categories`, `collections`, and
`products`. `data.js` exposes `window.applyStore()` (normalizes it into
`window.SITE / PRODUCTS / COLLECTIONS / CATEGORIES`, prefixing image file names with
`../../assets/products/`) plus an identical embedded fallback. Built from Asha's real
catalog.

## Styling
- `../../colors_and_type.css` — the design-system tokens (single source of truth)
- `app.css` — component styles for this kit. Notable touches:
  - **Resin-gloss button sheen** — a diagonal highlight sweeps across `.btn` on hover,
    echoing the glassy resin finish.
  - Warm soft shadows, pill buttons, large boutique radii.
  - Sticky translucent header; navy (`#00263A`) dark sections with teal glow accents.
  - **Ambient dragonflies** — rarely (every ~30–80s) a dragonfly of random size/color
    drifts across the page **head-first** along a gently wandering path, above all content.

## Notes / fakery
- The cart is real (add, change qty, remove, subtotal) and "Checkout securely" calls
  Stripe: it POSTs to `/.netlify/functions/checkout` (see `netlify/functions/checkout.js`)
  and redirects to Stripe Checkout. Until that function is deployed with a Stripe key, it
  shows a friendly **demo-mode** notice instead. Setup steps: `content/GO-LIVE.md`.
- The "Watch a pour" video tiles are placeholders for Asha's real studio clip.
- Product photos are cropped from Etsy screenshots — re-shot photography would sharpen
  the whole site (see root `README.md` open questions).
