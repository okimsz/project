import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Years Experience' },
    { number: '1000+', label: 'Global Clients' },
    { number: '500+', label: 'Ink Formulations' },
    { number: '24/7', label: 'Technical Support' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Excellence in
              <span className="block text-blue-400">Ink Manufacturing</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              With decades of expertise in ink manufacturing, we deliver premium quality solutions
              that meet the demanding requirements of modern printing and industrial applications.
              Our commitment to innovation and sustainability drives us to create cutting-edge
              formulations that exceed industry standards.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From offset printing inks to specialized industrial coatings, our comprehensive
              range of products serves diverse markets worldwide, backed by exceptional
              technical support and customization capabilities.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;