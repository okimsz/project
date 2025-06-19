import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      title: 'Offset Printing Inks',
      description: 'High-quality offset inks for commercial and packaging printing with excellent color consistency and printability.',
      features: ['Superior color reproduction', 'Fast setting properties', 'Low VOC formulations']
    },
    {
      title: 'Digital Printing Inks',
      description: 'Advanced digital inks designed for high-speed digital printing systems with exceptional durability.',
      features: ['Wide color gamut', 'Fade resistance', 'Multiple substrate compatibility']
    },
    {
      title: 'UV Curable Inks',
      description: 'Environmentally friendly UV inks that cure instantly under UV light for superior finish quality.',
      features: ['Instant curing', 'Scratch resistance', 'Eco-friendly formula']
    },
    {
      title: 'Specialty Coatings',
      description: 'Custom formulated coatings for industrial applications requiring specific performance characteristics.',
      features: ['Custom formulations', 'Industrial grade', 'Technical support included']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Product
            <span className="block text-blue-400">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-performance inks and coatings engineered for precision,
            durability, and exceptional print quality across various applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-blue-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;