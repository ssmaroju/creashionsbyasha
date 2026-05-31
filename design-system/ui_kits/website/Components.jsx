/* Shared UI components for the CreASHions website kit */
const { useState } = React;

/* --- Dragonfly brand glyph (line motif) --- */
function Dragonfly({ size = 48, color = '#00ADBB', stroke = 1.6, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" className={className} style={style}>
      <line x1="24" y1="10" x2="24" y2="40" />
      <circle cx="24" cy="11" r="2.4" fill={color} stroke="none" />
      <path d="M24 17 C14 9, 4 12, 9 18 C12 21, 19 20, 24 19" />
      <path d="M24 17 C34 9, 44 12, 39 18 C36 21, 29 20, 24 19" />
      <path d="M24 21 C16 16, 8 19, 12 24 C14 26, 20 24, 24 23" />
      <path d="M24 21 C32 16, 40 19, 36 24 C34 26, 28 24, 24 23" />
    </svg>
  );
}

/* --- Lucide-style line icons --- */
const ICON_PATHS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  menu: '<path d="M4 12h16M4 6h16M4 18h16"/>',
  star: '<path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1Z"/>',
  arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  truck: '<path d="M14 18V6H2v12h2"/><path d="M14 9h4l4 4v5h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  etsy: '<path d="M9 5h7M9 5v14M9 5v0M9 12h5M9 19h7"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
};
function Icon({ name, size = 20, stroke = 1.75, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || '' }} />
  );
}

function Stars({ n = 5, size = 14 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1, color: 'var(--gold-400)' }}>
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} color="var(--gold-400)" stroke={0} style={{ fill: 'var(--gold-400)' }} />)}
    </span>
  );
}

function Tag({ kind, children }) {
  return <span className={'tag tag-' + kind}>{children}</span>;
}

/* --- Product card --- */
function ProductCard({ p, onOpen, onAdd }) {
  const badgeKind = p.badge === 'Bestseller' ? 'best' : p.badge === 'Ready to ship' ? 'rts' : 'free';
  return (
    <div className="pcard" onClick={() => onOpen && onOpen(p)}>
      <div className="ph">
        <img src={p.img} alt={p.name} />
        <img src="../../assets/brand/watermark.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 8, right: 8, width: 46, opacity: .5, pointerEvents: 'none', mixBlendMode: 'multiply' }} />
        <span className="badge"><Tag kind={badgeKind}>{p.badge || 'Free shipping'}</Tag></span>
        <button className="heart" onClick={(e) => { e.stopPropagation(); }} aria-label="Save"><Icon name="heart" size={17} /></button>
      </div>
      <div className="bd">
        <span className="cat">{p.cat}</span>
        <span className="nm">{p.name}</span>
        <div className="ft">
          <span className="pr">${p.price}</span>
          <span className="rate" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Stars size={13} /> 5.0</span>
        </div>
      </div>
    </div>
  );
}

