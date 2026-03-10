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

export default function ServicesPage() {
  useScrollReveal();

  const services = [
    { icon: "🧠", title: "Bilişsel Davranışçı Terapi", desc: "Düşünce ve davranışların duygular üzerindeki etkisini çalışarak sorunları çözmek." },
    { icon: "💫", title: "EMDR Terapi", desc: "Travmatik deneyimlerin işlenmesinde etkili bir terapi yöntemi." },
    { icon: "🔍", title: "Psikodinamik Terapi", desc: "Bilinçaltı dinamikleri keşfederek derin değişim sağlamak." },
    { icon: "🧘", title: "Mindfulness", desc: "Farkındalık ve meditasyon teknikleriyle stres yönetimi." },
    { icon: "🎯", title: "Şema Terapi", desc: "Uzun süreli psikolojik sorunların köklerine inen terapi." },
    { icon: "❤️", title: "Travma Terapisi", desc: "Travmatik olayların etkilerini azaltmak ve iyileşme sağlamak." },
  ];

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <span className="section-label">Hizmetler</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "24px" }}>
            Sunduğum Terapi Yöntemleri
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            Kanıta dayalı, etkili terapi yöntemleriyle kişiselleştirilmiş tedavi planları sunuyorum.
          </p>
        </div>

        <div className="services-grid" style={{ marginBottom: "80px" }}>
          {services.map((service, idx) => (
            <div key={idx} className="service-card reveal">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginBottom: "60px" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Neden Bu Hizmetleri Seçmelisiniz?
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Kanıta dayalı terapi yöntemleri</span>
            </li>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Kişiselleştirilmiş tedavi planı</span>
            </li>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Güvenli ve yargısız ortam</span>
            </li>
            <li style={{ padding: "12px 0", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Uzman ve deneyimli terapeut</span>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </section>
  );
}
