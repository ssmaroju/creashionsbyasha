# CreASHions by Asha — Design System

A complete brand & UI design system for **CreASHionsbyAsha**, a handmade resin-art
studio run by Asha out of Cypress, Texas. The purpose of this system is to give Asha
(and any designer/agent working for her) everything needed to build her **own** branded
website — escaping the per-listing fees, rigid templates, and flat product photography
of her current Etsy-only setup.

> This is a **from-scratch brand build**. Asha had no prior website or codebase — only an
> Etsy shop and a logo she loves. The entire visual language here is derived from that
> **watercolor dragonfly logo** and from her actual handmade products. Nothing is copied
> from Etsy's styling (those backgrounds/colors were "what was available," not her choice).

---

## The business

- **Name:** CreASHionsbyAsha ("CreASHions" = creations + Asha)
- **Maker:** Asha — Cypress, Texas
- **Craft:** Epoxy / resin art, hand-poured and hand-finished on real objects
- **Track record (Etsy):** 5.0★ (32 reviews), 57 sales, 35 admirers, 3 years, 91 listings
- **Shipping:** Free shipping on everything; custom/personalized orders welcomed

### Product catalog (the real categories from her shop)

| Category | Count | Price band | Notes |
|---|---|---|---|
| **Tumblers & Bottles** | 50 | $30–$58 | The hero product. Glitter, floral, ocean, western, fall, patriotic themes |
| **Earrings** | 18 | $11–$20 | Polymer clay + resin; dangle, geometric, floral, novelty |
| **Coaster sets** | 7 | $25–$48 | Ocean-wave, coffee-bean, mandala, marble-effect; some with holders |
| **Resin Pens** | 3 | $12–$13 | Glitter/mica pens, bookmarks, badge reels & lanyards |
| **Indian Decor** | 2 | $18–$20 | Om wall hangings, Pichwai/lotus tealight holders — her cultural signature |
| **Wine Glass Bottle Holder** | 2 | $23 | Coastal "geode" agate-edge slabs |
| **Accessory** | 2 | $17–$19 | Car rear-view charms, luggage tags |
| **Ready to Ship** | 2 | — | In-stock subset |

Recurring **design themes** across products (these become website "Collections"):
Coastal / Ocean Wave · Floral & Honeycomb-Bee · Western / Cow-print · Fall & Halloween ·
Patriotic · Galaxy / Northern-Lights · Spiritual / Indian decor.

### What Asha needs from a website (the brief)
- Her **own platform** — no per-listing charges, full control of styling
- Tells her **story** and shows her **process** (video of pours, before/after)
- **Higher-contrast, higher-wow** presentation than flat Etsy thumbnails
- Room for **animation, promotions, customer feedback**, and **custom-order** requests
- A look that reflects **her** taste: the soft watercolor logo, dragonflies, her colors

### Sources provided
- `uploads/isla_100x100…avif` — the **logo** (watercolor wreath + dragonflies + script). Copied & upscaled to `assets/logo.png` / `assets/logo-3x.png`.
- 13 Etsy screenshots (shop home + each category page). Product photos cropped into `assets/products/`.
- `uploads/Screenshot…112013.png` — an unrelated stock "integrations" graphic; **ignored**.
- No codebase, Figma, or prior website existed. All UI here is newly designed for the brand.

---

## CONTENT FUNDAMENTALS — voice & copy

The brand voice is **warm, personal, and maker-first** — Asha talking directly to a
customer who appreciates handmade things. It should feel like a note tucked into a
carefully wrapped package, not marketing copy.

- **Person:** First-person singular for the maker ("I hand-pour every layer"), second
  person for the reader ("your one-of-a-kind tumbler"). It's a relationship between
  *Asha* and *you* — never a faceless "we."
- **Tone:** Heartfelt, grateful, a little poetic; confident about craft without bragging.
  Celebrates imperfection-as-character ("no two pours are ever identical").
- **Casing:** **Sentence case** everywhere for UI and headlines. Reserve Title Case for
  proper product/collection names. Never ALL-CAPS except tiny eyebrow labels and tags.
