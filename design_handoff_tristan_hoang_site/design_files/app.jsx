// app.jsx — wires everything together
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "oklch(0.68 0.14 50)",
  "displayStyle": "mixed",
  "background": "mesh"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  'oklch(0.68 0.14 50)',   // amber
  '#0B2545',               // navy
  'oklch(0.55 0.12 155)',  // forest
  'oklch(0.65 0.13 25)',   // rose
];

function applyAccent(value) {
  document.documentElement.style.setProperty('--accent', value);
}

function BackgroundLayer({ variant }) {
  if (variant === 'plain') return <div className="bg-layer" />;
  if (variant === 'topo') return (
    <div className="bg-layer bg-topo">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#0B2545" strokeWidth="1" opacity="0.35">
          {Array.from({length: 14}).map((_,i) => {
            const r = 120 + i*70;
            return <ellipse key={i} cx="260" cy="760" rx={r} ry={r*0.62} />;
          })}
        </g>
        <g fill="none" stroke="#134074" strokeWidth="1" opacity="0.28">
          {Array.from({length: 11}).map((_,i) => {
            const r = 100 + i*78;
            return <ellipse key={i} cx="1380" cy="180" rx={r} ry={r*0.7} />;
          })}
        </g>
      </svg>
    </div>
  );
  if (variant === 'grid') return (
    <div className="bg-layer bg-grid">
      <div className="bloom" />
      {[[160,160],[480,320],[800,160],[1120,480],[320,640],[960,720],[1280,800]].map(([x,y],i) => (
        <div key={i} className="crosshair" style={{ left:x, top:y }} />
      ))}
    </div>
  );
  if (variant === 'stripes') return (
    <div className="bg-layer bg-stripes">
      <div className="accent-bar b1" />
      <div className="accent-bar b2" />
      <div className="accent-bar b3" />
    </div>
  );
  if (variant === 'halftone') return (
    <div className="bg-layer bg-halftone">
      <div className="accent" />
      <div className="vignette" />
    </div>
  );
  // mesh (default)
  return (
    <div className="bg-layer bg-mesh">
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { applyAccent(t.accent); }, [t.accent]);

  const [active, setActive] = useState('top');
  const [post, setPost] = useState(null);
  const [galleryItem, setGalleryItem] = useState(null);

  // Scroll spy for nav highlight
  useEffect(() => {
    const ids = ['top','about','services','work','gallery','journal','contact'];
    const opts = { rootMargin: '-40% 0px -55% 0px', threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, opts);
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  };

  // Apply font-size tweak via display style
  useEffect(() => {
    const root = document.documentElement;
    if (t.displayStyle === 'sans') {
      root.style.setProperty('--serif-display', 'inherit');
    } else if (t.displayStyle === 'serif') {
      root.style.setProperty('--serif-display', '"Newsreader", Georgia, serif');
    }
  }, [t.displayStyle]);

  // Override serif spans visibility based on displayStyle
  useEffect(() => {
    document.querySelectorAll('.serif').forEach(el => {
      if (t.displayStyle === 'sans') {
        el.style.fontFamily = 'inherit';
        el.style.fontStyle = 'normal';
      } else if (t.displayStyle === 'serif-all') {
        el.style.fontFamily = '"Newsreader", Georgia, serif';
      } else {
        el.style.fontFamily = '';
        el.style.fontStyle = '';
      }
    });
  }, [t.displayStyle]);

  return (
    <div style={{ minHeight:'100vh' }}>
      <BackgroundLayer variant={t.background} />
      <Nav active={active === 'top' ? '' : active} onJump={jump} />
      <Hero onJump={jump} />
      <About />
      <Services onJump={jump} />
      <Work />
      <Gallery onOpen={setGalleryItem} />
      <Journal onOpenPost={setPost} />
      <Contact />
      <Footer />

      <PostReader post={post} onClose={() => setPost(null)} />
      <GalleryLightbox item={galleryItem} onClose={() => setGalleryItem(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Type" />
        <TweakRadio label="Display style" value={t.displayStyle}
          options={['mixed','sans','serif-all']}
          onChange={(v) => setTweak('displayStyle', v)} />

        <TweakSection label="Background" />
        <TweakSelect label="Style" value={t.background}
          options={['mesh','topo','grid','stripes','halftone','plain']}
          onChange={(v) => setTweak('background', v)} />

        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak('accent', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
