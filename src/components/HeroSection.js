import React, { useEffect } from 'react';

/**
 * HeroSection with parallax elements and fade-in-up animation.
 */
const HeroSection = () => {
  // Parallax effect for decorative elements
  useEffect(() => {
    const onMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.querySelectorAll('.parallax-element').forEach(element => {
        const speed = element.dataset.speed || 1;
        const translateX = (x - 0.5) * speed * 40;
        const translateY = (y - 0.5) * speed * 40;
        element.style.setProperty('--translate-x', `${translateX}px`);
        element.style.setProperty('--translate-y', `${translateY}px`);
      });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <header
      id="hero"
      className="hero-section relative h-screen flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Parallax decorative element */}
      <div
        className="parallax-element absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full"
        data-speed="2"
        style={{
          willChange: 'transform',
          transform: 'translateY(var(--translate-y, 0px))',
          transition: 'transform 0.3s',
        }}
      />
      {/* Main Content */}
      <div className="hero-content absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center max-w-2xl">
        <h1
          className="title text-[clamp(2rem,8vw,4rem)] font-extrabold text-text mb-4 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
        >
          عنوان رئيسي
        </h1>
        <p
          className="subtitle text-[clamp(1rem,4vw,1.5rem)] text-text opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          النص الفرعي
        </p>
        <div
          className="cta-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <button className="button bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            إجراء رئيسي
          </button>
          <button className="button bg-secondary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            إجراء ثانوي
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection; 