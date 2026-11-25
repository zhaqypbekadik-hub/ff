function Services() {
  const services = [
    {
      title: "Электронды кітаптар",
      description: "Кітаптарды онлайн оқуға мүмкіндік.",
      icon: "📖"
    },
    {
      title: "Аудиокітаптар",
      description: "Кітаптарды тыңдап, білім алыңыз.",
      icon: "🎧"
    },
    {
      title: "Кітап ұсыныстары",
      description: "Өзіңізге қызықты кітаптарды табыңыз.",
      icon: "✨"
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Біздің қызметтер</h2>

      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.icon} {service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;