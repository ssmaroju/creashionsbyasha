/* Product detail screen */
function Product({ product, go, onAddToCart }) {
  const p = product || window.PRODUCTS[0];
  const [size, setSize] = useState(p.size || '20oz');
  const [personalize, setPersonalize] = useState('');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const gallery = window.PRODUCTS.filter(x => x.theme === p.theme && x.id !== p.id).slice(0, 4);
  const sizes = p.cat === 'Tumblers' ? ['12oz', '20oz', '30oz'] : null;
  const SIZE_ADJ = { '12oz': -8, '20oz': 0, '30oz': 8 };
  const unitPrice = p.price + ((SIZE_ADJ[size] || 0) - (SIZE_ADJ[p.size] || 0));

  function add() {
    onAddToCart && onAddToCart({ id: p.id, name: p.name, price: unitPrice, qty, image: p.img, size: sizes ? size : '' });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="wrap" style={{ padding: '34px 28px 90px' }}>
      <div style={{ fontSize: 13, color: 'var(--ink-500)', marginBottom: 22 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => go('home')}>Home</span> · <span style={{ cursor: 'pointer' }} onClick={() => go('shop')}>Shop</span> · <span style={{ color: 'var(--ink-700)' }}>{p.cat}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'start' }}>
        {/* gallery */}
        <div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--linen)' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', top: 16, left: 16 }}><Tag kind="best">{p.badge || 'Free shipping'}</Tag></span>
            <img src="../../assets/brand/watermark.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 14, right: 14, width: 92, opacity: .58, pointerEvents: 'none', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            {[p, ...gallery.slice(0, 3)].map((g, i) => (
              <div key={i} style={{ flex: 1, aspectRatio: '1', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: i === 0 ? '2px solid var(--mulberry)' : '1px solid var(--sand)', cursor: 'pointer' }}>
                <img src={g.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* details */}
        <div>
          <span className="eyebrow">{p.theme} collection · {p.cat}</span>
          <h1 style={{ margin: '12px 0 10px', fontSize: 'var(--fs-h1)' }}>{p.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <Stars size={17} /><span style={{ fontSize: 14, color: 'var(--ink-500)' }}>5.0 · 32 reviews</span>
            <span className="tag tag-free"><Icon name="truck" size={14} /> Free shipping</span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 18 }}>${unitPrice}{sizes && size !== (p.size || '20oz') ? <span style={{ fontSize: 16, color: 'var(--ink-500)', fontWeight: 500, marginLeft: 8 }}>· {size}</span> : null}</div>
          <p style={{ marginBottom: 24 }}>{p.blurb}</p>

          {sizes && (
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-700)', marginBottom: 8 }}>Size</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    style={{ border: '1.5px solid ' + (size === s ? 'var(--mulberry)' : 'var(--sand)'), background: size === s ? 'var(--blush-50)' : '#fff', color: size === s ? 'var(--mulberry)' : 'var(--ink-700)', borderRadius: 'var(--radius-pill)', padding: '10px 20px', fontSize: 14, fontWeight: 600 }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-700)', marginBottom: 8 }}>Personalize <span style={{ color: 'var(--ink-500)', fontWeight: 500 }}>(optional — name or short text)</span></div>
            <input value={personalize} onChange={e => setPersonalize(e.target.value)} placeholder="e.g. Ryansh"
              style={{ width: '100%', padding: '13px 15px', border: '1.5px solid var(--sand)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit', fontSize: 15 }} />
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--sand)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ border: 0, background: 'transparent', padding: '12px 14px', color: 'var(--ink-700)' }}><Icon name="minus" size={16} /></button>
              <span style={{ minWidth: 28, textAlign: 'center', fontWeight: 700, color: 'var(--ink-900)' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ border: 0, background: 'transparent', padding: '12px 14px', color: 'var(--ink-700)' }}><Icon name="plus" size={16} /></button>
            </div>
            <button className="btn btn-primary btn-lg btn-block" onClick={add} style={{ flex: 1 }}>
              {added ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="check" size={18} /> Added to cart</span> : <span>Add to cart · ${unitPrice * qty}</span>}
            </button>
          </div>
          <button className="btn btn-secondary btn-block" onClick={() => go('custom', p)}>Request a fully custom version</button>

          <div style={{ marginTop: 24, padding: '18px 20px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)', display: 'flex', gap: 14, alignItems: 'center' }}>
            <Dragonfly size={40} color="var(--accent)" />
            <div style={{ fontSize: 14, color: 'var(--ink-700)' }}><strong style={{ color: 'var(--ink-900)' }}>Made to order, just for you.</strong> Each piece is poured after you order, so colors may vary slightly — that's the handmade magic.</div>
          </div>
        </div>
      </div>

      {/* you may also love */}
      <div style={{ marginTop: 70 }}>
        <div className="section-head" style={{ marginBottom: 28 }}>
          <span className="eyebrow">More from this collection</span>
          <h2>You may also love</h2>
        </div>
        <div className="pgrid">{gallery.map(g => <ProductCard key={g.id} p={g} onOpen={(x) => { go('product', x); window.scrollTo(0, 0); }} />)}</div>
      </div>
    </div>
  );
}
Object.assign(window, { Product });
