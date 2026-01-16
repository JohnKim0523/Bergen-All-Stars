export default function About() {
  const boardMembers = [
    {
      name: "Eunjung Kim",
      role: "Board of Trustees",
    },
    {
      name: "Eunice Lee",
      role: "Board of Trustees",
    },
    {
      name: "Veronica Hong",
      role: "Board of Trustees",
    },
    {
      name: "Minjung Shim",
      role: "Board of Trustees",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-6" style={{ fontSize: '3rem', lineHeight: '1.15' }}>
              About Us
            </h1>
            <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.25rem' }}>
              Learn about our mission, values, and the dedicated team working to support Northern New Jersey&apos;s special needs community.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="bg-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '2rem' }}>
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bergen All-Stars was established on October 31, 2023, as a New Jersey nonprofit corporation. Our organization was founded with a clear vision: to support, protect, and empower Northern New Jersey&apos;s special needs population.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that every individual deserves access to programs and services that help them thrive. Our commitment extends beyond traditional support services to include promotional opportunities, career development, travel experiences, and pathways to independence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in Upper Saddle River, New Jersey, we serve communities throughout Northern New Jersey, working to create an inclusive environment where everyone can reach their full potential.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6" style={{ fontSize: '1.5rem' }}>
                Organization Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Legal Name</p>
                  <p className="text-gray-900 font-medium">Bergen All-Stars, A NJ Nonprofit Corporation</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">State ID</p>
                  <p className="text-gray-900 font-medium">0451042476</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Founded</p>
                  <p className="text-gray-900 font-medium">October 31, 2023</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-900 font-medium">Upper Saddle River, New Jersey</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Service Area</p>
                  <p className="text-gray-900 font-medium">Northern New Jersey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '2rem' }}>
              Our Mission
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
              Support, Protect, and Empower Northern New Jersey&apos;s Special Needs Population. Support individuals via variety of programs, promotional opportunities, career services, travel, and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Support</h3>
              <p className="text-gray-500 text-sm">
                Providing comprehensive support through diverse programs and services tailored to individual needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Protect</h3>
              <p className="text-gray-500 text-sm">
                Advocating for the rights and well-being of our community members in all aspects of life.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.25rem' }}>Empower</h3>
              <p className="text-gray-500 text-sm">
                Building confidence and skills that lead to greater independence and self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '2rem' }}>
              Board of Trustees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our organization is led by a dedicated Board of Trustees who bring passion and commitment to serving our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900" style={{ fontSize: '1.125rem' }}>
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="text-center">
            <h2 className="font-bold text-white mb-4" style={{ fontSize: '1.75rem' }}>
              Join Our Mission
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals to help us make a difference. Whether through volunteering, donations, or partnerships, your support matters.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-700 font-semibold transition-colors"
              style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
