import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, Globe, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'الجودة العالية',
      description: 'نلتزم بتقديم أفضل المنتجات والخدمات لعملائنا'
    },
    {
      icon: Shield,
      title: 'الأمان والثقة',
      description: 'حماية كاملة لبياناتك ومدفوعاتك'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'فريق دعم متخصص لمساعدتك على مدار الساعة'
    },
    {
      icon: Globe,
      title: 'التواصل العالمي',
      description: 'نربط العالم من خلال التجارة الإلكترونية'
    }
  ];

  const milestones = [
    { year: '2020', title: 'بداية المشروع', description: 'إطلاق أول متجر إلكتروني' },
    { year: '2021', title: 'التوسع', description: 'إضافة متاجر فرعية متخصصة' },
    { year: '2022', title: 'النجاح', description: 'وصول عدد العملاء لـ 50,000' },
    { year: '2024', title: 'الريادة', description: 'أصبحنا من أفضل المتاجر الإلكترونية' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">من نحن</h1>
            <p className="hero-subtitle">
              نتعرف على قصة نجاح Weverse Store ورحلتنا في عالم التجارة الإلكترونية
            </p>
          </motion.div>
        </div>
      </section>

      {/* قصة الشركة */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="story-text"
            >
              <h2>قصة نجاحنا</h2>
              <p>
                بدأت رحلتنا في عام 2020 بفكرة بسيطة: إنشاء منصة تجارة إلكترونية تجمع بين 
                التخصص والتنوع. أردنا أن نقدم تجربة تسوق فريدة تجمع بين جودة المنتجات 
                وسهولة الاستخدام.
              </p>
              <p>
                اليوم، أصبح Weverse Store منصة متكاملة تضم مجموعة من المتاجر المتخصصة، 
                كل منها يركز على فئة معينة من المنتجات، مما يضمن لعملائنا الحصول على 
                أفضل الخيارات وأحدث المنتجات في كل مجال.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="story-image"
            >
              <img 
                src="https://via.placeholder.com/500x400/667eea/FFFFFF?text=قصة+نجاحنا" 
                alt="قصة نجاحنا" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* رؤيتنا ورسالتنا */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vision-card"
            >
              <Target className="card-icon" />
              <h3>رؤيتنا</h3>
              <p>
                أن نكون الوجهة الأولى للتسوق الإلكتروني في المنطقة، ونقدم تجربة 
                تسوق استثنائية تجمع بين الابتكار والجودة والموثوقية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mission-card"
            >
              <Award className="card-icon" />
              <h3>رسالتنا</h3>
              <p>
                تقديم منصة تجارة إلكترونية متكاملة ومتخصصة، تمكن عملائنا من الوصول 
                لأفضل المنتجات بأفضل الأسعار، مع ضمان تجربة تسوق آمنة ومريحة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header"
          >
            <h2>قيمنا الأساسية</h2>
            <p>القيم التي تقود رحلتنا نحو النجاح والتميز</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="value-card"
              >
                <value.icon className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* مراحل التطور */}
      <section className="timeline-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header"
          >
            <h2>مراحل تطورنا</h2>
            <p>رحلة النجاح والتميز عبر السنوات</p>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* فريق العمل */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header"
          >
            <h2>فريق العمل</h2>
            <p>فريق متخصص من الخبراء والمحترفين</p>
          </motion.div>

          <div className="team-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="team-card"
            >
              <img 
                src="https://via.placeholder.com/200x200/667eea/FFFFFF?text=CEO" 
                alt="الرئيس التنفيذي" 
              />
              <h3>أحمد محمد</h3>
              <p>الرئيس التنفيذي</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="team-card"
            >
              <img 
                src="https://via.placeholder.com/200x200/e74c3c/FFFFFF?text=CTO" 
                alt="مدير التقنية" 
              />
              <h3>سارة أحمد</h3>
              <p>مدير التقنية</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="team-card"
            >
              <img 
                src="https://via.placeholder.com/200x200/27ae60/FFFFFF?text=CMO" 
                alt="مدير التسويق" 
              />
              <h3>محمد علي</h3>
              <p>مدير التسويق</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 