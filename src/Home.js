import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';
import SubStoresSection from './components/SubStoresSection';

const logoUrl = process.env.PUBLIC_URL + '/weverse-logo.ico';

const offers = [
  { id: 1, title: 'خصم 20% على الإلكترونيات', desc: 'لفترة محدودة على جميع أجهزة المنزل الذكية.' },
  { id: 2, title: 'توصيل مجاني', desc: 'عند الشراء بقيمة 300 ريال وأكثر.' },
  { id: 3, title: 'عرض الصيف', desc: 'خصومات على الأزياء حتى 50%.' },
];

const stores = [
  { id: 1, name: 'متجر الإلكترونيات', region: 'الرياض', img: logoUrl },
  { id: 2, name: 'متجر الأزياء', region: 'جدة', img: logoUrl },
  { id: 3, name: 'متجر المنزل', region: 'الدمام', img: logoUrl },
];

const products = [
  // منتجات متجر الإلكترونيات
  { id: 1, name: 'هاتف ذكي متطور', price: 1200, store: 1, region: 'الرياض', img: 'https://via.placeholder.com/300x300/667eea/FFFFFF?text=هاتف+ذكي', storeName: 'متجر الإلكترونيات', category: 'phones' },
  { id: 2, name: 'لابتوب للألعاب', price: 2500, store: 1, region: 'الرياض', img: 'https://via.placeholder.com/300x300/3498db/FFFFFF?text=لابتوب+ألعاب', storeName: 'متجر الإلكترونيات', category: 'laptops' },
  { id: 3, name: 'سماعات لاسلكية', price: 200, store: 1, region: 'الرياض', img: 'https://via.placeholder.com/300x300/e67e22/FFFFFF?text=سماعات+لاسلكية', storeName: 'متجر الإلكترونيات', category: 'accessories' },
  { id: 4, name: 'ساعة ذكية', price: 300, store: 1, region: 'الرياض', img: 'https://via.placeholder.com/300x300/9b59b6/FFFFFF?text=ساعة+ذكية', storeName: 'متجر الإلكترونيات', category: 'accessories' },
  
  // منتجات دار الأزياء
  { id: 5, name: 'فستان أنيق للنساء', price: 450, store: 2, region: 'جدة', img: 'https://via.placeholder.com/300x300/e74c3c/FFFFFF?text=فستان+أنيق', storeName: 'دار الأزياء', category: 'dresses' },
  { id: 6, name: 'حقيبة يد أنيقة', price: 280, store: 2, region: 'جدة', img: 'https://via.placeholder.com/300x300/9b59b6/FFFFFF?text=حقيبة+يد', storeName: 'دار الأزياء', category: 'bags' },
  { id: 7, name: 'جينز كلاسيك', price: 180, store: 2, region: 'جدة', img: 'https://via.placeholder.com/300x300/34495e/FFFFFF?text=جينز+كلاسيك', storeName: 'دار الأزياء', category: 'jeans' },
  { id: 8, name: 'تيشيرت رجالي', price: 80, store: 2, region: 'جدة', img: 'https://via.placeholder.com/300x300/2ecc71/FFFFFF?text=تيشيرت+رجالي', storeName: 'دار الأزياء', category: 'shirts' },
  
  // منتجات مكتبة المعرفة
  { id: 9, name: 'كتاب تطوير الذات', price: 80, store: 3, region: 'الدمام', img: 'https://via.placeholder.com/300x300/8b4513/FFFFFF?text=كتاب+تطوير', storeName: 'مكتبة المعرفة', category: 'self-help' },
  { id: 10, name: 'رواية خيال علمي', price: 60, store: 3, region: 'الدمام', img: 'https://via.placeholder.com/300x300/16a085/FFFFFF?text=رواية+خيال', storeName: 'مكتبة المعرفة', category: 'fiction' },
  { id: 11, name: 'كتاب الطبخ', price: 120, store: 3, region: 'الدمام', img: 'https://via.placeholder.com/300x300/f39c12/FFFFFF?text=كتاب+طبخ', storeName: 'مكتبة المعرفة', category: 'cooking' },
  { id: 12, name: 'قاموس عربي إنجليزي', price: 150, store: 3, region: 'الدمام', img: 'https://via.placeholder.com/300x300/1abc9c/FFFFFF?text=قاموس', storeName: 'مكتبة المعرفة', category: 'dictionary' },
];

