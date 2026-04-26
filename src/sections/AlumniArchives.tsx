import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { researchConfig } from '../config';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AlumniArchives() {
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLDivElement);
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: (idx % 3) * 0.08,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  if (!researchConfig.sectionLabel && researchConfig.projects.length === 0) {
    return null;
  }

  return (
    <section
      id="work"
      style={{
        padding: '140px 48px',
        background: '#06060A',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {researchConfig.sectionLabel && (
          <div className="section-label mb-4">
            {researchConfig.sectionLabel}
          </div>
        )}
        <div className="section-divider mb-20" />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 24 }}
        >
          {researchConfig.projects.map((project, i) => {
            const CardContent = (
              <div
                ref={(el) => { itemRefs.current[i] = el; }}
                className="group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '1/1' }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        opacity: 0.7,
                        filter: 'grayscale(80%) brightness(0.8)',
                        transition: 'all 0.5s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '1';
                        (e.target as HTMLImageElement).style.filter = 'grayscale(0%) brightness(1)';
                        (e.target as HTMLImageElement).style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0.7';
                        (e.target as HTMLImageElement).style.filter = 'grayscale(80%) brightness(0.8)';
                        (e.target as HTMLImageElement).style.transform = 'scale(1)';
                      }}
                      loading="lazy"
                    />
                  )}
                  {/* Arrow indicator */}
                  {project.href && (
                    <div
                      className="absolute top-4 right-4 flex items-center justify-center"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        opacity: 0,
                        transform: 'translate(-4px, 4px)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ArrowUpRight size={16} color="#00D4FF" />
                    </div>
                  )}
                </div>
                <div style={{ padding: 24 }}>
                  <div className="flex items-center justify-between">
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: 18,
                        color: '#E8E8EC',
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h4>
                    {project.href && (
                      <ArrowUpRight
                        size={16}
                        color="#8A8A95"
                        className="flex-shrink-0 ml-2 transition-colors duration-300 group-hover:text-[#00D4FF]"
                        style={{ transition: 'color 0.3s ease' }}
                      />
                    )}
                  </div>
                  <div
                    className="flex items-center justify-between"
                    style={{ marginTop: 6 }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 13,
                        color: '#8A8A95',
                      }}
                    >
                      {project.discipline}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 400,
                        fontSize: 12,
                        color: 'rgba(0, 212, 255, 0.5)',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            );

            if (project.href) {
              return (
                <a
                  key={`${project.title}-${i}`}
                  href={project.href}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noopener noreferrer' : undefined}
                  className="block no-underline"
                  onMouseEnter={(e) => {
                    const arrow = e.currentTarget.querySelector('[data-arrow]') as HTMLElement;
                    if (arrow) {
                      arrow.style.opacity = '1';
                      arrow.style.transform = 'translate(0, 0)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const arrow = e.currentTarget.querySelector('[data-arrow]') as HTMLElement;
                    if (arrow) {
                      arrow.style.opacity = '0';
                      arrow.style.transform = 'translate(-4px, 4px)';
                    }
                  }}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={`${project.title}-${i}`}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
