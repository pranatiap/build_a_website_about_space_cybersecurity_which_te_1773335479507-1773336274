import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';

export const APP_ROUTES = [
  {
    "name": "Home",
    "route": "/"
  },
  {
    "name": "About",
    "route": "/about"
  },
  {
    "name": "Resources",
    "route": "/resources"
  }
];

export default function App() {
  return (
    <Router basename="/preview/build_a_website_about_space_cybersecurity_which_te_1773335479507/app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
