export default function About() {
  return (
    <section className="about" id="hakkinda">
      <div className="container">
        <div className="about-inner">
          <div className="about-image-wrap reveal">
            <div className="about-image-card">
              <img 
                src="/psikolog_resmi2.avif" 
                alt="Dr. Ayşe Kaya - Hakkımda"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about-accent-block"></div>
          </div>
          <div className="about-content reveal">
            <span className="section-label">Hakkımda</span>
            <h2 className="section-title">İçinizdeki gücü<br/>birlikte keşfedelim</h2>
            <p className="section-subtitle">Merhaba, ben Dr. Ayşe Kaya. 15 yılı aşkın klinik deneyimimle bireylerin psikolojik sağlığını güçlendirmelerine, kendilerini daha iyi tanımalarına ve yaşam kalitelerini artırmalarına destek oluyorum.</p>
            <p className="section-subtitle" style={{marginBottom:"28px"}}>Seanslarımda güvenli, yargısız ve destekleyici bir ortam sunmayı en temel ilkem olarak benimsiyorum. Özellikle çocuklar için oyun terapisi ve interaktif yöntemler kullanarak, her yaştan danışanla etkili bir terapötik ilişki kurarım.</p>
            <div className="about-tags">
              <span className="about-tag">Oyun Terapisi</span>
              <span className="about-tag">Dil & Sosyal Beceri</span>
              <span className="about-tag">Okula Hazırlık</span>
              <span className="about-tag">Bilişsel Davranışçı Terapi</span>
              <span className="about-tag">EMDR</span>
              <span className="about-tag">Mindfulness</span>
            </div>
            <div className="about-credentials">
              <div className="about-credential"><span className="about-credential-icon">🎓</span><span className="about-credential-text">Boğaziçi Üniversitesi, Psikoloji Lisans</span></div>
              <div className="about-credential"><span className="about-credential-icon">📜</span><span className="about-credential-text">Klinik Psikoloji Yüksek Lisans</span></div>
              <div className="about-credential"><span className="about-credential-icon">🏆</span><span className="about-credential-text">EMDR Sertifikası</span></div>
              <div className="about-credential"><span className="about-credential-icon">✓</span><span className="about-credential-text">Psikoloji Odası Üyesi</span></div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "80px", paddingTop: "80px", borderTop: "1px solid var(--color-border)" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 className="section-title">Oyun Terapisi Ortamı</h3>
            <p className="section-subtitle">Çocuklar için güvenli, renkli ve eğlenceli bir terapi ortamı</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div className="reveal" style={{ background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎮</div>
              <h4 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--color-primary-dark)" }}>Oyun Terapisi</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Çocukların duygularını oyun aracılığıyla ifade etmesi</p>
            </div>
            <div className="reveal" style={{ background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🧩</div>
              <h4 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--color-primary-dark)" }}>Eğitici Oyuncaklar</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Gelişim aşamasına uygun materyaller</p>
            </div>
            <div className="reveal" style={{ background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎨</div>
              <h4 style={{ fontSize: "1rem", marginBottom: "8px", color: "var(--color-primary-dark)" }}>Yaratıcı Atölyeler</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Sanat ve müzik terapisi etkinlikleri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
