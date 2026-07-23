import Image from 'next/image';

type Coordinator = {
  name: string;
  role: string;
  image: string | null;
  flipImage?: boolean;
  bio?: string;
  email?: string;
  phone?: string;
};

const coordinators: Coordinator[] = [
  {
    name: 'Chuljin "Chris" Kim',
    role: 'Volunteer Coordinator',
    image: '/images/coaches/chuljin-kim.jpg',
    flipImage: true,
    email: 'info@bergenallstars.com',
    bio: `Chris Kim is currently serving as a volunteer coordinator for Bergen All-Stars Special Olympic Team for the last 2 years.

For the past 30 years, he has served with "With Our Hands Together Inc.", a UN NGO's International Mission for the Disabled in New York City, as a supporter and board member, and he was recently appointed as chairperson for WOHT.

He has volunteered as a basketball coach and softball coach for his town's (Fort Lee) recreational programs for over eight years before the COVID-19 outbreak.

As a father of three daughters who are passionate about bowling — one in college and two current High School Varsity bowlers — he hopes their love for bowling will inspire others to participate more in Special Olympics bowling events.

He currently serves as one of the committee members of Gospel Mission Church in Fairfield, NJ, as well as on their mission team. Over the past several years, he has served in various overseas missions, supporting disadvantaged people in Nepal, Guatemala, and Colombia.`,
  },
];

type Coach = {
  name: string;
  sport: string | null;
  role?: string;
  image: string | null;
  bio?: string;
};

const coaches: Coach[] = [
  {
    name: 'Sabrina McClure',
    sport: 'Equestrian',
    image: '/images/coaches/sabrina-mcclure.png',
    bio: `Sabrina McClure grew up in France, where her love of horses began at an early age. She has been teaching and coaching for almost 10 years and is dedicated to creating an inclusive, supportive environment for every rider.

Sabrina teaches in both French and English and is known for her remarkable patience, steady encouragement, and her commitment to bringing out the best in every athlete. Her focus is on safety, confidence, and building strong partnerships between horse and rider.

At Bergen Equestrian Center, Sabrina coaches several equestrian athletes who have gone on to earn Gold medals in the New Jersey Special Olympics — a reflection of the hard work, dedication, and teamwork they share.`,
  },
  {
    name: 'Hyeon In Cho',
    sport: 'Golf',
    image: '/images/coaches/hyeon-in-cho.jpg',
    bio: `Hyeon In Cho has been a golf coach for Bergen All-Stars for the last 3 years. She also volunteered for unified players for 2 years at both regional and state games for Special Olympics New Jersey. Outside of coaching, she volunteers for her church, Chodae Presbyterian Church, as part of the women's fellowship on Wednesdays, teaches in Sunday School, and serves as an instructor for a knitting club.`,
  },
  {
    name: 'Hyoun Kim',
    sport: 'Swim',
    image: '/images/coaches/hyoun-kim.jpg',
    bio: `Coach Hyoun Kim serves as Swim Coach for Special Olympics of New Jersey and is dedicated to building confidence, inclusion, and personal growth through swimming. She has supported and raised three competitive USA swimmers and has been actively involved as a swim parent volunteer — assisting at practices and meets, supporting USA Swimming team activities, fundraising efforts, and event coordination.

Beyond the pool, Hyoun is deeply committed to community service. She volunteers with Good Neighbor Ministry providing music programs for seniors, serves as a Preschool Ministry Teacher at Gospel Mission Church, and participates in Young Adults Ministry at Gospel Mission Church. She has also served on a mission trip to Cambodia, supporting local communities. Bilingual in Korean and English, Coach Hyoun is committed to creating a safe, encouraging, and respectful environment where every athlete can thrive.`,
  },
  {
    name: 'John Lee',
    sport: 'Swim',
    image: '/images/coaches/john-lee.jpg',
    bio: `Coach John honorably served in the Republic of Korea Marine Corps, including the Marine Corps Airborne (Parachute) Division, where he completed rigorous training in high-intensity operations requiring discipline, resilience, and strong team coordination. He is also a two-time full marathon finisher in Pohang, South Korea, demonstrating endurance, perseverance, and mental strength.

He actively serves in the Young Adults Ministry at Gospel Mission Church, mentoring and supporting young adults in their spiritual growth and fellowship. John has participated in two mission trips to countries in Central Asia, engaging in cross-cultural outreach and hands-on community service projects. He has also volunteered in the Homeless Ministry in Baltimore, assisting with food distribution and outreach to underserved communities.

Currently, Coach John serves as Co-Head Coach for Special Olympics alongside his wife, Hyoun, and remains deeply involved in his children's USA Swimming team — volunteering at team events, assisting at swim meets, and supporting fundraising and team activities. Through military service, athletics, ministry, and coaching, he is committed to leading with integrity, serving with compassion, and creating a positive and encouraging environment for every athlete he supports.`,
  },
];

