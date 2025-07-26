import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Store, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus
} from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // بيانات المنتجات (يمكن نقلها لملف منفصل أو API)
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
      images: [
        'https://via.placeholder.com/600x600/667eea/FFFFFF?text=هاتف+ذكي+1',
        'https://via.placeholder.com/600x600/667eea/FFFFFF?text=هاتف+ذكي+2',
        'https://via.placeholder.com/600x600/667eea/FFFFFF?text=هاتف+ذكي+3',
        'https://via.placeholder.com/600x600/667eea/FFFFFF?text=هاتف+ذكي+4'
      ],
      rating: 4.8,
      reviews: 150,
      description: 'هاتف ذكي متطور بأحدث التقنيات مع كاميرا عالية الدقة وشاشة OLED فائقة الوضوح. يتميز بمعالج قوي وذاكرة تخزين كبيرة.',
      features: [
        'شاشة OLED 6.7 بوصة',
        'كاميرا خلفية 48 ميجابكسل',
        'معالج Snapdragon 8 Gen 2',
        'ذاكرة تخزين 256 جيجابايت',
        'بطارية 4500 مللي أمبير',
        'شحن سريع 67 واط'
      ],
      specifications: {
        'الشاشة': '6.7 بوصة OLED',
        'المعالج': 'Snapdragon 8 Gen 2',
        'الذاكرة': '8 جيجابايت',
        'التخزين': '256 جيجابايت',
        'الكاميرا': '48 ميجابكسل',
        'البطارية': '4500 مللي أمبير',
        'نظام التشغيل': 'Android 14'
      },
      stock: 15,
      isNew: true,
      warranty: 'سنتان',
      returnPolicy: '30 يوم'
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
      images: [
        'https://via.placeholder.com/600x600/e74c3c/FFFFFF?text=فستان+أنيق+1',
        'https://via.placeholder.com/600x600/e74c3c/FFFFFF?text=فستان+أنيق+2',
        'https://via.placeholder.com/600x600/e74c3c/FFFFFF?text=فستان+أنيق+3'
      ],
      rating: 4.9,
      reviews: 89,
      description: 'فستان أنيق مناسب للحفلات والمناسبات الرسمية. مصنوع من أجود أنواع الأقمشة مع تصميم عصري وأنيق.',
      features: [
        'قماش حرير طبيعي',
        'تصميم عصري',
        'ألوان متعددة',
        'مقاسات مختلفة',
        'خياطة دقيقة',
        'مناسب للمناسبات'
      ],
      specifications: {
        'الخامة': 'حرير طبيعي',
        'اللون': 'أحمر، أسود، أزرق',
        'المقاسات': 'XS, S, M, L, XL',
        'الطول': 'طويل',
        'النمط': 'أنيق',
        'العناية': 'غسيل يدوي'
      },
      stock: 8,
      isNew: true,
      warranty: 'لا يوجد',
      returnPolicy: '14 يوم'
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
      images: [
        'https://via.placeholder.com/600x600/8b4513/FFFFFF?text=كتاب+تطوير+1',
        'https://via.placeholder.com/600x600/8b4513/FFFFFF?text=كتاب+تطوير+2'
      ],
      rating: 4.7,
      reviews: 234,
      description: 'كتاب مميز في مجال تطوير الذات يساعد القارئ على اكتشاف قدراته وتحقيق أهدافه في الحياة.',
      features: [
        'محتوى مفيد وعملي',
        'أمثلة واقعية',
        'تمارين تطبيقية',
        'لغة بسيطة وواضحة',
        'مناسب لجميع الأعمار',
        'نتائج مضمونة'
      ],
      specifications: {
        'عدد الصفحات': '320 صفحة',
        'اللغة': 'العربية',
        'الغلاف': 'مقوى',
        'الحجم': 'متوسط',
        'الكاتب': 'د. أحمد محمد',
        'الناشر': 'دار المعرفة'
      },
      stock: 25,
      isNew: false,
      warranty: 'لا يوجد',
      returnPolicy: '7 أيام'
    }
  ];

  useEffect(() => {
    // محاكاة تحميل البيانات
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === parseInt(productId));
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [productId]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="star filled" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="star half" size={16} />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="star empty" size={16} />);
    }
    
    return stars;
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // إضافة للسلة
    console.log('تم إضافة المنتج للسلة:', { product, quantity });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط!');
    }
  };

  if (loading) {
    return (
      <div className="product-details-loading">
        <div className="loading-spinner"></div>
        <p>جاري تحميل تفاصيل المنتج...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>المنتج غير موجود</h2>
        <button onClick={() => navigate('/products')} className="back-btn">
          العودة للمنتجات
        </button>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="product-details-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <header className="product-details-header">
          <div className="container">
            <button onClick={() => navigate(-1)} className="back-button">
              <ArrowLeft size={20} />
              العودة
            </button>
            <div className="product-breadcrumb">
              <span onClick={() => navigate('/')}>الرئيسية</span>
              <span>/</span>
              <span onClick={() => navigate('/products')}>المنتجات</span>
              <span>/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="product-details-content">
            {/* صور المنتج */}
            <motion.div 
              className="product-images-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="main-image-container">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="main-image"
                />
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
              
              {product.images.length > 1 && (
                <div className="thumbnail-images">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* تفاصيل المنتج */}
            <motion.div 
              className="product-info-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="product-header">
                <div className="store-badge">
                  <Store size={16} />
                  <span>{product.storeName}</span>
                </div>
                <h1 className="product-title">{product.name}</h1>
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">({product.rating})</span>
                  <span className="reviews-count">• {product.reviews} تقييم</span>
                </div>
              </div>

              <div className="product-pricing">
                {product.discount > 0 ? (
                  <>
                    <span className="original-price">{product.originalPrice} ريال</span>
                    <span className="current-price">{product.price} ريال</span>
                    <span className="savings">وفرت {product.originalPrice - product.price} ريال</span>
                  </>
                ) : (
                  <span className="current-price">{product.price} ريال</span>
                )}
              </div>

              <div className="product-description">
                <h3>الوصف</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>المميزات</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <div className="quantity-selector">
                  <span>الكمية:</span>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange('decrease')}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange('increase')}
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="stock-info">متوفر: {product.stock} قطعة</span>
                </div>

                <div className="action-buttons">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <ShoppingCart size={20} />
                    أضف للسلة
                  </button>
                  <button 
                    className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                    onClick={handleWishlist}
                  >
                    <Heart size={20} />
                  </button>
                  <button className="share-btn" onClick={handleShare}>
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="product-benefits">
                <div className="benefit-item">
                  <Truck size={20} />
                  <div>
                    <h4>توصيل مجاني</h4>
                    <p>للطلبات أكثر من 200 ريال</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <Shield size={20} />
                  <div>
                    <h4>ضمان {product.warranty}</h4>
                    <p>ضمان شامل على المنتج</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <RotateCcw size={20} />
                  <div>
                    <h4>إرجاع مجاني</h4>
                    <p>خلال {product.returnPolicy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* المواصفات التفصيلية */}
          <motion.div 
            className="product-specifications"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>المواصفات التفصيلية</h3>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetails; 