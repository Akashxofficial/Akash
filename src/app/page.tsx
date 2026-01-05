import Image from "next/image";
import Navigation from "@/components/Navigation";
import UniversitySliderClient from "@/components/UniversitySliderClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden max-w-full" style={{ paddingTop: '160px' }}>
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
                <button className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90" style={{ backgroundColor: '#f46c44' }}>
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
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      <UniversitySliderClient />

      {/* Why GAway Global Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
            <span style={{ color: '#f46c44' }}>Why</span> GAway Global ?
          </h2>
          <div className="relative">
            {/* Horizontal Line with circles at ends */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#f46c44' }}>
              {/* Left circle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#f46c44' }}></div>
              {/* Right circle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#f46c44' }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative pt-20">
              {/* Point 1 - Specialized ONLY */}
              <div className="text-center relative">
                {/* Vertical line */}
                <div className="absolute w-0.5 h-16 left-1/2 -translate-x-1/2" style={{ backgroundColor: '#6b7280', top: '-80px' }}></div>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-3 bg-white relative z-10" style={{ borderColor: '#f46c44' }}>
                    <svg className="w-10 h-10" style={{ color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#6b7280' }}>
                    Specialized ONLY
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#f46c44' }}>
                    in elite admissions
                  </p>
                </div>
              </div>
              
              {/* Point 2 - 10+ yrs experience */}
              <div className="text-center relative">
                {/* Vertical line */}
                <div className="absolute w-0.5 h-28 left-1/2 -translate-x-1/2" style={{ backgroundColor: '#6b7280', top: '-80px' }}></div>
                <div className="relative mt-12">
                  <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-3 bg-white relative z-10" style={{ borderColor: '#f46c44' }}>
                    <svg className="w-10 h-10" style={{ color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#f46c44' }}>
                    10+ <span style={{ color: '#6b7280' }}>yrs</span>
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#6b7280' }}>
                    experience
                  </p>
                </div>
              </div>
              
              {/* Point 3 - Transparent process */}
              <div className="text-center relative">
                {/* Vertical line */}
                <div className="absolute w-0.5 h-16 left-1/2 -translate-x-1/2" style={{ backgroundColor: '#6b7280', top: '-80px' }}></div>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-3 bg-white relative z-10" style={{ borderColor: '#f46c44' }}>
                    <svg className="w-10 h-10" style={{ color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
                  </svg>
                </div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#f46c44' }}>
                    Transparent process
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
                    (No hidden fees)
                  </p>
                </div>
              </div>
              
              {/* Point 4 - Country-specific experts */}
              <div className="text-center relative">
                {/* Vertical line */}
                <div className="absolute w-0.5 h-28 left-1/2 -translate-x-1/2" style={{ backgroundColor: '#6b7280', top: '-80px' }}></div>
                <div className="relative mt-12">
                  <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-3 bg-white relative z-10" style={{ borderColor: '#f46c44' }}>
                    <svg className="w-10 h-10" style={{ color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#f46c44' }}>
                    Country-specific
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#f46c44' }}>
                    experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                {/* Orange Line Underneath - Full Width */}
                <div className="absolute left-0 top-12 w-[85%] h-[3px]" style={{ backgroundColor: '#f46c44' }}>
                  <div className="absolute right-0 top-0 w-3 h-3 rounded-full" style={{ backgroundColor: '#f46c44', transform: 'translateY(-50%) translateX(50%)' }}></div>
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
                <button className="text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all hover:opacity-90" style={{ backgroundColor: '#f46c44' }}>
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
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#ffeae5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span style={{ color: '#f46c44' }}>Video</span>{" "}
            <span className="text-gray-700">Testimonials</span>
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Outer Pink Background */}
            <div className="relative rounded-[80px] p-12" style={{ backgroundColor: '#ffddd4', opacity: 0.85 }}>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Video Container with Tilted Border */}
                <div className="flex-1 w-full lg:max-w-2xl">
                  <div className="relative rounded-3xl overflow-hidden border-4 border-orange-500 shadow-2xl bg-gray-900" style={{ transform: 'rotate(-2deg)' }}>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/aJTjHXbOlFI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              
                {/* Speech Bubble */}
                <div className="w-full lg:w-96 bg-gray-700 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#d4ff00' }}>Ivy League</h3>
                  <p className="text-white text-sm leading-relaxed">
                    My <span style={{ color: '#d4ff00' }} className="font-semibold">Ivy League</span> admit was made possible by gaway global's{' '}
                    <span style={{ color: '#d4ff00' }} className="font-semibold">extensive admissions counselling support</span>{' '}
                    with my applications. Moreover, their online portal
                  </p>
              </div>
                  </div>
                      </div>
            
            {/* Navigation Arrows */}
            <div className="relative mt-8 flex justify-center gap-8">
              <button className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Testimonials Section */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#FCEEEB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span style={{ color: '#FF8C6A' }}>Image</span>{" "}
            <span className="text-gray-800">Testimonials</span>
          </h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity" style={{ color: '#FF8C6A' }}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity" style={{ color: '#FF8C6A' }}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Cards */}
            <div className="flex items-start justify-center gap-10 px-16" style={{ display: 'flex', flexWrap: 'nowrap', width: '100%' }}>
              {/* Testimonial 1 - Aditya Sharma */}
              <div className="flex-shrink-0" style={{ perspective: '800px', transform: 'rotate(2deg)' }}>
                <div className="rounded-3xl p-8 flex flex-col relative overflow-visible" style={{ width: '380px', height: '500px' }}>
                  {/* Border from image file */}
                  <div className="absolute rounded-3xl pointer-events-none" style={{ 
                    left: '0',
                    top: '0',
                    width: '380px',
                    height: '500px',
                    transform: 'rotateY(18deg)',
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                    zIndex: 0
                  }}>
                    <img 
                      src="/image testimonial.png" 
                      alt="border"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'fill', 
                        display: 'block',
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                  {/* Content background */}
                  <div className="absolute rounded-3xl" style={{ 
                    left: '4px',
                    top: '4px',
                    width: '372px',
                    height: '492px',
                    backgroundColor: '#FFF5F2',
                    zIndex: 1
                  }}></div>
                  
                  {/* Photo in upper right corner */}
                  <div className="absolute top-6 right-6 w-32 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md z-10" style={{ transform: 'rotate(3deg) rotateY(18deg)', transformOrigin: 'right center', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/imgt1.png"
                      alt="Aditya Sharma"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-36 relative z-10">Aditya Sharma</h3>
                  
                  {/* Text */}
                  <p className="text-base mb-6 leading-relaxed pr-36 relative z-10" style={{ color: '#FF8C6A' }}>
                    One of our proud alumni, has successfully completed his Bachelor's degree in Germany.
                  </p>
                  
                  {/* University Logo - Harvard */}
                  <div className="mt-auto flex items-center gap-3 relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: '#A51C30' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white"/>
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">VERI</text>
                        <text x="12" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">TAS</text>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-800">HARVARD</div>
                      <div className="text-xs text-gray-600 font-medium">UNIVERSITY</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Rohan Gupta */}
              <div className="flex-shrink-0" style={{ perspective: '800px', transform: 'rotate(2deg)' }}>
                <div className="rounded-3xl p-8 flex flex-col relative overflow-visible" style={{ width: '380px', height: '500px' }}>
                  {/* Border from image file */}
                  <div className="absolute rounded-3xl pointer-events-none" style={{ 
                    left: '0',
                    top: '0',
                    width: '380px',
                    height: '500px',
                    transform: 'rotateY(18deg)',
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                    zIndex: 0
                  }}>
                    <img 
                      src="/image testimonial.png" 
                      alt="border"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'fill', 
                        display: 'block',
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                  {/* Content background */}
                  <div className="absolute rounded-3xl" style={{ 
                    left: '4px',
                    top: '4px',
                    width: '372px',
                    height: '492px',
                    backgroundColor: '#FFF5F2',
                    zIndex: 1
                  }}></div>
                  
                  {/* Photo in upper right corner */}
                  <div className="absolute top-6 right-6 w-32 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md z-10" style={{ transform: 'rotate(3deg) rotateY(18deg)', transformOrigin: 'right center', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/img3.png"
                      alt="Rohan Gupta"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-36 relative z-10">Rohan Gupta</h3>
                  
                  {/* Text */}
                  <p className="text-base mb-6 leading-relaxed pr-36 relative z-10" style={{ color: '#FF8C6A' }}>
                    One of our proud alumni, has successfully completed his Bachelor's degree in Germany.
                  </p>
                  
                  {/* University Logo - Yale */}
                  <div className="mt-auto flex items-center gap-3 relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: '#00356B' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white"/>
                        <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold" style={{ color: '#00356B', fontFamily: 'serif' }}>Yale University</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Saumya Sharma */}
              <div className="flex-shrink-0" style={{ perspective: '800px', transform: 'rotate(2deg)' }}>
                <div className="rounded-3xl p-8 flex flex-col relative overflow-visible" style={{ width: '380px', height: '500px' }}>
                  {/* Border from image file */}
                  <div className="absolute rounded-3xl pointer-events-none" style={{ 
                    left: '0',
                    top: '0',
                    width: '380px',
                    height: '500px',
                    transform: 'rotateY(18deg)',
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                    zIndex: 0
                  }}>
                    <img 
                      src="/image testimonial.png" 
                      alt="border"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'fill', 
                        display: 'block',
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                  {/* Content background */}
                  <div className="absolute rounded-3xl" style={{ 
                    left: '4px',
                    top: '4px',
                    width: '372px',
                    height: '492px',
                    backgroundColor: '#FFF5F2',
                    zIndex: 1
                  }}></div>
                  
                  {/* Photo in upper right corner */}
                  <div className="absolute top-6 right-6 w-32 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md z-10" style={{ transform: 'rotate(3deg) rotateY(18deg)', transformOrigin: 'right center', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/img.jpg"
                      alt="Saumya Sharma"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-36 relative z-10">Saumya Sharma</h3>
                  
                  {/* Text */}
                  <p className="text-base mb-6 leading-relaxed pr-36 relative z-10" style={{ color: '#FF8C6A' }}>
                    One of our proud alumni, has successfully completed his Bachelor's degree in Germany.
                  </p>
                  
                  {/* University Logo - Oxford */}
                  <div className="mt-auto flex items-center gap-3 relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: '#002147' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white"/>
                        <circle cx="12" cy="12" r="3" fill="white"/>
                        <path d="M9 9l6 6M15 9l-6 6" stroke="white" strokeWidth="1"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold" style={{ color: '#002147', fontFamily: 'serif' }}>UNIVERSITY OF OXFORD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-10">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FCEEEB' }}></div>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF8C6A' }}></div>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FCEEEB' }}></div>
            </div>
          </div>
        </div>
      </section>
{/* Case Studies Section */}
<section className="py-16 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
    
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
<section className="py-20 overflow-hidden" style={{ backgroundColor: '#ffeae5' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span style={{ color: '#f46c44' }}>Top Universities</span>{" "}
        <span className="text-gray-700">Hub</span>
      </h2>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Explore globally recognized university groups across major study destinations,
        carefully curated for ambitious international students.
      </p>
    </div>

    {/* Universities Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

      {/* Ivy League */}
      <div className="text-center group">
        <div className="relative mx-auto w-full max-w-[280px] mb-6">
          <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <defs>
              <clipPath id="tiltedClip1">
                <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" />
              </clipPath>
            </defs>
            <image
              href="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
              x="0" y="0" width="300" height="200"
              clipPath="url(#tiltedClip1)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Ivy League Universities
        </h3>
        <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
          America&apos;s most prestigious institutions
        </p>
      </div>

      {/* Russell Group */}
      <div className="text-center group">
        <div className="relative mx-auto w-full max-w-[280px] mb-6">
          <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <defs>
              <clipPath id="tiltedClip2">
                <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" />
              </clipPath>
            </defs>
            <image
              href="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
              x="0" y="0" width="300" height="200"
              clipPath="url(#tiltedClip2)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Russell Group Universities
        </h3>
        <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
          Leading UK research universities
        </p>
      </div>

      {/* TU9 */}
      <div className="text-center group">
        <div className="relative mx-auto w-full max-w-[280px] mb-6">
          <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <defs>
              <clipPath id="tiltedClip3">
                <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" />
              </clipPath>
            </defs>
            <image
              href="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop"
              x="0" y="0" width="300" height="200"
              clipPath="url(#tiltedClip3)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          TU9 & Public Universities
        </h3>
        <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
          Germany&apos;s top technical institutions
        </p>
      </div>

      {/* Italian Public */}
      <div className="text-center group">
        <div className="relative mx-auto w-full max-w-[280px] mb-6">
          <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <defs>
              <clipPath id="tiltedClip4">
                <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" />
              </clipPath>
            </defs>
            <image
              href="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop"
              x="0" y="0" width="300" height="200"
              clipPath="url(#tiltedClip4)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d="M 50 8 Q 20 8 15 35 L 15 165 Q 15 192 42 196 L 250 184 Q 285 184 290 155 L 290 45 Q 290 20 265 20 L 50 8 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Italian Public Universities
        </h3>
        <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
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
          icon: "💡",
          tag: "10 Essential",
          title: "Study Abroad Tips",
          img: "/t1.png",
        },
        {
          icon: "🎓",
          tag: "Top 10",
          title: "Scholarships for Indian Students",
          img: "/t2.png",
        },
        {
          icon: "📘",
          tag: "Complete Guide to",
          title: "Admissions Success",
          img: "/t3.png",
        },
        {
          icon: "📝",
          tag: "IELTS, GRE & More:",
          title: "Acing Entrance Exams",
          img: "/t4.png",
        },
      ].map((card, i) => (
        <div key={i}>
          <svg viewBox="0 0 650 380" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <defs>
              <clipPath id={`blogImageClip${i}`}>
                <path d="M 390 80 Q 370 80 365 100 L 355 235 Q 355 255 375 260 L 595 248 Q 620 248 625 223 L 635 110 Q 635 90 615 90 L 390 80 Z" />
              </clipPath>
              <linearGradient id={`gradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde7dc" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            
            {/* Outer border with gradient background */}
            <path d="M 60 15 Q 30 15 25 45 L 15 310 Q 15 340 45 345 L 600 328 Q 635 328 640 293 L 650 52 Q 650 22 620 20 L 60 15 Z" 
                  fill="url(#gradient${i})" />
            
            {/* Icon circle */}
            <circle cx="80" cy="60" r="30" fill="#f46c44" />
            <text x="80" y="72" textAnchor="middle" fontSize="28">{card.icon}</text>
            
            {/* Text content - Left side with better spacing */}
            <text x="80" y="150" fill="#f46c44" fontSize="24" fontWeight="700">{card.tag}</text>
            <text x="40" y="195" fill="#1f2937" fontSize="30" fontWeight="700">
              {card.title.split(" ").slice(0, 2).join(" ")}
            </text>
            <text x="80" y="235" fill="#1f2937" fontSize="30" fontWeight="700">
                  {card.title.split(" ").slice(2).join(" ")}
            </text>
            
            {/* Image with tilted border - properly positioned */}
            <image
              href={card.img}
              x="360" y="75" width="280" height="190"
              clipPath={`url(#blogImageClip${i})`}
              preserveAspectRatio="xMidYMid slice"
            />
            
            {/* Image border - tilted */}
            <path d="M 390 80 Q 370 80 365 100 L 355 235 Q 355 255 375 260 L 595 248 Q 620 248 625 223 L 635 110 Q 635 90 615 90 L 390 80 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="2.5" />
            
            {/* Bottom orange strip - curved */}
            <path d="M 45 318 Q 15 318 15 310 L 15 325 Q 15 345 45 345 L 600 328 Q 635 328 640 308 L 640 293 Q 640 318 600 320 L 45 318 Z" 
                  fill="#f46c44" />
            
            {/* Outer border - tilted */}
            <path d="M 60 15 Q 30 15 25 45 L 15 310 Q 15 340 45 345 L 600 328 Q 635 328 640 293 L 650 52 Q 650 22 620 20 L 60 15 Z" 
                  fill="none" 
                  stroke="#f46c44" 
                  strokeWidth="3" />
          </svg>

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
       <footer className="bg-[#fef5f1] pt-32 pb-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 overflow-visible">

        {/* ================= MAIN FOOTER CARD with Orange Border ================= */}
        <div className="border-[3px] border-[#f46c44] rounded-[50px] px-12 pt-8 pb-12 bg-[#fef5f1] relative shadow-lg">

          {/* ================= TOP IMAGE STRIP with Orange Border - Positioned Upward ================= */}
          <div className="w-full mb-12 -mt-20">
            <div className="relative h-[180px] rounded-[50px] border-[10px] border-[#f46c44] overflow-hidden bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=300&fit=crop"
                alt="European Landmarks"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "center center" }}
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
}
