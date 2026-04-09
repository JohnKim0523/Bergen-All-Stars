import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white" style={{ minHeight: '650px' }}>
        <HeroSlideshow />
        {/* Left-side gradient overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(4,28,58,0.9) 0%, rgba(4,28,58,0.65) 40%, transparent 70%)' }} />

        {/* Decorative stars in overlay area */}
        <div className="absolute z-[2] top-24 left-8 flex gap-2 opacity-20">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg className="w-3 h-3 text-red-400 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <div className="absolute z-[2] bottom-24 left-16 opacity-15">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>

        {/* Red accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 z-[3]" />

        <div className="relative z-10 flex items-center" style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '580px' }}>
            {/* Star accent */}
            <div className="flex gap-2 mb-4">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>

            {/* Main Headline */}
            <h1 className="font-extrabold text-white" style={{ fontSize: '3.75rem', lineHeight: '1.1', marginBottom: '1.25rem' }}>
              We Use Sports to Change Lives.
            </h1>

            {/* Red divider */}
            <div className="w-16 h-1 bg-red-500 mb-5" />

            {/* Subheadline */}
            <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Volunteer, fundraise, or donate — every action creates a lasting impact for young athletes who need it most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/programs">
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                  Our Programs
                </button>
              </Link>
              <Link href="/donate">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)' }}>
            {/* Red accent top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />

            {/* Decorative stars */}
            <div className="absolute top-6 left-8 flex gap-2 opacity-30">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-4 h-4 text-white mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-3 h-3 text-white mt-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div className="absolute top-8 right-10 flex gap-2 opacity-20">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div className="absolute bottom-6 right-8 flex gap-2 opacity-25">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-3 h-3 text-white mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-5 h-5 text-white -mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div className="absolute bottom-10 left-12 opacity-15">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>

            {/* Content */}
            <div className="relative text-center" style={{ padding: '4rem 3rem' }}>
              {/* Star row above heading */}
              <div className="flex justify-center gap-3 mb-4">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>

              <h2 className="font-bold text-white mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Our Mission
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6" />
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto mb-4" style={{ fontSize: '1.2rem' }}>
                Founded in 2023, Bergen All-Stars is a registered New Jersey nonprofit dedicated to serving the special needs community in Northern New Jersey. Led by a committed Board of Trustees, we share a passion for making a positive impact.
              </p>
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto" style={{ fontSize: '1.2rem' }}>
                We believe every individual deserves the opportunity to thrive, grow, and achieve independence. Through our free sports programs and services, we work to create an inclusive community where everyone can reach their full potential.
              </p>

              {/* Star row below text */}
              <div className="flex justify-center gap-3 mt-6">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section - commented out for now, will add back later
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2 className="font-bold text-gray-900 mb-12 text-center" style={{ fontSize: '2.25rem' }}>
            How We Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Programs</h3>
              <p className="text-gray-500 text-sm">Variety of programs designed to support and engage individuals in our community.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Career Services</h3>
              <p className="text-gray-500 text-sm">Job training, employment opportunities, and career development support.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Travel & Independence</h3>
              <p className="text-gray-500 text-sm">Travel experiences and life skills training to promote independent living.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Promotional Opportunities</h3>
              <p className="text-gray-500 text-sm">Visibility and advocacy to showcase the talents of our community members.</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-gray-100">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
            {/* Red accent bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(to right, #dc2626, #0a3a72)' }} />

            {/* Decorative stars - top right */}
            <div className="absolute top-5 right-6 flex gap-2 opacity-15">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-3 h-3 text-blue-600 mt-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            {/* Decorative stars - bottom left */}
            <div className="absolute bottom-5 left-6 flex gap-2 opacity-15">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg className="w-5 h-5 text-red-600 -mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>

            {/* Content */}
            <div className="relative" style={{ padding: '3.5rem 3rem' }}>
              <div className="text-center mb-8">
                {/* Star accent */}
                <div className="flex justify-center gap-2 mb-3">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: '2rem' }}>
                  Make a Difference Today
                </h2>
                <div className="w-12 h-0.5 bg-red-500 mx-auto mb-4" />
                <p className="text-gray-600 max-w-xl mx-auto" style={{ fontSize: '1.05rem' }}>
                  Every action — big or small — helps our athletes thrive.
                </p>
              </div>

              {/* Three action columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-5 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#0a3a72' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.1rem' }}>Volunteer</h3>
                  <p className="text-gray-500 text-sm">Coach a team or help at an upcoming event</p>
                </div>
                <div className="text-center p-5 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.1rem' }}>Donate</h3>
                  <p className="text-gray-500 text-sm">Fund equipment, facilities, and programs</p>
                </div>
                <div className="text-center p-5 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#0a3a72' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.1rem' }}>Spread the Word</h3>
                  <p className="text-gray-500 text-sm">Share our mission with your community</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/donate">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                    Donate Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="font-semibold transition-all duration-200 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                    Get Involved
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }} className="text-center">
          <Image
            src="/images/logo.png"
            alt="Bergen All-Stars Logo"
            width={350}
            height={350}
            className="mx-auto"
          />
          <p className="text-gray-500 mt-4" style={{ fontSize: '0.95rem' }}>Serving Northern New Jersey since 2023</p>
        </div>
      </section>
    </div>
  );
}
