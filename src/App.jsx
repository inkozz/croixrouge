import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Actualite from './components/Actualite';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Contact from './components/Contact';
import Animation from './components/categorie/Animation';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="relative">
          <Header />
          <main className="flex flex-wrap justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actualite" element={<Actualite />} />
              <Route path="/services" element={<Services />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/animation" element={<Animation />} />
            </Routes>
          </main>
          <Link to="/contact">
            <button
              type="button"
              className="p-4 fixed bottom-0 right-0 hover:text-red-600 hover:border-red-600 m-6 rounded-xl flex justify-center items-center back2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Nous contacter
            </button>
          </Link>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
