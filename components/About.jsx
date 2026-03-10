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
            <p className="section-subtitle" style={{marginBottom:"28px"}}>Seanslarımda güvenli, yargısız ve destekleyici bir ortam sunmayı en temel ilkem olarak benimsiyorum.</p>
            <div className="about-tags">
              <span className="about-tag">Bilişsel Davranışçı Terapi</span>
              <span className="about-tag">EMDR</span>
              <span className="about-tag">Psikodinamik Terapi</span>
              <span className="about-tag">Mindfulness</span>
              <span className="about-tag">Şema Terapi</span>
              <span className="about-tag">Travma Terapisi</span>
            </div>
            <div className="about-credentials">
              <div className="about-credential"><span className="about-credential-icon">🎓</span><span className="about-credential-text">Boğaziçi Üniversitesi, Psikoloji Lisans</span></div>
              <div className="about-credential"><span className="about-credential-icon">📜</span><span className="about-credential-text">Klinik Psikoloji Yüksek Lisans</span></div>
              <div className="about-credential"><span className="about-credential-icon">🏆</span><span className="about-credential-text">EMDR Sertifikası</span></div>
              <div className="about-credential"><span className="about-credential-icon">✓</span><span className="about-credential-text">Psikoloji Odası Üyesi</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
