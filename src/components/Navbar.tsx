import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              Parthiban S
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-blue-600 text-lg font-semibold transition-all duration-300 group py-2 px-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-lg font-semibold w-full text-left rounded-lg hover:bg-blue-50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
