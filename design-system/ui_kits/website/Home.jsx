/* Hero slideshow — diverse product pairs, random start, gentle crossfade */
function HeroSlideshow() {
  const slides = React.useMemo(() => {
    const all = window.PRODUCTS || [];
    const pick = (cat) => all.filter(p => p.cat === cat);
    const byCat = {
      Tumblers: pick('Tumblers'), Earrings: pick('Earrings'), Coasters: pick('Coasters'),
      'Resin Pens': pick('Resin Pens'), 'Indian Decor': pick('Indian Decor'),
      'Wine Holders': pick('Wine Holders'), Accessory: pick('Accessory'),
    };
    const img = (arr, i) => (arr[i % Math.max(1, arr.length)] || {}).img;
    // curated diverse pairs (tall + short), spanning categories — not just tumblers
    const raw = [
      [img(byCat.Tumblers, 0), img(byCat.Earrings, 0)],
      [img(byCat.Coasters, 0), img(byCat.Tumblers, 5)],
      [img(byCat.Tumblers, 7), img(byCat['Indian Decor'], 1)],
      [img(byCat.Earrings, 1), img(byCat['Wine Holders'], 0)],
      [img(byCat['Indian Decor'], 0), img(byCat['Resin Pens'], 0)],
      [img(byCat.Tumblers, 1), img(byCat.Coasters, 2)],
    ].filter(s => s[0] && s[1]);
    return raw;
  }, []);

  const [idx, setIdx] = useState(() => Math.floor(Math.random() * 999));
  React.useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setIdx(i => i + 1), 4200);
    return () => clearInterval(t);
  }, [slides.length]);

  if (!slides.length) return null;
  const active = ((idx % slides.length) + slides.length) % slides.length;

  return (
    <div style={{ position: 'relative', aspectRatio: '2 / 1.32' }}>
      {slides.map((pair, i) => (
        <div key={i} aria-hidden={i !== active}
          style={{
            position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
            opacity: i === active ? 1 : 0, transition: 'opacity 1s var(--ease)', pointerEvents: 'none',
          }}>
          <img src={pair[0]} alt="" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '3/4', objectFit: 'cover', marginTop: 30, width: '100%' }} />
          <img src={pair[1]} alt="" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '3/4', objectFit: 'cover', width: '100%' }} />
        </div>
      ))}
      {/* progress dots */}
      <div style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 4 }}>
        {slides.map((_, i) => (
          <span key={i} style={{ width: i === active ? 18 : 6, height: 6, borderRadius: 999, background: i === active ? 'var(--mulberry)' : 'var(--taupe)', transition: 'all .4s var(--ease)' }} />
        ))}
      </div>
    </div>
  );
}

/* Home screen */
function Hero({ go }) {
  const S = window.SITE || {};
  const stats = S.stats || [];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--pearl)' }}>
      <div className="wash" style={{ width: 460, height: 460, background: 'var(--blush-200)', top: -120, left: -80 }} />
      <div className="wash" style={{ width: 420, height: 420, background: 'var(--teal-200)', bottom: -160, right: -60 }} />
      <div className="wash" style={{ width: 320, height: 320, background: 'var(--lilac-200)', top: 40, right: 180, opacity: .4 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 40, alignItems: 'center', padding: '70px 28px 80px' }}>
        <div className="risein">
          <span className="eyebrow">{S.heroEyebrow}</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 4rem)', margin: '16px 0 0', lineHeight: 1.05 }}>
            {S.heroTitle}
          </h1>
          <div style={{ fontFamily: 'var(--font-script)', color: 'var(--mulberry)', fontSize: 'clamp(3rem, 5.4vw, 4.7rem)', lineHeight: 1.05, margin: '2px 0 4px' }}>
            {S.heroScript}
          </div>
          <p style={{ fontSize: 19, maxWidth: 460, margin: '14px 0 28px' }}>
            {S.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => go('shop')}>Shop the collection</button>
            <button className="btn btn-secondary btn-lg" onClick={() => go('story')}><Icon name="play" size={17} /> See how it's made</button>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 32, alignItems: 'center' }}>
            {stats.map((st, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ width: 1, height: 36, background: 'var(--sand)' }} />}
                <div><div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--ink-900)' }}>{st.big}</div><div style={{ fontSize: 13, color: 'var(--ink-500)' }}>{st.small}</div></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Dragonfly size={64} color="var(--gold-400)" className="drift" style={{ position: 'absolute', top: -10, left: 10, '--rot': '-16deg', zIndex: 3 }} />
          <HeroSlideshow />
          <Dragonfly size={46} color="var(--teal-400)" className="drift" style={{ position: 'absolute', bottom: -6, right: 24, '--rot': '18deg', animationDelay: '1.5s' }} />
        </div>
      </div>
      <div style={{ background: 'var(--mulberry)', color: '#fff', textAlign: 'center', padding: '11px', fontSize: 14, fontWeight: 600, letterSpacing: '.02em', position: 'relative', zIndex: 2 }}>
        <Icon name="truck" size={16} style={{ verticalAlign: '-3px', marginRight: 7 }} />
        {S.promoBar}
      </div>
    </section>
  );
}

