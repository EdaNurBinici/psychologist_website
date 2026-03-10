import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Terapi kaç seans sürer?", a: "Terapi süresi kişiye ve soruna göre değişir. Genellikle 8-20 seans arasında değişmektedir." },
    { q: "Seanslar ne kadar sürüyor?", a: "Her seans 50 dakika sürmektedir." },
    { q: "Gizlilik garantisi var mı?", a: "Evet, tüm seanslar tamamen gizli ve mahremdir." },
    { q: "Online seans mümkün mü?", a: "Evet, online ve yüz yüze seanslar sunmaktayız." },
    { q: "İlk seans ücreti nedir?", a: "İlk görüşme danışmanı tanımak için özel bir fiyatlandırma sunmaktadır." },
  ];

  return (
    <section className="faq" id="sss">
      <div className="container">
        <div className="faq-inner">
          <div className="faq-sidebar reveal">
            <span className="section-label">SSS</span>
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <p className="section-subtitle">Merak ettiğiniz her şey hakkında bilgi alabilirsiniz.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
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
      </div>
    </section>
  );
}
