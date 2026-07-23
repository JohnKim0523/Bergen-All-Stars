import Image from 'next/image';

type Event = {
  title: string;
  date: string;
  time?: string;
  location: string;
  address?: string;
  description: string;
  category?: string;
  images?: string[];
  imageWidth?: number;
  imageHeight?: number;
  imagePositions?: string[];
  imageTransforms?: string[];
  fullImage?: boolean;
  cardMaxWidth?: string;
  cropHeight?: string;
  link?: string;
  linkLabel?: string;
};

const events: Event[] = [
  {
    title: '2026 North Golf Regional',
    date: 'September 12, 2026',
    location: 'Plainfield West 9, Edison',
    address: '1541 Woodland Avenue, Edison, NJ 08820',
    description:
      'Our golfers compete in the Special Olympics New Jersey North Golf Regional at Plainfield West 9. Come out and cheer on the Bergen All-Stars golf team.',
    category: 'Regional Competition',
    images: ['/images/events/fall-north-regional-golf-event.jpg'],
    link: 'https://www.sonj.org/events/2026-north-golf-regional/',
    linkLabel: 'Event details on sonj.org',
  },
  {
    title: 'Fall Games – Golf',
    date: 'October 24, 2026',
    location: 'Mountain View Golf Course',
    address: '850 Bear Tavern Road, Ewing, NJ',
    description:
      'Our golfers compete at the Special Olympics New Jersey Fall Games golf tournament at Mountain View Golf Course, where athletes play alongside Unified partners. Come out and support the Bergen All-Stars golf team.',
    category: 'State Competition',
    images: ['/images/events/fall-golf-event.jpg'],
    imagePositions: ['center'],
    link: 'https://www.sonj.org/events/fall-games-golf/',
    linkLabel: 'Event details on sonj.org',
  },
  {
    title: 'Fall Games – Equestrian',
    date: 'October 24, 2026',
    location: 'Remote Competition',
    address: 'Virtual',
    description:
      'Our equestrian athletes compete in the Special Olympics New Jersey Fall Games horse show, held as a remote competition — riders perform at their own stables and submit videos for judging.',
    category: 'State Competition',
    images: ['/images/events/fall-equestrain-event.jpg'],
    link: 'https://www.sonj.org/events/fall-games-equestrian/',
    linkLabel: 'Event details on sonj.org',
  },
];

export default function Events() {
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
            Upcoming Events
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-5" />
          <p className="leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '640px', color: '#e5e7eb' }}>
            Join us at practices, competitions, fundraisers, and community gatherings. There&apos;s always something happening at Bergen All-Stars.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          {events.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
              <p className="text-gray-600" style={{ fontSize: '1.1rem' }}>
                No upcoming events at this time. Check back soon!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {events.map((event, index) => {
                const images = event.images ?? [];
                const isStacked = event.fullImage || images.length > 1;

                return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col mx-auto w-full ${
                    isStacked ? '' : 'md:flex-row'
                  }`}
                  style={event.cardMaxWidth ? { maxWidth: event.cardMaxWidth } : undefined}
                >
                  {/* Event image(s) — stacked layout: image(s) on top, content below */}
                  {isStacked && images.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-1 bg-gray-200">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          className="relative bg-gray-100 w-full"
                          style={{ height: '22rem' }}
                        >
                          <Image
                            src={img}
                            alt={`${event.title} (${i + 1} of ${images.length})`}
                            fill
                            quality={100}
                            className="object-cover"
                            style={{
                              objectPosition:
                                event.imagePositions?.[i] ?? 'center',
                            }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Single-image stacked layout: edge-to-edge with optional vertical crop (panoramic strip) */}
                  {isStacked && images.length === 1 && (
                    event.cropHeight ? (
                      <div className="relative w-full overflow-hidden" style={{ height: event.cropHeight }}>
                        <Image
                          src={images[0]}
                          alt={event.title}
                          fill
                          quality={100}
                          className="object-cover"
                          style={{ objectPosition: event.imagePositions?.[0] ?? 'center' }}
                          sizes="(max-width: 768px) 100vw, 70rem"
                        />
                      </div>
                    ) : (
                      <Image
                        src={images[0]}
                        alt={event.title}
                        width={event.imageWidth ?? 1600}
                        height={event.imageHeight ?? 1067}
                        quality={100}
                        className="w-full h-auto"
                      />
                    )
                  )}

                  {/* Event image — side layout */}
                  {!isStacked && images.length > 0 && (
                    <div className="relative md:w-[28rem] shrink-0 h-72 md:h-auto bg-gray-100 overflow-hidden">
                      <Image
                        src={images[0]}
                        alt={event.title}
                        fill
                        quality={100}
                        className="object-cover"
                        style={{
                          objectPosition: event.imagePositions?.[0] ?? 'center',
                          transform: event.imageTransforms?.[0],
                        }}
                        sizes="(max-width: 768px) 100vw, 28rem"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 flex-1">
                    {event.category && (
                      <p className="text-red-600 font-semibold text-xs uppercase tracking-widest mb-2">
                        {event.category}
                      </p>
                    )}
                    <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                      {event.title}
                    </h3>

                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-2">
                      <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900">{event.date}</span>
                        {event.time && <span className="text-gray-600"> · {event.time}</span>}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-4">
                      <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">{event.location}</div>
                        {event.address && <div className="text-gray-600">{event.address}</div>}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-semibold hover:underline"
                        style={{ color: '#0a3a72' }}
                      >
                        {event.linkLabel ?? 'Learn more'}
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
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
                Want to Get Involved?
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6" />
              <p className="leading-relaxed max-w-2xl mx-auto mb-6" style={{ fontSize: '1.1rem', color: '#c5d9f2' }}>
                Attend an event, volunteer, or sponsor a fundraiser — we&apos;d love to see you there.
              </p>
              <a
                href="mailto:info@bergenallstars.com"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                style={{ padding: '0.875rem 2rem', borderRadius: '0.5rem' }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
