import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar" data-page={location.pathname}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            Dr. Ayşe<span>.</span>
          </Link>
          <ul className="navbar-links">
            <li><Link to="/hakkinda">Hakkında</Link></li>
            <li><Link to="/hizmetler">Hizmetler</Link></li>
            <li><Link to="/surec">Süreç</Link></li>
            <li><Link to="/yorumlar">Yorumlar</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sss">SSS</Link></li>
          </ul>
          <div className="navbar-cta">
            <Link to="/randevu" className="btn btn-primary">Randevu Al</Link>
            <button 
              className="navbar-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu">
        <button 
          className="mobile-menu-close" 
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <Link to="/hakkinda" onClick={() => setMobileMenuOpen(false)}>Hakkında</Link>
        <Link to="/hizmetler" onClick={() => setMobileMenuOpen(false)}>Hizmetler</Link>
        <Link to="/surec" onClick={() => setMobileMenuOpen(false)}>Süreç</Link>
        <Link to="/yorumlar" onClick={() => setMobileMenuOpen(false)}>Yorumlar</Link>
        <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link to="/sss" onClick={() => setMobileMenuOpen(false)}>SSS</Link>
        <Link to="/randevu" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Randevu Al</Link>
      </div>
    </nav>
  );
}
