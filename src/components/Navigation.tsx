"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-white');
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInDesktopNav = dropdownRef.current && dropdownRef.current.contains(target);
      const isInMobileMenu = mobileMenuRef.current && mobileMenuRef.current.contains(target);
      
      if (!isInDesktopNav && !isInMobileMenu) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Get all sections
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if section is in viewport
        if (scrollY >= sectionTop - 150 && scrollY < sectionBottom - 150) {
          // Get background color from section
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const bgClass = section.className;
          const inlineStyle = section.getAttribute('style') || '';
          
          // Determine navbar background based on section
          if (bgClass.includes('bg-white') || bgColor === 'rgb(255, 255, 255)' || bgColor === 'rgba(255, 255, 255, 1)') {
            setNavbarBg('bg-white');
          } else if (bgClass.includes('FCEEEB') || inlineStyle.includes('#FCEEEB') || inlineStyle.includes('FCEEEB')) {
            setNavbarBg('bg-[#FCEEEB]');
          } else if (bgClass.includes('ffeae5') || inlineStyle.includes('#ffeae5') || inlineStyle.includes('ffeae5')) {
            setNavbarBg('bg-[#ffeae5]');
          } else if (bgClass.includes('gray-50') || bgClass.includes('bg-gray-50')) {
            setNavbarBg('bg-gray-50');
          } else if (bgClass.includes('bg-gradient')) {
            setNavbarBg('bg-white');
          } else {
            // Check if background is light colored
            const rgb = bgColor.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
              const r = parseInt(rgb[0]);
              const g = parseInt(rgb[1]);
              const b = parseInt(rgb[2]);
              // If average is > 200, it's a light color
              const avg = (r + g + b) / 3;
              setNavbarBg(avg > 200 ? 'bg-white' : 'bg-white');
            } else {
              setNavbarBg('bg-white');
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#5a5a5a' }} className="py-2 fixed top-0 left-0 right-0 z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white text-sm font-medium">Contact Your Nearest Centre</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Our Centres</a>
            <button className="bg-yellow-400 text-black px-5 py-1.5 rounded-md text-sm font-bold hover:bg-yellow-500">Free Demo</button>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Student Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${navbarBg} shadow-sm fixed left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'shadow-md' : ''}`} style={{ top: '40px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="GAway Global Logo"
                width={180}
                height={65}
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Home</a>
              
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>About</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Our Story</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Team</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Careers</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('universities')}
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Universities</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'universities' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'universities' && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Ivy League</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Russell Group</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">German Universities</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Italian Universities</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('countries')}
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Countries</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'countries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'countries' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">USA</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">UK</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Germany</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Italy</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">France</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Canada</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Admissions Counselling</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Visa Assistance</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">Test Preparation</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Success</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} className="lg:hidden p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium py-2">Home</a>
              
              <div>
                <button
                  onClick={() => toggleDropdown('about-mobile')}
                  className="w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2 flex justify-between items-center"
                >
                  <span>About</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about-mobile' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Our Story</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Team</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Careers</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('universities-mobile')}
                  className="w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2 flex justify-between items-center"
                >
                  <span>Universities</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'universities-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'universities-mobile' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Ivy League</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Russell Group</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">German Universities</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Italian Universities</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('countries-mobile')}
                  className="w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2 flex justify-between items-center"
                >
                  <span>Countries</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'countries-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'countries-mobile' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">USA</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">UK</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Germany</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Italy</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('services-mobile')}
                  className="w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2 flex justify-between items-center"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services-mobile' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Admissions Counselling</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Visa Assistance</a>
                    <a href="#" className="block py-1 text-gray-600 hover:text-orange-500">Test Preparation</a>
                  </div>
                )}
              </div>

              <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium py-2">Success</a>
              <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium py-2">Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

