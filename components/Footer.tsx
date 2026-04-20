import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Bergen All-Stars Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-xl">Bergen All-Stars</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A New Jersey Nonprofit Corporation dedicated to supporting, protecting, and empowering Northern New Jersey&apos;s special needs population through free sports programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Board
                </Link>
              </li>
              <li>
                <Link href="/donors" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Donors
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="text-blue-200 text-sm not-italic space-y-2">
              <p>40 Stevenson Lane</p>
              <p>Upper Saddle River, NJ 07458</p>
              <p className="mt-4">
                <a href="mailto:info@bergenallstars.com" className="hover:text-white transition-colors">
                  info@bergenallstars.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Bergen All-Stars, A NJ Nonprofit Corporation. All rights reserved.
          </p>
          <p className="text-blue-400 text-xs mt-2">
            EIN: 0451042476
          </p>
        </div>
      </div>
    </footer>
  );
}
