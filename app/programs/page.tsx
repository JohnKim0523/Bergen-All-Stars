import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    name: 'Swim Team',
    image: '/images/programs/swim-team/swim1.jpg',
    description:
      'Our swim program focuses on building water confidence, technique, and fitness for athletes of all skill levels. Athletes train weekly and compete in Special Olympics of New Jersey events.',
    schedule: 'Saturdays at 3:00 PM',
    location: 'Ridgewood YMCA Pool, Ridgewood, NJ',
    coordinator: {
      name: 'Min Jung Shim',
      title: 'Assistant LTP Coordinator',
      phone: '646-341-3732',
      email: 'mjshim612@gmail.com',
    },
  },
  {
    name: 'Bowling Team',
    image: null,
    description:
      'Our bowling program brings athletes together for weekly practice and competitive play in a fun, supportive environment.',
    schedule: null,
    location: null,
    coordinator: null,
  },
  {
    name: 'Golf Team',
    image: null,
    description:
      'Our golf program introduces athletes to the fundamentals of golf in an encouraging, team-oriented setting.',
    schedule: null,
    location: null,
    coordinator: null,
  },
];

export default function Programs() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)',
        }}
        className="text-white"
      >
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="flex gap-2 mb-4">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          </div>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Our Programs
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-5" />
          <p className="leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px', color: '#e5e7eb' }}>
            Bergen All-Stars offers free sports programs for young people with special needs, led by dedicated volunteer coaches and organized by our program coordinators.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="flex flex-col gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                {program.image && (
                  <div className="relative w-full" style={{ height: '360px' }}>
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.75rem' }}>
                    {program.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Schedule & Location */}
                  {(program.schedule || program.location) && (
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      {program.schedule && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{program.schedule}</span>
                        </div>
                      )}
                      {program.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{program.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Coordinator */}
                  {program.coordinator && (
                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-2">
                        Program Coordinator
                      </p>
                      <p className="text-gray-900 font-bold text-lg">{program.coordinator.name}</p>
                      <p className="text-gray-500 text-sm mb-3">{program.coordinator.title}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`tel:${program.coordinator.phone}`}
                          className="flex items-center gap-2 text-sm hover:underline"
                          style={{ color: '#0a3a72' }}
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {program.coordinator.phone}
                        </a>
                        <a
                          href={`mailto:${program.coordinator.email}`}
                          className="flex items-center gap-2 text-sm hover:underline"
                          style={{ color: '#0a3a72' }}
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {program.coordinator.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Coming soon badge for programs without details */}
                  {!program.coordinator && !program.schedule && (
                    <div className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded">
                      More details coming soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div
            className="relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />
            <div className="relative text-center" style={{ padding: '3.5rem 3rem' }}>
              <div className="flex justify-center gap-3 mb-4">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <h2
                className="font-bold text-white mb-2"
                style={{ fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                Want to Start a New Program?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6" />
              <p className="leading-relaxed max-w-2xl mx-auto mb-6" style={{ fontSize: '1.1rem', color: '#c5d9f2' }}>
                If you&apos;re interested in bringing a new sport or activity to Bergen All-Stars, we&apos;d love to hear from you.
              </p>
              <Link href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors" style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}>
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
