import React, { useEffect, useRef } from 'react';

/**
 * Navbar component with show/hide on scroll and blur background.
 */
const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = navRef.current;

    const onScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop && scrollTop > 60) {
        navbar.classList.remove('visible');
      } else {
        navbar.classList.add('visible');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', onScroll);
    navbar.classList.add('visible'); // Show on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 transition-all duration-300 -translate-y-full opacity-0"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="logo text-2xl font-extrabold text-primary">Logo</div>
        <div className="menu-items flex gap-6 text-secondary font-medium">
          <a href="#hero" className="hover:text-primary transition">الرئيسية</a>
          <a href="#about" className="hover:text-primary transition">عن المنصة</a>
          <a href="#stores" className="hover:text-primary transition">المتاجر</a>
          <a href="#contact" className="hover:text-primary transition">تواصل</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 