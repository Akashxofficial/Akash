"use client";

import Image from "next/image";

import { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  
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
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Top Bar */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-2 text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-700 text-xs sm:text-sm">Contact Your Nearest Centre</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-xs sm:text-sm">Our Centres</a>
            <button className="bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium hover:bg-yellow-500">Free Demo</button>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-xs sm:text-sm">Student Login</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Gateway Global Logo"
                width={140}
                height={47}
                className="object-contain w-28 h-auto sm:w-36 lg:w-44"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6 items-center text-sm">
              <a href="#" className="text-blue-600 font-medium pb-1">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Universities
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Countries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Success</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Decorative Elements - Paper Airplanes and Planes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Paper Airplane - Upper Left */}
          <div className="absolute top-20 left-[15%] opacity-30">
            <svg className="w-16 h-16 text-gray-500 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            {/* Dotted Path - Loop */}
            <svg className="absolute -left-16 -top-8 w-48 h-32 opacity-40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
              <path d="M0 20 Q40 0 80 10 Q120 20 160 5" stroke="currentColor" fill="none"/>
            </svg>
          </div>

          {/* Commercial Airplane - Upper Right near graduation cap */}
          <div className="absolute top-12 right-[8%] opacity-30">
            <svg className="w-20 h-20 text-gray-500 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            {/* Dotted Path - Diagonal Curve */}
            <svg className="absolute -right-20 top-8 w-64 h-48 opacity-40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
              <path d="M0 0 Q40 30 80 20 Q120 10 160 30 Q200 50 240 40" stroke="currentColor" fill="none"/>
            </svg>
          </div>

          {/* Small Paper Plane - Bottom Left */}
          <div className="absolute bottom-32 left-[8%] opacity-25">
            <svg className="w-12 h-12 text-gray-400 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="block text-gray-900">Your Gateway to the World&apos;s</span>
                <span className="block relative inline-block" style={{ color: '#f46c44' }}>
                  Top Universities
                  {/* Orange Line Underneath - Full Width */}
                  <span className="absolute left-0 top-full mt-1.5 inline-block h-[1px] w-full" style={{ backgroundColor: '#f46c44' }}>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#f46c44' }}></span>
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Specialized admissions guidance for Ivy League, Russell Group, German & Italian Public Universities
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all" style={{ backgroundColor: '#f46c44' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e35a34'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f46c44'}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get Free Counselling
                </button>
                <button className="bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-black transition-all">
                  Check Your Eligibility
                </button>
              </div>
            </div>
            <div className="relative w-full">
              {/* Decorative Image Section - Graduation Cap with Cityscape */}
              <div className="relative w-full h-96 overflow-visible bg-white">
                {/* Background Image with Planes - Fully visible */}
                <img 
                  src="/first-page.jpg" 
                  alt="Background with planes"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  style={{
                    zIndex: 0
                  }}
                />
                {/* Graduation Cap Image - Smaller size to show background */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <Image 
                    src="/logo-design.png" 
                    alt="Graduation Cap and Cityscape"
                    width={500}
                    height={320}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800">97%</div>
              <div className="text-sm text-gray-600">Application Acceptance in Public Universities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800">#1</div>
              <div className="text-sm text-gray-600">Consultancy for Top-Tier Programs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800">97%</div>
              <div className="text-sm text-gray-600">Application Acceptance in Public Universities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800">#1</div>
              <div className="text-sm text-gray-600">Consultancy for Top-Tier Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Section with Keen Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            International University Partners
          </h2>
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
      </section>

      {/* Why GAway Global Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">
            Why <span style={{ color: '#f46c44' }}>GAway</span> Global ?
          </h2>
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-16 left-0 right-0 h-1" style={{ backgroundColor: '#f46c44' }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative pt-12">
              {/* Point 1 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10" style={{ backgroundColor: '#f46c44' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2zm8-2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized ONLY</h3>
                <p className="text-gray-600 text-lg leading-relaxed">in elite admissions</p>
              </div>
              
              {/* Point 2 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10" style={{ backgroundColor: '#f46c44' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">10+ yrs</h3>
                <p className="text-gray-600 text-lg leading-relaxed">experience</p>
              </div>
              
              {/* Point 3 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10" style={{ backgroundColor: '#f46c44' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2zm8-2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized</h3>
                <p className="text-gray-600 text-lg leading-relaxed">counselling & guidance</p>
              </div>
              
              {/* Point 4 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10" style={{ backgroundColor: '#f46c44' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">High Success</h3>
                <p className="text-gray-600 text-lg leading-relaxed">rate & support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE STACK - Tilted Container */}
            <div className="relative flex items-center justify-center">
              {/* Main Container - Tilted Counter-clockwise (No Orange Border) */}
              <div className="relative w-full max-w-[500px] h-[500px] bg-gray-100 rounded-[28px] shadow-2xl transform -rotate-[4deg]">
                {/* Image 1 - Top Left, Tilted Counter-clockwise with Orange Border */}
                <div className="absolute top-8 left-8 w-56 h-72 rounded-2xl overflow-hidden shadow-xl border-[4px] border-orange-500 transform -rotate-[7deg] z-10 bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=500&fit=crop&crop=center"
                    alt="Students studying"
                    width={224}
                    height={288}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Image 2 - Middle Bottom Left, Slight Clockwise Tilt with Orange Border */}
                <div className="absolute bottom-16 left-12 w-60 h-80 rounded-2xl overflow-hidden shadow-xl border-[4px] border-orange-500 transform rotate-[1.5deg] z-20 bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-8838c5c5f49?w=400&h=500&fit=crop&crop=center"
                    alt="Student with laptop"
                    width={240}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Image 3 - Bottom Right, Clockwise Tilt (On Top) with Orange Border */}
                <div className="absolute bottom-8 right-8 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-[4px] border-orange-500 transform rotate-[7deg] z-30 bg-white">
                  <Image
                    src="https://img.freepik.com/fotos-premium/uma-garota-universitaria-sorrindo-com-passaporte-e-carta-de-aceitacao-para-estudar-no-exterior-visto-de-estudante_1317017-1759.jpg?w=400"
                    alt="Student with passport"
                    width={256}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Experience Badge - Circular Orange Badge */}
                <div className="absolute bottom-16 left-20 z-40 w-28 h-28 rounded-full bg-orange-500 border-[4px] border-white shadow-2xl flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">15</span>
                  <span className="text-xs text-white text-center leading-tight font-semibold">
                    Years of<br />Experience
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                <span className="text-gray-800">Your Trusted Partner in</span>
                <br />
                <span style={{ color: '#f46c44' }}>Immigration Services</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
                We provide reliable guidance for study, work, and permanent residency
                applications. Our experienced team supports you at every step of your
                immigration journey.
              </p>

              {/* Tabs with Orange Line */}
              <div className="relative mt-10 mb-12">
                <div className="flex items-center gap-8">
                  <span className="text-gray-600 font-medium text-lg">Trust</span>
                  <span className="text-gray-600 font-medium text-lg">Transparency</span>
                  <span className="text-white px-6 py-2 rounded-full font-medium text-lg" style={{ backgroundColor: '#f46c44' }}>
                    Excellence
                  </span>
                </div>
                {/* Orange Line Underneath */}
                <div className="absolute left-0 top-12 w-[140px] h-[1px]" style={{ backgroundColor: '#f46c44' }}>
                  <div className="absolute right-0 top-0 w-2 h-2 rounded-full" style={{ backgroundColor: '#f46c44' }}></div>
                </div>
              </div>

              {/* Video + Checklist */}
              <div className="mt-12 flex flex-col sm:flex-row gap-8 items-start">
                {/* Video Card */}
                <div className="flex flex-col">
                  <div className="relative w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43d82b9056?w=400&h=300&fit=crop&crop=center"
                      alt="Consultation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg" style={{ backgroundColor: '#f46c44' }}>
                        ▶
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm mt-2">Consultation</span>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                    <span>Technology Growth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                    <span>Client-Focused Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                    <span>Dedicated Team Members</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                    <span>Trusted Immigration Guidance</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex items-center gap-6">
                <button className="text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all" style={{ backgroundColor: '#f46c44' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e35a34'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f46c44'}>
                  About Us
                </button>

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg">
                  CEO & Founder
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ivy League Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Video Testimonials</h2>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Left Arrow */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <Image 
                    src="/img.jpg"
                    alt="Testimonial Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                      ▶
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1507000475077-5f44f8db76b?w=150&h=150&fit=crop&crop=face"
                      alt="Sarah Johnson"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ivy League</h4>
                    <p className="text-gray-700 text-sm mb-2">Sarah Johnson</p>
                    <p className="text-gray-700">"The guidance I received helped me get into my dream university. The team was incredibly supportive throughout the entire application process."</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Image Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Image Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1522202176988-8838c5c5f49?w=400&h=300&fit=crop&crop=center"
                    alt="Student Testimonial 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                      alt="Student 1"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Aditya Sharma</h4>
                    <p className="text-gray-700 text-sm mb-2">Harvard University</p>
                    <p className="text-gray-700">"One of our proud alumni has succesfully completed bachelor degree in Germany University"</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1522202176988-8838c5c5f49?w=400&h=300&fit=crop&crop=center"
                    alt="Student Testimonial 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1507000475077-5f44f8db76b?w=150&h=150&fit=crop&crop=face"
                      alt="Student 2"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Abhay Nigam</h4>
                    <p className="text-gray-700 text-sm mb-2">Stanford University</p>
                    <p className="text-gray-700">"Amazing experience from start to finish. The team's expertise helped me get into my dream program with full scholarship."</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1522202176988-8838c5c5f49?w=400&h=300&fit=crop&crop=center"
                    alt="Student Testimonial 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1438761681033-6461f4a0f57?w=150&h=150&fit=crop&crop=face"
                      alt="Student 3"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sanjay Purohit</h4>
                    <p className="text-gray-700 text-sm mb-2">MIT</p>
                    <p className="text-gray-700">"Professional and personalized service throughout. They made the complex application process feel simple and manageable. Highly recommended!"</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Case Studies Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header with orange bar */}
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-1.5 h-14 bg-orange-500 rounded-full" />
        <h2 className="text-4xl md:text-5xl">
          <span className="font-bold text-gray-900">Case</span>{" "}
          <span className="font-normal text-gray-900">Studies</span>
        </h2>
      </div>
      <p className="text-gray-500 text-lg">
        Real student journeys. Real results. Carefully crafted outcomes.
      </p>
    </div>

    {/* Cards with arrows */}
    <div className="relative flex items-center justify-center">
      
      {/* Left Arrow */}
      <button className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-6 py-8">

       {/* Card 1 - Yellow */}
