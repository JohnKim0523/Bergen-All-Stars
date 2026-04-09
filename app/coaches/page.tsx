const coaches = [
  {
    name: 'Coach Name',
    sport: 'Bowling',
    bio: 'Placeholder bio — describe this coach, their background, and why they volunteer.',
    image: null,
  },
  {
    name: 'Coach Name',
    sport: 'Swimming',
    bio: 'Placeholder bio — describe this coach, their background, and why they volunteer.',
    image: null,
  },
];

export default function Coaches() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Our Volunteer Coaches
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Our programs would not be possible without the selfless dedication of our volunteer coaches. They donate their time, energy, and expertise to make a real difference in the lives of our athletes — all completely unpaid.
          </p>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '2.5rem 2rem' }} className="text-center">
          <p className="text-blue-800 font-semibold" style={{ fontSize: '1.25rem' }}>
            Thank you to every one of our coaches for volunteering your time and heart.
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Bergen All-Stars is built on your generosity.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
                {/* Headshot placeholder */}
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.25rem' }}>
                  {coach.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {coach.sport} Coach
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Coach CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }} className="text-center">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
            Interested in Coaching?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for passionate volunteers to coach our athletes. No prior coaching experience is required — just a willingness to make a difference.
          </p>
          <a
            href="mailto:info@bergenallstars.org"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}
          >
            Reach Out to Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}
