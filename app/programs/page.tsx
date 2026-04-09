import Link from 'next/link';

const programs = [
  {
    name: 'Bowling',
    description: 'Our bowling program brings athletes together for weekly practice and competitive play in a fun, supportive environment.',
    coordinator: 'Coordinator Name',
    email: 'bowling@bergenallstars.org',
    icon: '🎳',
  },
  {
    name: 'Swimming',
    description: 'Our swimming program focuses on building water confidence, technique, and fitness for athletes of all skill levels.',
    coordinator: 'Coordinator Name',
    email: 'swimming@bergenallstars.org',
    icon: '🏊',
  },
  {
    name: 'Coming Soon',
    description: 'We are always looking to expand our programs. Stay tuned for new sports and activities.',
    coordinator: '',
    email: '',
    icon: '⭐',
  },
];

export default function Programs() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Our Programs
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Bergen All-Stars offers free sports programs for young people with special needs, led by dedicated volunteer coaches and organized by our program coordinators.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.5rem' }}>
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                {program.coordinator && (
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-500 text-xs mb-1">Program Coordinator</p>
                    <p className="text-gray-900 font-semibold text-sm">{program.coordinator}</p>
                    <a
                      href={`mailto:${program.email}`}
                      className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                    >
                      {program.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }} className="text-center">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
            Want to Start a New Program?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you&apos;re interested in bringing a new sport or activity to Bergen All-Stars, we&apos;d love to hear from you.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}>
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
