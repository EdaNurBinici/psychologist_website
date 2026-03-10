import { useState, useEffect } from "react";
import Contact from "../components/Contact";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function AppointmentPage() {
  useScrollReveal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
    setAuthMode("login");
  }, []);

  const getAvailableDates = () => {
    const dates = [];
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      if (date.getDay() !== 0) dates.push(date);
    }
    return dates;
  };

  const getAvailableTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 17 && min > 0) break;
        times.push(`${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
      }
    }
    return times;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Lütfen tarih ve saat seçiniz");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const availableDates = getAvailableDates();
  const availableTimes = getAvailableTimes();
  const formatDate = (d) =>
    new Intl.DateTimeFormat("tr-TR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(d);
  const isDateSelected = (d) => selectedDate?.toDateString() === d.toDateString();

  return (
    <>
      <section className="page-hero" style={{ background: "var(--color-surface-alt)" }}>
        <div className="container">
          <div className="reveal page-header">
            <span className="section-label">Randevu</span>
            <h1 className="section-title" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", marginBottom: "16px" }}>
              Online Randevu Sistemi
            </h1>
            <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "560px" }}>
              Uygun bir tarih ve saat seçerek randevunuzu alın
            </p>
          </div>

          {!isLoggedIn ? (
            <div style={{ maxWidth: "420px", margin: "40px auto 0" }}>
              <div className="reveal" style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "clamp(20px,4vw,40px)" }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
                  <button
                    onClick={() => setAuthMode("login")}
                    style={{
                      flex: 1,
                      padding: "12px",
                      background: authMode === "login" ? "var(--color-primary)" : "var(--color-surface-alt)",
                      color: authMode === "login" ? "white" : "var(--color-text)",
                      border: "none",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all var(--transition)"
                    }}
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => setAuthMode("register")}
                    style={{
                      flex: 1,
                      padding: "12px",
                      background: authMode === "register" ? "var(--color-primary)" : "var(--color-surface-alt)",
                      color: authMode === "register" ? "white" : "var(--color-text)",
                      border: "none",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all var(--transition)"
                    }}
                  >
                    Kayıt Ol
                  </button>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                  {authMode === "register" && (
                    <div className="form-group">
                      <label>Adınız Soyadınız</label>
                      <input type="text" placeholder="Adınız Soyadınız" required />
                    </div>
                  )}
                  <div className="form-group">
                    <label>E-posta</label>
                    <input type="email" placeholder="mail@ornek.com" required />
                  </div>
                  <div className="form-group">
                    <label>Şifre</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  {authMode === "register" && (
                    <div className="form-group">
                      <label>Şifre Tekrar</label>
                      <input type="password" placeholder="••••••••" required />
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary form-submit">
                    {authMode === "login" ? "Giriş Yap" : "Kayıt Ol"}
                  </button>
                </form>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "16px" }}>
                  💡 Bu örnek bir giriş ekranıdır. Satın aldığınızda gerçek kimlik doğrulama sistemi kurulacaktır.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              <div className="reveal" style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "clamp(20px,4vw,40px)", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "var(--color-primary-dark)", marginBottom: "20px" }}>
                  1. Tarih Seçiniz
                </h2>
                <div className="appt-date-grid">
                  {availableDates.map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      style={{
                        padding: "12px 6px",
                        borderRadius: "var(--radius-md)",
                        border: isDateSelected(date) ? "2px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                        background: isDateSelected(date) ? "rgba(74,124,111,0.1)" : "var(--color-surface-alt)",
                        cursor: "pointer",
                        transition: "all var(--transition)",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: "3px" }}>
                        {date.toLocaleDateString("tr-TR", { weekday: "short" })}
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-primary-dark)" }}>
                        {date.getDate()}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)" }}>
                        {date.toLocaleDateString("tr-TR", { month: "short" })}
                      </div>
                    </button>
                  ))}
                </div>
                {selectedDate && (
                  <div style={{ marginTop: "16px", padding: "12px 16px", background: "rgba(74,124,111,0.08)", borderRadius: "var(--radius-md)", color: "var(--color-primary-dark)", fontWeight: "600", fontSize: "0.9rem" }}>
                    📅 {formatDate(selectedDate)}
                  </div>
                )}
              </div>

              {selectedDate && (
                <div className="reveal" style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "clamp(20px,4vw,40px)", marginBottom: "20px" }}>
                  <h2 style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "var(--color-primary-dark)", marginBottom: "20px" }}>
                    2. Saat Seçiniz
                  </h2>
                  <div className="appt-time-grid">
                    {availableTimes.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: "10px 4px",
                          borderRadius: "var(--radius-sm)",
                          border: selectedTime === time ? "2px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                          background: selectedTime === time ? "var(--color-primary)" : "var(--color-surface-alt)",
                          color: selectedTime === time ? "white" : "var(--color-text)",
                          cursor: "pointer",
                          transition: "all var(--transition)",
                          fontWeight: "500",
                          fontSize: "0.82rem",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime && (
                    <div style={{ marginTop: "16px", padding: "12px 16px", background: "rgba(74,124,111,0.08)", borderRadius: "var(--radius-md)", color: "var(--color-primary-dark)", fontWeight: "600", fontSize: "0.9rem" }}>
                      🕐 Seçilen Saat: {selectedTime}
                    </div>
                  )}
                </div>
              )}

              {selectedDate && selectedTime && (
                <div className="reveal" style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "clamp(20px,4vw,40px)" }}>
                  <h2 style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "var(--color-primary-dark)", marginBottom: "20px" }}>
                    3. Bilgilerinizi Girin
                  </h2>
                  {submitted && (
                    <div className="form-success" style={{ display: "flex", marginBottom: "16px" }}>
                      ✅ Randevunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="appt-form-row">
                      <div className="form-group">
                        <label>Adınız</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div className="form-group">
                        <label>E-posta</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="mail@ornek.com"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Telefon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0555 555 5555"
                      />
                    </div>
                    <div className="form-group">
                      <label>Notlar (İsteğe Bağlı)</label>
                      <textarea
                        value={formData.message}
                        rows={3}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Kısaca durumunuzu anlatabilirsiniz..."
                      />
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">
                      Randevuyu Onayla →
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Contact />
    </>
  );
}
