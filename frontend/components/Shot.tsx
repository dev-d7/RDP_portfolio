'use client';

import React, { useState, useRef, useEffect } from 'react';

type ShotProps = {
  src: string;
  title: string;
  variant?: 'shot' | 'arch-shot' | 'avatar';
  alt?: string;
};

export default function Shot({ src, title, variant = 'shot', alt }: ShotProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the browser already has the image cached, onLoad fires before React
  // attaches the listener and loaded stays false. Check img.complete on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else if (img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  const cls =
    variant === 'arch-shot' ? 'arch-shot' : variant === 'avatar' ? 'avatar' : 'shot';

  const showPlaceholder = !loaded || errored;

  return (
    <div className={cls}>
      {showPlaceholder && (
        <div
          className="shot-placeholder"
          style={variant === 'avatar' ? { padding: 8 } : undefined}
        >
          {variant !== 'avatar' && (
            <>
              <div className="ph-frame">
                <svg className="ic" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M3 16l5-5 4 4 3-3 6 6" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                </svg>
              </div>
              <div className="ph-title">{title}</div>
            </>
          )}
          <div className="ph-path" style={variant === 'avatar' ? { fontSize: 10 } : undefined}>
            {src}
          </div>
        </div>
      )}

      <img
        ref={imgRef}
        src={'/' + src}
        alt={alt ?? title}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded && !errored ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
    </div>
  );
}
