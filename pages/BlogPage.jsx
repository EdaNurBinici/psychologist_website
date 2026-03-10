import { useEffect } from "react";
import Contact from "../components/Contact";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const articles = [
  { id: 1, title: "Anksiyete ile Başa Çıkma Yolları", excerpt: "Anksiyete bozukluğu günümüzde yaygın bir sorun. Pratik tekniklerle nasıl yönetebileceğinizi öğrenin.", date: "15 Mart 2024", readTime: "5 dk", category: "Ruh Sağlığı", image: "🧠" },
  { id: 2, title: "Stres Yönetimi: Günlük Hayatta Uygulanabilir Yöntemler", excerpt: "İş hayatı ve kişisel yaşamda stresi azaltmak için etkili stratejiler. Mindfulness ve nefes teknikleri.", date: "10 Mart 2024", readTime: "6 dk", category: "Stres Yönetimi", image: "🧘" },
  { id: 3, title: "Uyku Sorunları ve Psikolojik Etkileri", excerpt: "Uyku kalitesi ruh sağlığımızı doğrudan etkiler. Uyku hijyeni ve bilişsel davranışçı terapi yaklaşımları.", date: "5 Mart 2024", readTime: "7 dk", category: "Uyku Sağlığı", image: "😴" },
  { id: 4, title: "İlişki Sorunlarında Etkili İletişim", excerpt: "Sağlıklı ilişkiler için iletişim becerilerini geliştirmenin önemi. Empati ve aktif dinleme teknikleri.", date: "28 Şubat 2024", readTime: "6 dk", category: "İlişkiler", image: "💬" },
];

export default function BlogPage() {
  useScrollReveal();

  return (
    <section style={{ minHeight: "100vh", padding: "120px 0 80px", background: "var(--color-surface-alt)" }}>
      <div className="container">
        <div className="reveal page-header" style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="section-label">Blog</span>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", marginBottom: "16px", color: "var(--color-primary-dark)" }}>
            Psikoloji Yazıları
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "560px", color: "var(--color-text-muted)" }}>
            Ruh sağlığı, stres yönetimi ve kişisel gelişim hakkında bilgilendirici yazılar
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="reveal"
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                transition: "all var(--transition)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ padding: "28px 28px 20px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "14px" }}>{article.image}</div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: "600", color: "white", background: "var(--color-primary)", padding: "3px 10px", borderRadius: "100px" }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", color: "var(--color-primary-dark)", marginBottom: "10px", lineHeight: "1.4" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginBottom: "12px", lineHeight: "1.6" }}>
                  {article.excerpt}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{article.date}</p>
              </div>
              <div style={{ padding: "14px 28px 22px", borderTop: "1px solid var(--color-border)" }}>
                <a href="#" style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Yazıyı Oku →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="reveal" style={{ background: "linear-gradient(135deg, #4A7C6F 0%, #2E5C52 100%)", padding: "clamp(32px,5vw,60px) clamp(20px,4vw,40px)", borderRadius: "var(--radius-lg)", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", marginBottom: "12px" }}>Yazılarımızdan Haberdar Olun</h2>
          <p style={{ fontSize: "0.95rem", marginBottom: "24px", color: "rgba(255,255,255,0.8)" }}>
            Yeni yazılar yayınlandığında e-posta ile bildirim alın
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              style={{ flex: 1, padding: "12px 16px", borderRadius: "var(--radius-sm)", border: "none", fontSize: "0.9rem", minWidth: 0 }}
            />
            <button
              style={{ padding: "12px 24px", background: "var(--color-accent)", color: "white", border: "none", borderRadius: "var(--radius-sm)", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => (e.target.style.background = "#b09070")}
              onMouseLeave={(e) => (e.target.style.background = "var(--color-accent)")}
            >
              Abone Ol
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
