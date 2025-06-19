import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">INK</span>
              </div>
              <span className="text-lg font-bold">InkTech Industries</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Leading ink manufacturer delivering premium quality solutions with innovative
              technology and exceptional service worldwide.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <button key={social} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              {['Offset Printing Inks', 'Digital Printing Inks', 'UV Curable Inks', 'Specialty Coatings'].map((product) => (
                <li key={product}>
                  <button className="hover:text-blue-400 transition-colors duration-200">
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {['Custom Formulation', 'Quality Testing', 'Technical Support', 'Fast Delivery'].map((service) => (
                <li key={service}>
                  <button className="hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Careers', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 InkTech Industries. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <button key={link} className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;