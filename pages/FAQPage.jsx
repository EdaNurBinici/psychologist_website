import { useState, useEffect } from "react";
import Contact from "../components/Contact";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function FAQPage() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Terapi kaç seans sürer?", a: "Terapi süresi kişiye ve soruna göre değişir. Genellikle 8-20 seans arasında değişmektedir. İlk değerlendirme seansından sonra daha kesin bir tahmin yapabilirim." },
    { q: "Seanslar ne kadar sürüyor?", a: "Her seans 50 dakika sürmektedir. Bu süre içinde rahat bir ortamda konuşabilir ve destek alabilirsiniz." },
    { q: "Gizlilik garantisi var mı?", a: "Evet, tüm seanslar tamamen gizli ve mahremdir. Profesyonel etik kurallarına uygun olarak sizin bilgileriniz korunur." },
    { q: "Online seans mümkün mü?", a: "Evet, online ve yüz yüze seanslar sunmaktayız. Sizin için en uygun şekilde seçim yapabilirsiniz." },
    { q: "İlk seans ücreti nedir?", a: "İlk görüşme danışmanı tanımak için özel bir fiyatlandırma sunmaktadır. Detaylar için lütfen iletişime geçiniz." },
    { q: "Hangi yaş gruplarına hizmet veriyorsunuz?", a: "Çocuk, ergen ve yetişkinlere psikoterapi hizmeti sunmaktayım. Her yaş grubuna uygun terapi yöntemleri kullanıyorum." },
    { q: "Acil durumlarda ne yapmalıyım?", a: "Acil durumlarda lütfen 112'yi arayınız veya en yakın hastaneye gidiniz. Benim acil hizmet sunmadığımı lütfen unutmayınız." },
    { q: "Reçete yazabilir misiniz?", a: "Hayır, ben psikolog olduğum için reçete yazamam. Gerekirse sizi uygun bir psikiyatristye yönlendirebilirim." },
  ];

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px", background: "var(--color-surface-alt)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="section-label">SSS</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "24px" }}>
            Sık Sorulan Sorular
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem", margin: "0 auto" }}>
            Merak ettiğiniz her şey hakkında bilgi alabilirsiniz.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "80px" }}>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item reveal ${openIndex === idx ? "open" : ""}`}>
                <button 
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: "var(--color-surface)", padding: "40px", borderRadius: "var(--radius-lg)", textAlign: "center", border: "1px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "var(--color-primary-dark)" }}>Başka Sorunuz Var mı?</h2>
          <p style={{ fontSize: "1rem", marginBottom: "24px", color: "var(--color-text-muted)" }}>
            Cevabını bulamadığınız sorular için lütfen bize ulaşınız.
          </p>
          <a href="#iletisim" className="btn btn-primary">İletişime Geçin</a>
        </div>
      </div>
      <Contact />
    </section>
  );
}
