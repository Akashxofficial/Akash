'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

export default function IvyLeagueUniversitySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keenSlider = async () => {
      const KeenSlider = (await import('keen-slider')).default;
      
      if (sliderRef.current) {
        const slider = new KeenSlider(
          sliderRef.current,
          {
            loop: true,
            mode: 'free',
            slides: {
              origin: 'center',
              perView: 0,
              spacing: 20,
            },
            breakpoints: {
              '(min-width: 840px)': {
                slides: {
                  perView: 3.5,
                  spacing: 0,
                },
              },
              '(min-width: 1024px)': {
                slides: {
                  perView: 6,
                  spacing: 0,
                },
              },
            },
          },
          [
            (slider) => {
              let timeout: ReturnType<typeof setTimeout>;
              let mouseOver = false;
              function clearNextTimeout() {
                clearTimeout(timeout);
              }
              function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => {
                  slider.next();
                }, 3000);
              }
              slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                  mouseOver = true;
                  clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", () => {
                  mouseOver = false;
                  nextTimeout();
                });
                nextTimeout();
              });
              slider.on("dragStarted", clearNextTimeout);
              slider.on("animationEnded", nextTimeout);
              slider.on("updated", nextTimeout);
            },
          ]
        );

        return () => {
          slider.destroy();
        };
      }
    };

    keenSlider();
  }, []);

  const universities = [
    { id: 1, src: '/university1.svg', alt: 'University 1' },
    { id: 2, src: '/university2.svg', alt: 'University 2' },
    { id: 3, src: '/university3.svg', alt: 'University 3' },
    { id: 4, src: '/university4.svg', alt: 'University 4' },
    { id: 5, src: '/university5.svg', alt: 'University 5' },
    { id: 6, src: '/university6.svg', alt: 'University 6' },
    { id: 7, src: '/university7.svg', alt: 'University 7' },
    { id: 8, src: '/university8.svg', alt: 'University 8' },
    { id: 9, src: '/university9.svg', alt: 'University 9' },
    { id: 10, src: '/university10.svg', alt: 'University 10' },
  ];

  return (
    <div className="overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {universities.map((university) => (
          <div key={university.id} className="keen-slider__slide">
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center justify-center h-26 w-full">
                <Image 
                  src={university.src}
                  alt={university.alt}
                  width={500}
                  height={360}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
