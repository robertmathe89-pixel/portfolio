import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AmberCascades from './AmberCascades';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#06060A', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Helmet>
        <title>Page Not Found — Robert</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Digital rain background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.3 }}>
        <AmberCascades />
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(0, 212, 255, 0.6)',
            marginBottom: 24,
          }}
        >
          404 Error
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#E8E8EC',
            margin: '0 0 24px 0',
          }}
        >
          Lost in the Void
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.7,
            color: '#8A8A95',
            margin: '0 0 40px 0',
            maxWidth: 420,
          }}
        >
          The page you are looking for does not exist or has been moved to another dimension.
        </p>

        <button
          onClick={() => navigate('/')}
          className="liquid-glass-btn"
          style={{
            padding: '14px 36px',
            fontSize: 14,
          }}
          aria-label="Back to home"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
