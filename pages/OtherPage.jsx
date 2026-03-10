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

export default function OtherPage() {
  useScrollReveal();

  return (
    <section className="other-page" style={{ minHeight: "100vh", padding: "120px 0 80px" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <span className="section-label">Diğer Bilgiler</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "24px" }}>
            Vesaire
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            Psikolog olarak sunduğum hizmetler, deneyimim ve profesyonel yaklaşımım hakkında daha fazla bilgi.
          </p>
        </div>

        <div className="reveal" style={{ marginBottom: "48px" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Profesyonel Deneyim
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "16px" }}>
            15 yılı aşkın klinik deneyimle çocuk, ergen ve yetişkinlere psikoterapi hizmeti sunuyorum. 
            Özel eğitim almış olduğum terapi yöntemleriyle bireylerin psikolojik sağlığını güçlendirmeyi amaçlıyorum.
          </p>
        </div>

        <div className="reveal" style={{ marginBottom: "48px" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Uzmanlık Alanları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Bilişsel Davranışçı Terapi</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Düşünce ve davranışların duygular üzerindeki etkisini çalışarak sorunları çözmek.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>EMDR Terapi</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Travmatik deneyimlerin işlenmesinde etkili bir terapi yöntemi.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Psikodinamik Terapi</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Bilinçaltı dinamikleri keşfederek derin değişim sağlamak.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Mindfulness</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Farkındalık ve meditasyon teknikleriyle stres yönetimi.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Şema Terapi</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Uzun süreli psikolojik sorunların köklerine inen terapi.
              </p>
            </div>
            <div style={{ padding: "20px", background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ color: "var(--color-primary-dark)", marginBottom: "10px" }}>Travma Terapisi</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                Travmatik olayların etkilerini azaltmak ve iyileşme sağlamak.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Neden Beni Seçmelisiniz?
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>15+ yıl klinik deneyim</span>
            </li>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Güvenli ve yargısız ortam</span>
            </li>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Kanıta dayalı terapi yöntemleri</span>
            </li>
            <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>Kişiselleştirilmiş tedavi planı</span>
            </li>
            <li style={{ padding: "12px 0", display: "flex", gap: "12px" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}>✓</span>
              <span>4.9★ memnuniyet oranı</span>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </section>
  );
}
