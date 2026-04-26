import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerConfig, footerLinkMap, socialConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const elements = footer.querySelectorAll('.footer-animate');
    gsap.set(elements, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: footer,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  return (
    <footer
      ref={footerRef}
      id="footer"
      style={{
        padding: '80px 48px 48px',
        background: '#06060A',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div className="footer-animate flex flex-col md:flex-row items-start md:items-center justify-between" style={{ gap: 24 }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 500,
              color: '#E8E8EC',
              letterSpacing: '-0.03em',
            }}
          >
            ROBERT.
          </span>
          <div className="flex items-center" style={{ gap: 24 }}>
            {footerConfig.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{ fontSize: 13 }}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label} profile`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Middle row */}
        <div
          className="footer-animate grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 60, marginTop: 64 }}
        >
          {footerConfig.columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col" style={{ gap: 16 }}>
              {column.title && (
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#8A8A95',
                    marginBottom: 8,
                  }}
                >
                  {column.title}
                </span>
              )}
              {column.links.map((link) => {
                const href = footerLinkMap[link] || '#';
                const isExternal = href.startsWith('http');
                return (
                  <a
                    key={link}
                    href={href}
                    onClick={(e) => !isExternal && handleClick(e, href)}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 400,
                      color: '#8A8A95',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      width: 'fit-content',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8E8EC'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#8A8A95'; }}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="footer-animate flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            gap: 16,
          }}
        >
          {footerConfig.copyright && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: 'rgba(138, 138, 149, 0.5)',
              }}
            >
              {footerConfig.copyright}
            </span>
          )}
          <div className="flex items-center" style={{ gap: 16 }}>
            <a
              href={`mailto:${socialConfig.email}`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: 'rgba(138, 138, 149, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8E8EC'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(138, 138, 149, 0.5)'; }}
            >
              {socialConfig.email}
            </a>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: 'rgba(138, 138, 149, 0.5)',
              }}
            >
              Designed &amp; Built by Robert
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
