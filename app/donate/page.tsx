import Link from 'next/link';

export default function Donate() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Support Our Athletes
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Your donation helps us provide free sports programs for young people with special needs in Northern New Jersey. Every dollar makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Info */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
              Where Your Money Goes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Bergen All-Stars is a registered NJ nonprofit. 100% of donations go directly toward funding our sports programs, equipment, facility costs, and supporting our athletes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Equipment</p>
                <p className="text-gray-600 text-sm">Sports gear and supplies for all programs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Facilities</p>
                <p className="text-gray-600 text-sm">Venue rentals and program spaces</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Events</p>
                <p className="text-gray-600 text-sm">Tournaments, outings, and celebrations</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-900 font-semibold mb-2" style={{ fontSize: '1.25rem' }}>
                Ready to Donate?
              </p>
              <p className="text-gray-600 text-sm mb-6">
                To make a donation, please contact us directly. We appreciate every contribution, no matter the size.
              </p>
              <a
                href="mailto:info@bergenallstars.org"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem', fontSize: '1rem' }}
              >
                Contact Us to Donate
              </a>
              <p className="text-gray-500 text-xs mt-4">
                Bergen All-Stars, A NJ Nonprofit Corporation &middot; EIN: 0451042476
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
