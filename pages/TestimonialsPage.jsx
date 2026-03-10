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

export default function TestimonialsPage() {
  useScrollReveal();

  const testimonials = [
    { stars: "⭐⭐⭐⭐⭐", text: "Oğlum sosyalleşmeyi ve paylaşmayı öğrendi. Okula gitmekten korkuyor değil artık.", author: "Ayşe A.", role: "Veli (Çocuk)", avatar: "👩" },
    { stars: "⭐⭐⭐⭐⭐", text: "Dil gelişimi ve konuşması gözle görülür şekilde düzeldi. Çok teşekkür ederim.", author: "Mehmet Y.", role: "Veli (Çocuk)", avatar: "👨" },
    { stars: "⭐⭐⭐⭐⭐", text: "Bana yapışık gezen çocuğum artık kendi başına oynuyor. Harika bir değişim.", author: "Zeynep T.", role: "Veli (Çocuk)", avatar: "👩" },
    { stars: "⭐⭐⭐⭐⭐", text: "Ergenlik dönemindeki kızımın duygusal sorunlarında çok yardımcı oldu. Kendine güveni arttı.", author: "Fatma S.", role: "Veli (Ergen)", avatar: "👩" },
    { stars: "⭐⭐⭐⭐⭐", text: "Üniversite stresinden kurtulmak için başvurdum. Çok etkili ve profesyonel bir terapis.", author: "Ali D.", role: "Danışan (Genç)", avatar: "👨" },
    { stars: "⭐⭐⭐⭐⭐", text: "Evlilik danışmanlığı için geldim. Eşimle iletişim kurmayı yeniden öğrendik.", author: "Can B.", role: "Danışan (Yetişkin)", avatar: "👩" },
    { stars: "⭐⭐⭐⭐⭐", text: "Kaygı bozukluğum için 3 ay terapi aldım. Hayatım tamamen değişti. Çok teşekkür ederim.", author: "Selin K.", role: "Danışan (Yetişkin)", avatar: "👩" },
    { stars: "⭐⭐⭐⭐⭐", text: "İş stresi ve burnout sendromu için başvurdum. Şimdi daha dengeli bir yaşam sürüyorum.", author: "Kerem T.", role: "Danışan (Yetişkin)", avatar: "👨" },
    { stars: "⭐⭐⭐⭐⭐", text: "Yaşlılıkta yalnızlık ve depresyon hissediyordum. Dr. Kaya'nın seansları bana yeni bir perspektif verdi.", author: "Hülya Ş.", role: "Danışan (Yaşlı)", avatar: "👵" },
    { stars: "⭐⭐⭐⭐⭐", text: "Travma terapisi aldım. Geçmişimi kabul etmeyi ve ileriye bakmayı öğrendim.", author: "Murat A.", role: "Danışan (Yetişkin)", avatar: "👨" },
  ];

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px", background: "linear-gradient(135deg, #2E5C52 0%, #4A7C6F 100%)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>Yorumlar</span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "24px", color: "white" }}>
            Danışanlarımın Deneyimleri
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "600px", fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", margin: "0 auto" }}>
            Gerçek insanlardan gerçek geri bildirimler
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card reveal" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "var(--radius-md)", padding: "32px" }}>
              <div className="testimonial-stars">{testimonial.stars}</div>
              <p className="testimonial-text" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.7", marginBottom: "20px", fontStyle: "italic" }}>
                "{testimonial.text}"
              </p>
              <div className="testimonial-author" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div className="testimonial-avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "600", color: "white", flexShrink: 0, background: "var(--color-primary)" }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="testimonial-author-name" style={{ fontSize: "0.85rem", fontWeight: "600", color: "white" }}>{testimonial.author}</div>
                  <div className="testimonial-author-role" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ background: "rgba(255,255,255,0.1)", padding: "40px", borderRadius: "var(--radius-lg)", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>Sizin Deneyiminiz Önemli</h2>
          <p style={{ fontSize: "1rem", marginBottom: "24px", color: "rgba(255,255,255,0.8)" }}>
            Terapi seanslarından sonra deneyiminizi paylaşmak diğer insanlara yardımcı olabilir.
          </p>
          <a href="#iletisim" className="btn btn-primary">Bize Yazın</a>
        </div>
      </div>
      <Contact />
    </section>
  );
}
