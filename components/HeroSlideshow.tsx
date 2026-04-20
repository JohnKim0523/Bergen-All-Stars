'use client';

import { useState, useEffect, useRef } from 'react';

const bannerImages = [
  '/images/banners/banner1.jpg',
  '/images/banners/banner2.jpg',
  '/images/banners/banner3.jpg',
  '/images/banners/banner4.jpg',
  '/images/banners/banner5.jpg',
  '/images/banners/banner6.jpg',
  '/images/banners/banner7.jpg',
  '/images/banners/banner8.jpg',
  '/images/banners/banner9.jpg',
  '/images/banners/banner10.jpg',
  '/images/banners/banner11.jpg',
];

export default function HeroSlideshow() {
  const totalSlides = bannerImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const isSnapping = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (isSnapping.current) return;
      setCurrentIndex((prev) => (prev >= totalSlides ? prev : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [totalSlides]);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      isSnapping.current = true;
      const timer = setTimeout(() => {
        setAnimate(false);
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
            isSnapping.current = false;
          });
        });
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  // Append first image for seamless loop
  const slides = [...bannerImages, bannerImages[0]];

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          transition: animate ? 'transform 700ms ease-in-out' : 'none',
        }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}