<div className="w-72 rounded-2xl p-5 bg-yellow-400 shadow-lg transform -rotate-[8deg]">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Turning a non-core background into a strong global profile
  </h3>

  <div className="mb-4 rounded-xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
      className="w-full h-32 object-cover rounded-xl shadow-md -rotate-[3deg]"
      alt=""
    />
  </div>

  {/* content */}
</div>


     <div className="w-72 rounded-2xl p-5 bg-gray-400 shadow-xl scale-105 z-10">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Turning a non-core background into a strong global profile
  </h3>

  <div className="mb-4 rounded-xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
      className="w-full h-32 object-cover rounded-xl shadow-md"
      alt=""
    />
  </div>

  {/* content */}
</div>


        {/* Card 3 - Coral/Orange */}
        <div className="w-72 rounded-2xl p-5 bg-orange-400 shadow-lg transform rotate-[8deg]">
  <h3 className="text-lg font-semibold text-white mb-4">
    Turning a non-core background into a strong global profile
  </h3>

  <div className="mb-4 rounded-xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
      className="w-full h-32 object-cover rounded-xl shadow-md rotate-[3deg]"
      alt=""
    />
  </div>

  {/* content */}
</div>


      </div>

      {/* Right Arrow */}
      <button className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-2 mt-8">
      <button className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <button className="w-8 h-2.5 rounded-full bg-orange-500" />
      <button className="w-2.5 h-2.5 rounded-full bg-gray-300" />
    </div>
  </div>
