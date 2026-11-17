import React, {useCallback, useEffect, useState} from 'react';
import {type RoutePath} from './data/business';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {HomePage} from './pages/HomePage';
import {ServicesPage} from './pages/ServicesPage';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';

function normalizePath(pathname: string): RoutePath {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/services' || clean === '/about' || clean === '/contact') {
    return clean;
  }
  return '/';
}

const PAGE_TITLES: Record<RoutePath, string> = {
  '/': 'TDW Plumbing & Heating Corp. | Athol, MA Licensed Plumbing & Heating',
  '/services': 'Services | TDW Plumbing & Heating Corp. · Athol, MA',
  '/about': 'About Us | TDW Plumbing & Heating Corp. · Abe White, Master Plumber',
  '/contact': 'Contact & Dispatch | TDW Plumbing & Heating Corp. · (978) 709-1487',
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath];
  }, [currentPath]);

  const navigate = useCallback(
    (nextPath: RoutePath) => {
      if (nextPath !== currentPath) {
        window.history.pushState({}, '', nextPath);
        setCurrentPath(nextPath);
      }
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    [currentPath],
  );

  const hasDarkHero = currentPath === '/' || currentPath === '/services' || currentPath === '/contact';

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-[#FFFDF7] text-[#172B4D]">
      <Navbar currentPath={currentPath} onNavigate={navigate} hasDarkHero={hasDarkHero} />

      <div className="flex-1">
        {currentPath === '/' && <HomePage onNavigate={navigate} />}
        {currentPath === '/services' && <ServicesPage onNavigate={navigate} />}
        {currentPath === '/about' && <AboutPage onNavigate={navigate} />}
        {currentPath === '/contact' && <ContactPage onNavigate={navigate} />}
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}
