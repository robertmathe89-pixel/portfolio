import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactFormConfig, socialConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    gsap.set(left, { opacity: 0, x: -20 });
    gsap.set(right, { opacity: 0, x: 20 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => {
        gsap.to(left, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to(right, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');

    try {
      const response = await fetch(contactFormConfig.endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    padding: '14px 18px',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#E8E8EC',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '140px 48px',
        background: '#06060A',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-label mb-4">
          GET IN TOUCH
        </div>
        <div className="section-divider mb-20" />

        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: 80 }}
        >
          {/* Left column */}
          <div
            ref={leftRef}
            className="flex-1"
            style={{ maxWidth: 550 }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#E8E8EC',
                margin: 0,
              }}
            >
              Let's Build Something Intelligent
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                color: '#8A8A95',
                marginTop: 24,
                maxWidth: 480,
              }}
            >
              I'm currently available for new projects. Whether you need AI automation, a full-stack application, or systems architecture — let's discuss how I can help.
            </p>

            <div style={{ marginTop: 48 }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(0, 212, 255, 0.6)',
                }}
              >
                Email
              </div>
              <a
                href={`mailto:${socialConfig.email}`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#E8E8EC',
                  marginTop: 8,
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#E8E8EC'; }}
              >
                {socialConfig.email}
              </a>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(0, 212, 255, 0.6)',
                  marginTop: 32,
                }}
              >
                Location
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#E8E8EC',
                  marginTop: 8,
                }}
              >
                Remote / Worldwide
              </div>

              {/* Social links */}
              <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
                {[
                  { label: 'GitHub', href: socialConfig.github },
                  { label: 'LinkedIn', href: socialConfig.linkedin },
                  { label: 'Twitter', href: socialConfig.twitter },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-btn"
                    style={{
                      padding: '8px 16px',
                      fontSize: 11,
                    }}
                    aria-label={`${social.label} profile`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div
            ref={rightRef}
            className="flex-1"
            style={{ maxWidth: 520 }}
          >
            {status === 'success' ? (
              <div
                style={{
                  background: 'rgba(0, 212, 255, 0.05)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  borderRadius: 16,
                  padding: 48,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#E8E8EC',
                    marginBottom: 16,
                  }}
                >
                  Message Sent
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: '#8A8A95',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {contactFormConfig.successMessage}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="liquid-glass-btn mt-6"
                  style={{ padding: '10px 24px', fontSize: 12 }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 16,
                  padding: 48,
                }}
              >
                <div className="flex flex-col" style={{ gap: 24 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                    required
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                    required
                    aria-label="Your email"
                  />
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300D4FF' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 18px center',
                      color: formData.projectType ? '#E8E8EC' : 'rgba(138, 138, 149, 0.6)',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                    required
                    aria-label="Project type"
                  >
                    <option value="" disabled>Project Type</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="web-development">Web Development</option>
                    <option value="systems-architecture">Systems Architecture</option>
                    <option value="api-integration">API & Integrations</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                    required
                    aria-label="Your message"
                  />

                  {status === 'error' && (
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: '#ff6b6b',
                        textAlign: 'center',
                      }}
                    >
                      {contactFormConfig.errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      width: '100%',
                      padding: 16,
                      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                      borderRadius: 8,
                      border: 'none',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#06060A',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: status === 'submitting' ? 'wait' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: status === 'submitting' ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'submitting') {
                        e.currentTarget.style.filter = 'brightness(1.15)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
