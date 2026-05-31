---
name: creashions-design
description: Use this skill to generate well-branded interfaces and assets for CreASHions by Asha (a handmade resin-art studio — tumblers, earrings, coasters, pens, decor), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and a website UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## What's here
- `README.md` — brand context, content voice, visual foundations, iconography, file index
- `colors_and_type.css` — all design tokens (color, type, spacing, shadow, motion). Import
  this first; it's the single source of truth.
- `assets/` — the watercolor dragonfly logo (`logo.png`, `logo-3x.png`) and `products/`
  (photos of Asha's real handmade pieces)
- `preview/` — design-system specimen cards (colors, type, components, brand)
- `ui_kits/website/` — a high-fidelity, interactive recreation of Asha's boutique
  e-commerce website (React + Babel, no build step). Reusable components in
  `Components.jsx`; screens in `Home/Shop/Product/Story/Collections.jsx`.

## The 30-second brand brief
- **Two color families in conversation:** soft **blush rose + warm pearl** (handmade,
  romantic) and crisp **dragonfly blues & teals** from Asha's own palette
  (`#00ADBB`, `#1E6390`, `#005581`, navy `#00263A`). **Mulberry** `#8E4A66` is the primary
  button color; **magenta** `#E20177` is the high-energy pop; **champagne gold** is the
  resin-shimmer detail accent.
- **Type:** Playfair Display (wordmark, written **Cre**ASH**ions** with ASH in mulberry),
  Cormorant Garamond (headlines, old-style numerals), Pinyon Script (signatures only),
  Nunito Sans (body & UI).
- **Motif:** the **dragonfly** — line glyph, used as flourish; rare ambient fly-bys.
- **Feel:** artisan watercolor boutique. Soft washes, warm shadows, big radii, pill
  buttons with a resin-gloss sheen on hover, generous white space. Real products on clean
  grounds. No emoji, no tech gradients. Lucide line icons.
