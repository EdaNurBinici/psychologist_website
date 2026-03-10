export default function Services() {
  const services = [
    { icon: "🎮", title: "Oyun Terapisi & Atölyeleri", desc: "Çocukların oyun aracılığıyla duygularını ifade etmesi ve sosyal beceriler geliştirmesi." },
    { icon: "🗣️", title: "Dil ve Sosyal Beceri Gelişimi", desc: "Konuşma, iletişim ve sosyal etkileşim becerilerinin geliştirilmesi." },
    { icon: "🎒", title: "Okula Hazırlık & Adaptasyon", desc: "Anneden ayrılamayan çocuklar için okula uyum seansları ve hazırlık programı." },
    { icon: "🧠", title: "Bilişsel Davranışçı Terapi", desc: "Düşünce ve davranışların duygular üzerindeki etkisini çalışarak sorunları çözmek." },
    { icon: "💫", title: "EMDR Terapi", desc: "Travmatik deneyimlerin işlenmesinde etkili bir terapi yöntemi." },
    { icon: "🧘", title: "Mindfulness & Stres Yönetimi", desc: "Farkındalık ve meditasyon teknikleriyle stres yönetimi." },
  ];

  return (
    <section className="services" id="hizmetler">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Hizmetler</span>
          <h2 className="section-title">Çocuk ve Yetişkin Terapi Hizmetleri</h2>
          <p className="section-subtitle">Kanıta dayalı, etkili terapi yöntemleriyle çocuklar ve yetişkinler için kişiselleştirilmiş tedavi planları sunuyorum.</p>
        </div>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card reveal">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
