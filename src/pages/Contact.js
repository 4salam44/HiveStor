import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@weverse-store.com',
      description: 'راسلنا عبر البريد الإلكتروني'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      info: '+966 50 123 4567',
      description: 'اتصل بنا مباشرة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'الرياض، المملكة العربية السعودية',
      description: 'مقر الشركة الرئيسي'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'الأحد - الخميس: 9 ص - 6 م',
      description: 'فريق الدعم متاح لمساعدتك'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">اتصل بنا</h1>
            <p className="hero-subtitle">
              نحن هنا لمساعدتك! تواصل معنا لأي استفسار أو مساعدة تحتاجها
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="contact-info-card"
              >
                <info.icon className="info-icon" />
                <h3>{info.title}</h3>
                <p className="info-text">{info.info}</p>
                <p className="info-description">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-text"
            >
              <h2>راسلنا مباشرة</h2>
              <p>
                لديك استفسار أو تحتاج مساعدة؟ لا تتردد في التواصل معنا. 
                فريق الدعم لدينا متاح لمساعدتك على مدار الساعة.
              </p>
              
              <div className="contact-features">
                <div className="feature">
                  <MessageCircle className="feature-icon" />
                  <div>
                    <h4>رد سريع</h4>
                    <p>نرد على رسائلك خلال 24 ساعة</p>
                  </div>
                </div>
                
                <div className="feature">
                  <Send className="feature-icon" />
                  <div>
                    <h4>دعم متخصص</h4>
                    <p>فريق دعم متخصص لمساعدتك</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="contact-form-container"
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">الموضوع</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل موضوع الرسالة"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="section-header"
          >
            <h2>الأسئلة الشائعة</h2>
            <p>إجابات على أكثر الأسئلة شيوعاً</p>
          </motion.div>

          <div className="faq-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="faq-item"
            >
              <h3>كيف يمكنني إرجاع منتج؟</h3>
              <p>
                يمكنك إرجاع المنتج خلال 30 يوم من تاريخ الشراء. 
                اتصل بفريق الدعم لترتيب عملية الإرجاع.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="faq-item"
            >
              <h3>ما هي طرق الدفع المتاحة؟</h3>
              <p>
                نقبل جميع البطاقات الائتمانية الرئيسية، 
                بالإضافة إلى الدفع عند الاستلام والتحويل البنكي.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="faq-item"
            >
              <h3>كم تستغرق عملية التوصيل؟</h3>
              <p>
                عادةً ما تستغرق عملية التوصيل من 2-5 أيام عمل 
                حسب موقعك وطريقة التوصيل المختارة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="faq-item"
            >
              <h3>هل التوصيل مجاني؟</h3>
              <p>
                نعم، التوصيل مجاني لجميع الطلبات التي تزيد قيمتها عن 200 ريال. 
                للطلبات الأقل، رسوم التوصيل 25 ريال.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 