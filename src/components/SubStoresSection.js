import React from 'react';
import { useNavigate } from 'react-router-dom';

const subStores = [
  {
    id: 1,
    name: 'متجر الإلكترونيات المتطور',
    icon: '💻',
    desc: 'أحدث التقنيات والأجهزة الذكية بأفضل الأسعار',
    slogan: 'تسوق المستقبل اليوم!',
    route: '/substore1',
    color: '#667eea',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    name: 'دار الأزياء الأنيقة',
    icon: '👗',
    desc: 'أناقة لا تنتهي، أسلوب لا يُنسى',
    slogan: 'كن أنيقاً دائماً!',
    route: '/substore2',
    color: '#e74c3c',
    bg: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
  },
  {
    id: 3,
    name: 'مكتبة المعرفة',
    icon: '📚',
    desc: 'اكتشف عالماً من المعرفة والحكمة',
    slogan: 'اقرأ وارتقِ!',
    route: '/substore3',
    color: '#8b4513',
    bg: 'linear-gradient(135deg, #f4f1de 0%, #e8e6d9 100%)',
  },
];

const SubStoresSection = () => {
  const navigate = useNavigate();
  return (
    <section className="substores-section-simple">
      <div className="substores-simple-grid">
        {subStores.map((store) => (
          <div
            key={store.id}
            className="substore-simple-card"
            style={{ background: store.bg, borderColor: store.color }}
            onClick={() => navigate(store.route)}
          >
            <div className="substore-simple-icon" style={{ color: store.color }}>
              {store.icon}
            </div>
            <h3 className="substore-simple-title">{store.name}</h3>
            <p className="substore-simple-desc">{store.desc}</p>
            <span className="substore-simple-slogan">{store.slogan}</span>
          </div>
        ))}
      </div>
      <style>{`
        .substores-section-simple {
          padding: 2rem 0 2.5rem 0;
          background: #f8fafc;
        }
        .substores-simple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .substore-simple-card {
          cursor: pointer;
          border-radius: 18px;
          border: 2px solid transparent;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          padding: 2.2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
          background-size: 200% 200%;
        }
        .substore-simple-card:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.13);
          transform: translateY(-6px) scale(1.03);
          border-color: #22d3ee;
        }
        .substore-simple-icon {
          font-size: 3.5rem;
          margin-bottom: 1.2rem;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.08));
        }
        .substore-simple-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .substore-simple-desc {
          color: #475569;
          font-size: 1rem;
          margin-bottom: 0.7rem;
          text-align: center;
        }
        .substore-simple-slogan {
          color: #64748b;
          font-size: 0.95rem;
          font-style: italic;
          margin-top: 0.2rem;
          text-align: center;
        }
        @media (max-width: 600px) {
          .substores-simple-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SubStoresSection; 