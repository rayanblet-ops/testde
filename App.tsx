
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import MyStory from './components/MyStory';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-rose-50 text-gray-800">
            <Hero />
            <main>
                <About />
                <Highlights />
                <MyStory />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;