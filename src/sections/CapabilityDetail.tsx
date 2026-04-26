import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AmberCascades from './AmberCascades';
import { siteConfig, capabilityDetailConfig } from '../config';

const SLUGS = Object.keys(capabilityDetailConfig.capabilities);

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = slug ? capabilityDetailConfig.capabilities[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div style={{ background: '#06060A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Helmet>
          <title>Not Found — Robert</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <p style={{ color: '#8A8A95', fontFamily: "'Inter', sans-serif" }}>{capabilityDetailConfig.notFoundText || 'Not found.'}</p>
      </div>
    );
  }

  const currentIndex = SLUGS.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUGS.length - 1 ? SLUGS[currentIndex + 1] : null;

  return (
    <div style={{ background: '#06060A', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Helmet>
        <title>{`${data.title} — Robert`}</title>
        <meta name="description" content={data.subtitle} />
        <link rel="canonical" href={`https://robert-portfolio.vercel.app/capability/${slug}`} />
        <meta property="og:title" content={`${data.title} — Robert`} />
        <meta property="og:description" content={data.subtitle} />
        <meta property="og:url" content={`https://robert-portfolio.vercel.app/capability/${slug}`} />
      </Helmet>

      {/* Digital rain background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.4 }}>
        <AmberCascades />
      </div>

      {/* Back nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 72,
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(6, 6, 10, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="no-underline"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16,
            fontWeight: 500,
            color: '#E8E8EC',
            letterSpacing: '-0.5px',
          }}
          aria-label="Back to home"
        >
          {siteConfig.brandName}
        </a>
        {capabilityDetailConfig.backLinkText && (
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="nav-link"
            aria-label="Back to home"
          >
            {capabilityDetailConfig.backLinkText}
          </a>
        )}
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero */}
        <section style={{ padding: '180px 48px 100px', maxWidth: 860, margin: '0 auto' }}>
          {capabilityDetailConfig.sectionLabel && (
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#00D4FF',
                marginBottom: 24,
              }}
            >
              {capabilityDetailConfig.sectionLabel}
            </div>
          )}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#E8E8EC',
              margin: '0 0 24px 0',
            }}
          >
            {data.title}
          </h1>
          {data.subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(138, 138, 149, 0.8)',
                margin: 0,
                maxWidth: 540,
              }}
            >
              {data.subtitle}
            </p>
          )}
        </section>

        {/* Divider */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 48px' }}>
          <div className="section-divider" />
        </div>

        {/* Article body */}
        <article style={{ padding: '80px 48px', maxWidth: 860, margin: '0 auto' }}>
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.9,
                color: '#8A8A95',
                marginBottom: i < data.paragraphs.length - 1 ? 32 : 0,
              }}
            >
              {p}
            </p>
          ))}
        </article>

        {/* Prev / Next navigation */}
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 48px 120px' }}>
          <div className="section-divider" style={{ marginBottom: 40 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {prevSlug ? (
              <a
                href={`/capability/${prevSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${prevSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
              >
                <span style={{ fontSize: 11, opacity: 0.4, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.prevLabel}</span>
                <span>{capabilityDetailConfig.capabilities[prevSlug].title}</span>
              </a>
            ) : <div />}
            {nextSlug ? (
              <a
                href={`/capability/${nextSlug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/capability/${nextSlug}`); window.scrollTo(0, 0); }}
                className="nav-link"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, textAlign: 'right' }}
              >
                <span style={{ fontSize: 11, opacity: 0.4, letterSpacing: '2px', textTransform: 'uppercase' }}>{capabilityDetailConfig.nextLabel}</span>
                <span>{capabilityDetailConfig.capabilities[nextSlug].title}</span>
              </a>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
