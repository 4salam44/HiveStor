import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const stores = {
  1: {
    name: 'متجر ١',
    products: [
      { id: 1, name: 'منتج ١', price: '١٠٠' },
      { id: 2, name: 'منتج ٢', price: '٢٠٠' }
    ]
  },
  2: {
    name: 'متجر ٢',
    products: [
      { id: 3, name: 'منتج ٣', price: '٣٠٠' },
      { id: 4, name: 'منتج ٤', price: '٤٠٠' }
    ]
  },
  3: {
    name: 'متجر ٣',
    products: [
      { id: 5, name: 'منتج ٥', price: '٥٠٠' },
      { id: 6, name: 'منتج ٦', price: '٦٠٠' }
    ]
  }
};

function StorePage() {
  const { storeId } = useParams();
  const store = stores[storeId];

  if (!store) {
    return <div style={{ padding: 40, textAlign: 'center' }}>المتجر غير موجود</div>;
  }

  return (
    <div className="market-container">
      <nav className="stores-tabs">
        <Link to="/" className="store-tab-btn">الرئيسية</Link>
        {Object.entries(stores).map(([id, s]) => (
          <Link
            key={id}
            to={`/store/${id}`}
            className={`store-tab-btn${id === storeId ? ' active' : ''}`}
          >
            {s.name}
          </Link>
        ))}
      </nav>
      <div className="store-wrapper">
        <header className="store-header">
          <h2>{store.name}</h2>
        </header>
        <div className="products-grid">
          {store.products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.price} ريال</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StorePage; 