import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Star, TrendingUp, Users, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // بيانات المتاجر الفرعية
  const subStores = [
    {
      id: 1,
      name: 'متجر الإلكترونيات المتطور',
      description: 'أحدث التقنيات والأجهزة الذكية بأفضل الأسعار',
      icon: '💻',
      domain: 'electronics.weverse-store.com',
      color: '#667eea',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      products: 150,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: 'دار الأزياء الأنيقة',
      description: 'أناقة لا تنتهي، أسلوب لا يُنسى',
      icon: '👗',
      domain: 'fashion.weverse-store.com',
      color: '#e74c3c',
      bg: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
      products: 200,
      rating: 4.9,
      featured: true
    },
    {
      id: 3,
      name: 'مكتبة المعرفة',
      description: 'اكتشف عالماً من المعرفة والحكمة',
      icon: '📚',
      domain: 'books.weverse-store.com',
      color: '#8b4513',
      bg: 'linear-gradient(135deg, #f4f1de 0%, #e8e6d9 100%)',
      products: 500,
      rating: 4.7,
      featured: true
    }
  ];

  // بيانات العروض المميزة
  const featuredOffers = [
    {
      id: 1,
      title: 'خصم 30% على الإلكترونيات',
      store: 'متجر الإلكترونيات',
      discount: 30,
      image: 'https://via.placeholder.com/300x200/667eea/FFFFFF?text=عرض+إلكترونيات',
      endDate: '2024-02-15'
    },
    {
      id: 2,
      title: 'عرض الأزياء الصيفية',
      store: 'دار الأزياء',
      discount: 25,
      image: 'https://via.placeholder.com/300x200/e74c3c/FFFFFF?text=عرض+أزياء',
      endDate: '2024-02-20'
    },
    {
      id: 3,
      title: 'كتب بأسعار مخفضة',
      store: 'مكتبة المعرفة',
      discount: 40,
      image: 'https://via.placeholder.com/300x200/8b4513/FFFFFF?text=عرض+كتب',
      endDate: '2024-02-25'
    }
  ];

  // بيانات الإحصائيات
  const stats = [
    { icon: Users, number: '50K+', label: 'عميل راضي' },
    { icon: ShoppingCart, number: '100K+', label: 'طلب مكتمل' },
    { icon: Star, number: '4.8', label: 'تقييم متوسط' },
    { icon: Award, number: '10+', label: 'جائزة حصلنا عليها' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // هنا سيتم تنفيذ البحث في جميع المتاجر الفرعية
    console.log('البحث عن:', searchQuery, 'في فئة:', selectedCategory);
  };

  const handleStoreClick = (store) => {
    // هنا سيتم التوجيه للمتجر الفرعي
    window.open(`https://${store.domain}`, '_blank');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              مرحباً بك في <span className="highlight">Weverse Store</span>
            </h1>
            <p className="hero-subtitle">
              وجهتك الأولى للتسوق الإلكتروني مع مجموعة متنوعة من المتاجر المتخصصة
            </p>
            
            {/* محرك البحث الموحد */}
            <div className="search-section">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-group">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="ابحث في جميع المتاجر..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-select"
                  >
                    <option value="all">جميع الفئات</option>
                    <option value="electronics">إلكترونيات</option>
                    <option value="fashion">أزياء</option>
                    <option value="books">كتب</option>
                  </select>
                  <button type="submit" className="search-btn">
                    بحث
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* المتاجر الفرعية */}
      <section className="substores-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-header"
          >
            <h2 className="section-title">متاجرنا المتخصصة</h2>
            <p className="section-subtitle">
              اكتشف متاجرنا المتخصصة مع هوياتها الفريدة وخدماتها المتميزة
            </p>
          </motion.div>

          <div className="substores-grid">
            {subStores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="substore-card"
                style={{ background: store.bg }}
                onClick={() => handleStoreClick(store)}
              >
                <div className="substore-icon">{store.icon}</div>
                <h3 className="substore-name">{store.name}</h3>
                <p className="substore-description">{store.description}</p>
                
                <div className="substore-stats">
                  <div className="stat">
                    <span className="stat-number">{store.products}</span>
                    <span className="stat-label">منتج</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{store.rating}</span>
                    <span className="stat-label">تقييم</span>
                  </div>
                </div>
                
                <div className="substore-domain">{store.domain}</div>
                <button className="visit-store-btn">زيارة المتجر</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* العروض المميزة */}
      <section className="offers-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="section-header"
          >
            <h2 className="section-title">العروض المميزة</h2>
            <p className="section-subtitle">
              استمتع بأفضل العروض والتخفيضات من جميع متاجرنا
            </p>
          </motion.div>

          <div className="offers-grid">
            {featuredOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="offer-card"
              >
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                  <div className="discount-badge">-{offer.discount}%</div>
                </div>
                <div className="offer-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-store">{offer.store}</p>
                  <div className="offer-date">
                    ينتهي في: {new Date(offer.endDate).toLocaleDateString('ar-SA')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* الإحصائيات */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-card"
              >
                <stat.icon className="stat-icon" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">لماذا تختار Weverse Store؟</h2>
          </motion.div>

          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="feature-card"
            >
              <div className="feature-icon">🛡️</div>
              <h3>أمان تام</h3>
              <p>حماية كاملة لبياناتك ومدفوعاتك</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="feature-card"
            >
              <div className="feature-icon">🚚</div>
              <h3>توصيل سريع</h3>
              <p>توصيل مجاني لجميع الطلبات</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="feature-card"
            >
              <div className="feature-icon">🔄</div>
              <h3>إرجاع مجاني</h3>
              <p>إمكانية الإرجاع خلال 30 يوم</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 