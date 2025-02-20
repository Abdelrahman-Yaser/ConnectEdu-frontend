const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build modern, responsive, and high-performance web applications using the latest technologies.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Our design team creates visually stunning and user-friendly interfaces to enhance user experience.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improve your website’s search ranking and online visibility with our expert SEO strategies.",
      icon: "⚡",
    },
  ];
  
  const Services = () => {
    return (
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  