'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Add hysteresis to prevent rapid toggling
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else if (scrollPosition < 30) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update underline position when pathname or hover changes
    const activeIndex = navLinks.findIndex(link => link.href === pathname);
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    if (targetIndex >= 0 && navRefs.current[targetIndex]) {
      const element = navRefs.current[targetIndex];
      if (element) {
        setUnderlineStyle({
          left: element.offsetLeft,
          width: element.offsetWidth,
        });
      }
    }
  }, [pathname, hoveredIndex]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300 border-b bg-white"
      style={{
        borderColor: '#e5e7eb',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.05)' : '0 2px 4px rgba(0,0,0,0.02)'
      }}
    >
      <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem' }}>
        <div className="flex items-center justify-between transition-all duration-300" style={{ height: isScrolled ? '4rem' : '5rem' }}>
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300">
            <div className="shrink-0 transition-all duration-300 flex items-center justify-center bg-blue-600 rounded-full" style={{ width: isScrolled ? '2.5rem' : '3rem', height: isScrolled ? '2.5rem' : '3rem' }}>
              <span className="text-white font-bold" style={{ fontSize: isScrolled ? '1rem' : '1.2rem' }}>BAS</span>
            </div>
            <span className="font-semibold text-blue-800 tracking-tight transition-all duration-300" style={{ fontSize: isScrolled ? '1.2rem' : '1.5rem' }}>Bergen All-Stars</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => { navRefs.current[index] = el; }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative transition-all duration-200 ${
                    isActive ? 'text-black font-medium' : 'text-gray-600'
                  }`}
                  style={{
                    fontSize: isScrolled ? '0.85rem' : '0.875rem',
                    paddingBottom: '0.5rem'
                  }}
                >
                  <span className="inline-block transition-all duration-200 hover:scale-105 hover:text-blue-600">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            {/* Sliding underline */}
            <span
              className="absolute bottom-0 bg-blue-600 transition-all duration-500 ease-in-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                height: '2px',
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-black"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-black transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
