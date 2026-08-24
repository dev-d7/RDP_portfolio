'use client';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#services', label: 'Courses' },
  { href: '#work', label: 'Results' },
  { href: '#devops', label: 'Why Us' },
  { href: '#process', label: 'How it works' },
];

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className={`nav-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)}>
          <div className="mobile-panel" onClick={e => e.stopPropagation()}>
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mobile-panel-cta" onClick={() => setOpen(false)}>
              Book free demo →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
