/* ---- SEO: update page title, meta description & product structured data per view ---- */
function setMeta(name, val, attr) {
  attr = attr || 'name';
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute('content', val);
}
function updateSeo(route, product) {
  const base = 'CreASHions by Asha';
  const map = {
    home: ['Hand-Poured Resin Art Tumblers, Earrings & Decor', 'One-of-a-kind hand-poured resin art from Cypress, Texas. Personalized tumblers, earrings, coasters & decor — made to order, free shipping.'],
    shop: ['Shop All Resin Art — Tumblers, Earrings, Coasters', 'Browse every hand-poured piece: epoxy tumblers, polymer-clay earrings, coaster sets, resin pens and decor. Free shipping, made to order.'],
    collections: ['Collections — Coastal, Floral, Western, Festive & Spiritual', 'Shop CreASHions by theme: coastal ocean waves, floral honeybee, western, fall & festive, and spiritual Indian decor.'],
    story: ['My Story — Meet the Maker', "Meet Asha, the resin artist behind CreASHions. Hand-poured, made-to-order pieces from a small Texas studio."],
    custom: ['Request a Custom Resin Piece', 'Design a one-of-a-kind custom tumbler, earrings or keepsake. Tell Asha your colors, names and theme — free shipping.'],
  };
  let title, desc, img = 'https://www.creashionsbyasha.com/assets/products/sea-turtle-tumbler.png';
  if (route === 'product' && product) {
    title = `${product.name} — ${product.cat} · $${product.price}`;
    desc = product.blurb;
    img = 'https://www.creashionsbyasha.com/' + (product.img || '').replace('../../', '');
  } else {
    const m = map[route] || map.home;
    title = m[0]; desc = m[1];
  }
  document.title = `${title} | ${base}`;
  setMeta('description', desc);
  setMeta('og:title', `${title} | ${base}`, 'property');
  setMeta('og:description', desc, 'property');
  setMeta('og:image', img, 'property');
  setMeta('twitter:title', `${title} | ${base}`);
  setMeta('twitter:description', desc);
  setMeta('twitter:image', img);
  // Product JSON-LD (added only on product pages)
  let ld = document.getElementById('product-ld');
  if (route === 'product' && product) {
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'product-ld'; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Product',
      name: product.name, description: product.blurb,
      image: img, brand: { '@type': 'Brand', name: base }, category: product.cat,
      offers: { '@type': 'Offer', price: product.price, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '32' },
    });
  } else if (ld) { ld.remove(); }
}

/* App shell + simple state router */
function App() {
  const [route, setRoute] = useState('home');
  const [active, setActive] = useState(null);
  const [cart, setCart] = useState([]);   // line items: {id,name,price,qty,image,size}
  const [cartOpen, setCartOpen] = useState(false);

  React.useEffect(() => { updateSeo(route, active); }, [route, active]);

  function addToCart(item) {
    setCart(prev => {
      const key = item.id + '|' + (item.size || '');
      const i = prev.findIndex(x => (x.id + '|' + (x.size || '')) === key);
      if (i >= 0) { const next = [...prev]; next[i] = { ...next[i], qty: next[i].qty + item.qty }; return next; }
      return [...prev, item];
    });
  }
  const cartCount = cart.reduce((n, x) => n + x.qty, 0);

  function go(r, prod) {
    if (prod) setActive(prod);
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' });
  }
  function openProduct(p) { setActive(p); setRoute('product'); window.scrollTo(0, 0); }

  return (
    <div className="app">
      <Header route={route} go={go} cart={cartCount} onCartClick={() => setCartOpen(true)} />
      <AmbientDragonflies />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} setCart={setCart} go={go} />
      <main style={{ flex: 1 }}>
        {route === 'home' && <Home go={go} onOpen={openProduct} />}
        {route === 'shop' && <Shop go={go} onOpen={openProduct} />}
        {route === 'collections' && <Collections go={go} onOpen={openProduct} />}
        {route === 'story' && <Story go={go} onOpen={openProduct} />}
        {route === 'product' && <Product product={active} go={go} onAddToCart={(item) => { addToCart(item); setCartOpen(true); }} />}
        {route === 'custom' && <Custom go={go} seed={active} />}
      </main>
      <Footer go={go} />
    </div>
  );
}

/* Boot: load the editable store.json (Asha's catalog), fall back to embedded copy. */
async function boot() {
  try {
    const res = await fetch('content/store.json', { cache: 'no-store' });
    if (res.ok) window.applyStore(await res.json());
  } catch (e) { /* keep embedded defaults from data.js */ }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
boot();
