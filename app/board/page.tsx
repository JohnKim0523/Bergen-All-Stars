import Image from 'next/image';

const boardMembers = [
  {
    name: 'Judy Shin',
    role: 'Board Member',
    image: '/images/board/judy-shin.png',
    imagePosition: 'object-[center_20%]',
    bio: [
      'LTP Coordinator, Bergen All-Stars Special Olympic Team',
      'Former Teacher in Closter School District (1995–2009)',
    ],
  },
  {
    name: 'Eunjung Kim',
    role: 'Board Member',
    image: '/images/board/eunjung-kim.png',
    bio: [
      'Assistant LTP Coordinator, Bergen All-Stars Special Olympic Team',
      'Former Software Programmer for Samsung and H Mart',
    ],
  },
  {
    name: 'Ji Sun Kim',
    role: 'Board Member',
    image: '/images/board/ju-sun-kim.jpg',
    bio: [
      'Support Coordinator – Infinity Today',
      'Head Coach, Bergen All-Stars Bocce Team – Special Olympics of New Jersey (Summer Games 2024 & 2025)',
      'Former Revenue Auditor | Accounts Receivable Coordinator',
    ],
  },
  {
    name: 'Eunyoung Lee',
    role: 'Board Member',
    image: '/images/board/eunyoung-lee.jpg',
    bio: [
      'Pre-K School Teacher at Bambini School, Leonia (2019–Present)',
      'Bergen All-Stars Swim Team General Manager – Special Olympics of New Jersey (2024 & 2025)',
    ],
  },
  {
    name: 'Min Jung Shim',
    role: 'Board Member',
    image: '/images/board/minjung-shim.jpg',
    bio: [
      'Assistant LTP Coordinator, Bergen All-Stars Special Olympic Team',
      'Former Graphic & Packaging Designer',
      'Full-Time Caregiver for a Child with Autism',
    ],
  },
];

export default function Board() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)' }} className="text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="flex gap-2 mb-4">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Board of Trustees
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-5" />
          <p className="leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px', color: '#e5e7eb' }}>
            Our Board of Trustees leads the fundraising and strategic direction of Bergen All-Stars, ensuring we have the resources to serve our community.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '3rem 2rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-5 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      quality={100}
                      sizes="4.5rem"
                      className={`object-cover ${member.imagePosition || ''}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-red-600 font-semibold text-xs uppercase tracking-wide mb-0.5">{member.role}</p>
                    <h3 className="font-bold text-gray-900 leading-tight" style={{ fontSize: '1.05rem' }}>
                      {member.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {member.bio.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-600 leading-relaxed" style={{ fontSize: '0.8rem' }}>
                      <svg className="w-3 h-3 shrink-0 mt-1" style={{ color: '#0a3a72' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Our Mission */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #041c3a 0%, #0a3a72 50%, #083060 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />
            <div className="relative text-center" style={{ padding: '3.5rem 3rem' }}>
              <div className="flex justify-center gap-3 mb-4">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Supporting Our Mission
              </h2>
              <div className="w-12 h-0.5 bg-red-500 mx-auto mb-6" />
              <p className="leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '1.1rem', color: '#c5d9f2' }}>
                Our Board of Trustees is responsible for fundraising and ensuring Bergen All-Stars has the resources to continue providing free sports programs and support services to our community. Every dollar raised goes directly toward our athletes and programs.
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
