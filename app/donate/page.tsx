'use client';

import { useState } from 'react';
import Image from 'next/image';

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — value is still selectable manually
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
      <div className="min-w-0">
        <p className="text-gray-500 text-xs mb-1">{label}</p>
        <p className="font-mono text-gray-900 text-base break-all">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default function Donate() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: '2.75rem', lineHeight: '1.15' }}>
            Support Our Athletes
          </h1>
          <p className="text-blue-100 leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '600px' }}>
            Your donation helps us provide free sports programs for young people with special needs in Northern New Jersey. Every dollar makes a difference.
          </p>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="bg-white">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
              Where Your Money Goes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Bergen All-Stars is a registered NJ nonprofit. 100% of donations go directly toward funding our sports programs, equipment, facility costs, and supporting our athletes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Equipment</p>
                <p className="text-gray-600 text-sm">Sports gear and supplies for all programs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Facilities</p>
                <p className="text-gray-600 text-sm">Venue rentals and program spaces</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-700 font-bold text-2xl mb-2">Events</p>
                <p className="text-gray-600 text-sm">Tournaments, outings, and celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '4rem 2rem' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-gray-900 mb-2 text-center" style={{ fontSize: '1.75rem' }}>
              Ways to Give
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Choose whichever method is easiest for you.
            </p>

            <div className="space-y-6">
              {/* Zelle */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-purple-100 text-purple-700 rounded-lg px-3 py-2 font-bold text-sm shrink-0">
                    Zelle
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.15rem' }}>
                      Send via Zelle
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fastest and free. Scan the QR code below with your bank&apos;s Zelle app.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/zelle-qr.png"
                    alt="Bergen All-Stars Zelle QR code"
                    width={605}
                    height={466}
                    className="w-full h-auto max-w-sm rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Check */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-green-100 text-green-700 rounded-lg px-3 py-2 font-bold text-sm shrink-0">
                    Check
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.15rem' }}>
                      Mail a Check
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Make checks payable to the organization and mail to the address below.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                    <p className="text-gray-500 text-xs mb-1">Payable to</p>
                    <p className="text-gray-900 text-sm font-medium">
                      Bergen All-Stars, A NJ Nonprofit Corporation
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                    <p className="text-gray-500 text-xs mb-1">Mail to</p>
                    <p className="text-gray-900 text-sm font-medium">40 Stevenson Lane</p>
                    <p className="text-gray-900 text-sm font-medium">Upper Saddle River, NJ 07458</p>
                  </div>
                </div>
              </div>

              {/* Bank Transfer / ACH */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-blue-100 text-blue-700 rounded-lg px-3 py-2 font-bold text-sm shrink-0">
                    ACH
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: '1.15rem' }}>
                      Bank Transfer (ACH / Wire)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Send directly to our Hanmi Bank account.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    For ACH or wire transfer details, please reach out to us directly. We&apos;ll send you our Hanmi Bank routing and account information securely.
                  </p>
                  <a
                    href="mailto:info@bergenallstars.com?subject=ACH%2FWire%20transfer%20details%20request"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                    style={{ color: '#0a3a72' }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email us for ACH / wire details
                  </a>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="text-center mt-10">
              <p className="text-gray-600 text-sm mb-3">
                Questions about donating, or want to give another way?
              </p>
              <a
                href="mailto:info@bergenallstars.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
              >
                Email info@bergenallstars.com
              </a>
              <p className="text-gray-500 text-xs mt-6">
                Bergen All-Stars, A NJ Nonprofit Corporation &middot; EIN: 0451042476
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
