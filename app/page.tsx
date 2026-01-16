import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              {/* Main Headline */}
              <h1 className="font-bold text-white" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '1.5rem' }}>
                Support. Protect. Empower.
              </h1>

              {/* Subheadline */}
              <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Bergen All-Stars is dedicated to supporting Northern New Jersey&apos;s special needs population through programs, promotional opportunities, career services, travel, and independence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/programs">
                  <button className="bg-white hover:bg-blue-50 text-blue-700 font-semibold transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                    Our Programs
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-transparent hover:bg-blue-700 text-white font-semibold border-2 border-white transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                    Get Involved
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-blue-500/30 rounded-full w-80 h-80 flex items-center justify-center">
                <div className="bg-blue-400/40 rounded-full w-64 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center">
                    <span className="text-blue-700 font-bold text-4xl">BAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '2.25rem' }}>
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: '1.125rem' }}>
              Bergen All-Stars is a New Jersey nonprofit organization committed to supporting, protecting, and empowering Northern New Jersey&apos;s special needs population. We provide support through a variety of programs, promotional opportunities, career services, travel experiences, and pathways to independence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2 className="font-bold text-gray-900 mb-12 text-center" style={{ fontSize: '2.25rem' }}>
            How We Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programs */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>
                Programs
              </h3>
              <p className="text-gray-500 text-sm">
                Variety of programs designed to support and engage individuals in our community.
              </p>
            </div>

            {/* Career Services */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>
                Career Services
              </h3>
              <p className="text-gray-500 text-sm">
                Job training, employment opportunities, and career development support.
              </p>
            </div>

            {/* Travel & Independence */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>
                Travel & Independence
              </h3>
              <p className="text-gray-500 text-sm">
                Travel experiences and life skills training to promote independent living.
              </p>
            </div>

            {/* Promotional Opportunities */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>
                Promotional Opportunities
              </h3>
              <p className="text-gray-500 text-sm">
                Visibility and advocacy to showcase the talents of our community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="text-center">
            <h2 className="font-bold text-white mb-4" style={{ fontSize: '2rem' }}>
              Make a Difference Today
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in supporting Northern New Jersey&apos;s special needs community. Whether you want to volunteer, donate, or participate in our programs, every contribution matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white hover:bg-blue-50 text-blue-700 font-semibold transition-colors" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                  Contact Us
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-transparent hover:bg-blue-600 text-white font-semibold border-2 border-white transition-colors" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '2.25rem' }}>
                About Bergen All-Stars
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2023, Bergen All-Stars is a registered New Jersey nonprofit corporation dedicated to serving the special needs community in Northern New Jersey. Our organization is led by a committed Board of Trustees who share a passion for making a positive impact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that every individual deserves the opportunity to thrive, grow, and achieve independence. Through our diverse programs and services, we work to create an inclusive community where everyone can reach their full potential.
              </p>
              <Link href="/about">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors" style={{ padding: '0.875rem 1.5rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
                  Meet Our Team
                </button>
              </Link>
            </div>

            {/* Visual placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center" style={{ minHeight: '320px' }}>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">BAS</span>
                </div>
                <p className="text-gray-500 text-sm">Serving Northern New Jersey since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
