import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "İlk seans ücreti nedir?", a: "İlk görüşme seansı danışmanı tanımak ve sorunun kapsamını anlamak için ayrılmıştır. Bu seans sırasında terapinin hedefleri, yöntemi ve beklentiler hakkında detaylı bilgi verilir. Fiyatlandırma hakkında daha fazla bilgi için lütfen iletişime geçiniz." },
    { q: "Terapi kaç seans sürer?", a: "Terapi süresi kişiye, sorunun türüne ve ciddiyetine göre değişir. Genellikle hafif anksiyete veya stres sorunları 8-12 seans içinde iyileşebilirken, daha derin psikolojik sorunlar 20-30 seans veya daha uzun sürebilir. İlk seansda birlikte bir tedavi planı oluşturulur." },
    { q: "Seanslar ne kadar sürüyor?", a: "Her seans 50 dakika sürmektedir. Bu süre içinde terapötik çalışma yapılır, duygular işlenir ve kişisel gelişim sağlanır. Seanslar haftada bir veya iki kez yapılabilir, buna kişinin ihtiyacı ve uygunluğu göre karar verilir." },
    { q: "Gizlilik garantisi var mı?", a: "Evet, tüm seanslar tamamen gizli ve mahremdir. Psikoloji meslek etiği gereği, danışanın bilgileri kesinlikle üçüncü kişilerle paylaşılmaz. Sadece yasal zorunluluklar (örneğin ciddi zarar riski) durumunda müdahale edilir. Danışan-terapist ilişkisinde güven temeldir." },
    { q: "Online seans mümkün mü?", a: "Evet, online ve yüz yüze seanslar sunmaktayız. Online seanslar video konferans aracılığıyla yapılır ve yüz yüze seanslar kadar etkilidir. Hangi formatı tercih edeceğiniz tamamen size bağlıdır. Bazı danışanlar her iki yöntemi de kombinasyon halinde kullanmayı tercih ederler." },
    { q: "Çocuklar için terapi nasıl yapılır?", a: "Çocuklar için oyun terapisi, sanat terapisi ve interaktif yöntemler kullanılır. Çocuklar sözle kendilerini ifade etmekte zorlanabilir, bu nedenle oyun ve yaratıcı etkinlikler aracılığıyla duygularını anlatırlar. Ebeveynler de sürece dahil edilir ve evde uygulanabilecek stratejiler öğretilir." },
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
