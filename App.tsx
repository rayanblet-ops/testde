import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FAB from './components/FAB';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimelinePage from './pages/TimelinePage';
import HobbiesPage from './pages/HobbiesPage';
import SchoolPage from './pages/SchoolPage';
import AchievementsPage from './pages/AchievementsPage';
import FriendsPage from './pages/FriendsPage';
import BirthdaysPage from './pages/BirthdaysPage';
import DreamsPage from './pages/DreamsPage';
import FavoritesPage from './pages/FavoritesPage';
import GuestbookPage from './pages/GuestbookPage';

const routes = {
    '/': HomePage,
    '/about': AboutPage,
    '/timeline': TimelinePage,
    '/hobbies': HobbiesPage,
    '/school': SchoolPage,
    '/achievements': AchievementsPage,
    '/friends': FriendsPage,
    '/birthdays': BirthdaysPage,
    '/dreams': DreamsPage,
    '/favorites': FavoritesPage,
    '/guestbook': GuestbookPage,
};

const App: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.slice(1) || '/');
            window.scrollTo(0, 0); // Scroll to top on page change
        };

        window.addEventListener('hashchange', handleHashChange);
        // Set initial path
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    // @ts-ignore
    const CurrentPage = routes[currentPath] || HomePage; // Fallback to HomePage

    return (
        <div className="min-h-screen bg-rose-50 text-gray-800 flex flex-col">
            <Header />
            <main className="flex-grow">
                <div key={currentPath} className="page-container">
                    <CurrentPage />
                </div>
            </main>
            <Footer />
            <FAB />
        </div>
    );
};

export default App;