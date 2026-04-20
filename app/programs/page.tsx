import Image from 'next/image';
import Link from 'next/link';

const coordinator = {
  name: 'Chuljin "Chris" Kim',
  title: 'Volunteer Coordinator',
  email: 'info@bergenallstars.com',
};

type Program = {
  name: string;
  image: string | null;
  imageWidth?: number;
  imageHeight?: number;
  layout: 'split-left' | 'split-right' | 'banner' | 'text-only';
  description: string;
  schedule: string | null;
  location: string | null;
};

const programs: Program[] = [
  {
    name: 'Swim Team',
    image: '/images/programs/swim-team/swim1.jpg',
    imageWidth: 900,
    imageHeight: 1200, // portrait
    layout: 'split-left',
    description:
      'Our swim program focuses on building water confidence, technique, and fitness for athletes of all skill levels. Athletes train weekly and compete in Special Olympics of New Jersey events.',
    schedule: 'Saturdays at 3:00 PM',
    location: 'Ridgewood YMCA Pool, Ridgewood, NJ',
  },
  {
    name: 'Equestrian',
    image: '/images/programs/equestrian-team/equestrian1.jpg',
    imageWidth: 1600,
    imageHeight: 1200, // landscape 4:3
    layout: 'split-right',
    description:
      'Our equestrian program teaches athletes horseback riding in a safe, supportive environment — focusing on safety, confidence, and building strong partnerships between horse and rider. Our riders have gone on to earn Gold medals at the New Jersey Special Olympics.',
    schedule: null,
    location: 'Bergen Equestrian Center',
  },
  {
    name: 'Bowling Team',
    image: '/images/programs/bowling-team/bowling1.jpg',
    imageWidth: 1600,
    imageHeight: 1200, // wide landscape group shot
    layout: 'banner',
    description:
      'Our bowling program brings athletes together for weekly practice and competitive play in a fun, supportive environment.',
    schedule: null,
    location: null,
  },
  {
    name: 'Golf Team',
    image: null,
    layout: 'text-only',
    description:
      'Our golf program introduces athletes to the fundamentals of golf in an encouraging, team-oriented setting.',
    schedule: null,
    location: null,
  },
];

function ProgramMeta({ program }: { program: Program }) {
  return (
    <>
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

      {!program.schedule && (
        <div className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded mb-5">
          {program.location ? 'Schedule coming soon' : 'Schedule & location coming soon'}
        </div>
      )}

      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-2">
          Contact Our Coordinator
        </p>
        <p className="text-gray-900 font-bold text-lg">{coordinator.name}</p>
        <p className="text-gray-500 text-sm mb-3">{coordinator.title}</p>
        <a
          href={`mailto:${coordinator.email}`}
          className="inline-flex items-center gap-2 text-sm hover:underline"
          style={{ color: '#0a3a72' }}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {coordinator.email}
        </a>
      </div>
    </>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const title = (
    <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.75rem' }}>
      {program.name}
    </h3>
  );
  const description = (
    <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
  );

  // Layout 1: split with image on the LEFT (used for portrait images — swim)
  if (program.layout === 'split-left' && program.image) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow grid grid-cols-1 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
        <div className="bg-gray-100 flex items-center justify-center p-4">
          <Image
            src={program.image}
            alt={program.name}
            width={program.imageWidth!}
            height={program.imageHeight!}
            className="w-full h-auto max-h-[520px] object-contain rounded"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          {title}
          {description}
          <ProgramMeta program={program} />
        </div>
      </div>
    );
  }

  // Layout 2: split with image on the RIGHT (used for 4:3 landscape — equestrian)
  if (program.layout === 'split-right' && program.image) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center order-2 md:order-1">
          {title}
          {description}
          <ProgramMeta program={program} />
        </div>
        <div className="bg-gray-100 flex items-center justify-center p-4 order-1 md:order-2">
          <Image
            src={program.image}
            alt={program.name}
            width={program.imageWidth!}
            height={program.imageHeight!}
            className="w-full h-auto max-h-[420px] object-contain rounded"
          />
        </div>
      </div>
    );
  }

  // Layout 3: banner on top, content below (used for wide group photos — bowling)
  if (program.layout === 'banner' && program.image) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        <div className="bg-gray-100 flex items-center justify-center p-4">
          <Image
            src={program.image}
            alt={program.name}
            width={program.imageWidth!}
            height={program.imageHeight!}
            className="w-full h-auto max-h-[500px] object-contain rounded"
          />
        </div>
        <div className="p-8">
          {title}
          {description}
          <ProgramMeta program={program} />
        </div>
      </div>
    );
  }

  // Layout 4: text-only with icon (used when no photo — golf)
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
        <div
          className="shrink-0 rounded-xl flex items-center justify-center"
          style={{
            width: '8rem',
            height: '8rem',
            background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 100%)',
          }}
        >
          <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88C14.08 14.21 17 9.85 17 7c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4zM5 20c0 1.1 3.13 2 7 2s7-.9 7-2-3.13-2-7-2-7 .9-7 2z" />
          </svg>
        </div>
        <div className="flex-1">
          {title}
          {description}
          <ProgramMeta program={program} />
        </div>
      </div>
    </div>
  );
}

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
            {programs.map((program) => (
              <ProgramCard key={program.name} program={program} />
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
