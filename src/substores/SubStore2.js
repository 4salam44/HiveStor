import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubStore2.css';

const SubStore2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  // بيانات المنتجات للمتجر الثاني (متجر الأزياء)
  const storeProducts = [
    {
      id: 1,
      name: 'فستان أنيق للنساء',
      price: 450,
      category: 'dresses',
      gender: 'women',
      size: ['S', 'M', 'L', 'XL'],
      image: 'https://via.placeholder.com/400x500/FF69B4/FFFFFF?text=فستان+أنيق',
      description: 'فستان أنيق مناسب للحفلات والمناسبات الرسمية',
      colors: ['أحمر', 'أزرق', 'أسود'],
      discount: 15,
      isNew: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'بدلة رسمية للرجال',
      price: 800,
      category: 'suits',
      gender: 'men',
      size: ['M', 'L', 'XL', 'XXL'],
      image: 'https://via.placeholder.com/400x500/2E8B57/FFFFFF?text=بدلة+رسمية',
      description: 'بدلة رسمية أنيقة مصنوعة من أجود أنواع القماش',
      colors: ['أسود', 'رمادي', 'أزرق داكن'],
      discount: 0,
      isNew: false,
      rating: 4.9
    },
    {
      id: 3,
      name: 'جينز كلاسيك',
      price: 200,
      category: 'jeans',
      gender: 'men',
      size: ['28', '30', '32', '34', '36'],
      image: 'https://via.placeholder.com/400x500/4169E1/FFFFFF?text=جينز+كلاسيك',
      description: 'جينز كلاسيك مريح ومناسب لجميع المناسبات',
      colors: ['أزرق', 'أسود', 'رمادي'],
      discount: 20,
      isNew: false,
      rating: 4.6
    },
    {
      id: 4,
      name: 'حذاء رياضي',
      price: 350,
      category: 'shoes',
      gender: 'unisex',
      size: ['39', '40', '41', '42', '43', '44'],
      image: 'https://via.placeholder.com/400x500/FF4500/FFFFFF?text=حذاء+رياضي',
      description: 'حذاء رياضي مريح ومناسب للرياضة والاستخدام اليومي',
      colors: ['أبيض', 'أسود', 'أحمر'],
      discount: 10,
      isNew: true,
      rating: 4.7
    },
    {
      id: 5,
      name: 'قميص قطني',
      price: 120,
      category: 'shirts',
      gender: 'men',
      size: ['S', 'M', 'L', 'XL'],
      image: 'https://via.placeholder.com/400x500/32CD32/FFFFFF?text=قميص+قطني',
      description: 'قميص قطني مريح ومناسب للاستخدام اليومي',
      colors: ['أبيض', 'أزرق فاتح', 'أخضر فاتح'],
      discount: 0,
      isNew: false,
      rating: 4.5
    },
    {
      id: 6,
      name: 'حقيبة يد أنيقة',
      price: 280,
      category: 'bags',
      gender: 'women',
      size: ['واحد مقاس'],
      image: 'https://via.placeholder.com/400x500/8B4513/FFFFFF?text=حقيبة+يد',
      description: 'حقيبة يد أنيقة مصنوعة من الجلد الطبيعي',
      colors: ['بني', 'أسود', 'أحمر'],
      discount: 25,
      isNew: true,
      rating: 4.8
    },
    {
      id: 7,
      name: 'تنورة قصيرة',
      price: 180,
      category: 'skirts',
      gender: 'women',
      size: ['XS', 'S', 'M', 'L'],
      image: 'https://via.placeholder.com/400x500/FF1493/FFFFFF?text=تنورة+قصيرة',
      description: 'تنورة قصيرة أنيقة تناسب جميع المناسبات',
      colors: ['أسود', 'أزرق داكن', 'رمادي'],
      discount: 0,
      isNew: false,
      rating: 4.4
    },
    {
      id: 8,
      name: 'ملابس أطفال رياضية',
      price: 150,
      category: 'sportswear',
      gender: 'kids',
      size: ['2Y', '4Y', '6Y', '8Y'],
      image: 'https://via.placeholder.com/400x500/00CED1/FFFFFF?text=ملابس+أطفال',
      description: 'ملابس رياضية مريحة للأطفال',
      colors: ['أزرق', 'أخضر', 'أحمر'],
      discount: 30,
      isNew: true,
      rating: 4.9
    },
    {
      id: 9,
      name: 'جاكيت شتوي',
      price: 600,
      category: 'jackets',
      gender: 'unisex',
      size: ['S', 'M', 'L', 'XL'],
      image: 'https://via.placeholder.com/400x500/4682B4/FFFFFF?text=جاكيت+شتوي',
      description: 'جاكيت شتوي دافئ وأنيق',
      colors: ['أسود', 'بني', 'رمادي'],
      discount: 15,
      isNew: false,
      rating: 4.7
    },
    {
      id: 10,
      name: 'فساتين أطفال',
      price: 220,
      category: 'dresses',
      gender: 'kids',
      size: ['2Y', '4Y', '6Y', '8Y'],
      image: 'https://via.placeholder.com/400x500/FFB6C1/FFFFFF?text=فساتين+أطفال',
      description: 'فساتين جميلة ومريحة للأطفال',
      colors: ['وردي', 'أزرق فاتح', 'أصفر'],
      discount: 0,
      isNew: true,
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'dresses', name: 'الفساتين' },
    { id: 'suits', name: 'البدل الرسمية' },
    { id: 'jeans', name: 'الجينز' },
    { id: 'shoes', name: 'الأحذية' },
    { id: 'shirts', name: 'القمصان' },
    { id: 'bags', name: 'الحقائب' },
    { id: 'skirts', name: 'التنانير' },
    { id: 'sportswear', name: 'الملابس الرياضية' },
    { id: 'jackets', name: 'الجواكت' }
  ];

  const genders = [
    { id: 'all', name: 'جميع الأجناس' },
    { id: 'men', name: 'رجالي' },
    { id: 'women', name: 'نسائي' },
    { id: 'kids', name: 'أطفال' },
    { id: 'unisex', name: 'عام' }
  ];

  const priceRanges = [
    { id: 'all', name: 'جميع الأسعار' },
    { id: '0-100', name: 'أقل من 100 ريال' },
    { id: '100-300', name: '100 - 300 ريال' },
    { id: '300-500', name: '300 - 500 ريال' },
    { id: '500+', name: 'أكثر من 500 ريال' }
  ];

  const sizes = [
    { id: 'all', name: 'جميع المقاسات' },
    { id: 'XS', name: 'صغير جداً (XS)' },
    { id: 'S', name: 'صغير (S)' },
    { id: 'M', name: 'متوسط (M)' },
    { id: 'L', name: 'كبير (L)' },
    { id: 'XL', name: 'كبير جداً (XL)' }
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
    const genderMatch = selectedGender === 'all' || product.gender === selectedGender;
    const sizeMatch = selectedSize === 'all' || product.size.includes(selectedSize);
    
    let priceMatch = true;
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '500+') {
        priceMatch = product.price >= 500;
      } else if (selectedPriceRange === '0-100') {
        priceMatch = product.price < 100;
      } else {
        priceMatch = product.price >= min && product.price <= max;
      }
    }
    
    return categoryMatch && genderMatch && sizeMatch && priceMatch;
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
      <div className="substore2-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنتجات...</p>
      </div>
    );
  }

  return (
    <div className="substore2-container">
      {/* شريط إعلاني خفيف */}
      <div className="promo-banner">
        <div className="promo-content">
          <span className="promo-icon">🎉</span>
          <span className="promo-text">خصم يصل إلى 50% على جميع المنتجات الجديدة! عرض محدود</span>
          <span className="promo-icon">🎉</span>
        </div>
      </div>

      {/* Header للمتجر الفرعي */}
      <header className="substore2-header">
        <div className="substore2-header-content">
          <Link to="/" className="back-link">
            <span>←</span> العودة للصفحة الرئيسية
          </Link>
          <div className="store-brand">
            <div className="store-logo">👗</div>
            <div className="store-info">
              <h1 className="substore2-title">دار الأزياء الأنيقة</h1>
              <p className="substore2-subtitle">أناقة لا تنتهي، أسلوب لا يُنسى</p>
            </div>
          </div>
        </div>
      </header>

      {/* قسم التصفية المتقدم */}
      <section className="substore2-filters">
        <div className="filters-container">
          <div className="filter-group">
            <h3>الفئة:</h3>
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
          
          <div className="filter-group">
            <h3>الجنس:</h3>
            <div className="filter-buttons">
              {genders.map(gender => (
                <button
                  key={gender.id}
                  className={`filter-btn ${selectedGender === gender.id ? 'active' : ''}`}
                  onClick={() => setSelectedGender(gender.id)}
                >
                  {gender.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h3>السعر:</h3>
            <div className="filter-buttons">
              {priceRanges.map(range => (
                <button
                  key={range.id}
                  className={`filter-btn ${selectedPriceRange === range.id ? 'active' : ''}`}
                  onClick={() => setSelectedPriceRange(range.id)}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h3>المقاس:</h3>
            <div className="filter-buttons">
              {sizes.map(size => (
                <button
                  key={size.id}
                  className={`filter-btn ${selectedSize === size.id ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size.id)}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم المنتجات */}
      <section className="substore2-products">
        <div className="products-header">
          <h2>المنتجات ({filteredProducts.length})</h2>
        </div>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="view-details-btn">عرض التفاصيل</button>
                </div>
                {product.discount > 0 && (
                  <div className="discount-badge">
                    <span className="discount-text">-{product.discount}%</span>
                  </div>
                )}
                {product.isNew && (
                  <div className="new-badge">
                    <span className="new-text">جديد</span>
                  </div>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">({product.rating})</span>
                </div>
                
                <div className="product-colors">
                  <span className="colors-label">الألوان المتوفرة:</span>
                  <div className="color-options">
                    {product.colors.map((color, index) => (
                      <span key={index} className="color-option">{color}</span>
                    ))}
                  </div>
                </div>
                
                <div className="product-sizes">
                  <span className="sizes-label">المقاسات:</span>
                  <div className="size-options">
                    {product.size.map((size, index) => (
                      <span key={index} className="size-option">{size}</span>
                    ))}
                  </div>
                </div>
                
                <div className="product-price">
                  {product.discount > 0 ? (
                    <div className="price-with-discount">
                      <span className="original-price">{product.price} ريال</span>
                      <span className="discounted-price">
                        {Math.round(product.price * (1 - product.discount / 100))} ريال
                      </span>
                    </div>
                  ) : (
                    <span className="price">{product.price} ريال</span>
                  )}
                </div>
                
                <button className="add-to-cart-btn">أضف للسلة</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="substore2-features">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h3>تصميم حصري</h3>
            <p>تصاميم حصرية من أفضل المصممين العالميين</p>
          </div>
          <div className="feature">
            <div className="feature-icon">✨</div>
            <h3>جودة عالية</h3>
            <p>أجود أنواع الأقمشة والمواد المستخدمة</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔄</div>
            <h3>إرجاع مجاني</h3>
            <p>إمكانية الإرجاع خلال 30 يوم من الشراء</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👗</div>
            <h3>مقاسات متنوعة</h3>
            <p>جميع المقاسات متوفرة لتناسب الجميع</p>
          </div>
        </div>
      </section>

      {/* Footer للمتجر الفرعي */}
      <footer className="substore2-footer">
        <div className="footer-content">
          <p>&copy; 2024 دار الأزياء الأنيقة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubStore2; 