
import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (): TimeLeft | null => {
    const birthday = { month: 10, day: 13 }; // November is month 10 (0-indexed)
    const now = new Date();
    let nextBirthdayYear = now.getFullYear();

    if (now.getMonth() > birthday.month || (now.getMonth() === birthday.month && now.getDate() > birthday.day)) {
        nextBirthdayYear++;
    }

    const nextBirthday = new Date(nextBirthdayYear, birthday.month, birthday.day);
    const difference = nextBirthday.getTime() - now.getTime();

    if (difference <= 0) {
        return null; // It's birthday!
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    if (!timeLeft) {
        return (
             <div className="text-center bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h2 className="font-playfair text-4xl font-bold text-yellow-300">С Днем Рождения, Полина! 🎉</h2>
            </div>
        )
    }

    const timeParts = [
        { label: 'Дней', value: timeLeft.days },
        { label: 'Часов', value: timeLeft.hours },
        { label: 'Минут', value: timeLeft.minutes },
        { label: 'Секунд', value: timeLeft.seconds },
    ];

    return (
        <div className="text-center bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">До следующего Дня Рождения:</h2>
            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
                {timeParts.map((part, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold">{String(part.value).padStart(2, '0')}</span>
                        <span className="text-sm uppercase tracking-wider">{part.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;
