import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="ana-sayfa">
      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Şu an randevu alınabilir
            </div>
            <h1>Dr. Ayşe<br/><em>Kaya</em></h1>
            <p className="hero-title-sub">Klinik Psikolog — Psikoterapi Uzmanı</p>
            <p className="hero-desc">15 yıllık deneyimle çocuk, ergen ve yetişkinlere psikoterapi hizmeti sunuyorum. Birlikte daha sağlıklı bir zihinsel yaşam inşa edelim.</p>
            <div className="hero-buttons">
              <Link to="/randevu" className="btn btn-primary">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Randevu Al
              </Link>
              <a href="https://wa.me/905551234567" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+905551234567" className="btn btn-phone">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
                Hemen Ara
              </a>
            </div>
            <div className="hero-stats">
              <div><span className="hero-stat-number">15+</span><span className="hero-stat-label">Yıl Deneyim</span></div>
              <div><span className="hero-stat-number">800+</span><span className="hero-stat-label">Danışan</span></div>
              <div><span className="hero-stat-number">4.9★</span><span className="hero-stat-label">Memnuniyet</span></div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-card">
              <img 
                src="/psikolog_resmi.avif" 
                alt="Dr. Ayşe Kaya - Klinik Psikolog"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="hero-float-card hero-float-card-1">
              <div className="hero-float-icon hero-float-icon-green">🧠</div>
              <div>
                <div className="hero-float-text-main">Uzman Terapi</div>
                <div className="hero-float-text-sub">BDT & Psikodinamik</div>
              </div>
            </div>
            <div className="hero-float-card hero-float-card-2">
              <div className="hero-float-icon hero-float-icon-accent">🎓</div>
              <div>
                <div className="hero-float-text-main">Boğaziçi Üniversitesi</div>
                <div className="hero-float-text-sub">Klinik Psikoloji</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
