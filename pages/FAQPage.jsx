import { useState, useEffect } from "react";
import Contact from "../components/Contact";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function FAQPage() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "İlk seans ücreti nedir?", a: "İlk görüşme seansı danışmanı tanımak ve sorunun kapsamını anlamak için ayrılmıştır. Bu seans sırasında terapinin hedefleri, yöntemi ve beklentiler hakkında detaylı bilgi verilir. Fiyatlandırma hakkında daha fazla bilgi için lütfen iletişime geçiniz." },
    { q: "Terapi kaç seans sürer?", a: "Terapi süresi kişiye, sorunun türüne ve ciddiyetine göre değişir. Genellikle hafif anksiyete veya stres sorunları 8-12 seans içinde iyileşebilirken, daha derin psikolojik sorunlar 20-30 seans veya daha uzun sürebilir. İlk seansda birlikte bir tedavi planı oluşturulur." },
    { q: "Seanslar ne kadar sürüyor?", a: "Her seans 50 dakika sürmektedir. Bu süre içinde terapötik çalışma yapılır, duygular işlenir ve kişisel gelişim sağlanır. Seanslar haftada bir veya iki kez yapılabilir, buna kişinin ihtiyacı ve uygunluğu göre karar verilir." },
    { q: "Gizlilik garantisi var mı?", a: "Evet, tüm seanslar tamamen gizli ve mahremdir. Psikoloji meslek etiği gereği, danışanın bilgileri kesinlikle üçüncü kişilerle paylaşılmaz. Sadece yasal zorunluluklar (örneğin ciddi zarar riski) durumunda müdahale edilir. Danışan-terapist ilişkisinde güven temeldir." },
    { q: "Online seans mümkün mü?", a: "Evet, online ve yüz yüze seanslar sunmaktayız. Online seanslar video konferans aracılığıyla yapılır ve yüz yüze seanslar kadar etkilidir. Hangi formatı tercih edeceğiniz tamamen size bağlıdır. Bazı danışanlar her iki yöntemi de kombinasyon halinde kullanmayı tercih ederler." },
    { q: "Çocuklar için terapi nasıl yapılır?", a: "Çocuklar için oyun terapisi, sanat terapisi ve interaktif yöntemler kullanılır. Çocuklar sözle kendilerini ifade etmekte zorlanabilir, bu nedenle oyun ve yaratıcı etkinlikler aracılığıyla duygularını anlatırlar. Ebeveynler de sürece dahil edilir ve evde uygulanabilecek stratejiler öğretilir." },
  ];

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px", background: "var(--color-surface-alt)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="section-label">SSS</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "16px" }}>
            Sık Sorulan Sorular
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem", margin: "0 auto" }}>
            Merak ettiğiniz her şey hakkında bilgi alabilirsiniz.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto 80px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="reveal"
                style={{
                  background: "var(--color-surface)",
                  border: `1px solid ${isOpen ? "var(--color-primary-light)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "10px",
                  boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 22px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: isOpen ? "var(--color-primary)" : "var(--color-text)",
                    transition: "color 0.3s",
                    gap: "12px",
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--color-primary)" : "rgba(74,124,111,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "1rem",
                      color: isOpen ? "white" : "var(--color-primary)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "all 0.3s",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer — rendered only when open */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      lineHeight: "1.7",
                      borderTop: "1px solid var(--color-border)",
                      paddingTop: "16px",
                      animation: "fadeSlideUp 0.2s ease both",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="reveal"
          style={{
            background: "var(--color-surface)",
            padding: "clamp(28px,4vw,40px)",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
            border: "1px solid var(--color-border)",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", marginBottom: "12px", color: "var(--color-primary-dark)" }}>
            Başka Sorunuz Var mı?
          </h2>
          <p style={{ fontSize: "0.95rem", marginBottom: "24px", color: "var(--color-text-muted)" }}>
            Cevabını bulamadığınız sorular için bize ulaşınız.
          </p>
          <a href="/iletisim" className="btn btn-primary">
            İletişime Geçin
          </a>
        </div>
      </div>
      <Contact />
    </section>
  );
}
