import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { architectureConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const videoContainer = videoContainerRef.current;
    if (!section || !text || !videoContainer) return;

    gsap.set(text, { opacity: 0, y: 30 });
    gsap.set(videoContainer, { opacity: 0, scale: 0.95 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to(videoContainer, {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: 'power2.out',
          delay: 0.2,
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  if (!architectureConfig.sectionLabel && !architectureConfig.title) {
    return null;
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: '140px 48px',
        background: '#06060A',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {architectureConfig.sectionLabel && (
          <div className="section-label mb-4">
            {architectureConfig.sectionLabel}
          </div>
        )}
        <div className="section-divider mb-16" />

        <div ref={textRef}>
          {architectureConfig.title && (
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#E8E8EC',
                margin: '0 0 20px 0',
                maxWidth: 700,
                textWrap: 'balance',
              }}
            >
              {architectureConfig.title}
            </h2>
          )}
          {architectureConfig.description && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                color: '#8A8A95',
                margin: 0,
                maxWidth: 540,
                textWrap: 'pretty',
              }}
            >
              {architectureConfig.description}
            </p>
          )}
        </div>

        <div
          ref={videoContainerRef}
          className="relative overflow-hidden"
          style={{
            width: '100%',
            marginTop: 80,
            aspectRatio: '21/9',
            borderRadius: 16,
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {architectureConfig.videoPath && (
            <>
              <video
                ref={videoRef}
                src={architectureConfig.videoPath}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(6, 6, 10, 0.6) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
