'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    { href: '/programs', label: 'Programs' },
    { href: '/coaches', label: 'Our Coaches' },
    { href: '/board', label: 'Board' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? '#0a3a72' : '#041c3a',
        boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />

      <div style={{ maxWidth: '55rem', margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="flex items-center justify-between transition-all duration-300" style={{ height: isScrolled ? '4rem' : '5rem' }}>
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="Bergen All-Stars Logo"
              width={isScrolled ? 50 : 65}
              height={isScrolled ? 50 : 65}
              className="shrink-0 transition-all duration-300"
            />
            <span className="font-semibold text-white tracking-tight transition-all duration-300" style={{ fontSize: isScrolled ? '1.2rem' : '1.5rem' }}>Bergen All-Stars</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => { navRefs.current[index] = el; }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative transition-all duration-200"
                  style={{
                    fontSize: isScrolled ? '0.8rem' : '0.85rem',
                    paddingBottom: '0.5rem',
                    color: isActive ? '#ffffff' : '#e5e7eb',
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  <span className="inline-block transition-all duration-200 hover:scale-105 hover:text-white">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            {/* Sliding underline - red */}
            <span
              className="absolute bottom-0 bg-red-500 transition-all duration-500 ease-in-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                height: '2px',
              }}
            />

            {/* Donate Button */}
            <Link
              href="/donate"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
              style={{ padding: '0.5rem 1.25rem', borderRadius: '0.375rem', fontSize: '0.85rem' }}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isMobileMenuOpen ? '400px' : '0',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#e5e7eb' }}
                className="hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-center transition-colors py-2"
              style={{ borderRadius: '0.375rem' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