- **Length:** Short. Headlines are evocative fragments; body in 1–2 sentence beats.
- **The name:** Always written **CreASHions by Asha** with the "ASH" able to be
  emphasized (it's her name inside "creations"). The script logo carries the brand mark;
  in running text it's fine as "CreASHions by Asha."
- **Emoji:** **No emoji** in product or marketing copy. The dragonfly is the one playful
  motif and it's expressed as imagery, not 🐉/✨.
- **Signature phrases / vocabulary:** "hand-poured," "one-of-a-kind," "made to order,"
  "small-batch," "poured with love in Texas," "every piece tells a story,"
  "shimmer," "wearable art," "drinkware as art."

**Examples (write like this):**
- Hero: *"Resin art, poured by hand — no two pieces alike."*
- Sub: *"Tumblers, earrings, and keepsakes made one at a time in my Texas studio."*
- Product blurb: *"A 20oz stainless tumbler wrapped in a hand-laid sea-turtle scene,
  sealed under glass-smooth resin. Personalize it with any name."*
- CTA: *"Start a custom piece"* · *"Add to cart"* · *"See how it's made"*
- About line: *"I'm Asha. I started pouring resin three years ago and never looked back."*

**Avoid:** hype words ("revolutionary," "ultimate"), exclamation spam, generic
e-commerce filler, and anything that sounds mass-produced.

---

## VISUAL FOUNDATIONS

The feeling: **an artisan watercolor boutique.** Soft, airy, feminine, and tactile —
like the wash of color in the logo — but with enough contrast and white space that the
products *pop* (directly solving the "no contrast / no wow" problem with the Etsy photos).

### Color
- The palette is **two families that play off each other**: a soft **blush-rose + pearl**
  foundation (warm, romantic, handmade) and a crisp set of **dragonfly blues & teals**
  drawn from Asha's own brand colors. Full token set in `colors_and_type.css`.
- **Dragonfly teal `#00ADBB`** — with deep blues `#1E6390`/`#005581` and navy `#00263A` —
  is the signature accent: links, focus, flourishes, dark sections. Dragonflies are
  blue-teal, so Asha's blues *are* the dragonfly motif. They give the soft palette the
  contrast and “wow” the flat Etsy photos lacked.
- **Mulberry** (deepest rose) is the primary action color for buttons.
- **Magenta `#E20177`** is the high-energy **pop** (promos, sale flashes) — a saturated
  sibling of the blush, so it bridges the two families.
- **Champagne gold** = the “resin shimmer” accent: thin rules, badges, tiny details.
  Use it sparingly as a metallic highlight, not as a fill.
- **Lilac & sage** are gentle supporting tints from the logo wash.
- Neutrals are **warm** (aubergine-brown text `--ink-900`, never cold gray/black).
- Backgrounds alternate between **pearl** and **linen**; dark sections use **navy
  `#00263A`**. No purple→blue tech gradients.

### Type
- **Display:** *Cormorant Garamond* — a high-contrast, elegant serif for headlines and
  product names. Carries the boutique/editorial feel.
- **Script:** *Pinyon Script* — used **only** for occasional flourishes (the maker's
  signature, a "thank you," collection accents). Never for body or buttons.
- **Body / UI:** *Nunito Sans* — soft, warm humanist sans; very readable, friendly.
- **Eyebrows:** Nunito Sans, 700, uppercase, wide tracking (0.22em), teal.
- ⚠️ **Font substitution:** the exact script in Asha's logo is unidentified. Pinyon
  Script is the closest free Google Font. *If Asha has the original logo font file,
  send it and we'll swap it in.*

### Backgrounds & texture
- Mostly clean pearl/linen fields. **Soft watercolor washes** (very low-opacity radial
  blooms of blush/teal/lilac) may bleed in at section edges and behind heroes — echoing
  the logo wreath. Subtle, never busy.
- **Product photography is the texture.** Resin pieces are glossy and detailed; give
  them generous space on plain grounds so the shimmer reads.
- Optional faint **dragonfly silhouettes** as a watermark/decorative flourish (kept very
  light, gold or teal at low opacity). No heavy patterns behind text.

### Motion
- **Gentle and watercolor-like.** Fades and soft rises (8–16px) on scroll-in; ~320–500ms;
  easing `cubic-bezier(0.22,0.61,0.36,1)`. No hard bounces, no spin.
- Hover lifts are small (−2 to −4px translate) with a softening shadow.
- A dragonfly may drift/float subtly as a signature flourish (slow, looping, optional).

### Interaction states
- **Hover (buttons):** darken fill to `--primary-hover`; slight lift + `--shadow-md`.
- **Hover (cards):** lift −4px, shadow grows sm→lg, image scales ~1.03 inside its frame.
- **Hover (links):** shift teal → mulberry, underline with 3px offset.
- **Press:** scale to ~0.98, shadow flattens.
- **Focus:** 2px dragonfly-teal ring at 2px offset (accessible, on brand).
- **Disabled:** 45% opacity, no shadow.

### Borders, radii, shadows, elevation
- **Radii:** generous and soft — cards `--radius-lg` (22px), buttons `--radius-pill`,
  inputs/tags `--radius-md`. Imagery often gets large rounding to feel boutique-soft.
- **Borders:** hairline `--sand`; `--taupe` when more definition is needed. A 1px
  **gold** rule is the "premium" divider.
- **Shadows:** soft and **warm-tinted** (aubergine alpha), never harsh black. Three
  steps (sm/md/lg) plus a special **teal glow** for hero/feature emphasis.
- **Cards:** white surface, large radius, hairline border + `--shadow-sm` at rest,
  rising to `--shadow-lg` on hover. No colored left-border accent cards.

### Imagery treatment
- Product shots are **warm and bright**; the resin gloss and glitter are the wow factor.
- Present on **plain pearl/white** or soft watercolor grounds so color and shimmer pop —
  the opposite of the cluttered fur/wood-plank Etsy backdrops.
- Prefer rounded frames; allow occasional full-bleed lifestyle/process imagery in heroes.
- A subtle warm tone unifies the gallery; avoid cold or heavy-grain filters.

### Layout rules
- Airy, editorial, lots of breathing room. Generous section padding (`--space-9`+).
- Centered max-width content (~1200px); product grids 2-up (mobile) → 3/4-up (desktop).
- Sticky translucent header (blurred pearl) so the logo + cart stay reachable.
- Use **transparency + blur** for the sticky header and any overlay chips on imagery;
  elsewhere keep surfaces opaque for legibility.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — thin (1.75px), rounded line icons. Their
  delicate, friendly weight matches the soft serif + Nunito pairing far better than heavy
  filled icon sets. Loaded from CDN (`lucide@latest`) in the UI kit; documented per use.
  *(Substitution flag: Asha had no existing icon set — Lucide is our chosen default. Easy
  to change later.)*
- **Brand motif icon:** the **dragonfly** is the signature glyph (her favorite). Use a
  simple line/silhouette dragonfly for bullets, dividers, the "back to top," and as a
  decorative watermark. Rendered from imagery/flourish, kept light in gold or teal.
- **Logo:** `assets/logo.png` (+ `logo-3x.png`) — the watercolor wreath mark. It is the
  primary brand asset; pair with the wordmark set in Cormorant/Pinyon.
- **Emoji:** not used. **Unicode** decorative chars are avoided in favor of Lucide icons
  and the dragonfly motif.
- Icons sit at `--fg-muted` by default, `--accent` (teal) when active/interactive.

---

## INDEX — what's in this system

**Foundations**
- `README.md` — this file (context, voice, visual foundations, iconography, index)
- `colors_and_type.css` — all color + type + spacing + shadow + motion tokens
- `SKILL.md` — Agent-Skill manifest for reuse in Claude Code

**Assets** (`assets/`)
- `brand/` — the **enhanced** brand kit (from the Gemini asset sheet): `logo-main.png`
  (primary circular logo), `logo-round.png` (transparent-corner version for UI),
  `stacked-icon.png`, `header-banner.png`, `watermark-badge.png` + `watermark.png`
  (product watermark), `favicon-256.png`, and transparent dragonfly motifs
  (`dragonfly-pair.png`, `dragonfly-blue.png`).
- `logo.png`, `logo-3x.png` — Asha's original logo (kept for reference)
- `products/` — cropped photos of Asha's real handmade pieces

**Design-system preview cards** (`preview/`)
- Color, typography, spacing/radius/shadow, component, and brand cards — these populate
  the **Design System** tab.

**UI kit** (`ui_kits/website/`)
- The boutique e-commerce website: `index.html` (interactive click-through) +
  modular JSX components + 4 core screens (Home, Shop/Catalog, Product, Story) and a
  **Collections/Themes** showcase. See `ui_kits/website/README.md`.

---

## Open questions / to confirm with Asha
1. **Logo font** — do you have the original script font file? (We substituted Pinyon Script.)
2. **Hero & process video** — got a clip of a pour we can feature?
3. **Higher-res product photos** — the catalog images here are cropped from screenshots;
   re-shot photos on plain backgrounds would make the site sing.
4. **Tagline** — confirm or replace the working lines in CONTENT FUNDAMENTALS.
