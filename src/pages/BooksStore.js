import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Book, 
  GraduationCap, 
  Heart, 
  Search,
  Filter,
  Star,
  ShoppingCart,
  Eye,
  ArrowRight,
  Clock,
  Truck,
  Shield,
  Globe,
  Users,
  Award
} from 'lucide-react';
import './BooksStore.css';

const BooksStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'الكل', icon: <BookOpen /> },
    { id: 'fiction', name: 'روايات', icon: <Book /> },
    { id: 'non-fiction', name: 'كتب علمية', icon: <GraduationCap /> },
    { id: 'children', name: 'كتب الأطفال', icon: <Heart /> },
    { id: 'academic', name: 'كتب أكاديمية', icon: <Award /> },
    { id: 'magazines', name: 'مجلات', icon: <Globe /> }
  ];

  const languages = [
    { id: 'all', name: 'جميع اللغات' },
    { id: 'arabic', name: 'العربية' },
    { id: 'english', name: 'الإنجليزية' },
    { id: 'french', name: 'الفرنسية' },
    { id: 'german', name: 'الألمانية' }
  ];

  const products = [
    {
      id: 1,
      name: 'قصة مدينتين',
      author: 'تشارلز ديكنز',
      category: 'fiction',
      language: 'arabic',
      price: 45,
      originalPrice: 60,
      rating: 4.8,
      reviews: 1250,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      features: ['طبعة فاخرة', 'غلاف مقوى', 'رسوم توضيحية'],
      inStock: true,
      isNew: true,
      discount: 25,
      pages: 450,
      publisher: 'دار النشر العالمية'
    },
    {
      id: 2,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'fiction',
      language: 'english',
      price: 35,
      originalPrice: 50,
      rating: 4.9,
      reviews: 2100,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      features: ['Classic Edition', 'Hardcover', 'Illustrated'],
      inStock: true,
      isNew: false,
      discount: 30,
      pages: 320,
      publisher: 'Penguin Classics'
    },
    {
      id: 3,
      name: 'علم النفس الإيجابي',
      author: 'د. أحمد محمد',
      category: 'non-fiction',
      language: 'arabic',
      price: 55,
      originalPrice: 75,
      rating: 4.6,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      features: ['أبحاث حديثة', 'أمثلة عملية', 'تمارين تطبيقية'],
      inStock: true,
      isNew: true,
      discount: 27,
      pages: 380,
      publisher: 'دار المعرفة'
    },
    {
      id: 4,
      name: 'مغامرات في الغابة',
      author: 'سارة أحمد',
      category: 'children',
      language: 'arabic',
      price: 25,
      originalPrice: 35,
      rating: 4.7,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      features: ['رسوم ملونة', 'قصص تفاعلية', 'مناسب 3-8 سنوات'],
      inStock: true,
      isNew: false,
      discount: 29,
      pages: 48,
      publisher: 'دار الصغار'
    },
    {
      id: 5,
      name: 'Calculus: Early Transcendentals',
      author: 'James Stewart',
      category: 'academic',
      language: 'english',
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400',
      features: ['8th Edition', 'Complete Solutions', 'Online Resources'],
      inStock: true,
      isNew: true,
      discount: 20,
      pages: 1200,
      publisher: 'Cengage Learning'
    },
    {
      id: 6,
      name: 'مجلة العلوم والتكنولوجيا',
      author: 'فريق التحرير',
      category: 'magazines',
      language: 'arabic',
      price: 15,
      originalPrice: 20,
      rating: 4.4,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
      features: ['شهرية', 'أخبار حديثة', 'مقالات علمية'],
      inStock: true,
      isNew: true,
      discount: 25,
      pages: 80,
      publisher: 'دار العلوم'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || product.language === selectedLanguage;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesLanguage && matchesSearch && matchesPrice;
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
    <div className="books-store">
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
            <BookOpen className="title-icon" />
            مكتبة المعرفة
          </motion.h1>
          <motion.p 
            className="store-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            آلاف الكتب في مختلف المجالات واللغات لتنمية عقلك وتوسيع آفاقك
          </motion.p>
          
          {/* Promotional Banner */}
          <motion.div 
            className="promo-banner"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="promo-content">
              <h3>📚 أسبوع القراءة!</h3>
              <p>خصم يصل إلى 35% على جميع الكتب والروايات</p>
              <span className="promo-timer">ينتهي العرض خلال: 3 يوم 12 ساعة</span>
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
              placeholder="ابحث عن الكتب أو المؤلفين..."
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
              <label>اللغة:</label>
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map(language => (
                  <option key={language.id} value={language.id}>
                    {language.name}
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
                max="500"
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

      {/* Language Filter */}
      <motion.section 
        className="language-filter-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="language-filter">
          {languages.map((language, index) => (
            <motion.button
              key={language.id}
              className={`language-btn ${selectedLanguage === language.id ? 'active' : ''}`}
              onClick={() => setSelectedLanguage(language.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language.name}
            </motion.button>
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
          <h2>الكتب ({sortedProducts.length})</h2>
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
                <p className="product-author">المؤلف: {product.author}</p>
                
                <div className="product-details">
                  <span className="detail-item">
                    <BookOpen size={14} />
                    {product.pages} صفحة
                  </span>
                  <span className="detail-item">
                    <Globe size={14} />
                    {product.publisher}
                  </span>
                </div>
                
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
            <Truck className="feature-icon" />
            <h3>شحن مجاني</h3>
            <p>لجميع الطلبات فوق 200 ريال</p>
          </div>
          <div className="feature-card">
            <Shield className="feature-icon" />
            <h3>ضمان الجودة</h3>
            <p>جميع الكتب أصلية 100%</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>نادي القراء</h3>
            <p>انضم لنادي القراء واحصل على عروض خاصة</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BooksStore; 