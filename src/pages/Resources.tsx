import React, { useState, useMemo, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

// Define the accent color
const ACCENT_COLOR_CLASS = 'text-violet-400';
const ACCENT_BG_COLOR_CLASS = 'bg-violet-600';
const ACCENT_HOVER_BG_COLOR_CLASS = 'hover:bg-violet-700';
const ACCENT_BORDER_COLOR_CLASS = 'border-violet-600';
const ACCENT_FOCUS_RING_CLASS = 'focus:ring-violet-500';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'report' | 'organization' | 'academic' | 'news' | 'tool';
  tags: string[];
}

const allResources: Resource[] = [
  {
    id: '1',
    title: 'Space ISAC: Threat Intelligence Platform',
    description: 'The Space Information Sharing and Analysis Center provides actionable threat intelligence and analysis for the space industry.',
    url: 'https://www.spaceisac.org/',
    category: 'organization',
    tags: ['threat intelligence', 'information sharing', 'critical infrastructure'],
  },
  {
    id: '2',
    title: 'CISA: Space Systems Cybersecurity Guidance',
    description: 'Guidance and best practices from the Cybersecurity and Infrastructure Security Agency for securing space-related critical infrastructure.',
    url: 'https://www.cisa.gov/topics/critical-infrastructure-security/space-systems',
    category: 'report',
    tags: ['government', 'guidance', 'best practices', 'critical infrastructure'],
  },
  {
    id: '3',
    title: 'NIST SP 800-213: Cybersecurity for Space Systems',
    description: 'The National Institute of Standards and Technology Special Publication providing guidelines for space system cybersecurity.',
    url: 'https://csrc.nist.gov/publications/detail/sp/800-213/final',
    category: 'report',
    tags: ['standards', 'framework', 'government', 'guidelines'],
  },
  {
    id: '4',
    title: 'Secure World Foundation: Space Security Publications',
    description: 'An extensive collection of research papers and analyses on space security, sustainability, and policy.',
    url: 'https://swfound.org/our-vision/space-security/',
    category: 'academic',
    tags: ['policy', 'research', 'sustainability', 'international'],
  },
  {
    id: '5',
    title: 'ESA Cybersecurity Framework',
    description: 'The European Space Agency\'s framework and approach to ensuring cybersecurity across its missions and infrastructure.',
    url: 'https://www.esa.int/Safety_Security/Cyber_Security',
    category: 'organization',
    tags: ['european', 'government', 'framework', 'missions'],
  },
  {
    id: '6',
    title: 'Space News: Cybersecurity Section',
    description: 'Latest news, analysis, and interviews on cybersecurity trends and incidents affecting the space sector.',
    url: 'https://spacenews.com/tag/cybersecurity/',
    category: 'news',
    tags: ['current events', 'industry news', 'analysis'],
  },
  {
    id: '7',
    title: 'The Aerospace Corporation: Cybersecurity Research',
    description: 'Cutting-edge research and technical reports from a federally funded research and development center focused on space.',
    url: 'https://aerospace.org/cybersecurity',
    category: 'academic',
    tags: ['research', 'engineering', 'technical', 'rdc'],
  },
  {
    id: '8',
    title: 'MITRE ATT&CK for Space',
    description: 'A knowledge base of adversary tactics and techniques based on real-world observations for space systems.',
    url: 'https://attack.mitre.org/matrices/ics/space/',
    category: 'tool',
    tags: ['framework', 'adversary emulation', 'tactics', 'techniques'],
  },
  {
    id: '9',
    title: 'Journal of Space Safety Engineering: Cybersecurity Articles',
    description: 'Peer-reviewed articles focusing on safety and cybersecurity challenges in space operations and engineering.',
    url: 'https://www.sciencedirect.com/journal/journal-of-space-safety-engineering/special-issue/10W8P6G9V4Q', // Example specific issue or search
    category: 'academic',
    tags: ['research', 'peer-reviewed', 'engineering', 'safety'],
  },
  {
    id: '10',
    title: 'Global Military Cyber: Space Operations',
    description: 'Analysis and reporting on the evolving landscape of military cybersecurity in the space domain.',
    url: 'https://www.globsec.org/tag/space-cyber-security/', // Example link, actual site might vary
    category: 'news',
    tags: ['military', 'geopolitics', 'national security'],
  },
];

export default function Resources(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(allResources.map(r => r.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  const filteredResources = useMemo(() => {
    let filtered = allResources;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        resource =>
          resource.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          resource.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          resource.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }
    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8 sm:p-12 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Space Cybersecurity <span className={ACCENT_COLOR_CLASS}>Resources</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of essential sources, reports, and organizations dedicated to the evolving field of space cybersecurity.
            Dive deep into the knowledge base to secure our future in orbit.
          </p>
          <nav className="mt-8 flex justify-center space-x-6">
            <Link to="/" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">
              About
            </Link>
            <Link to="/resources" className="text-violet-400 font-medium">
              Resources
            </Link>
          </nav>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search resources by title, description, or tags..."
            className={`flex-grow p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING_CLASS} transition-all duration-200`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={`block w-full sm:w-48 appearance-none p-3 pr-8 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING_CLASS} transition-all duration-200 cursor-pointer`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <svg
                className={`mx-auto h-16 w-16 text-gray-600 mb-4`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-300">No resources found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search or category filters.
              </p>
            </div>
          ) : (
            filteredResources.map(resource => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block p-6 rounded-xl overflow-hidden shadow-lg border border-white/10
                           bg-white/[0.03] backdrop-blur-sm transform transition-all duration-300 ease-in-out
                           hover:scale-[1.02] hover:shadow-2xl hover:${ACCENT_BORDER_COLOR_CLASS}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-50 group-hover:text-violet-300 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <span className={`text-xs font-medium rounded-full px-3 py-1 ${ACCENT_BG_COLOR_CLASS}/20 text-violet-300 border border-violet-400/30`}>
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex items-center text-sm ${ACCENT_COLOR_CLASS} group-hover:underline transition-colors duration-200`}>
                  Visit Source
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}