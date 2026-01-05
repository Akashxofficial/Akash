"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

export default function UniversitySliderClient() {
  const sliderRef = useRef(null);

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
              perView: 2.5,
              spacing: 16,
            },
            breakpoints: {
              '(min-width: 640px)': {
                slides: {
                  perView: 3.5,
                  spacing: 20,
                },
              },
              '(min-width: 1024px)': {
                slides: {
                  perView: 5.5,
                  spacing: 24,
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
      }
    };

    keenSlider();
  }, []);

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#ffeae5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          International University Partners
        </h2>
        <div className="w-full max-w-full overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university1.svg" 
                  alt="University Partner 1"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university2.svg" 
                  alt="University Partner 2"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university3.svg" 
                  alt="University Partner 3"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university4.svg" 
                  alt="University Partner 4"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university5.svg" 
                  alt="University Partner 5"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university6.svg" 
                  alt="University Partner 6"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university7.svg" 
                  alt="University Partner 7"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university8.svg" 
                  alt="University Partner 8"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university9.svg" 
                  alt="University Partner 9"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200">
                <Image 
                  src="/university10.svg" 
                  alt="University Partner 10"
                  width={120}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

