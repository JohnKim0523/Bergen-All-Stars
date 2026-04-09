const boardMembers = [
  {
    name: 'Eunjung Kim',
    role: 'Board of Trustees',
    bio: 'Placeholder bio — describe their role and contribution to the organization.',
    image: null,
  },
  {
    name: 'Eunice Lee',
    role: 'Board of Trustees',
    bio: 'Placeholder bio — describe their role and contribution to the organization.',
    image: null,
  },
  {
    name: 'Veronica Hong',
    role: 'Board of Trustees',
    bio: 'Placeholder bio — describe their role and contribution to the organization.',
    image: null,
  },
  {
    name: 'Minjung Shim',
    role: 'Board of Trustees',
    bio: 'Placeholder bio — describe their role and contribution to the organization.',
    image: null,
  },
];

export default function Board() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Board of Trustees
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Our Board of Trustees leads the fundraising and strategic direction of Bergen All-Stars, ensuring we have the resources to serve our community.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
                {/* Headshot placeholder */}
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.125rem' }}>
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission of the Board */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }} className="text-center">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
            Supporting Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our Board of Trustees is responsible for fundraising and ensuring Bergen All-Stars has the resources to continue providing free sports programs and support services to our community. Every dollar raised goes directly toward our athletes and programs.
          </p>
        </div>
      </section>
    </div>
  );
}
