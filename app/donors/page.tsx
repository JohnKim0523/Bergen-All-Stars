const tiers = [
  {
    name: 'Platinum',
    amount: '$3,000+',
    gradient: 'linear-gradient(135deg, #e5e4e2 0%, #b8b8b8 50%, #8a8a8a 100%)',
    textColor: '#1a1a1a',
    donors: [
      'Gunn Choe and Joseph Choe Family',
      'J R Support Agency',
    ],
  },
  {
    name: 'Gold',
    amount: '$2,000+',
    gradient: 'linear-gradient(135deg, #f7d774 0%, #d4a020 50%, #a67c00 100%)',
    textColor: '#1a1a1a',
    donors: [
      'Hanmi Bank',
      'Justin and Ryan Shin',
    ],
  },
  {
    name: 'Silver',
    amount: '$1,000+',
    gradient: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #909090 100%)',
    textColor: '#1a1a1a',
    donors: [
      'Paul Kim and Clare Kim',
      'Grace Foundation',
      'Sung Yim and Shirley Yim',
      'Jennifer Chiu',
    ],
  },
  {
    name: 'Bronze',
    amount: '$500+',
    gradient: 'linear-gradient(135deg, #d4a373 0%, #a0622d 50%, #6e4018 100%)',
    textColor: '#ffffff',
    donors: [] as string[],
  },
];

export default function Donors() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)' }}
        className="text-white"
      >
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="flex gap-2 mb-4">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          </div>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Our Donors
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-5" />
          <p className="leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '640px', color: '#e5e7eb' }}>
            Bergen All-Stars is powered by the generosity of our donors. Their contributions make it possible for us to offer free sports programs to young athletes with special needs across Northern New Jersey.
          </p>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '2.5rem 2rem' }} className="text-center">
          <p className="text-blue-800 font-semibold" style={{ fontSize: '1.25rem' }}>
            Thank you to every donor who has invested in our athletes and our mission.
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Your generosity changes lives.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="flex flex-col gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Tier Header */}
                <div
                  className="flex items-center justify-between px-8 py-6"
                  style={{ background: tier.gradient, color: tier.textColor }}
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <h2 className="font-bold tracking-wide" style={{ fontSize: '1.75rem' }}>
                      {tier.name} Donors
                    </h2>
                  </div>
                  <p className="font-extrabold" style={{ fontSize: '1.75rem' }}>
                    {tier.amount}
                  </p>
                </div>

                {/* Donor List */}
                <div className="p-8">
                  {tier.donors.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {tier.donors.map((donor) => (
                        <li key={donor} className="flex gap-3 text-gray-800 leading-relaxed">
                          <svg className="w-4 h-4 shrink-0 mt-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span style={{ fontSize: '1.05rem' }}>{donor}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">
                      Be the first to support us at this tier.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Donor CTA */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />
            <div className="relative text-center" style={{ padding: '3.5rem 3rem' }}>
              <div className="flex justify-center gap-3 mb-4">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Become a Donor
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6" />
              <p className="leading-relaxed max-w-2xl mx-auto mb-6" style={{ fontSize: '1.1rem', color: '#c5d9f2' }}>
                Join our community of supporters. Every contribution — at any level — directly funds programs, equipment, and events for our athletes.
              </p>
              <a
                href="mailto:info@bergenallstars.com"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}
              >
                Contact Us to Donate
              </a>
              <p className="text-xs mt-4" style={{ color: '#a9bfd9' }}>
                Bergen All-Stars, A NJ Nonprofit Corporation &middot; EIN: 0451042476
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
