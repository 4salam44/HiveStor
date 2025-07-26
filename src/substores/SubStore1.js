import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubStore1.css';

const SubStore1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // بيانات المنتجات للمتجر الأول (متجر الإلكترونيات)
  const storeProducts = [
    {
      id: 1,
      name: 'هاتف ذكي متطور',
      price: 1200,
      category: 'phones',
      image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=هاتف+ذكي',
      description: 'هاتف ذكي بمواصفات عالية وكاميرا متطورة'
    },
    {
      id: 2,
      name: 'لابتوب للألعاب',
      price: 2500,
      category: 'laptops',
      image: 'https://via.placeholder.com/300x200/50C878/FFFFFF?text=لابتوب+ألعاب',
      description: 'لابتوب مخصص للألعاب بمعالج قوي وبطاقة رسومات عالية'
    },
    {
      id: 3,
      name: 'سماعات لاسلكية',
      price: 150,
      category: 'accessories',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=سماعات+لاسلكية',
      description: 'سماعات بلوتوث عالية الجودة مع ميكروفون مدمج'
    },
    {
      id: 4,
      name: 'ساعة ذكية',
      price: 300,
      category: 'accessories',
      image: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=ساعة+ذكية',
      description: 'ساعة ذكية مع تتبع اللياقة البدنية ومراقبة النوم'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'phones', name: 'الهواتف' },
    { id: 'laptops', name: 'اللابتوبات' },
    { id: 'accessories', name: 'الملحقات' }
  ];

  useEffect(() => {
    // محاكاة تحميل البيانات
    setTimeout(() => {
      setProducts(storeProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="substore1-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنتجات...</p>
      </div>
    );
  }

  return (
    <div className="substore1-container">
      {/* Header للمتجر الفرعي */}
      <header className="substore1-header">
        <div className="substore1-header-content">
          <Link to="/" className="back-link">
            <span>←</span> العودة للصفحة الرئيسية
          </Link>
          <h1 className="substore1-title">متجر الإلكترونيات المتطور</h1>
          <p className="substore1-subtitle">أحدث التقنيات بأفضل الأسعار</p>
        </div>
      </header>

      {/* قسم التصفية */}
      <section className="substore1-filters">
        <div className="filters-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* قسم المنتجات */}
      <section className="substore1-products">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="view-details-btn">عرض التفاصيل</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                  <span className="price">{product.price}</span>
                  <span className="currency">ريال</span>
                </div>
                <button className="add-to-cart-btn">أضف للسلة</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="substore1-features">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>توصيل مجاني</h3>
            <p>لجميع الطلبات فوق 500 ريال</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>ضمان شامل</h3>
            <p>ضمان لمدة سنة على جميع المنتجات</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💳</div>
            <h3>دفع آمن</h3>
            <p>مدفوعات مشفرة ومؤمنة</p>
          </div>
        </div>
      </section>

      {/* Footer للمتجر الفرعي */}
      <footer className="substore1-footer">
        <div className="footer-content">
          <p>&copy; 2024 متجر الإلكترونيات المتطور. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubStore1; 