type Event = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  category?: string;
};

const events: Event[] = [
  {
    title: 'Placeholder Event — To Be Provided',
    date: 'TBD',
    location: 'TBD',
    description:
      'Event details will be added here once provided by the creator. Replace entries in the events array in app/events/page.tsx.',
    category: 'Upcoming',
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
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  {/* Date block */}
                  <div
                    className="md:w-56 shrink-0 flex flex-col items-center justify-center text-center text-white p-8"
                    style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 100%)' }}
                  >
                    <svg className="w-8 h-8 text-red-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-bold leading-tight" style={{ fontSize: '1.25rem' }}>
                      {event.date}
                    </p>
                    {event.time && (
                      <p className="text-blue-200 text-sm mt-1">{event.time}</p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1">
                    {event.category && (
                      <p className="text-red-600 font-semibold text-xs uppercase tracking-widest mb-2">
                        {event.category}
                      </p>
                    )}
                    <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.5rem' }}>
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                      <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
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
