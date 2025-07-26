import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shirt, 
  Dress, 
  Baby, 
  Users, 
  Zap, 
  Heart,
  Search,
  Filter,
  Star,
  ShoppingCart,
  Eye,
  ArrowRight,
  Clock,
  Truck,
  Shield
} from 'lucide-react';
import './FashionStore.css';

const FashionStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'الكل', icon: <Star /> },
    { id: 'shirts', name: 'قمصان', icon: <Shirt /> },
    { id: 'dresses', name: 'فساتين', icon: <Dress /> },
    { id: 'kids', name: 'أطفال', icon: <Baby /> },
    { id: 'accessories', name: 'إكسسوارات', icon: <Zap /> }
  ];

  const genderOptions = [
    { id: 'all', name: 'الكل' },
    { id: 'men', name: 'رجالي' },
    { id: 'women', name: 'نسائي' },
    { id: 'kids', name: 'أطفال' }
  ];

  const products = [
    {
      id: 1,
      name: 'قميص كلاسيك أنيق',
      category: 'shirts',
      gender: 'men',
      price: 180,
      originalPrice: 250,
      rating: 4.7,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
      features: ['قطن 100%', 'مقاسات متعددة', 'ألوان متوفرة'],
      inStock: true,
      isNew: true,
      discount: 28,
      colors: ['أبيض', 'أزرق', 'أسود']
    },
    {
      id: 2,
      name: 'فستان أنيق للنساء',
      category: 'dresses',
      gender: 'women',
      price: 320,
      originalPrice: 450,
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
      features: ['حرير طبيعي', 'تصميم عصري', 'مناسب للحفلات'],
      inStock: true,
      isNew: true,
      discount: 29,
      colors: ['أحمر', 'أسود', 'أزرق']
    },
    {
      id: 3,
      name: 'طقم رياضي للأطفال',
      category: 'kids',
      gender: 'kids',
      price: 95,
      originalPrice: 140,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1553451191-6d8f2c5e3b3a?w=400',
      features: ['مريح للحركة', 'مقاوم للعرق', 'ألوان جذابة'],
      inStock: true,
      isNew: false,
      discount: 32,
      colors: ['أزرق', 'أخضر', 'أحمر']
    },
    {
      id: 4,
      name: 'ساعة يد أنيقة',
      category: 'accessories',
      gender: 'men',
      price: 450,
      originalPrice: 600,
      rating: 4.9,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      features: ['مقاومة للماء', 'بطارية طويلة العمر', 'تصميم كلاسيك'],
      inStock: true,
      isNew: false,
      discount: 25,
      colors: ['فضي', 'ذهبي', 'أسود']
    },
    {
      id: 5,
      name: 'حقيبة يد فاخرة',
      category: 'accessories',
      gender: 'women',
      price: 280,
      originalPrice: 380,
      rating: 4.7,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
      features: ['جلد طبيعي', 'مقاس كبير', 'ألوان عصرية'],
      inStock: true,
      isNew: true,
      discount: 26,
      colors: ['بني', 'أسود', 'أحمر']
    },
    {
      id: 6,
      name: 'طقم ملابس نسائي',
      category: 'dresses',
      gender: 'women',
      price: 220,
      originalPrice: 320,
      rating: 4.5,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      features: ['قطن عالي الجودة', 'تصميم مريح', 'مناسب للعمل'],
      inStock: true,
      isNew: false,
      discount: 31,
      colors: ['أبيض', 'أزرق فاتح', 'رمادي']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesGender = selectedGender === 'all' || product.gender === selectedGender;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesGender && matchesSearch && matchesPrice;
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
    <div className="fashion-store">
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
            <Star className="title-icon" />
            متجر الأزياء الأنيق
          </motion.h1>
          <motion.p 
            className="store-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            أحدث صيحات الموضة وأرقى التصاميم لجميع أفراد العائلة
          </motion.p>
          
          {/* Promotional Banner */}
          <motion.div 
            className="promo-banner"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="promo-content">
              <h3>🌸 موسم الربيع!</h3>
              <p>خصم يصل إلى 40% على مجموعات الربيع الجديدة</p>
              <span className="promo-timer">ينتهي العرض خلال: 5 يوم 8 ساعة</span>
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
              placeholder="ابحث عن الأزياء..."
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
              <label>الجنس:</label>
              <select 
                value={selectedGender} 
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                {genderOptions.map(gender => (
                  <option key={gender.id} value={gender.id}>
                    {gender.name}
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
                max="2000"
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

      {/* Gender Filter */}
      <motion.section 
        className="gender-filter-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="gender-filter">
          {genderOptions.map((gender, index) => (
            <motion.button
              key={gender.id}
              className={`gender-btn ${selectedGender === gender.id ? 'active' : ''}`}
              onClick={() => setSelectedGender(gender.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {gender.name}
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
                <div className="product-gender">
                  <span className={`gender-tag ${product.gender}`}>
                    {product.gender === 'men' ? 'رجالي' : 
                     product.gender === 'women' ? 'نسائي' : 'أطفال'}
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
                
                <div className="product-colors">
                  <span className="colors-label">الألوان المتوفرة:</span>
                  <div className="color-options">
                    {product.colors.map((color, i) => (
                      <span key={i} className="color-option">{color}</span>
                    ))}
                  </div>
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
            <p>لجميع الطلبات فوق 300 ريال</p>
          </div>
          <div className="feature-card">
            <Shield className="feature-icon" />
            <h3>ضمان الجودة</h3>
            <p>جميع المنتجات عالية الجودة</p>
          </div>
          <div className="feature-card">
            <Clock className="feature-icon" />
            <h3>توصيل سريع</h3>
            <p>خلال 24-48 ساعة</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FashionStore; 