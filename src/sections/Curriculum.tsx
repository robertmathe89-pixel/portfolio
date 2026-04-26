import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { capabilitiesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Curriculum() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: item,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  if (!capabilitiesConfig.sectionLabel && capabilitiesConfig.items.length === 0) {
    return null;
  }

  const tags = [
    'Python \u00b7 LangChain \u00b7 OpenAI \u00b7 Vector DBs',
    'React \u00b7 TypeScript \u00b7 Node.js \u00b7 PostgreSQL',
    'Kubernetes \u00b7 Docker \u00b7 AWS \u00b7 Terraform',
    'REST \u00b7 GraphQL \u00b7 WebSockets \u00b7 OAuth',
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative"
      style={{
        padding: '140px 48px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(6, 6, 10, 0.7) 30%, #06060A 100%)',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {capabilitiesConfig.sectionLabel && (
          <div className="section-label mb-4">
            {capabilitiesConfig.sectionLabel}
          </div>
        )}
        <div className="section-divider mb-20" />

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 32 }}
        >
          {capabilitiesConfig.items.map((discipline, i) => (
            <div
              key={discipline.title}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="cursor-pointer group"
              style={{
                background: hoveredIndex === i ? 'rgba(0, 212, 255, 0.03)' : 'rgba(255, 255, 255, 0.03)',
                border: hoveredIndex === i ? '1px solid rgba(0, 212, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: 12,
                padding: 48,
                boxShadow: hoveredIndex === i ? '0 0 40px rgba(0, 212, 255, 0.06)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={() => navigate(`/capability/${discipline.slug}`)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              {discipline.image && (
                <div
                  style={{
                    width: 40,
                    height: 40,
                    marginBottom: 24,
                  }}
                >
                  <img
                    src={discipline.image}
                    alt={discipline.title}
                    style={{
                      width: 32,
                      height: 32,
                      objectFit: 'contain',
                      filter: hoveredIndex === i ? 'brightness(1.5) grayscale(0%)' : 'brightness(1.5) grayscale(100%)',
                      transition: 'filter 0.4s ease',
                    }}
                  />
                </div>
              )}

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  color: '#E8E8EC',
                  margin: '0 0 16px 0',
                }}
              >
                {discipline.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: '#8A8A95',
                  margin: '0 0 24px 0',
                  textWrap: 'pretty',
                }}
              >
                {discipline.description}
              </p>

              {/* Tags */}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'rgba(0, 212, 255, 0.6)',
                  letterSpacing: '0.02em',
                }}
              >
                {tags[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
