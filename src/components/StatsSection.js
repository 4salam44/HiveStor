import React from 'react';

/**
 * StatsSection
 * يعرض إحصائيات تسويقية عن المنصة
 */
const stats = [
  { label: 'متجر فرعي', value: '12+' },
  { label: 'منتج متنوع', value: '500+' },
  { label: 'عميل سعيد', value: '2K+' },
  { label: 'سنوات خبرة', value: '5+' },
];

const StatsSection = () => (
  <section id="stats" className="py-12 bg-white">
    <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-[#2B3A67] text-white rounded-xl shadow p-8 w-48 flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
          <span className="text-3xl font-bold mb-2">{stat.value}</span>
          <span className="text-lg">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection; 