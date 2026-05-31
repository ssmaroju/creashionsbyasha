/* Shop / Catalog screen */
function Shop({ go, onOpen }) {
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('Featured');
  let items = window.PRODUCTS.filter(p => cat === 'All' || p.cat === cat);
  if (sort === 'Price ↑') items = [...items].sort((a, b) => a.price - b.price);
  if (sort === 'Price ↓') items = [...items].sort((a, b) => b.price - a.price);

  return (
    <div>
      {/* page header band */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-alt)', borderBottom: '1px solid var(--sand)' }}>
        <div className="wash" style={{ width: 360, height: 360, background: 'var(--blush-200)', top: -160, right: 40, opacity: .45 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, padding: '46px 28px 40px', textAlign: 'center' }}>
          <span className="eyebrow">The full studio</span>
          <h1 style={{ margin: '10px 0 8px' }}>Shop all pieces</h1>
          <p style={{ margin: 0 }}>Every tumbler, earring, coaster and keepsake — hand-poured and made to order.</p>
        </div>
      </div>

      <div className="wrap" style={{ padding: '28px 28px 90px' }}>
        {/* filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {window.CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{
                  border: '1.5px solid ' + (cat === c ? 'var(--mulberry)' : 'var(--sand)'),
                  background: cat === c ? 'var(--blush-50)' : '#fff',
                  color: cat === c ? 'var(--mulberry)' : 'var(--ink-700)',
                  borderRadius: 'var(--radius-pill)', padding: '9px 17px', fontSize: 14, fontWeight: 600,
                }}>{c}</button>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--ink-500)' }}>{items.length} pieces</span>
            <div style={{ position: 'relative' }}>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{ appearance: 'none', border: '1.5px solid var(--sand)', background: '#fff', borderRadius: 'var(--radius-pill)', padding: '9px 36px 9px 16px', fontSize: 14, fontWeight: 600, color: 'var(--ink-700)', fontFamily: 'inherit', cursor: 'pointer' }}>
                {['Featured', 'Price ↑', 'Price ↓'].map(s => <option key={s}>{s}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 12, top: 10, pointerEvents: 'none', color: 'var(--ink-500)' }}><Icon name="chev" size={16} /></span>
            </div>
          </div>
        </div>

        <div className="pgrid">
          {items.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} />)}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Shop });
