import AmberCascades from './AmberCascades';
import { heroConfig } from '../config';

export default function Hero() {
  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
        style={{
          height: '100%',
          padding: '0 5vw',
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(52px, 7vw, 120px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#E8E8EC',
            textShadow: '0 0 80px rgba(0, 212, 255, 0.15)',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          {heroConfig.title}
        </h1>
        {heroConfig.subtitleLine1 && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.7,
              letterSpacing: '0.02em',
              color: '#8A8A95',
              margin: '0 0 32px 0',
              maxWidth: 600,
              textAlign: 'center',
            }}
          >
            {heroConfig.subtitleLine1}
          </p>
        )}
        {heroConfig.subtitleLine2 && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.7,
              color: '#8A8A95',
              margin: '0 0 40px 0',
              maxWidth: 520,
              textAlign: 'center',
            }}
          >
            {heroConfig.subtitleLine2}
          </p>
        )}

        {heroConfig.ctaText && (
          <div className="pointer-events-auto">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="liquid-glass-btn"
            >
              {heroConfig.ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
