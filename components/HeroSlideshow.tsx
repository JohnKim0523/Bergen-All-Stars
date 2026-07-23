'use client';

import { useState, useEffect, useRef } from 'react';

type Banner = { src: string; position?: string };

const bannerImages: Banner[] = [
  { src: '/images/banners/banner1.jpg', position: 'center top' },
  { src: '/images/banners/banner2.jpg', position: 'center 32%' },
  { src: '/images/banners/banner3.jpg' },
  { src: '/images/banners/banner4.jpg', position: 'center 70%' },
  { src: '/images/banners/banner5.jpg' },
  { src: '/images/banners/banner6.jpg' },
  { src: '/images/banners/banner7.jpg', position: 'center 25%' },
  { src: '/images/banners/banner8.jpg' },
  { src: '/images/banners/banner9.jpg' },
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
        {slides.map((banner, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url(${banner.src})`,
              backgroundSize: 'cover',
              backgroundPosition: banner.position ?? 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}
