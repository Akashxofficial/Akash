import Image from "next/image";
import IvyLeagueNavigation from "@/components/IvyLeagueNavigation";
import ImageTestimonial from "@/components/ImageTestimonial";
import IvyLeagueUniversitySlider from "@/components/IvyLeagueUniversitySlider";

export default function IvyLeaguePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <IvyLeagueNavigation />

      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=700&fit=crop"
            alt="European City Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" style={{ marginLeft: '60px' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold', textAlign: 'left' }}>
              <span className="block">Your path to the</span>
              <span className="block">Ivy League Universities</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed" style={{ textAlign: 'left' }}>
              GAway is a league of its own. We help you get into the Ivy League and other top universities in the USA, UK, and Canada. We&apos;ll help you get into the Ivy League and top graduate schools.
            </p>
            
          </div>
        </div>
      </section>

      {/* Our Global University Network */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Global University Network
          </h2>
          <IvyLeagueUniversitySlider />
        </div>
      </section>

      {/* Ivy Coach's College Admissions Track Record */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Border line above */}
          <div className="mb-8 mx-auto" style={{ borderTop: '2px solid #9ca3af', width: '50%' }}></div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#f46c44', fontFamily: 'serif', textAlign: 'center' }}>
              <span className="block">IVY COACH&apos;S COLLEGE</span>
              <span className="block">ADMISSIONS TRACK RECORD</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto mb-2" style={{ textAlign: 'center' }}>
              <span className="block">The percentage of Ivy Coach&apos;s packaged clients over the last 10 years</span>
              <span className="block">who earned admission to the following schools in the Early round.</span>
            </p>
            <p className="text-sm text-gray-700 italic mx-auto" style={{ textAlign: 'center' }}>
              At most of these schools, we typically have 3-4 applicants annually.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Panel - Proven Success */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Numbers Don&apos;t Lie. Proven Success. Unmatched Results.
              </h3>

              {/* Student Image */}
              <div className="mb-8 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop"
                  alt="Student Success"
                  width={500}
                  height={450}
                  className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                  unoptimized
                />
              </div>

              {/* 98% Stat */}
              <div className="text-center">
                <div className="text-7xl font-bold mb-3" style={{ color: '#f46c44' }}>98%</div>
                <p className="text-2xl text-gray-700 font-semibold">of our clients get into their top 3 choices</p>
              </div>
            </div>

            {/* Right Panel - Bar Chart */}
            <div>
              {/* Large Number Box - Tilted */}
              <div className="border-4 p-8 mb-8 text-center transform rotate-3" style={{ borderColor: '#f46c44', transform: 'rotate(-3deg)', borderRadius: '20px' }}>
                <div className="text-7xl font-bold mb-2" style={{ color: '#f46c44' }}>1,485</div>
                <p className="text-gray-600 text-lg">Total Offers in Last 10 Years</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-8 text-gray-800">College Specific Acceptance Rates</h4>

                {/* Table Header */}
                <div className="flex items-center gap-4 pb-3 mb-4 border-b-2 border-gray-300">
                  <div className="w-12 h-12"></div>
                  <div className="w-32"></div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-semibold text-gray-600">General Admit Rate</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-semibold" style={{ color: '#f46c44' }}>GAway Student Admit Rate</span>
                  </div>
                </div>

                {/* Table Format with Both Columns */}
                <div className="space-y-4">
                  {[
                    { name: 'Harvard', generalRate: 3.2, gawayRate: 20.0, logo: 'H' },
                    { name: 'Stanford', generalRate: 4.3, gawayRate: 80.0, logo: 'S' },
                    { name: 'Yale', generalRate: 4.6, gawayRate: 70.2, logo: 'Y' },
                    { name: 'Columbia', generalRate: 3.9, gawayRate: 78.1, logo: 'C' },
                    { name: 'UPenn', generalRate: 5.9, gawayRate: 83.3, logo: 'UP' },
                    { name: 'Dartmouth', generalRate: 6.2, gawayRate: 77.0, logo: 'D' },
                    { name: 'Princeton', generalRate: 5.7, gawayRate: 60.6, logo: 'P' },
                    { name: 'Cornell', generalRate: 7.3, gawayRate: 80.6, logo: 'C' },
                    { name: 'MIT', generalRate: 6.5, gawayRate: 85.0, logo: 'M' }
                  ].map((uni, i) => (
                    <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                      {/* University Icon/Logo */}
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-gray-700">{uni.logo}</span>
                      </div>
                      
                      {/* University Name */}
                      <div className="w-32 flex-shrink-0">
                        <span className="text-sm font-semibold text-gray-800">{uni.name}</span>
                      </div>
                      
                      {/* General Admit Rate Column - Empty */}
                      <div className="flex-1">
                      </div>
                      
                      {/* Vertical Divider Line */}
                      <div className="w-px h-12 bg-gray-300"></div>
                      
                      {/* GAway Student Admit Rate Column - Orange */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs" style={{ color: '#f46c44' }}></span>
                          <span className="text-sm font-bold" style={{ color: '#f46c44' }}>{uni.gawayRate}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3 relative overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(uni.gawayRate / 85.0) * 100}%`,
                              backgroundColor: '#f46c44'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  VIEW STATISTICS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ivy Coach Daily */}
      <section className="py-10 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto px-4 overflow-visible">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#f46c44' }}>
              THE IVY COACH DAILY
            </h2>
            <p className="text-lg text-gray-600 italic">Way To Tell It Like It Is, Ivy Coach</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" style={{ width: '100%' }}>
            {[
              { 
                uni: 'Harvard University', 
                text: 'Harvard University Class of 2028 Early Action Admission Rate is 7.2%',
                date: 'December 15, 2023',
                img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
              },
              { 
                uni: 'Cornell University', 
                text: 'Cornell University Class of 2028 Early Decision Admission Rate is 17.9%',
                date: 'December 15, 2023',
                img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
              },
              { 
                uni: 'Yale University', 
                text: 'Yale University Class of 2028 Early Action Admission Rate is 9.0%',
                date: 'December 15, 2023',
                img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
              }
            ].map((item, i) => (
              <div key={`ivy-coach-${i}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition w-full">
                <Image 
                  src={item.img}
                  alt={item.uni}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                  unoptimized
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {item.text}
                  </h4>
                  <p className="text-sm text-gray-500">by S.K. Date: {item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-orange-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { num: '244', text: 'Offers to Cornell' },
              { num: '109', text: 'Offers to Princeton' },
              { num: '187', text: 'Offers to Stanford' },
              { num: '130', text: 'Offers to Yale' },
              { num: '139', text: 'Offers to Columbia' },
              { num: '24', text: 'Offers to Oxford' },
              { num: '365', text: 'Offers to UC Berkeley' },
              { num: '338', text: 'Offers to UPenn' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#f46c44' }}>
                  {stat.num}
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Ivy League Special */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#f46c44' }}>
            What Makes Ivy League Special
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Panel - Features */}
            <div className="space-y-8">
              <div className="border-4 rounded-lg p-8" style={{ borderColor: '#f46c44', backgroundColor: '#fef5f1' }}>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ivy League Curriculum</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our Ivy League curriculum is designed to help students develop the skills and knowledge necessary to succeed in the Ivy League. The curriculum includes rigorous coursework, research opportunities, and access to world-class faculty.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>

              <div className="border-4 rounded-lg p-8" style={{ borderColor: '#f46c44', backgroundColor: '#fef5f1' }}>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Profile Building</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We help students build a strong profile that showcases their unique talents and achievements. This includes extracurricular activities, leadership roles, community service, and academic excellence.
                </p>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Panel - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop"
                alt="Student with passport"
                className="w-full h-[600px] object-cover rounded-3xl"
                style={{ border: '4px solid #f46c44' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#f46c44' }}>
            Admission Requirements for United Kingdom Study Abroad
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto text-lg">
            Here are the main requirements to study in UK which you need to ensure you to apply for the university.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-5">
              {['Copy of valid passport', 'GRE/GMAT scores for PG programs', 'Letter of recommendation (LORs)', 'Academic transcripts'].map((req, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-7 h-7 flex-shrink-0 mt-0.5" style={{ color: '#f46c44' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{req}</span>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {['TOEFL/IELTS/Advanced scores', 'Academic Resume/CV', 'Portfolio (for specific courses)', 'Statement of Purpose (SOP)'].map((req, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-7 h-7 flex-shrink-0 mt-0.5" style={{ color: '#f46c44' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How GAway Helps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#f46c44' }}>
            How GAway helps
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#f46c44' }}>
                Write Essays That Seal the Deal
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the perfect topic to final polish, our essay experts guide you on how to write a personal statement and supplemental essays that show why they belong on campus.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=500&fit=crop"
                alt="Essay writing"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#f46c44' }}>
            Admission Process Roadmap
          </h2>

          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
              {[
                { num: 1, text: 'Profile Evaluation' },
                { num: 2, text: 'Exam Preparation' },
                { num: 3, text: 'University Shortlisting' },
                { num: 4, text: 'Application Filing' },
                { num: 5, text: 'Visa & Enrollment' },
                { num: 6, text: 'Pre-Departure & Visa Preparation' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg" style={{ backgroundColor: '#f46c44' }}>
                    {step.num}
                  </div>
                  <p className="text-gray-700 font-semibold text-lg max-w-[150px]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#f46c44' }}>
            Scholarships to Study in United Kingdom
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto text-lg">
            There are many scholarships offered by the UK government, universities and private organizations to help you cover the tuition fees of your course and other costs of living. Here are some of the scholarships you can apply for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-5">
              {['Chevening Scholarships', 'Commonwealth Scholarships', 'Rhodes Scholarship', 'Gates Cambridge Scholarship', 'Erasmus Mundus Joint Master Degrees', 'GREAT Scholarships'].map((sch, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-7 h-7 flex-shrink-0 mt-0.5" style={{ color: '#f46c44' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{sch}</span>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {['Felix Scholarships', 'Marshall Scholarships'].map((sch, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-7 h-7 flex-shrink-0 mt-0.5" style={{ color: '#f46c44' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{sch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#f46c44' }}>
            Image Testimonials
          </h2>
          <ImageTestimonial />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#f46c44' }}>
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real student journeys, real results. Carefully curated outcomes.
            </p>
          </div>
          {/* Case Studies component can be added here */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24" style={{ backgroundColor: '#f46c44' }}>
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wide">
            TOWARD THE <span className="line-through">CONQUEST OF</span> ADMISSION
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            If you&apos;re interested in Ivy Coach&apos;s college counseling, fill out our contact form or schedule a free consultation to learn more and get in touch.
          </p>
          <button className="bg-white text-orange-500 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition shadow-lg">
            GET STARTED
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop"
              alt="City skyline"
              className="w-full h-[300px] object-cover rounded-lg mb-12 grayscale opacity-80"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-6">GAway</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  GAway is a premier education consultancy that provides comprehensive services to students aspiring to study abroad.
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  GET STARTED
                </button>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Study Abroad</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                  <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Our Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Ivy League</a></li>
                  <li><a href="#" className="hover:text-white transition">UK Admissions</a></li>
                  <li><a href="#" className="hover:text-white transition">Canada Admissions</a></li>
                  <li><a href="#" className="hover:text-white transition">Graduate Admissions</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Resources</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2023 GAway Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
