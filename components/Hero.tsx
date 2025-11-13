import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';

const Confetti: React.FC = () => {
    // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
    const [confettiPieces, setConfettiPieces] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        const generateConfetti = () => {
            const pieces = [];
            const colors = ['#f9a8d4', '#f472b6', '#ec4899', '#fde047', '#a78bfa'];
            for (let i = 0; i < 50; i++) {
                const style = {
                    left: `${Math.random() * 100}vw`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    transform: `scale(${0.5 + Math.random()})`
                };
                pieces.push(<div key={i} className="confetti" style={style}></div>);
            }
            setConfettiPieces(pieces);
        };
        generateConfetti();
    }, []);

    return <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">{confettiPieces}</div>;
};

const Hero: React.FC = () => {
    return (
        <header className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541198028379-b1f41743f062?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <Confetti />
            <div className="relative z-10 text-center p-4">
                <h1 className="font-playfair text-5xl md:text-8xl font-bold drop-shadow-lg animate-fade-in-down">
                    Полина Бурашникова
                </h1>
                <p className="mt-4 text-xl md:text-2xl drop-shadow-md animate-fade-in-up">
                    13.11.2009
                </p>
                <div className="mt-8">
                    <Countdown />
                </div>
            </div>
        </header>
    );
};

export default Hero;