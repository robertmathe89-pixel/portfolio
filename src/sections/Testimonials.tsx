import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsConfig } from '../config';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
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

  if (!testimonialsConfig.sectionLabel && testimonialsConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        padding: '140px 48px',
        background: '#06060A',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {testimonialsConfig.sectionLabel && (
          <div className="section-label mb-4">
            {testimonialsConfig.sectionLabel}
          </div>
        )}
        <div className="section-divider mb-20" />

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24 }}
        >
          {testimonialsConfig.items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 12,
                padding: 40,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <Quote size={24} color="rgba(0, 212, 255, 0.4)" style={{ marginBottom: 20 }} />

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: '#8A8A95',
                  margin: '0 0 28px 0',
                  textWrap: 'pretty',
                }}
              >
                "{item.quote}"
              </p>

              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    color: '#E8E8EC',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.author}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    color: 'rgba(138, 138, 149, 0.7)',
                    marginTop: 4,
                  }}
                >
                  {item.role}, {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
