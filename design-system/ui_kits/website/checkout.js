/* CreASHions — Stripe Checkout bridge.
   Tries the live serverless endpoint; if it isn't deployed yet (prototype/demo),
   calls onDemo() so the UI can explain what would happen. See content/GO-LIVE.md. */
window.STRIPE_CHECKOUT_ENDPOINT = '/.netlify/functions/checkout'; // change if hosted elsewhere

window.startCheckout = async function (items, onDemo) {
  if (!items || !items.length) return;
  try {
    const res = await fetch(window.STRIPE_CHECKOUT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    if (!res.ok) throw new Error('checkout endpoint not available');
    const data = await res.json();
    if (data && data.url) { window.location = data.url; return; }
    throw new Error('no checkout url returned');
  } catch (e) {
    // No backend yet → friendly demo path.
    if (typeof onDemo === 'function') onDemo(items);
    else alert('Demo mode: in production this opens secure Stripe Checkout.');
  }
};
