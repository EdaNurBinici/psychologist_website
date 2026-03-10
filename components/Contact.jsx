import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact" id="iletisim">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">İletişim</span>
          <h2 className="section-title">Bize Ulaşın</h2>
          <p className="section-subtitle">Sorularınız için bize yazın veya arayın</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card reveal">
              <div className="contact-card-icon" style={{background: "rgba(74,124,111,0.1)", color: "var(--color-primary)"}}>📍</div>
              <div>
                <div className="contact-card-label">Adres</div>
                <div className="contact-card-value">[Adres Buraya Gelecek]</div>
              </div>
            </div>
            <div className="contact-card reveal">
              <div className="contact-card-icon" style={{background: "rgba(74,124,111,0.1)", color: "var(--color-primary)"}}>📞</div>
              <div>
                <div className="contact-card-label">Telefon</div>
                <div className="contact-card-value"><a href="tel:+905555555555">0555 555 5555</a></div>
              </div>
            </div>
            <div className="contact-card reveal">
              <div className="contact-card-icon" style={{background: "rgba(74,124,111,0.1)", color: "var(--color-primary)"}}>✉️</div>
              <div>
                <div className="contact-card-label">E-posta</div>
                <div className="contact-card-value"><a href="mailto:info@example.com">[E-posta Adresi]</a></div>
              </div>
            </div>
            <div className="contact-map reveal">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5678901234567!2d29.0!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7b5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sBeşiktaş%2C%20İstanbul!5e0!3m2!1str!2str!4v1234567890123" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: "8px" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p style={{ fontSize: "12px", color: "#666", marginTop: "8px", textAlign: "center" }}>
                Burası konum temsilidir, satın aldığınızda kendi konumunuzla güncellenecektir.
              </p>
            </div>
          </div>
          <div className="contact-form-wrap reveal">
            <h3>Randevu Talebinde Bulunun</h3>
            <p>Lütfen aşağıdaki formu doldurun, en kısa sürede sizinle iletişime geçeceğiz.</p>
            {submitted && <div className="form-success">✓ Mesajınız başarıyla gönderildi!</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Adınız</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>E-posta</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Telefon</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Mesajınız</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
