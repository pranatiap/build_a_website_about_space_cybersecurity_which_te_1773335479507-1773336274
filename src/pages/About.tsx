import React from 'react';
import { Link } from 'react-router-dom';

// Type definitions for a cybersecurity information source
interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'Government' | 'Research' | 'Industry' | 'Non-Profit';
}

// Hardcoded data for information sources
const sources: Source[] = [
  {
    id: '1',
    name: 'National Aeronautics and Space Administration (NASA)',
    description: 'NASA provides guidelines and research on securing space systems and critical infrastructure, crucial for its missions.',
    url: 'https://www.nasa.gov/cybersecurity/',
    category: 'Government',
  },
  {
    id: '2',
    name: 'European Space Agency (ESA)',
    description: 'ESA focuses on the security and resilience of European space assets and services, addressing continental space interests.',
    url: 'https://www.esa.int/Enabling_Support/Space_Safety_Security',
    category: 'Government',
  },
  {
    id: '3',
    name: 'Center for Strategic and International Studies (CSIS)',
    description: 'CSIS publishes extensive reports and analyses on space security and geopolitical implications, offering policy insights.',
    url: 'https://www.csis.org/programs/international-security-program/aerospace-security',
    category: 'Research',
  },
  {
    id: '4',
    name: 'National Institute of Standards and Technology (NIST)',
    description: 'NIST develops cybersecurity frameworks and standards applicable to diverse technology sectors, including space systems.',
    url: 'https://www.nist.gov/cybersecurity',
    category: 'Government',
  },
  {
    id: '5',
    name: 'Secure World Foundation (SWF)',
    description: 'SWF promotes cooperative solutions for space sustainability and security, advocating for responsible space practices.',
    url: 'https://swfound.org/issues/space-sustainability-and-security/',
    category: 'Non-Profit',
  },
  {
    id: '6',
    name: 'Space Foundation',
    description: 'The Space Foundation provides insights into commercial, military, and civil space activities, including security challenges.',
    url: 'https://www.spacefoundation.org/',
    category: 'Industry',
  },
  {
    id: '7',
    name: 'Department of Defense (DoD) Space Policy',
    description: 'Outlines the US military approach to securing space operations and assets, crucial for national defense.',
    url: 'https://www.defense.gov/Policy/Space-Policy/',
    category: 'Government',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8 sm:p-12 font-sans antialiased">
      <header className="max-w-6xl mx-auto mb-16">
        {/* Navigation */}
        <nav className="flex justify-end space-x-6 text-gray-400 text-sm mb-16">
          <Link to="/" className="hover:text-violet-400 transition-colors duration-200">Home</Link>
          <Link to="/about" className="text-violet-400 font-medium">About</Link>
          <Link to="/resources" className="hover:text-violet-400 transition-colors duration-200">Resources</Link>
        </nav>

        {/* Page Title and Subtitle */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-50 mb-4 tracking-tight leading-tight">
          Understanding Space Cybersecurity
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          Safeguarding humanity's frontier: Protecting vital space assets from evolving cyber threats across orbits and ground.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* What is Space Cybersecurity? Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-50 mb-8 flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M10 20l4-2m-4 2l-4-2m4 2h-4M10 20v-6a4 4 0 014-4h7.5c1.243 0 2.387.403 3.375 1.082l-.008-.008C23.09 7.74 23.95 8.784 24 10c.05 1.216-.405 2.378-1.25 3.125a6.516 6.516 0 01-2.5 1.625 6.516 6.516 0 01-2.5 1.625l-.008.008c-.988.679-2.132 1.082-3.375 1.082h-1.5z" />
            </svg>
            <span>What is it?</span>
          </h2>
          <div className="bg-[#1a1a1a] border border-white/[0.08] rounded-2xl p-8 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-violet-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Space cybersecurity is the specialized field dedicated to protecting critical space infrastructure—including satellites, ground stations, command & control systems, and data links—from malicious cyber activities.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              It encompasses a broad range of measures ensuring the confidentiality, integrity, and availability of space systems. With space becoming increasingly vital for global communication, navigation, defense, and scientific research, robust cybersecurity is paramount.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Threats range from state-sponsored attacks and industrial espionage to criminal activities and sophisticated jamming. These target the complex interplay of hardware, software, networks, and human operations defining modern space systems.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-50 mb-6">Key Pillars of Protection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Satellite Integrity', 'Secure Ground Systems', 'Data Encryption & Privacy', 'Resilient Communications', 'Supply Chain Security', 'Threat Intelligence'].map((pillar, index) => (
                <div key={index} className="bg-[#1a1a1a] border border-white/[0.08] rounded-lg p-5 flex items-center space-x-3 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md hover:shadow-white/5">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                  <span className="text-gray-300 font-medium text-sm">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Learn More Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-50 mb-8 flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Where to Learn More</span>
          </h2>
          <div className="space-y-6">
            {sources.map(source => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-6 transition-all duration-200 ease-in-out hover:bg-[#222222] hover:border-violet-500/30 hover:shadow-violet-500/10 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-50 mb-1 group-hover:text-violet-400">
                      {source.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {source.description}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-violet-400 transform -rotate-45 group-hover:-rotate-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="inline-flex items-center text-xs px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full font-medium">
                  {source.category}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}