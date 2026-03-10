export function Process() {
  const steps = [
    { num: "1", title: "İlk Görüşme", desc: "Tanışma ve ihtiyaçlarınızı anlamak" },
    { num: "2", title: "Değerlendirme", desc: "Durumunuzun kapsamlı analizi" },
    { num: "3", title: "Tedavi Planı", desc: "Kişiselleştirilmiş terapi programı" },
    { num: "4", title: "İyileşme", desc: "Hedeflerinize ulaşmak" },
  ];

  return (
    <section className="process" id="surec">
      <div className="container">
        <div className="process-header">
          <span className="section-label">Süreç</span>
          <h2 className="section-title">Terapi Süreci</h2>
          <p className="section-subtitle">Adım adım iyileşme yolculuğunuz</p>
        </div>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step reveal">
              <div className="process-step-number">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    { stars: "⭐⭐⭐⭐⭐", text: "Dr. Kaya'nın profesyonel yaklaşımı ve empati dolu tutumu beni çok etkiledi. Seanslar sonrası kendimi çok daha iyi hissediyorum.", author: "Aylin K.", role: "Danışan" },
    { stars: "⭐⭐⭐⭐⭐", text: "Yıllardır çözemediğim sorunları Dr. Kaya ile çözebildim. Çok teşekkür ederim.", author: "Mehmet Y.", role: "Danışan" },
    { stars: "⭐⭐⭐⭐⭐", text: "Güvenli bir ortamda kendimi ifade edebilmek ve destek almak çok değerli. Herkese tavsiye ederim.", author: "Zeynep T.", role: "Danışan" },
  ];

  return (
    <section className="testimonials" id="yorumlar">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Yorumlar</span>
          <h2 className="section-title">Danışanlarımın Deneyimleri</h2>
          <p className="section-subtitle">Gerçek insanlardan gerçek geri bildirimler</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card reveal">
              <div className="testimonial-stars">{testimonial.stars}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background: "var(--color-primary)"}}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-author-name">{testimonial.author}</div>
                  <div className="testimonial-author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