function PromoStrip() {
  return (
    <div style={{ background: 'var(--linen)' }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-around', gap: 20, padding: '22px 28px', flexWrap: 'wrap' }}>
        {[['sparkle', 'Sealed glass-smooth', 'Food-safe, durable resin finish'],
          ['heart', 'Made to order', 'Personalize any piece with a name'],
          ['truck', 'Ships in 5–7 days', 'Carefully wrapped, free shipping']].map(([ic, t, s]) => (
          <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ width: 42, height: 42, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', boxShadow: 'var(--shadow-sm)' }}><Icon name={ic} /></span>
            <div><div style={{ fontWeight: 800, color: 'var(--ink-900)', fontSize: 15 }}>{t}</div><div style={{ fontSize: 13, color: 'var(--ink-500)' }}>{s}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Free-gift feature — the handmade keychain that ships free over $75 */
function GiftBanner({ go }) {
  return (
    <section className="section wrap" style={{ paddingTop: 0 }}>
      <div style={{
        position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(105deg, var(--blush-50) 0%, var(--linen) 52%, var(--teal-100) 100%)',
        border: '1px solid var(--blush-200)', boxShadow: 'var(--shadow-sm)',
        display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'center',
        padding: '26px 32px',
      }}>
        <div className="wash" style={{ width: 260, height: 260, background: 'var(--gold-200)', top: -120, right: 40, opacity: .35 }} />
        <div style={{ position: 'relative', flex: 'none' }}>
          <img src="../../assets/brand/keychain-gift.png" alt="Handmade pressed-flower resin keychain"
            style={{ width: 'clamp(120px, 16vw, 168px)', height: 'auto', display: 'block',
              filter: 'drop-shadow(0 10px 22px rgba(58,44,49,.22))' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow" style={{ color: 'var(--accent-hover)' }}>A little thank-you</span>
          <h2 style={{ margin: '8px 0 8px', fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', lineHeight: 1.12 }}>
            A free handmade keychain with every order over $75
          </h2>
          <p style={{ margin: '0 0 18px', maxWidth: 460, color: 'var(--ink-700)' }}>
            Every larger order comes with a one-of-a-kind pressed-flower resin keychain, poured by
            hand and tucked into your package as a small thank-you.
          </p>
          <button className="btn btn-primary" onClick={() => go('shop')}>Shop & earn your gift <Icon name="arrow" size={17} /></button>
        </div>
      </div>
    </section>
  );
}

function Featured({ go, onOpen }) {
  const items = window.PRODUCTS.filter(p => p.badge === 'Bestseller').slice(0, 4);
  return (
    <section className="section wrap">
      <div className="section-head">
        <span className="eyebrow">Loved by customers</span>
        <h2>Bestselling pours</h2>
        <p>The pieces that keep flying off the studio shelf.</p>
      </div>
      <div className="pgrid">{items.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} />)}</div>
      <div style={{ textAlign: 'center', marginTop: 34 }}>
        <button className="btn btn-secondary btn-lg" onClick={() => go('shop')}>Shop all 91 pieces <Icon name="arrow" size={17} /></button>
      </div>
    </section>
  );
}

function CollectionsStrip({ go }) {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Find your theme</span>
          <h2>Shop by collection</h2>
          <p>From coastal waves to honeybee florals — every world Asha loves to pour.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
          {window.COLLECTIONS.map(c => (
            <div key={c.id} onClick={() => go('collections')} style={{ cursor: 'pointer', textAlign: 'center' }} className="coll-mini">
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <img src={c.hero} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,38,58,.55), transparent 55%)' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--ink-900)', marginTop: 10 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{c.tagline}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessBlock({ go }) {
  return (
    <section className="section wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3' }}>
          <img src="../../assets/products/highland-cow-tumbler.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button className="btn" style={{ position: 'absolute', inset: 0, margin: 'auto', width: 74, height: 74, borderRadius: '50%', background: 'rgba(255,255,255,.92)', color: 'var(--mulberry)', padding: 0 }}><Icon name="play" size={26} /></button>
          <span style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(0,38,58,.78)', color: '#fff', padding: '6px 13px', borderRadius: 'var(--radius-pill)', fontSize: 12, fontWeight: 700 }}>Watch a pour · 0:48</span>
        </div>
      </div>
      <div>
        <span className="eyebrow">The process</span>
        <h2 style={{ margin: '12px 0 16px' }}>Every layer, laid by hand</h2>
        <p style={{ marginBottom: 16 }}>
          Each tumbler starts as a bare stainless blank. I build it up layer by layer — glitter, mica, hand-cut artwork — then seal it under coats of crystal-clear resin, curing and sanding between each one. It's slow, and that's the point.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 10 }}>
          {['Designed with you for custom orders', 'Cured for days, not minutes', 'Finished glass-smooth & food-safe'].map(t => (
            <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--ink-700)' }}>
              <span style={{ color: 'var(--accent)' }}><Icon name="check" size={18} /></span>{t}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={() => go('story')}>Read my story</button>
      </div>
    </section>
  );
}

function Reviews() {
  const data = [
    { q: 'The detail on my sea-turtle tumbler is unreal — it photographs even better in person.', n: 'Megan R.', t: 'Sea Turtle Tumbler' },
    { q: 'Asha made a custom name tumbler for my son and the colors are stunning. So fast too!', n: 'Priya S.', t: 'Custom 20oz' },
    { q: 'My honeybee tumbler is a piece of art. I get stopped about it everywhere I go.', n: 'Dana W.', t: 'Honey Bee Rustic' },
  ];
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">5.0 across 32 reviews</span>
          <h2>What buyers are saying</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {data.map((r, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--sand)', borderRadius: 'var(--radius-lg)', padding: '24px 24px 22px', boxShadow: 'var(--shadow-sm)' }}>
              <Stars size={16} />
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink-900)', lineHeight: 1.35, margin: '12px 0 16px' }}>"{r.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--blush-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--mulberry)' }}>{r.n[0]}</span>
                <div><div style={{ fontWeight: 700, color: 'var(--ink-900)', fontSize: 14 }}>{r.n}</div><div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{r.t}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomCTA({ go }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--teal-800)', color: '#fff' }}>
      <div className="wash" style={{ width: 380, height: 380, background: 'var(--teal-400)', top: -120, right: 80, opacity: .35 }} />
      <div className="wash" style={{ width: 340, height: 340, background: 'var(--mulberry)', bottom: -160, left: 60, opacity: .3 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '80px 28px' }}>
        <img src="../../assets/brand/logo-main.png" alt="CreASHions by Asha" style={{ width: 'min(178px, 56vw)', aspectRatio: '1', borderRadius: '50%', boxShadow: 'var(--shadow-lg), 0 0 0 8px rgba(255,255,255,.06)', margin: '0 auto 22px', display: 'block' }} />
        <span className="eyebrow" style={{ display: 'block', color: 'var(--teal-200)' }}>Dreaming up something special?</span>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.9rem, 3.2vw, 2.9rem)', lineHeight: 1.16, margin: '14px auto 16px', maxWidth: 760 }}>Let's pour a one-of-a-kind piece, just for you</h2>
        <p style={{ maxWidth: 520, margin: '0 auto 28px', opacity: .9 }}>Names, colors, dates, themes — tell me what you're imagining and I'll make it real.</p>
        <button className="btn btn-accent btn-lg" onClick={() => go('custom')}>Start a custom piece <Icon name="arrow" size={17} /></button>
      </div>
    </section>
  );
}

function Home({ go, onOpen }) {
  return (
    <div>
      <Hero go={go} />
      <PromoStrip />
      <GiftBanner go={go} />
      <Featured go={go} onOpen={onOpen} />
      <CollectionsStrip go={go} />
      <ProcessBlock go={go} />
      <Reviews />
      <CustomCTA go={go} />
    </div>
  );
}
Object.assign(window, { Home });
