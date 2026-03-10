import { useEffect } from "react";
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

export default function ProcessPage() {
  useScrollReveal();

  const steps = [
    { num: "1", title: "İlk Görüşme", desc: "Tanışma ve ihtiyaçlarınızı anlamak. Bu seansta birbirimizi tanıyacağız ve sorunlarınızı dinleyeceğim." },
    { num: "2", title: "Değerlendirme", desc: "Durumunuzun kapsamlı analizi. Psikolojik durumunuzu değerlendireceğim ve tanı koyacağım." },
    { num: "3", title: "Tedavi Planı", desc: "Kişiselleştirilmiş terapi programı. Sizin için en uygun terapi yöntemini seçeceğim." },
    { num: "4", title: "İyileşme", desc: "Hedeflerinize ulaşmak. Düzenli seanslarla iyileşme yolculuğunuzu tamamlayacağız." },
  ];

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <span className="section-label">Süreç</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "24px" }}>
            Terapi Süreci
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            Adım adım iyileşme yolculuğunuz. Her aşamada sizin yanınızda olacağım.
          </p>
        </div>

        <div className="process-steps" style={{ marginBottom: "80px" }}>
          {steps.map((step, idx) => (
            <div key={idx} className="process-step reveal">
              <div className="process-step-number">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginBottom: "60px" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Sık Sorulan Sorular
          </h2>
          <div style={{ display: "grid", gap: "20px" }}>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Terapi kaç seans sürer?</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Terapi süresi kişiye ve soruna göre değişir. Genellikle 8-20 seans arasında değişmektedir.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Seanslar ne kadar sürüyor?</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Her seans 50 dakika sürmektedir.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Gizlilik garantisi var mı?</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Evet, tüm seanslar tamamen gizli ve mahremdir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
