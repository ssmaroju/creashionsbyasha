/* My Story / About screen */
function Story({ go, onOpen }) {
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--pearl)' }}>
        <div className="wash" style={{ width: 420, height: 420, background: 'var(--lilac-200)', top: -140, left: -60, opacity: .5 }} />
        <div className="wash" style={{ width: 360, height: 360, background: 'var(--teal-200)', bottom: -160, right: 0, opacity: .45 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center', padding: '64px 28px' }}>
          <div>
            <span className="eyebrow">Meet the maker</span>
            <h1 style={{ margin: '14px 0 8px' }}>Hi, I'm <span className="script" style={{ fontSize: '1.25em', color: 'var(--mulberry)' }}>Asha</span></h1>
            <p style={{ fontSize: 19, marginBottom: 16 }}>
              I started pouring resin three years ago at my kitchen table in Cypress, Texas — and never looked back.
            </p>
            <p style={{ marginBottom: 16 }}>
              What began as one curious tumbler turned into ninety-one one-of-a-kind pieces and a little studio of my own. I'm endlessly inspired by the things I love: the ocean, wildflowers, honeybees, and dragonflies — the same dragonflies that have found their way into my logo and my heart.
            </p>
            <p>
              Every order is poured by hand, just for you. No mass production, no two pieces alike. Just slow, careful craft and a whole lot of color.
            </p>
            <div className="script" style={{ fontSize: 38, color: 'var(--mulberry)', marginTop: 14 }}>— Asha</div>
          </div>
          <div style={{ position: 'relative' }}>
            <Dragonfly size={58} color="var(--gold-400)" className="drift" style={{ position: 'absolute', top: -14, right: 30, '--rot': '12deg', zIndex: 3 }} />
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}>
              <img src="../../assets/products/floral-white-tumbler.png" alt="Asha's work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
            {[['heart', 'Made with intention', 'Each piece is poured after you order it — never warehoused, never rushed.'],
              ['sparkle', 'One of a kind', 'Resin moves the way it wants to. Your piece will be the only one like it.'],
              ['truck', 'Shipped with care', 'Wrapped like a gift and sent free, anywhere in the country.']].map(([ic, t, s]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid var(--sand)', borderRadius: 'var(--radius-lg)', padding: '28px 26px', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--blush-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mulberry)', marginBottom: 16 }}><Icon name={ic} size={24} /></span>
                <h3 style={{ marginBottom: 8 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* video / process */}
      <section className="section wrap" style={{ textAlign: 'center' }}>
        <div className="section-head">
          <span className="eyebrow">Watch the magic</span>
          <h2>From bare blank to wearable art</h2>
        </div>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9', maxWidth: 880, margin: '0 auto' }}>
          <img src="../../assets/products/midnight-butterfly-tumbler.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,38,58,.35)' }} />
          <button className="btn" style={{ position: 'absolute', inset: 0, margin: 'auto', width: 86, height: 86, borderRadius: '50%', background: 'rgba(255,255,255,.94)', color: 'var(--mulberry)', padding: 0 }}><Icon name="play" size={30} /></button>
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 14 }}>Asha to add her real studio clip here.</p>
      </section>

      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--teal-800)', color: '#fff' }}>
        <div className="wash" style={{ width: 340, height: 340, background: 'var(--mulberry)', bottom: -150, right: 80, opacity: .3 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '70px 28px' }}>
          <h2 style={{ color: '#fff', margin: '0 0 20px' }}>Ready to find your piece?</h2>
          <button className="btn btn-accent btn-lg" onClick={() => go('shop')}>Browse the collection <Icon name="arrow" size={17} /></button>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { Story });
