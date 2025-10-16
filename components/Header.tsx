import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        <path d="M12 2L3 11L12 22L21 11L12 2Z" fill="url(#logoGradient)" fillOpacity="0.4" />
        <path d="M12 2L21 11L12 14L3 11L12 2Z" fill="url(#logoGradient)" />
    </svg>
);

const navLinks = [
  { href: '#modulos', label: 'O que vais aprender' },
  { href: '#testemunhos', label: 'Testemunhos' },
  { href: '#preco', label: 'Preço' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const sections = sectionIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050711]/80 backdrop-blur-lg border-b border-gray-800/70 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Logo />
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-white transition-colors">Do Zero ao Lucro Online</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-gray-900/50 border border-gray-700/50 rounded-full p-1">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-white bg-blue-600'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="https://buy.stripe.com/14AaEX7LXe2zghA9MN5sA07" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 hover:brightness-110">
          <span>Garante a tua vaga</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;