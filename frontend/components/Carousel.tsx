'use client';

import { useEffect, useState } from 'react';

export type Slide = { big: string; small: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((s, idx) => (
        <div className={`carousel-slide${idx === i ? ' active' : ''}`} key={s.big}>
          <div className="cs-badge">
            <b>{s.big}</b>
            <span>{s.small}</span>
          </div>
        </div>
      ))}
      <div className="carousel-dots">
        {slides.map((s, idx) => (
          <button
            key={s.big}
            className={idx === i ? 'active' : ''}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
