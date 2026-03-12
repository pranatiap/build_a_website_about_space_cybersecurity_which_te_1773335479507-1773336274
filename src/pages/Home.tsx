import React from 'react';
import { Link } from 'react-router-dom';

// Type definitions for NavLink component props
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

// Reusable NavLink component for consistent styling and micro-interactions
const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-violet-400 transition-colors duration-200 ease-in-out
               py-1 px-3 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2
               focus:ring-violet-500 focus:ring-opacity-50"
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans flex flex-col antialiased">
      {/* Navbar - Fixed at the top, provides core navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-neutral-950/70 backdrop-blur-md border-b border-white/5 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white tracking-tight hover:text-violet-400 transition-colors duration-200">
            SpaceGuard
          </Link>
          <div className="flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section - Main title and tagline */}
      <header className="relative pt-32 pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        {/* Subtle background gradients for depth and "space" feel */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-950 to-neutral-800 opacity-70"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-violet-900/10 to-transparent"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg leading-tight">
          Space <span className="text-violet-400">Cybersecurity</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Safeguarding Critical Infrastructure Beyond Earth's Atmosphere.
        </p>
        <Link
          to="/about"
          className="px-8 py-3 bg-violet-600 text-white rounded-lg shadow-lg hover:bg-violet-500
                     transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-75
                     font-semibold text-lg inline-flex items-center group"
        >
          Learn More About Us
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </header>

      {/* Main Content Card - What is Space Cybersecurity section */}
      <main className="flex-grow flex items-center justify-center px-4 pb-20 mt-[-4rem] z-10">
        <div
          className="bg-neutral-800/20 backdrop-blur-lg border border-white/10 rounded-xl
                     shadow-2xl p-8 md:p-10 max-w-3xl w-full text-left
                     transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-violet-900/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Understanding Space Cybersecurity
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Space cybersecurity encompasses the protection of space-based assets—including satellites,
            spacecraft, ground control stations, launch systems, and the critical data they transmit—from a
            broad spectrum of malicious threats. These threats range from sophisticated cyber-attacks
            (such as signal jamming, data interception, or denial-of-service) to physical tampering and
            supply chain compromises.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            As global reliance on space infrastructure for vital services like communication, navigation,
            earth observation, and national security continues to grow, safeguarding the resilience and
            integrity of these systems becomes paramount. Threat actors, including nation-states,
            terrorist organizations, and cybercriminals, constantly seek to exploit vulnerabilities for
            strategic, economic, or political advantage, making robust space cybersecurity a necessity.
          </p>

          <Link
            to="/resources"
            className="inline-flex items-center px-6 py-2 border border-violet-600 text-violet-400
                       rounded-lg font-medium transition-all duration-200 ease-in-out
                       hover:bg-violet-600 hover:text-white transform hover:scale-105 group
                       focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-75"
          >
            Explore Key Resources
            <svg className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer - Simple copyright notice */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 mt-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} SpaceGuard. All rights reserved.</p>
      </footer>
    </div>
  );
}