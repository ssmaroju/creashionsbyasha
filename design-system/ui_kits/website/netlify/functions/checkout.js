/*
  Stripe Checkout — serverless function for CreASHions by Asha.
  Deploy on Netlify (path: /.netlify/functions/checkout) or adapt for Vercel (/api/checkout).

  SETUP (one time):
    1. Create a Stripe account → copy your SECRET key (starts with sk_live_ or sk_test_).
    2. In your host's dashboard add an env var:  STRIPE_SECRET_KEY = sk_...
    3. Add Stripe as a dependency:  npm install stripe
    4. Deploy. The site's "Checkout securely" button will POST here and redirect to Stripe.
    5. Enable Apple Pay / Google Pay / cards in Stripe → Settings → Payment methods,
       and verify your domain (creashionsbyasha.com) for Apple Pay.
*/
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const SITE = 'https://www.creashionsbyasha.com';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { items } = JSON.parse(event.body || '{}'); // [{ name, price, qty, image, size }]
    if (!items || !items.length) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Cart is empty' }) };
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: items.map((i) => ({
        quantity: Math.max(1, parseInt(i.qty, 10) || 1),
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(Number(i.price) * 100),
          product_data: {
            name: i.name + (i.size ? ` (${i.size})` : ''),
            images: i.image ? [i.image.replace(/^\.\.\/\.\.\//, SITE + '/')] : [],
          },
        },
      })),
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      automatic_tax: { enabled: false },
      success_url: `${SITE}/?paid=1`,
      cancel_url: `${SITE}/#shop`,
    });

    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
