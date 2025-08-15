import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import foshoLogo from "@assets/fosho_logo_1755230179777.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'why', label: '차별점' },
    { id: 'services', label: '서비스' },
    { id: 'process', label: '프로세스' },
    { id: 'results', label: '성과' },
    { id: 'contact', label: '문의' },
  ];

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-900' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={foshoLogo} 
              alt="FOSHO Marketing" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-gray-700 hover:text-medical-blue' : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-colors ${
                isScrolled ? 'text-medical-blue' : 'text-white'
              }`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors ${
                isScrolled ? 'text-medical-blue' : 'text-white'
              }`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 transition-colors ${
            isScrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-sm'
          }`}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 transition-colors hover:opacity-80 ${
                    isScrolled ? 'text-gray-700 hover:text-medical-blue' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