</section>

      {/* Top Universities Hub Section */}
    {/* Top Universities Hub Section */}
<section className="py-20 bg-[#FDEDE6]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-orange-500">Top Universities</span>{" "}
        <span className="text-gray-700">Hub</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Explore globally recognized university groups across major study destinations,
        carefully curated for ambitious international students.
      </p>
    </div>

    {/* Universities */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

      {/* Ivy League */}
      <div className="text-center">
        <div className="relative mx-auto w-[260px] h-[160px] rotate-[-2deg]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
            alt="Ivy League Universities"
            fill
            className="object-cover rounded-[22px] border-2 border-orange-400"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          Ivy League Universities
        </h3>
        <p className="text-sm text-orange-500">
          America’s most prestigious institutions
        </p>
      </div>

      {/* Russell Group */}
      <div className="text-center">
        <div className="relative mx-auto w-[260px] h-[160px] rotate-[1.5deg]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Westminster_Palace_and_Big_Ben.jpg"
            alt="Russell Group Universities"
            fill
            className="object-cover rounded-[22px] border-2 border-orange-400"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          Russell Group Universities
        </h3>
        <p className="text-sm text-orange-500">
          Leading UK research universities
        </p>
      </div>

      {/* TU9 */}
      <div className="text-center">
        <div className="relative mx-auto w-[260px] h-[160px] rotate-[-1.5deg]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Reichstag_building_Berlin_view_from_west_before_sunset.jpg"
            alt="TU9 Universities"
            fill
            className="object-cover rounded-[22px] border-2 border-orange-400"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          TU9 & Public Universities
        </h3>
        <p className="text-sm text-orange-500">
          Germany’s top technical institutions
        </p>
      </div>

      {/* Italian Public */}
      <div className="text-center">
        <div className="relative mx-auto w-[260px] h-[160px] rotate-[2deg]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg"
            alt="Italian Public Universities"
            fill
            className="object-cover rounded-[22px] border-2 border-orange-400"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          Italian Public Universities
        </h3>
        <p className="text-sm text-orange-500">
          Affordable education with global value
        </p>
      </div>

    </div>
  </div>
</section>

     {/* GA way global Blogs */}
<section className="py-24 bg-gradient-to-b from-[#f3f3f3] to-white">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-orange-500">GA way</span>{" "}
        <span className="text-gray-800">global Blogs</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Smart insights, expert guidance, and real updates to help you plan your
        study abroad journey with confidence.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">

      {/* CARD */}
      {[
        {
          icon: "☀️",
          tag: "10 Essential",
          title: "Study Abroad Tips",
          img: "https://images.unsplash.com/photo-1522202176988-8838c5c5f49?w=600",
        },
        {
          icon: "🎓",
          tag: "Top 10",
          title: "Scholarships for Indian Students",
          img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
        },
        {
          icon: "📘",
          tag: "Complete Guide to",
          title: "Admissions Success",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
        },
        {
          icon: "📝",
          tag: "IELTS, GRE & More:",
          title: "Acing Entrance Exams",
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
        },
      ].map((card, i) => (
        <div key={i}>
          <div className="relative rounded-[28px] border border-orange-400 bg-gradient-to-br from-[#fde7dc] to-white overflow-hidden">

            {/* ICON — PSD POSITION */}
            <div className="absolute top-[18px] left-[24px] z-10">
              <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                {card.icon}
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex items-center justify-between px-8 pt-16 pb-8">
              <div>
                <p className="text-orange-500 font-semibold">{card.tag}</p>
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                  {card.title.split(" ").slice(0, 2).join(" ")} <br />
                  {card.title.split(" ").slice(2).join(" ")}
                </h3>
              </div>

              <div className="relative w-36 h-28 rounded-xl overflow-hidden">
                <Image
                  src={card.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM STRIP */}
            <div className="h-6 bg-orange-500 rounded-b-[28px]" />
          </div>

          {/* TEXT BELOW CARD */}
          <div className="mt-5">
            <h4 className="font-semibold text-gray-900">
              Preparing for TOEFL Speaking Scoring section: Key Skills and Practice Techniques
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Particularly for non-native English speakers, the TOEFL Speaking segment can be a difficult part.
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Footer */}
       <footer className="bg-[#fef5f1] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN FOOTER CARD with Orange Border ================= */}
        <div className="border-[3px] border-orange-400 rounded-[50px] px-12 pt-0 pb-12 bg-[#fef5f1] relative">

          {/* ================= TOP IMAGE STRIP with Orange Border - Positioned Above ================= */}
          <div className="w-full mb-12 -mt-16">
            <div className="relative h-[200px] rounded-[40px] border-[8px] border-orange-500 overflow-hidden bg-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&h=300&fit=crop"
                alt="University Buildings"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* BRAND */}
            <div>
              <Image
                src="/logo.png"
                alt="GAway Global"
                width={150}
                height={50}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">GA Way Global</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Your trusted partner for global education, university admissions, and international study planning.
              </p>

              <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                Get in touch
              </button>
            </div>

            {/* STUDY DESTINATIONS */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-4">
                Study Destinations
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>USA Universities</li>
                <li>UK Universities</li>
                <li>Germany Public Universities</li>
                <li>Italy & France</li>
                <li>Canada & Australia</li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Profile Evaluation</li>
                <li>University Shortlisting</li>
                <li>SOP & LOR Guidance</li>
                <li>Visa Assistance</li>
                <li>Scholarship Support</li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Student Testimonials</li>
                <li>FAQs</li>
                <li>Events & Webinars</li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>Contact Us</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2023 GAway Global. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
    </div>
  );
};
