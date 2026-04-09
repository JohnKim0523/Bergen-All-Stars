export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Contact Us
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '1.75rem' }}>
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a href="mailto:info@bergenallstars.org" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    info@bergenallstars.org
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Address</p>
                  <p className="text-gray-900">40 Stevenson Lane</p>
                  <p className="text-gray-900">Upper Saddle River, NJ 07458</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.25rem' }}>
                Ways to Help
              </h3>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">01</span>
                  <span>Volunteer as a coach for one of our sports programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">02</span>
                  <span>Make a donation to support our athletes and programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">03</span>
                  <span>Spread the word about Bergen All-Stars in your community</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">04</span>
                  <span>Partner with us as a local business or organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
