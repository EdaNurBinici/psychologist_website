import { useEffect } from "react";
import Contact from "../components/Contact";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function ContactPage() {
  useScrollReveal();

  const infoCards = [
    { icon: "📍", title: "Adres", value: "Nişantaşı, Şişli / İstanbul", href: null },
    { icon: "📞", title: "Telefon", value: "+90 500 123 45 67", href: "tel:+905001234567" },
    { icon: "✉️", title: "E-posta", value: "info@drayse.com", href: "mailto:info@drayse.com" },
    { icon: "💬", title: "WhatsApp", value: "Mesaj Gönderin", href: "https://wa.me/905001234567", color: "var(--color-whatsapp)" },
  ];

  const hours = [
    { day: "Pazartesi – Cuma", time: "09:00 – 18:00" },
    { day: "Cumartesi", time: "10:00 – 16:00" },
    { day: "Pazar", time: "Kapalı" },
  ];

  return (
    <section className="page-hero" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="reveal page-header">
          <span className="section-label">İletişim</span>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", marginBottom: "16px" }}>
            Bize Ulaşın
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "560px" }}>
            Sorularınız, önerileriniz veya randevu talebiniz için bize yazın veya arayın.
          </p>
        </div>

        {/* Info Cards */}
        <div className="info-grid-4">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "clamp(20px,3vw,30px)",
                background: "var(--color-surface-alt)",
                borderRadius: "var(--radius-md)",
                textAlign: "center",
                transition: "all var(--transition)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{card.icon}</div>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "6px", fontSize: "1.1rem" }}>
                {card.title}
              </h3>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{ color: card.color || "var(--color-primary)", fontWeight: "500", fontSize: "0.92rem" }}
                >
                  {card.value}
                </a>
              ) : (
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{card.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Hours */}
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", marginBottom: "20px", color: "var(--color-primary-dark)" }}>
            Çalışma Saatleri
          </h2>
          <div className="hours-grid">
            {hours.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  background: "var(--color-surface-alt)",
                  borderRadius: "var(--radius-md)",
                  borderLeft: "3px solid var(--color-primary)",
                }}
              >
                <p style={{ fontWeight: "600", color: "var(--color-primary-dark)", marginBottom: "4px", fontSize: "0.9rem" }}>
                  {h.day}
                </p>
                <p style={{ color: h.time === "Kapalı" ? "var(--color-text-muted)" : "var(--color-primary)", fontWeight: "500" }}>
                  {h.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
