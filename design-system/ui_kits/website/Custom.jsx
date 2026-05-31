/* Custom order request screen */
function Custom({ go, seed }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '',
    type: seed ? seed.cat : 'Tumbler',
    theme: seed ? seed.theme : 'Coastal',
    size: '20oz', budget: '$40–60', notes: '',
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const types = ['Tumbler', 'Earrings', 'Coasters', 'Pen', 'Decor', 'Other'];
  const themes = (window.COLLECTIONS || []).map(c => c.name.split(' ')[0]);
  const palette = ['#8E4A66', '#00ADBB', '#1E6390', '#C9A66B', '#E20177', '#9CBDB1'];
  const [colors, setColors] = useState(seed ? [seed.theme] : []);
  const [picked, setPicked] = useState([]);
  const toggle = (c) => setPicked(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  if (sent) {
    return (
      <div className="wrap" style={{ padding: '90px 28px', textAlign: 'center', maxWidth: 620 }}>
        <Dragonfly size={64} color="var(--accent)" className="drift" style={{ margin: '0 auto 18px' }} />
        <span className="eyebrow">Request received</span>
        <h1 style={{ margin: '12px 0 14px' }}>Thank you — I can't wait to pour this!</h1>
        <p style={{ marginBottom: 28 }}>I'll read every detail and email you a quote and a few ideas within a day or two. Every custom piece starts as a little conversation.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={() => go('shop')}>Keep browsing</button>
          <button className="btn btn-secondary" onClick={() => { setSent(false); }}>Send another</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-alt)', borderBottom: '1px solid var(--sand)' }}>
        <div className="wash" style={{ width: 340, height: 340, background: 'var(--teal-200)', top: -150, right: 60, opacity: .5 }} />
        <div className="wash" style={{ width: 320, height: 320, background: 'var(--blush-200)', bottom: -170, left: 20, opacity: .5 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, padding: '50px 28px 42px', textAlign: 'center' }}>
          <span className="eyebrow">Made just for you</span>
          <h1 style={{ margin: '10px 0 8px' }}>Request a custom piece</h1>
          <p style={{ margin: '0 auto', maxWidth: 540 }}>Tell me what you're dreaming up — colors, names, dates, a theme — and I'll bring it to life under glass-smooth resin.</p>
        </div>
      </div>

      <div className="wrap" style={{ padding: '40px 28px 90px', display: 'grid', gridTemplateColumns: '1.4fr .9fr', gap: 40, alignItems: 'start' }}>
        {/* form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {seed && (
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--blush-50)', border: '1px solid var(--blush-200)', borderRadius: 'var(--radius-lg)', padding: '12px 14px' }}>
              <img src={seed.img} alt="" style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
              <div style={{ fontSize: 14, color: 'var(--ink-700)' }}>Inspired by <strong style={{ color: 'var(--ink-900)' }}>{seed.name}</strong> — I'll use it as a starting point.</div>
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Your name"><input className="cf-input" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Asha" /></Field>
            <Field label="Email"><input className="cf-input" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" /></Field>
          </div>

          <Field label="What are you making?">
            <Chips options={types} value={form.type} onPick={v => set('type', v)} />
          </Field>

          <Field label="Theme / vibe">
            <Chips options={themes} value={form.theme} onPick={v => set('theme', v)} />
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Size (if a tumbler)"><Chips options={['12oz', '20oz', '30oz']} value={form.size} onPick={v => set('size', v)} /></Field>
            <Field label="Budget"><Chips options={['$20–40', '$40–60', '$60+']} value={form.budget} onPick={v => set('budget', v)} /></Field>
          </div>

          <Field label="Colors you love (pick any)">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {palette.map(c => (
                <button key={c} onClick={() => toggle(c)} aria-label={c}
                  style={{ width: 38, height: 38, borderRadius: '50%', background: c, cursor: 'pointer', border: picked.includes(c) ? '3px solid var(--ink-900)' : '3px solid transparent', boxShadow: 'var(--shadow-sm)', transition: 'transform .15s' }} />
              ))}
            </div>
          </Field>

          <Field label="Tell me everything">
            <textarea className="cf-input" rows={4} value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Names or dates to add, the occasion, an inspiration photo you'll email, anything goes…" style={{ resize: 'vertical', lineHeight: 1.5 }} />
          </Field>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', border: '1.5px dashed var(--taupe)', borderRadius: 'var(--radius-lg)', padding: '16px 18px', color: 'var(--ink-500)', fontSize: 14 }}>
            <Icon name="plus" /> Drag an inspiration photo here, or email it after you submit.
          </div>

          <button className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }} onClick={() => { setSent(true); window.scrollTo(0, 0); }}>Send my request <Icon name="arrow" size={17} /></button>
        </div>

        {/* aside */}
        <aside style={{ position: 'sticky', top: 96, background: '#fff', border: '1px solid var(--sand)', borderRadius: 'var(--radius-xl)', padding: '26px 24px', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ marginBottom: 14 }}>How custom works</h3>
          {[['1', 'Share your idea', 'Fill this out — no detail too small.'],
            ['2', 'Quote & mockup', 'I reply within a day or two.'],
            ['3', 'I pour it by hand', 'Cured and finished glass-smooth.'],
            ['4', 'Free shipping to you', 'Wrapped like the gift it is.']].map(([n, t, s]) => (
            <div key={n} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
              <span style={{ flex: 'none', width: 28, height: 28, borderRadius: '50%', background: 'var(--teal-100)', color: 'var(--teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13 }}>{n}</span>
              <div><div style={{ fontWeight: 700, color: 'var(--ink-900)', fontSize: 14 }}>{t}</div><div style={{ fontSize: 13, color: 'var(--ink-500)' }}>{s}</div></div>
            </div>
          ))}
          <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--sand)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Stars size={15} /><span style={{ fontSize: 13, color: 'var(--ink-500)' }}>5.0 from 32 happy customers</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--ink-700)', marginBottom: 8 }}>{label}</span>
      {children}
    </label>
  );
}
function Chips({ options, value, onPick }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {options.map(o => (
        <button key={o} type="button" onClick={() => onPick(o)}
          style={{ border: '1.5px solid ' + (value === o ? 'var(--mulberry)' : 'var(--sand)'), background: value === o ? 'var(--blush-50)' : '#fff', color: value === o ? 'var(--mulberry)' : 'var(--ink-700)', borderRadius: 'var(--radius-pill)', padding: '9px 16px', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>{o}</button>
      ))}
    </div>
  );
}
Object.assign(window, { Custom });