/* --- Header --- */
function Header({ route, go, cart, onCartClick }) {
  const links = [['shop', 'Shop'], ['collections', 'Collections'], ['story', 'My Story'], ['custom', 'Custom']];
  const S = window.SITE || {};
  return (
    <header className="hdr">
      <div className="masthead" onClick={() => go('home')}>
        <img className="masthead-img" src="../../assets/brand/banner-bg.png" alt="" aria-hidden="true" />
        <div className="masthead-word">
          <span className="mw-1">Cre<b>ASH</b>ions</span>
          <span className="mw-2">by Asha</span>
        </div>
      </div>
      <div className="navbar">
        <div className="wrap navbar-in">
          <nav className="nav">
            {links.map(([r, label]) => (
              <a key={r} className={route === r ? 'on' : ''} onClick={() => go(r)}>{label}</a>
            ))}
          </nav>
          <div className="hdr-icons">
            <button className="icon-btn" aria-label="Search"><Icon name="search" /></button>
            <button className="icon-btn" aria-label="Saved"><Icon name="heart" /></button>
            <button className="icon-btn" aria-label="Cart" onClick={onCartClick}>
              <Icon name="bag" />
              {cart > 0 && <span className="cart-count">{cart}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* --- Footer --- */
function Footer({ go }) {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div>
          <div style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 700, fontSize: 28, color: '#fff', letterSpacing: 0 }}>Cre<span style={{ color: 'var(--rose-300)' }}>ASH</span>ions <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: 24, color: 'var(--teal-200)' }}>by Asha</span></div>
          <p style={{ maxWidth: 280, marginTop: 10, fontSize: 14, opacity: .85 }}>
            {(window.SITE && window.SITE.footerBlurb) || 'Hand-poured resin art, made one at a time in Cypress, Texas. No two pieces alike.'}
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <button className="icon-btn" style={{ color: '#dceaef', border: '1px solid rgba(255,255,255,.22)' }} title="Instagram" aria-label="Instagram"><Icon name="instagram" /></button>
            <button className="icon-btn" style={{ color: '#dceaef', border: '1px solid rgba(255,255,255,.22)' }} title="Etsy" aria-label="Etsy"><Icon name="etsy" /></button>
            <button className="icon-btn" style={{ color: '#dceaef', border: '1px solid rgba(255,255,255,.22)' }} title="Facebook" aria-label="Facebook"><Icon name="facebook" /></button>
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <a onClick={() => go('shop')}>Tumblers</a><a onClick={() => go('shop')}>Earrings</a>
          <a onClick={() => go('shop')}>Coasters</a><a onClick={() => go('shop')}>Resin pens</a>
        </div>
        <div>
          <h4>About</h4>
          <a onClick={() => go('story')}>My story</a><a onClick={() => go('collections')}>Collections</a>
          <a onClick={() => go('custom')}>Custom orders</a><a>Reviews</a>
        </div>
        <div>
          <h4>Join the studio list</h4>
          <p style={{ fontSize: 14, opacity: .85, margin: '0 0 10px' }}>New pours, restocks & little promos.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input placeholder="you@email.com" style={{ flex: 1, padding: '11px 13px', borderRadius: 'var(--radius-md)', border: 0, fontFamily: 'inherit', fontSize: 14 }} />
            <button className="btn btn-accent" style={{ padding: '11px 18px' }}>Join</button>
          </div>
        </div>
      </div>
      <div className="wrap ftr-bottom">
        <span>© 2026 CreASHions by Asha · Cypress, Texas</span>
        <span>Free shipping on every order · Made to order</span>
      </div>
    </footer>
  );
}