const regions = ['الرياض', 'جدة', 'الدمام'];

// مكون بطاقة المنتج المحسنة
const ProductCard = ({ product, store }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div 
        ref={cardRef}
        className="product-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-card-inner">
          <div className="product-image-container">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-glow"></div>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-price">{product.price} ريال</div>
            <div className="product-store-info">
              <span className="store-name">{product.storeName}</span>
              <span className="store-region">• {product.region}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('offers');
  const [search, setSearch] = useState('');
  const [filterStore, setFilterStore] = useState('all');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // اقتراحات تلقائية للبحث
  const suggestions = products
    .filter(p => p.name.includes(search) && search.length > 0)
    .slice(0, 5);

  // فلترة المنتجات حسب البحث والمتجر والمنطقة والسعر
  const filteredProducts = products.filter(p =>
    (filterStore === 'all' || p.store === Number(filterStore)) &&
    (filterRegion === 'all' || p.region === filterRegion) &&
    (filterPrice === 'all' ||
      (filterPrice === 'lt100' && p.price < 100) ||
      (filterPrice === '100to300' && p.price >= 100 && p.price <= 300) ||
      (filterPrice === 'gt300' && p.price > 300)) &&
    (p.name.includes(search) || String(p.price).includes(search))
  );

  return (
    <div className="home-landing">
      <header className="home-header">
        <div className="logo-circle"><img src={logoUrl} alt="logo" style={{width: 60, height: 60, borderRadius: '50%'}} /></div>
        <h1 className="store-title">weverse</h1>
        <p className="store-desc">أفضل مكان لاستكشاف وشراء المنتجات من عدة متاجر بسهولة وأمان.</p>
      </header>
      
      {/* محرك البحث الذكي */}
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={e => { setSearch(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          
          {/* اقتراحات تلقائية */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map(s => (
                <div 
                  key={s.id} 
                  className="suggestion-item"
                  onMouseDown={() => { setSearch(s.name); setShowSuggestions(false); }}
                >
                  <img src={s.img} alt={s.name} className="suggestion-image" />
                  <span className="suggestion-name">{s.name}</span>
                  <span className="suggestion-price">({s.price} ريال)</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="filters-container">
          <select
            className="filter-select"
            value={filterStore}
            onChange={e => setFilterStore(e.target.value)}
          >
            <option value="all">كل المتاجر</option>
            {stores.map(store => <option key={store.id} value={store.id}>{store.name}</option>)}
          </select>
          
          <select
            className="filter-select"
            value={filterRegion}
            onChange={e => setFilterRegion(e.target.value)}
          >
            <option value="all">كل المناطق</option>
            {regions.map(region => <option key={region} value={region}>{region}</option>)}
          </select>
          
          <select
            className="filter-select"
            value={filterPrice}
            onChange={e => setFilterPrice(e.target.value)}
          >
            <option value="all">كل الأسعار</option>
            <option value="lt100">أقل من 100 ريال</option>
            <option value="100to300">من 100 إلى 300 ريال</option>
            <option value="gt300">أكثر من 300 ريال</option>
          </select>
        </div>
      </div>

      {/* التبويبات */}
      <div className="tabs-section">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'offers' ? 'active' : ''}`} 
            onClick={() => setActiveTab('offers')}
          >
            العروض
          </button>
          <button 
            className={`tab-button ${activeTab === 'substores' ? 'active' : ''}`} 
            onClick={() => setActiveTab('substores')}
          >
            المتاجر الفرعية
          </button>
          <button 
            className={`tab-button ${activeTab === 'products' ? 'active' : ''}`} 
            onClick={() => setActiveTab('products')}
          >
            المنتجات
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'offers' && (
            <div className="offers-grid">
              {offers.map(offer => (
                <div key={offer.id} className="offer-card">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.desc}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'substores' && (
            <div className="substores-container">
              <SubStoresSection />
            </div>
          )}
          
          {activeTab === 'products' && (
            <div className="products-section">
              {filteredProducts.length === 0 ? (
                <div className="no-products">لا توجد منتجات مطابقة</div>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map(product => {
                    const store = stores.find(s => s.id === product.store);
                    return (
                      <ProductCard key={product.id} product={product} store={store} />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* الأنماط المحسنة */}
      <style jsx>{`
        .search-section {
          margin: 2rem auto;
          max-width: 1200px;
          padding: 0 1rem;
        }

        .search-container {
          position: relative;
          margin-bottom: 1rem;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 50px;
          font-size: 1.1rem;
          background: white;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
        }

        .suggestions-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          margin-top: 0.5rem;
        }

        .suggestion-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .suggestion-item:hover {
          background-color: #f8fafc;
        }

        .suggestion-image {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          margin-left: 0.75rem;
          object-fit: cover;
        }

        .suggestion-name {
          flex: 1;
          font-weight: 500;
        }

        .suggestion-price {
          color: #64748b;
          font-size: 0.9rem;
        }

        .filters-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-select {
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          background: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #22d3ee;
        }

        .tabs-section {
          margin: 2rem auto;
          max-width: 1200px;
          padding: 0 1rem;
        }

        .tabs-header {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #22d3ee, #06b6d4);
          color: white;
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .offer-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .offer-card:hover {
          transform: translateY(-5px);
        }

        .offer-title {
          color: #1e293b;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .offer-description {
          color: #64748b;
          line-height: 1.6;
        }

        .products-section {
          margin-top: 2rem;
        }

        .no-products {
          text-align: center;
          padding: 3rem;
          color: #64748b;
          font-size: 1.2rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          padding: 1rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.75rem;
          }
        }

        @media (min-width: 1280px) {
          .products-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1536px) {
          .products-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 2rem;
          }
        }

        .product-card {
          background: linear-gradient(135deg, #1e293b, #334155);
          border-radius: 16px;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(6, 182, 212, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card-inner {
          position: relative;
          z-index: 1;
        }

        .product-image-container {
          position: relative;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          flex: 1;
          align-items: center;
        }

        .product-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #22d3ee;
          transition: all 0.3s ease;
        }

        .product-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-glow {
          opacity: 1;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.5);
        }

        .product-info {
          text-align: center;
        }

        .product-name {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-price {
          color: #22d3ee;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .product-store-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          color: #cbd5e1;
          font-size: 0.8rem;
          flex-wrap: wrap;
          text-align: center;
        }

        .store-name {
          font-weight: 500;
        }

        .store-region {
          color: #94a3b8;
        }

        @media (max-width: 768px) {
           .filters-container {
             flex-direction: column;
           }
           
           .filter-select {
             width: 100%;
           }
           
           .tabs-header {
             flex-direction: column;
             gap: 0.5rem;
           }
           
           .tab-button {
             width: 100%;
           }
           
           .products-grid {
             grid-template-columns: repeat(2, 1fr);
             gap: 1rem;
             padding: 0.5rem;
           }
           
           .product-card {
             height: 260px;
             padding: 1rem;
           }
           
           .product-image {
             width: 80px;
             height: 80px;
           }
           
           .product-glow {
             width: 100px;
             height: 100px;
           }
         }

         @media (max-width: 480px) {
           .products-grid {
             grid-template-columns: 1fr;
             gap: 1rem;
           }
           
           .product-card {
             height: 240px;
           }
         }
      `}</style>
    </div>
  );
}

export default Home; 