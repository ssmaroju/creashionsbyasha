# Going live — a launch checklist for CreASHions by Asha

This is the "plumbing" plan to turn the site into a real shop that takes payments and
gets found on Google. It's written so a developer (or Claude Code) can do the technical
bits, and so Asha understands each step. Work top to bottom.

---

## 0. Decide the path
- **Path A — keep this custom design** (recommended if the look matters): host the files,
  bolt on Stripe for payments. Steps 1–6 below.
- **Path B — platform (Shopify / Squarespace):** rebuild this design as a theme and use
  their built-in checkout, accounts and SEO. Skip to "Path B notes" at the bottom.

---

## 1. Get a domain + hosting
- **Domain:** buy `creashionsbyasha.com` (Namecheap, Google Domains, Cloudflare ~$12/yr).
- **Host (pick one):**
  - **Netlify** or **Vercel** — free, drag-and-drop or Git deploy. Best default.
  - **Hostinger / cPanel host** (~$3–5/mo) — has a web **File Manager** so Asha can
    upload `store.json` and photos herself.
- Upload the contents of `ui_kits/website/` as the site root. Update every
  `https://www.creashionsbyasha.com/` placeholder in `index.html`, `sitemap.xml` and
  `robots.txt` to the real domain.

## 2. Payments with Stripe (cards + Apple Pay + Google Pay)
Stripe Checkout is the least work and is PCI-secure (Asha never touches card data).

**Easiest, no-code:** create **Payment Links** in the Stripe dashboard — one per product —
and point each product's button at its link. Good for a small catalog.

**Cleaner, scales better:** one small serverless function creates a Checkout Session.
Sketch (Netlify/Vercel function, developer fills in the key):

```js
// /netlify/functions/checkout.js   (or /api/checkout.js on Vercel)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // set in host dashboard
exports.handler = async (event) => {
  const { items } = JSON.parse(event.body); // [{ name, price, qty, image }]
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: items.map(i => ({
      quantity: i.qty,
      price_data: {
        currency: 'usd',
        unit_amount: Math.round(i.price * 100),
        product_data: { name: i.name, images: [i.image] },
      },
    })),
    shipping_address_collection: { allowed_countries: ['US', 'CA'] },
    success_url: 'https://www.creashionsbyasha.com/?paid=1',
    cancel_url:  'https://www.creashionsbyasha.com/#shop',
  });
  return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
};
```

Then the site's "Add to cart / Checkout" button POSTs the cart to that function and
redirects to `session.url`. In `Product.jsx` / the cart, replace the fake `onAddToCart`
with a `fetch('/api/checkout', …)` → `window.location = url`.

- **Apple Pay:** in Stripe → Settings → Payment methods, enable Apple Pay and **add your
  domain** (Stripe gives a verification file to drop at
  `/.well-known/apple-developer-merchantid-domain-association`). Google Pay is automatic.
- **PayPal:** either enable it in Stripe (where available) or add a PayPal Smart Button
  alongside Stripe.
- **Alternative all-in-one:** **Snipcart** — paste a script + add `data-item-*` attributes
  to each Buy button; it hosts the cart and checkout (cards, Apple/Google Pay). ~2% fee.

## 3. Customer login (only if she wants accounts)
Guest checkout converts best, so this is optional. If desired, add **Clerk**, **Auth0**,
or **Supabase Auth** — all provide "Sign in with Google / Facebook / Apple" with minimal
code and handle security/passwords for you. Don't roll your own auth.

## 4. The custom-order form & newsletter
- Point the **Custom** form at email using **Formspree**, **Netlify Forms**, or **Basin**
  (no backend). Add `action`/`method` or a small fetch; replies land in Asha's inbox.
- Newsletter: connect the footer signup to **Mailchimp** or **Klaviyo** (Klaviyo is great
  for ecommerce — abandoned-cart + restock emails).

## 5. Make Asha self-sufficient (content editing)
- Keep the **Studio** (`admin.html`) as her offline editor → download `store.json` →
  upload via host File Manager.
- **Better, with a login:** wire **Decap CMS** (free) — adds `yoursite.com/admin` where she
  logs in and saves directly to the live site (it commits `store.json` for her). One-time
  developer setup; then no file juggling.

## 6. SEO + getting traffic
Already in place (done in this build): per-page titles & meta descriptions, Open Graph /
Twitter cards, `robots.txt`, `sitemap.xml`, Store + Product structured data, fast static
pages. After launch:
- **Google Search Console** — verify the domain, submit `sitemap.xml`.
- **Google Business Profile** — free local listing ("resin art Cypress TX").
- **Bing Webmaster Tools** — submit the sitemap too.
- **Pinterest + Instagram** — the #1 discovery channels for resin/craft; pin every product
  (the Open Graph images make link previews look great). Add a Pinterest "Save" button.
- **Product titles**: keyword-rich, e.g. *"Personalized Sea Turtle Epoxy Tumbler, 20oz —
  Ocean Glitter"*. Edit these in the Studio.
- **Reviews**: import Etsy reviews; add a review widget (e.g. Judge.me) later.
- **A little blog**: "how I pour a galaxy tumbler" posts pull in search traffic over time.
- Keep images compressed (WebP) so pages stay fast — Google ranks speed.

---

## Path B notes (platform instead of custom)
- **Shopify** (~$39/mo): port this design into a theme (Liquid). You instantly get secure
  checkout (Shop Pay, Apple/Google Pay, PayPal, cards), customer accounts incl. social
  login, SEO controls, discounts, abandoned-cart email, and an app store. Best for growth.
- **Squarespace Commerce** (~$27/mo): easiest for Asha to self-manage; Stripe/PayPal/Apple
  Pay, good SEO, beautiful templates.
- She can keep her existing **Etsy** shop running alongside either one.

---

### Quick "minimum viable launch" (cheapest, fastest)
1. Buy domain → deploy folder to **Netlify** (free).
2. Add **Stripe Payment Links** to each product button.
3. Point the **Custom form** at **Formspree**.
4. Verify in **Google Search Console** + submit the sitemap; create a **Google Business
   Profile**; start pinning to **Pinterest**.

That's a real, selling, findable store with almost no monthly cost.
