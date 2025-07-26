import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, Store } from 'lucide-react';
import './AllProducts.css';

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // بيانات المنتجات من جميع المتاجر
  const allProducts = [
    {
      id: 1,
      name: 'هاتف ذكي متطور',
      store: 'electronics',
      storeName: 'متجر الإلكترونيات',
      category: 'phones',
      price: 1200,
      originalPrice: 1500,
      discount: 20,
      image: 'https://via.placeholder.com/300x300/667eea/FFFFFF?text=هاتف+ذكي',
      rating: 4.8,
      reviews: 150,
      description: 'هاتف ذكي متطور بأحدث التقنيات',
      isNew: true
    },
    {
      id: 2,
      name: 'فستان أنيق للنساء',
      store: 'fashion',
      storeName: 'دار الأزياء',
      category: 'dresses',
      price: 450,
      originalPrice: 600,
      discount: 25,
      image: 'https://via.placeholder.com/300x300/e74c3c/FFFFFF?text=فستان+أنيق',
      rating: 4.9,
      reviews: 89,
      description: 'فستان أنيق مناسب للحفلات والمناسبات',
      isNew: true
    },
    {
      id: 3,
      name: 'كتاب تطوير الذات',
      store: 'books',
      storeName: 'مكتبة المعرفة',
      category: 'self-help',
      price: 80,
      originalPrice: 120,
      discount: 33,
      image: 'https://via.placeholder.com/300x300/8b4513/FFFFFF?text=كتاب+تطوير',
      rating: 4.7,
      reviews: 234,
      description: 'كتاب مميز في مجال تطوير الذات',
      isNew: false
    },
    {
      id: 4,
      name: 'لابتوب للألعاب',
      store: 'electronics',
      storeName: 'متجر الإلكترونيات',
      category: 'laptops',
      price: 2500,
      originalPrice: 3000,
      discount: 17,
      image: 'https://via.placeholder.com/300x300/3498db/FFFFFF?text=لابتوب+ألعاب',
      rating: 4.6,
      reviews: 67,
      description: 'لابتوب قوي مخصص للألعاب',
      isNew: false
    },
    {
      id: 5,
      name: 'حقيبة يد أنيقة',
      store: 'fashion',
      storeName: 'دار الأزياء',
      category: 'bags',
      price: 280,
      originalPrice: 400,
      discount: 30,
      image: 'https://via.placeholder.com/300x300/9b59b6/FFFFFF?text=حقيبة+يد',
      rating: 4.8,
      reviews: 123,
      description: 'حقيبة يد أنيقة مصنوعة من الجلد الطبيعي',
      isNew: true
    },
    {
      id: 6,
      name: 'رواية خيال علمي',
      store: 'books',
      storeName: 'مكتبة المعرفة',
      category: 'fiction',
      price: 60,
      originalPrice: 90,
      discount: 33,
      image: 'https://via.placeholder.com/300x300/16a085/FFFFFF?text=رواية+خيال',
      rating: 4.5,
      reviews: 178,
      description: 'رواية خيال علمي مميزة',
      isNew: false
    },
    {
      id: 7,
      name: 'سماعات لاسلكية',
      store: 'electronics',
      storeName: 'متجر الإلكترونيات',
      category: 'accessories',
      price: 200,
      originalPrice: 250,
      discount: 20,
      image: 'https://via.placeholder.com/300x300/e67e22/FFFFFF?text=سماعات+لاسلكية',
      rating: 4.4,
      reviews: 95,
      description: 'سماعات لاسلكية عالية الجودة',
      isNew: false
    },
    {
      id: 8,
      name: 'جينز كلاسيك',
      store: 'fashion',
      storeName: 'دار الأزياء',
      category: 'jeans',
      price: 180,
      originalPrice: 240,
      discount: 25,
      image: 'https://via.placeholder.com/300x300/34495e/FFFFFF?text=جينز+كلاسيك',
      rating: 4.6,
      reviews: 156,
      description: 'جينز كلاسيك مريح ومناسب',
      isNew: false
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
    { id: 'phones', name: 'هواتف' },
    { id: 'laptops', name: 'لابتوب' },
    { id: 'accessories', name: 'ملحقات' },
    { id: 'dresses', name: 'فساتين' },
    { id: 'bags', name: 'حقائب' },
    { id: 'jeans', name: 'جينز' },
    { id: 'self-help', name: 'تطوير الذات' },
    { id: 'fiction', name: 'روايات' }
  ];

  const priceRanges = [
    { id: 'all', name: 'جميع الأسعار' },
    { id: '0-100', name: 'أقل من 100 ريال' },
    { id: '100-500', name: '100 - 500 ريال' },
    { id: '500-1000', name: '500 - 1000 ريال' },
    { id: '1000+', name: 'أكثر من 1000 ريال' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const storeMatch = selectedStore === 'all' || product.store === selectedStore;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let priceMatch = true;
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '1000+') {
        priceMatch = product.price >= 1000;
      } else if (selectedPriceRange === '0-100') {
        priceMatch = product.price < 100;
      } else {
        priceMatch = product.price >= min && product.price <= max;
      }
    }
    
    return storeMatch && categoryMatch && searchMatch && priceMatch;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="all-products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">جميع المنتجات</h1>
            <p className="hero-subtitle">
              اكتشف تشكيلة واسعة من المنتجات من جميع متاجرنا المتخصصة
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
                placeholder="ابحث في جميع المنتجات..."
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
              <Store className="filter-icon" />
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
              <Filter className="filter-icon" />
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="filter-group"
            >
              <Filter className="filter-icon" />
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="filter-select"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="results-header"
          >
            <h2>المنتجات المتاحة ({filteredProducts.length})</h2>
          </motion.div>

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="product-card"
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.discount > 0 && (
                    <div className="discount-badge">
                      <span>-{product.discount}%</span>
                    </div>
                  )}
                  {product.isNew && (
                    <div className="new-badge">
                      <span>جديد</span>
                    </div>
                  )}
                </div>

                <div className="product-content">
                  <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="store-badge">
                      <Store className="store-icon" />
                      <span>{product.storeName}</span>
                    </div>
                  </div>

                  <p className="product-description">{product.description}</p>

                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                    <span className="reviews-count">({product.reviews} تقييم)</span>
                  </div>

                  <div className="product-prices">
                    {product.discount > 0 ? (
                      <>
                        <span className="original-price">{product.originalPrice} ريال</span>
                        <span className="new-price">{product.price} ريال</span>
                      </>
                    ) : (
                      <span className="price">{product.price} ريال</span>
                    )}
                  </div>

                  <div className="product-actions">
                    <button className="add-to-cart-btn">
                      <ShoppingCart className="cart-icon" />
                      أضف للسلة
                    </button>
                    <Link to={`/product/${product.id}`} className="view-details-btn">
                      التفاصيل
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="no-results"
            >
              <h3>لا توجد منتجات متاحة</h3>
              <p>جرب تغيير معايير البحث أو الفلاتر</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllProducts; 