import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/offers', label: 'العروض' },
    { path: '/products', label: 'جميع المنتجات' },
    { path: '/contact', label: 'اتصل بنا' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="logo"
          >
            <Link to="/" className="logo-link">
              <div className="logo-icon">🛍️</div>
              <div className="logo-text">
                <h1>Weverse Store</h1>
                <span>متجرك الإلكتروني المفضل</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          >
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Header Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="header-actions"
          >
            <button className="action-btn search-btn" aria-label="بحث">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="action-btn cart-btn" aria-label="سلة التسوق">
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </Link>
            
            <Link to="/profile" className="action-btn profile-btn" aria-label="الملف الشخصي">
              <User size={20} />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="القائمة"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="mobile-menu"
        >
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mobile-actions">
            <button className="mobile-action-btn">
              <Search size={20} />
              <span>بحث</span>
            </button>
            <Link to="/cart" className="mobile-action-btn">
              <ShoppingCart size={20} />
              <span>سلة التسوق</span>
            </Link>
            <Link to="/profile" className="mobile-action-btn">
              <User size={20} />
              <span>الملف الشخصي</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 