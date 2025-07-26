import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Tag, Store } from 'lucide-react';
import './Offers.css';

const Offers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // بيانات العروض من جميع المتاجر
  const allOffers = [
    {
      id: 1,
      title: 'خصم 30% على الإلكترونيات',
      store: 'electronics',
      storeName: 'متجر الإلكترونيات',
      category: 'electronics',
      discount: 30,
      originalPrice: 1000,
      newPrice: 700,
      image: 'https://via.placeholder.com/400x300/667eea/FFFFFF?text=عرض+إلكترونيات',
      endDate: '2024-02-15',
      description: 'خصم كبير على جميع الأجهزة الإلكترونية والهواتف الذكية',
      featured: true
    },
    {
      id: 2,
      title: 'عرض الأزياء الصيفية',
      store: 'fashion',
      storeName: 'دار الأزياء',
      category: 'fashion',
      discount: 25,
      originalPrice: 500,
      newPrice: 375,
      image: 'https://via.placeholder.com/400x300/e74c3c/FFFFFF?text=عرض+أزياء',
      endDate: '2024-02-20',
      description: 'عروض خاصة على الأزياء الصيفية والفساتين الأنيقة',
      featured: true
    },
    {
      id: 3,
      title: 'كتب بأسعار مخفضة',
      store: 'books',
      storeName: 'مكتبة المعرفة',
      category: 'books',
      discount: 40,
      originalPrice: 200,
      newPrice: 120,
      image: 'https://via.placeholder.com/400x300/8b4513/FFFFFF?text=عرض+كتب',
      endDate: '2024-02-25',
      description: 'خصم كبير على جميع الكتب والمطبوعات',
      featured: true
    },
    {
      id: 4,
      title: 'عرض الهواتف الذكية',
      store: 'electronics',
      storeName: 'متجر الإلكترونيات',
      category: 'electronics',
      discount: 20,
      originalPrice: 1500,
      newPrice: 1200,
      image: 'https://via.placeholder.com/400x300/3498db/FFFFFF?text=هواتف+ذكية',
      endDate: '2024-02-18',
      description: 'أحدث الهواتف الذكية بأسعار مميزة',
      featured: false
    },
    {
      id: 5,
      title: 'عرض الأحذية الرياضية',
      store: 'fashion',
      storeName: 'دار الأزياء',
      category: 'fashion',
      discount: 35,
      originalPrice: 300,
      newPrice: 195,
      image: 'https://via.placeholder.com/400x300/9b59b6/FFFFFF?text=أحذية+رياضية',
      endDate: '2024-02-22',
      description: 'أحذية رياضية مريحة بأسعار منافسة',
      featured: false
    },
    {
      id: 6,
      title: 'عرض الكتب العلمية',
      store: 'books',
      storeName: 'مكتبة المعرفة',
      category: 'books',
      discount: 50,
      originalPrice: 150,
      newPrice: 75,
      image: 'https://via.placeholder.com/400x300/16a085/FFFFFF?text=كتب+علمية',
      endDate: '2024-02-28',
      description: 'خصم كبير على الكتب العلمية والمراجع',
      featured: false
    }
  ];

  const stores = [
    { id: 'all', name: 'جميع المتاجر' },
    { id: 'electronics', name: 'متجر الإلكترونيات' },
    { id: 'fashion', name: 'دار الأزياء' },
    { id: 'books', name: 'مكتبة المعرفة' }
  ];

  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'electronics', name: 'إلكترونيات' },
    { id: 'fashion', name: 'أزياء' },
    { id: 'books', name: 'كتب' }
  ];

  const filteredOffers = allOffers.filter(offer => {
    const storeMatch = selectedStore === 'all' || offer.store === selectedStore;
    const categoryMatch = selectedCategory === 'all' || offer.category === selectedCategory;
    const searchMatch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return storeMatch && categoryMatch && searchMatch;
  });

  const getDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="offers-page">
      {/* Hero Section */}
      <section className="offers-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">العروض والتخفيضات</h1>
            <p className="hero-subtitle">
              اكتشف أفضل العروض والتخفيضات من جميع متاجرنا المتخصصة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="search-filter"
            >
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="ابحث في العروض..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="filter-group"
            >
              <Filter className="filter-icon" />
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="filter-select"
              >
                {stores.map(store => (
                  <option key={store.id} value={store.id}>{store.name}</option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="filter-group"
            >
              <Tag className="filter-icon" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="offers-grid-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="results-header"
          >
            <h2>العروض المتاحة ({filteredOffers.length})</h2>
          </motion.div>

          <div className="offers-grid">
            {filteredOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`offer-card ${offer.featured ? 'featured' : ''}`}
              >
                {offer.featured && (
                  <div className="featured-badge">
                    <span>مميز</span>
                  </div>
                )}
                
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                  <div className="discount-badge">
                    <span>-{offer.discount}%</span>
                  </div>
                </div>

                <div className="offer-content">
                  <div className="offer-header">
                    <h3 className="offer-title">{offer.title}</h3>
                    <div className="store-badge">
                      <Store className="store-icon" />
                      <span>{offer.storeName}</span>
                    </div>
                  </div>

                  <p className="offer-description">{offer.description}</p>

                  <div className="offer-prices">
                    <span className="original-price">{offer.originalPrice} ريال</span>
                    <span className="new-price">{offer.newPrice} ريال</span>
                  </div>

                  <div className="offer-footer">
                    <div className="time-remaining">
                      <Clock className="clock-icon" />
                      <span>متبقي {getDaysRemaining(offer.endDate)} يوم</span>
                    </div>
                    
                    <button className="view-offer-btn">عرض التفاصيل</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="no-results"
            >
              <h3>لا توجد عروض متاحة</h3>
              <p>جرب تغيير معايير البحث أو الفلاتر</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Offers Banner */}
      <section className="featured-banner">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="banner-content"
          >
            <h2>اشترك في النشرة الإخبارية</h2>
            <p>احصل على أحدث العروض والتخفيضات مباشرة في بريدك الإلكتروني</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="email-input"
              />
              <button className="subscribe-btn">اشتراك</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers; 