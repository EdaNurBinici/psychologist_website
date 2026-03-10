export default function Services() {
  const services = [
    { icon: "🧠", title: "Bilişsel Davranışçı Terapi", desc: "Düşünce ve davranışların duygular üzerindeki etkisini çalışarak sorunları çözmek." },
    { icon: "💫", title: "EMDR Terapi", desc: "Travmatik deneyimlerin işlenmesinde etkili bir terapi yöntemi." },
    { icon: "🔍", title: "Psikodinamik Terapi", desc: "Bilinçaltı dinamikleri keşfederek derin değişim sağlamak." },
    { icon: "🧘", title: "Mindfulness", desc: "Farkındalık ve meditasyon teknikleriyle stres yönetimi." },
    { icon: "🎯", title: "Şema Terapi", desc: "Uzun süreli psikolojik sorunların köklerine inen terapi." },
    { icon: "❤️", title: "Travma Terapisi", desc: "Travmatik olayların etkilerini azaltmak ve iyileşme sağlamak." },
  ];

  return (
    <section className="services" id="hizmetler">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Hizmetler</span>
          <h2 className="section-title">Sunduğum Terapi Yöntemleri</h2>
          <p className="section-subtitle">Kanıta dayalı, etkili terapi yöntemleriyle kişiselleştirilmiş tedavi planları sunuyorum.</p>
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
