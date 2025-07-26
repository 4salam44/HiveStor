import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubStore3.css';

const SubStore3 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // بيانات المنتجات للمتجر الثالث (متجر الكتب)
  const storeProducts = [
    {
      id: 1,
      name: 'فن التفكير بوضوح',
      author: 'رولف دوبيلي',
      price: 45,
      category: 'self-help',
      image: 'https://via.placeholder.com/200x300/8B4513/FFFFFF?text=فن+التفكير',
      description: 'كتاب يساعدك على تطوير مهارات التفكير النقدي واتخاذ القرارات الصحيحة',
      rating: 4.8,
      pages: 320,
      language: 'العربية'
    },
    {
      id: 2,
      name: 'قوة العادات',
      author: 'تشارلز دوهيغ',
      price: 38,
      category: 'self-help',
      image: 'https://via.placeholder.com/200x300/2E8B57/FFFFFF?text=قوة+العادات',
      description: 'كيف تتغير العادات وتغير حياتك للأفضل',
      rating: 4.6,
      pages: 280,
      language: 'العربية'
    },
    {
      id: 3,
      name: 'الذكاء العاطفي',
      author: 'دانيال جولمان',
      price: 42,
      category: 'psychology',
      image: 'https://via.placeholder.com/200x300/4169E1/FFFFFF?text=الذكاء+العاطفي',
      description: 'فهم وإدارة المشاعر لتحقيق النجاح في الحياة',
      rating: 4.7,
      pages: 350,
      language: 'العربية'
    },
    {
      id: 4,
      name: 'أساسيات البرمجة',
      author: 'أحمد محمد',
      price: 55,
      category: 'technology',
      image: 'https://via.placeholder.com/200x300/FF4500/FFFFFF?text=أساسيات+البرمجة',
      description: 'دليل شامل للمبتدئين في عالم البرمجة',
      rating: 4.5,
      pages: 400,
      language: 'العربية'
    },
    {
      id: 5,
      name: 'تاريخ الإسلام',
      author: 'محمد علي',
      price: 65,
      category: 'history',
      image: 'https://via.placeholder.com/200x300/8B008B/FFFFFF?text=تاريخ+الإسلام',
      description: 'تاريخ شامل للإسلام من البداية حتى العصر الحديث',
      rating: 4.9,
      pages: 500,
      language: 'العربية'
    },
    {
      id: 6,
      name: 'روايات عربية كلاسيكية',
      author: 'مختارات',
      price: 75,
      category: 'literature',
      image: 'https://via.placeholder.com/200x300/DC143C/FFFFFF?text=روايات+عربية',
      description: 'مجموعة من أفضل الروايات العربية الكلاسيكية',
      rating: 4.8,
      pages: 600,
      language: 'العربية'
    },
    {
      id: 7,
      name: 'علم النفس الإيجابي',
      author: 'سارة أحمد',
      price: 48,
      category: 'psychology',
      image: 'https://via.placeholder.com/200x300/32CD32/FFFFFF?text=علم+النفس+الإيجابي',
      description: 'كيف تبني حياة سعيدة ومليئة بالمعنى',
      rating: 4.4,
      pages: 300,
      language: 'العربية'
    },
    {
      id: 8,
      name: 'تطوير تطبيقات الويب',
      author: 'خالد حسن',
      price: 68,
      category: 'technology',
      image: 'https://via.placeholder.com/200x300/FF6347/FFFFFF?text=تطوير+تطبيقات+الويب',
      description: 'دليل عملي لتطوير تطبيقات الويب الحديثة',
      rating: 4.6,
      pages: 450,
      language: 'العربية'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الكتب' },
    { id: 'self-help', name: 'تطوير الذات' },
    { id: 'psychology', name: 'علم النفس' },
    { id: 'technology', name: 'التقنية' },
    { id: 'history', name: 'التاريخ' },
    { id: 'literature', name: 'الأدب' }
  ];

  useEffect(() => {
    // محاكاة تحميل البيانات
    setTimeout(() => {
      setProducts(storeProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
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

  if (loading) {
    return (
      <div className="substore3-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل الكتب...</p>
      </div>
    );
  }

  return (
    <div className="substore3-container">
      {/* Header للمتجر الفرعي */}
      <header className="substore3-header">
        <div className="substore3-header-content">
          <Link to="/" className="back-link">
            <span>←</span> العودة للصفحة الرئيسية
          </Link>
          <h1 className="substore3-title">مكتبة المعرفة</h1>
          <p className="substore3-subtitle">اكتشف عالماً من المعرفة والحكمة</p>
        </div>
      </header>

      {/* قسم البحث والتصفية */}
      <section className="substore3-filters">
        <div className="filters-container">
          <div className="search-section">
            <input
              type="text"
              placeholder="ابحث عن كتاب، مؤلف، أو موضوع..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="categories-section">
            <h3>الفئات:</h3>
            <div className="filter-buttons">
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
          </div>
        </div>
      </section>

      {/* قسم الكتب */}
      <section className="substore3-products">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="view-details-btn">عرض التفاصيل</button>
                </div>
                <div className="product-badge">
                  <span className="badge-text">جديد</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-author">المؤلف: {product.author}</p>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">({product.rating})</span>
                </div>
                
                <div className="product-details">
                  <span className="detail-item">
                    <span className="detail-label">الصفحات:</span>
                    <span className="detail-value">{product.pages}</span>
                  </span>
                  <span className="detail-item">
                    <span className="detail-label">اللغة:</span>
                    <span className="detail-value">{product.language}</span>
                  </span>
                </div>
                
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
      <section className="substore3-features">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">📚</div>
            <h3>مجموعة واسعة</h3>
            <p>آلاف الكتب في مختلف المجالات والمواضيع</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>توصيل سريع</h3>
            <p>توصيل مجاني لجميع الطلبات فوق 100 ريال</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>ضمان الجودة</h3>
            <p>جميع الكتب أصلية ومضمونة الجودة</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📖</div>
            <h3>قراءة مجانية</h3>
            <p>عينة مجانية من كل كتاب قبل الشراء</p>
          </div>
        </div>
      </section>

      {/* Footer للمتجر الفرعي */}
      <footer className="substore3-footer">
        <div className="footer-content">
          <p>&copy; 2024 مكتبة المعرفة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubStore3; 