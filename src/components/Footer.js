import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'من نحن', path: '/about' },
      { name: 'فريق العمل', path: '/about' },
      { name: 'وظائف شاغرة', path: '/careers' },
      { name: 'أخبار الشركة', path: '/news' }
    ],
    services: [
      { name: 'جميع المنتجات', path: '/products' },
      { name: 'العروض والتخفيضات', path: '/offers' },
      { name: 'خدمة العملاء', path: '/contact' },
      { name: 'سياسة الإرجاع', path: '/return-policy' }
    ],
    support: [
      { name: 'مركز المساعدة', path: '/help' },
      { name: 'الأسئلة الشائعة', path: '/faq' },
      { name: 'اتصل بنا', path: '/contact' },
      { name: 'الدعم الفني', path: '/support' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'فيسبوك' },
    { icon: Twitter, url: 'https://twitter.com', label: 'تويتر' },
    { icon: Instagram, url: 'https://instagram.com', label: 'إنستغرام' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'لينكد إن' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@weverse-store.com' },
    { icon: Phone, text: '+966 50 123 4567' },
    { icon: MapPin, text: 'الرياض، المملكة العربية السعودية' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section company-info"
          >
            <div className="footer-logo">
              <div className="logo-icon">🛍️</div>
              <div className="logo-text">
                <h3>Weverse Store</h3>
                <p>متجرك الإلكتروني المفضل</p>
              </div>
            </div>
            
            <p className="company-description">
              نقدم أفضل تجربة تسوق إلكتروني مع مجموعة متنوعة من المنتجات 
              عالية الجودة وأسعار منافسة.
            </p>

            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  <contact.icon className="contact-icon" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section"
          >
            <h4>الشركة</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4>الخدمات</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h4>الدعم</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="newsletter-section"
        >
          <div className="newsletter-content">
            <h4>اشترك في النشرة الإخبارية</h4>
            <p>احصل على آخر العروض والتحديثات مباشرة في بريدك الإلكتروني</p>
            
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                اشتراك
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Weverse Store. جميع الحقوق محفوظة.</p>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div className="legal-links">
              <Link to="/privacy">سياسة الخصوصية</Link>
              <Link to="/terms">الشروط والأحكام</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 