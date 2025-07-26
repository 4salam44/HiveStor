import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Camera, 
  Tablet, 
  Watch,
  Search,
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ArrowRight,
  Wifi,
  Battery,
  Zap
} from 'lucide-react';
import './ElectronicsStore.css';

const ElectronicsStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'الكل', icon: <Zap /> },
    { id: 'smartphones', name: 'الهواتف الذكية', icon: <Smartphone /> },
    { id: 'laptops', name: 'الحواسيب المحمولة', icon: <Laptop /> },
    { id: 'headphones', name: 'السماعات', icon: <Headphones /> },
    { id: 'cameras', name: 'الكاميرات', icon: <Camera /> },
    { id: 'tablets', name: 'الأجهزة اللوحية', icon: <Tablet /> },
    { id: 'smartwatches', name: 'الساعات الذكية', icon: <Watch /> }
  ];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      category: 'smartphones',
      price: 4500,
      originalPrice: 5000,
      rating: 4.8,
      reviews: 1250,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['5G', 'A17 Pro', '48MP Camera'],
      inStock: true,
      isNew: true,
      discount: 10
    },
    {
      id: 2,
      name: 'MacBook Pro M3',
      category: 'laptops',
      price: 8500,
      originalPrice: 9000,
      rating: 4.9,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      features: ['M3 Chip', '14-inch', '16GB RAM'],
      inStock: true,
      isNew: true,
      discount: 6
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      category: 'headphones',
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      reviews: 2100,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      features: ['Noise Cancelling', '30h Battery', 'Bluetooth 5.2'],
      inStock: true,
      isNew: false,
      discount: 20
    },
    {
      id: 4,
      name: 'Canon EOS R6',
      category: 'cameras',
      price: 3200,
      originalPrice: 3800,
      rating: 4.6,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
      features: ['20MP', '4K Video', 'Dual Card Slots'],
      inStock: true,
      isNew: false,
      discount: 16
    },
    {
      id: 5,
      name: 'iPad Pro 12.9',
      category: 'tablets',
      price: 3800,
      originalPrice: 4200,
      rating: 4.8,
      reviews: 743,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['M2 Chip', '12.9-inch', 'ProMotion'],
      inStock: true,
      isNew: true,
      discount: 10
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      category: 'smartwatches',
      price: 1800,
      originalPrice: 2000,
      rating: 4.7,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      features: ['Always-On Display', 'ECG', 'GPS'],
      inStock: true,
      isNew: true,
      discount: 10
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return 0;
    }
  });

  return (
    <div className="electronics-store">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="store-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Zap className="title-icon" />
            متجر الإلكترونيات
          </motion.h1>
          <motion.p 
            className="store-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            أحدث التقنيات وأفضل العلامات التجارية بأفضل الأسعار
          </motion.p>
          
          {/* Promotional Banner */}
          <motion.div 
            className="promo-banner"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="promo-content">
              <h3>🎉 عرض خاص!</h3>
              <p>خصم يصل إلى 30% على جميع المنتجات الجديدة</p>
              <span className="promo-timer">ينتهي العرض خلال: 2 يوم 15 ساعة</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filters */}
      <motion.section 
        className="search-filters"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="ابحث عن المنتجات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filters-container">
            <div className="filter-group">
              <label>التصنيف:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>الترتيب:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">الأكثر مبيعاً</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">التقييم</option>
                <option value="newest">الأحدث</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>نطاق السعر: {priceRange[0]} - {priceRange[1]} ريال</label>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="price-range"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section 
        className="categories-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="category-icon">{category.icon}</div>
              <span>{category.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="products-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="products-header">
          <h2>المنتجات ({sortedProducts.length})</h2>
          <div className="view-toggle">
            <button 
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Filter />
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              <Filter />
            </button>
          </div>
        </div>

        <div className={`products-grid ${viewMode}`}>
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="new-badge">جديد</span>}
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
                <div className="product-actions">
                  <button className="action-btn">
                    <Heart />
                  </button>
                  <button className="action-btn">
                    <Eye />
                  </button>
                  <button className="action-btn">
                    <ShoppingCart />
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={i < Math.floor(product.rating) ? 'filled' : ''} 
                        size={16}
                      />
                    ))}
                  </div>
                  <span className="rating-text">({product.reviews})</span>
                </div>
                
                <div className="product-features">
                  {product.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="product-price">
                  <span className="current-price">{product.price} ريال</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">{product.originalPrice} ريال</span>
                  )}
                </div>
                
                <button className="add-to-cart-btn">
                  <ShoppingCart size={18} />
                  إضافة للسلة
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="features-grid">
          <div className="feature-card">
            <Wifi className="feature-icon" />
            <h3>شحن مجاني</h3>
            <p>لجميع الطلبات فوق 500 ريال</p>
          </div>
          <div className="feature-card">
            <Battery className="feature-icon" />
            <h3>ضمان أصالة</h3>
            <p>جميع المنتجات أصلية 100%</p>
          </div>
          <div className="feature-card">
            <Zap className="feature-icon" />
            <h3>دعم فني</h3>
            <p>دعم فني متوفر 24/7</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ElectronicsStore; 