function initials(name: string) {
  return name
    .replace(/"[^"]*"/g, '')
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Coaches() {
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
            Our Volunteer Coaches & Coordinator
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-5" />
          <p className="leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '640px', color: '#e5e7eb' }}>
            Our programs would not be possible without the selfless dedication of our volunteer coordinator and coaches. They donate their time, energy, and expertise to make a real difference in the lives of our athletes — all completely unpaid.
          </p>
        </div>
      </section>

      {/* Thank You Banner */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '2.5rem 2rem' }} className="text-center">
          <p className="text-blue-800 font-semibold" style={{ fontSize: '1.25rem' }}>
            Thank you to every one of our coaches and our coordinator for volunteering your time and heart.
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Bergen All-Stars is built on your generosity.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">
              Volunteer Coaches
            </p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
              Meet Our Coaches
            </h2>
            <div className="w-12 h-0.5 bg-red-500 mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
              >
                {/* Top accent bar — matches site's red star/stripe theme */}
                <div
                  style={{
                    height: '6px',
                    background:
                      'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Headshot with gradient frame */}
                  <div className="flex flex-col items-center mb-5">
                    <div
                      className="mb-4"
                      style={{
                        padding: '4px',
                        borderRadius: '1.25rem',
                        background:
                          'linear-gradient(135deg, #dc2626 0%, #0a3a72 100%)',
                        boxShadow: '0 6px 20px rgba(10, 58, 114, 0.18)',
                      }}
                    >
                      {coach.image ? (
                        <div
                          className="relative overflow-hidden bg-white"
                          style={{
                            width: '15rem',
                            height: '18.5rem',
                            borderRadius: '1rem',
                            border: '3px solid white',
                          }}
                        >
                          <Image
                            src={coach.image}
                            alt={coach.name}
                            fill
                            quality={100}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 15rem"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: '15rem',
                            height: '18.5rem',
                            borderRadius: '1rem',
                            border: '3px solid white',
                            background:
                              'linear-gradient(135deg, #0a3a72 0%, #083060 100%)',
                          }}
                        >
                          <span className="text-white font-bold" style={{ fontSize: '2.75rem' }}>
                            {initials(coach.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3
                      className="font-bold text-gray-900 mb-2 text-center"
                      style={{ fontSize: '1.25rem' }}
                    >
                      {coach.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-xs uppercase tracking-widest flex items-center gap-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {coach.role ?? (coach.sport ? `${coach.sport} Coach` : 'Volunteer Coach')}
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </p>
                  </div>

                  {/* Bio */}
                  {coach.bio && (
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {coach.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '2rem 2rem 4rem' }}>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">
              Program Coordinator
            </p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
              Meet Our Coordinator
            </h2>
            <div className="w-12 h-0.5 bg-red-500 mt-3" />
          </div>

          <div className="flex flex-col gap-6">
            {coordinators.map((coord, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
                  {/* Headshot */}
                  {coord.image ? (
                    <div
                      className="relative shrink-0 overflow-hidden bg-gray-50"
                      style={{ width: '15rem', height: '18rem', borderRadius: '1rem' }}
                    >
                      <Image
                        src={coord.image}
                        alt={coord.name}
                        fill
                        quality={100}
                        sizes="16rem"
                        className="object-cover"
                        style={coord.flipImage ? { transform: 'scaleX(-1)' } : undefined}
                      />
                    </div>
                  ) : (
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{
                        width: '15rem',
                        height: '18rem',
                        borderRadius: '1rem',
                        background:
                          'linear-gradient(135deg, #041c3a 0%, #0a3a72 60%, #083060 100%)',
                      }}
                    >
                      <span className="text-white font-bold" style={{ fontSize: '2.25rem' }}>
                        {initials(coord.name)}
                      </span>
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.5rem' }}>
                      {coord.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-4">
                      {coord.role}
                    </p>
                    {coord.bio && (
                      <p
                        className="text-gray-600 leading-relaxed mb-4"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {coord.bio}
                      </p>
                    )}
                    {(coord.email || coord.phone) && (
                      <div className="flex flex-col gap-2 items-center md:items-start">
                        {coord.email && (
                          <a
                            href={`mailto:${coord.email}`}
                            className="inline-flex items-center gap-2 text-sm hover:underline"
                            style={{ color: '#0a3a72' }}
                          >
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {coord.email}
                          </a>
                        )}
                        {coord.phone && (
                          <a
                            href={`tel:${coord.phone.replace(/[^\d+]/g, '')}`}
                            className="inline-flex items-center gap-2 text-sm hover:underline"
                            style={{ color: '#0a3a72' }}
                          >
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.766 3.063a2 2 0 01-.5 1.872l-1.13 1.13a11.042 11.042 0 005.516 5.516l1.13-1.13a2 2 0 011.872-.5l3.063.766A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {coord.phone}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
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
            href="mailto:info@bergenallstars.com"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
            style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}
          >
            Reach Out to Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}
