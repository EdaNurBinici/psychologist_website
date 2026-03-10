import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">Dr. Ayşe<span>.</span></div>
            <p>Klinik Psikolog olarak, bireylerin psikolojik sağlığını güçlendirmek ve yaşam kalitesini artırmak için çalışıyorum.</p>
          </div>
          <div className="footer-col">
            <h4>Sayfalar</h4>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/hakkinda">Hakkımda</Link></li>
              <li><Link to="/hizmetler">Hizmetler</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/randevu">Randevu</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul>
              <li><a href="tel:+905555555555">0555 555 5555</a></li>
              <li><a href="mailto:ornek@info.com">ornek@info.com</a></li>
              <li><a href="https://wa.me/905555555555" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Dr. Ayşe Kaya. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
