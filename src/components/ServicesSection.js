import React from 'react';

/**
 * ServicesSection
 * يعرض مميزات وخدمات المنصة
 */
const services = [
  { icon: '🛒', title: 'تسوق ذكي', desc: 'عروض وخصومات حصرية من جميع المتاجر.' },
  { icon: '🚚', title: 'توصيل سريع', desc: 'خدمة توصيل لجميع المناطق.' },
  { icon: '🔒', title: 'دفع آمن', desc: 'طرق دفع موثوقة وآمنة.' },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-[#f8fafc]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-[#2B3A67] mb-10">خدماتنا</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 100}>
            <span className="text-5xl mb-4">{srv.icon}</span>
            <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
            <p className="text-gray-600 text-center">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 