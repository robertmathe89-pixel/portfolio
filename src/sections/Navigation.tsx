import { useEffect, useState } from 'react';
import { siteConfig, navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00D4FF] focus:text-[#06060A] focus:rounded focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          height: 72,
          padding: '0 48px',
          backgroundColor: scrolled ? 'rgba(6, 6, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="no-underline"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16,
            fontWeight: 500,
            color: '#E8E8EC',
            letterSpacing: '-0.5px',
          }}
          aria-label="Back to top"
        >
          {siteConfig.brandName}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 40 }}>
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        {navigationConfig.ctaText && (
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="liquid-glass-btn hidden md:inline-flex"
            style={{
              padding: '10px 24px',
              fontSize: 12,
            }}
            aria-label={navigationConfig.ctaText}
          >
            {navigationConfig.ctaText}
          </a>
        )}

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          style={{ gap: 6, width: 32, height: 32 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1.5,
              backgroundColor: mobileOpen ? '#00D4FF' : '#E8E8EC',
              transform: mobileOpen ? 'rotate(45deg) translateY(7.5px)' : 'none',
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1.5,
              backgroundColor: mobileOpen ? '#00D4FF' : '#E8E8EC',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: 24,
              height: 1.5,
              backgroundColor: mobileOpen ? '#00D4FF' : '#E8E8EC',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: 'rgba(6, 6, 10, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col items-center" style={{ gap: 32 }}>
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
              style={{ fontSize: 20 }}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
          {navigationConfig.ctaText && (
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="liquid-glass-btn mt-4"
              style={{
                padding: '14px 36px',
                fontSize: 14,
              }}
              aria-label={navigationConfig.ctaText}
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
