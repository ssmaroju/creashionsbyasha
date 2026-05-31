/* Collections / Themes showcase screen */
function Collections({ go, onOpen }) {
  return (
    <div>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-alt)', borderBottom: '1px solid var(--sand)' }}>
        <div className="wash" style={{ width: 360, height: 360, background: 'var(--teal-200)', top: -160, left: 60, opacity: .45 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, padding: '48px 28px 40px', textAlign: 'center' }}>
          <span className="eyebrow">Themes & styles</span>
          <h1 style={{ margin: '10px 0 8px' }}>Collections</h1>
          <p style={{ margin: 0 }}>The worlds Asha pours in — pick a vibe and explore.</p>
        </div>
      </div>

      <div className="wrap" style={{ padding: '40px 28px 90px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        {window.COLLECTIONS.map((c, i) => {
          const items = window.PRODUCTS.filter(p => p.theme === c.id.charAt(0).toUpperCase() + c.id.slice(1) || p.theme === c.name.split(' ')[0]);
          const themed = window.PRODUCTS.filter(p => matchTheme(p, c)).slice(0, 4);
          const flip = i % 2 === 1;
          return (
            <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 30, alignItems: 'center', direction: flip ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr', position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}>
                <img src={c.hero} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,38,58,.7), transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20, color: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 13, opacity: .9 }}>{c.tagline}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                    {c.colors.map(col => <span key={col} style={{ width: 22, height: 22, borderRadius: '50%', background: col, border: '2px solid rgba(255,255,255,.7)' }} />)}
                  </div>
                </div>
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="pgrid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
                  {themed.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} />)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function matchTheme(p, c) {
  const map = { coastal: 'Coastal', floral: 'Floral', western: 'Western', festive: 'Festive', spiritual: 'Spiritual' };
  return p.theme === map[c.id];
}
Object.assign(window, { Collections });