/* --- Ambient dragonflies: rare, gentle fly-bys of varying size & color --- */
function AmbientDragonflies() {
  const [flies, setFlies] = useState([]);
  React.useEffect(() => {
    let timer, id = 0, mounted = true;
    const palette = ['#00ADBB', '#C9A66B', '#1E6390', '#8E4A66', '#00A0AF'];
    function spawn() {
      if (!mounted) return;
      const dir = Math.random() < 0.5 ? 'lr' : 'rl';
      const size = 20 + Math.round(Math.random() * 28);   // 20–48px, mixed sizes
      const top = 10 + Math.random() * 66;                // vh
      const dur = 12 + Math.random() * 8;                 // 12–20s crossing
      const color = palette[Math.floor(Math.random() * palette.length)];
      const wander = (3.4 + Math.random() * 2.6).toFixed(1);  // vertical wave speed
      const sway = (1.1 + Math.random() * 0.8).toFixed(1);    // banking sway speed
      const key = id++;
      setFlies(f => [...f, { key, dir, size, top, dur, color, wander, sway }]);
      setTimeout(() => mounted && setFlies(f => f.filter(x => x.key !== key)), dur * 1000 + 300);
      timer = setTimeout(spawn, (32 + Math.random() * 48) * 1000); // rarely: every ~32–80s
    }
    timer = setTimeout(spawn, 11000); // first fly-by after ~11s
    return () => { mounted = false; clearTimeout(timer); };
  }, []);
  return (
    <React.Fragment>
      {flies.map(f => (
        <div key={f.key} className="fly" style={{ top: f.top + 'vh', animation: `fly-${f.dir} ${f.dur}s linear forwards` }}>
          <div className="wander" style={{ animationDuration: f.wander + 's' }}>
            <div className="sway" style={{ animationDuration: f.sway + 's' }}>
              <Dragonfly size={f.size} color={f.color} style={{ transform: `rotate(${f.dir === 'lr' ? 90 : -90}deg)`, opacity: .82 }} />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

/* --- Cart drawer with Stripe checkout --- */
function CartDrawer({ open, items, onClose, setCart, go }) {
  const [demo, setDemo] = useState(false);
  const subtotal = items.reduce((s, x) => s + x.price * x.qty, 0);
  const setQty = (i, d) => setCart(prev => {
    const next = [...prev];
    next[i] = { ...next[i], qty: Math.max(1, next[i].qty + d) };
    return next;
  });
  const remove = (i) => setCart(prev => prev.filter((_, idx) => idx !== i));
  function checkout() {
    const lineItems = items.map(x => ({ name: x.name, price: x.price, qty: x.qty, image: x.image, size: x.size }));
    window.startCheckout(lineItems, () => setDemo(true));
  }
  return (
    <React.Fragment>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(58,44,49,.4)', backdropFilter: 'blur(2px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity .3s', zIndex: 200 }} />
      <aside style={{ position: 'fixed', top: 0, right: 0, height: '100%', width: 'min(420px, 92vw)', background: 'var(--pearl)', boxShadow: 'var(--shadow-lg)', zIndex: 201, transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .34s var(--ease)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px 22px', borderBottom: '1px solid var(--sand)' }}>
          <h3 style={{ margin: 0, marginRight: 'auto' }}>Your cart</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
        </div>

        {items.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 30, textAlign: 'center', color: 'var(--ink-500)' }}>
            <Dragonfly size={48} color="var(--teal-200)" />
            <p style={{ margin: 0 }}>Your cart is empty.</p>
            <button className="btn btn-secondary" onClick={() => { onClose(); go('shop'); }}>Browse the shop</button>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px' }}>
              {items.map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--sand)' }}>
                  <img src={it.image} alt="" style={{ width: 62, height: 62, borderRadius: 'var(--radius-md)', objectFit: 'cover', flex: 'none' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: 'var(--ink-900)', fontSize: 14, lineHeight: 1.2 }}>{it.name}</div>
                    {it.size && <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{it.size}</div>}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--sand)', borderRadius: 'var(--radius-pill)' }}>
                        <button onClick={() => setQty(i, -1)} style={{ border: 0, background: 'transparent', padding: '4px 9px', cursor: 'pointer', color: 'var(--ink-700)' }}><Icon name="minus" size={13} /></button>
                        <span style={{ fontWeight: 700, fontSize: 13, minWidth: 18, textAlign: 'center' }}>{it.qty}</span>
                        <button onClick={() => setQty(i, 1)} style={{ border: 0, background: 'transparent', padding: '4px 9px', cursor: 'pointer', color: 'var(--ink-700)' }}><Icon name="plus" size={13} /></button>
                      </div>
                      <button onClick={() => remove(i)} style={{ border: 0, background: 'transparent', color: 'var(--ink-500)', fontSize: 12, cursor: 'pointer', textDecoration: 'underline' }}>Remove</button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 800, color: 'var(--ink-900)' }}>${it.price * it.qty}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '18px 22px', borderTop: '1px solid var(--sand)', background: '#fff' }}>
              {(() => {
                const GIFT = 75;
                return subtotal >= GIFT ? (
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--blush-50)', border: '1px solid var(--blush-200)', borderRadius: 'var(--radius-md)', padding: '10px 12px', marginBottom: 12 }}>
                    <img src="../../assets/brand/keychain-gift.png" alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', flex: 'none' }} />
                    <div style={{ fontSize: 12.5, color: 'var(--ink-700)', lineHeight: 1.4 }}><strong style={{ color: 'var(--mulberry)' }}>You've earned a free keychain!</strong> A handmade pressed-flower keychain ships free with your order.</div>
                  </div>
                ) : (
                  <div style={{ fontSize: 12.5, color: 'var(--ink-500)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Dragonfly size={22} color="var(--accent)" /> Add ${GIFT - subtotal} more for a <strong style={{ color: 'var(--ink-700)' }}>free handmade keychain</strong>.
                  </div>
                );
              })()}
              {demo && (
                <div style={{ background: 'var(--teal-100)', color: 'var(--teal-600)', borderRadius: 'var(--radius-md)', padding: '10px 12px', fontSize: 12.5, marginBottom: 12, lineHeight: 1.45 }}>
                  <strong>Demo mode.</strong> Connect Stripe to go live — see <code>content/GO-LIVE.md</code>. In production this button opens secure Stripe Checkout (cards, Apple&nbsp;Pay, Google&nbsp;Pay).
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 14, color: 'var(--ink-700)' }}><span>Subtotal</span><span style={{ fontWeight: 800, color: 'var(--ink-900)' }}>${subtotal}</span></div>
              <div style={{ fontSize: 12, color: 'var(--success)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="truck" size={14} /> Free shipping included</div>
              <button className="btn btn-primary btn-lg btn-block" onClick={checkout}>Checkout securely <Icon name="arrow" size={16} /></button>
              <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-500)', marginTop: 10 }}>Secured by Stripe · cards · Apple Pay · Google Pay</div>
            </div>
          </React.Fragment>
        )}
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, { Dragonfly, Icon, Stars, Tag, ProductCard, Header, Footer, AmbientDragonflies, CartDrawer });