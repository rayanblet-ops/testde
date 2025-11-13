import React from 'react';

const AboutPage: React.FC = () => {
    const getAge = (birthDate: Date): number => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    
    const polinaAge = getAge(new Date(2009, 10, 13));

    return (
        <section className="py-20 px-6 bg-white min-h-screen flex items-center">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pink-500 mb-8">О Полине</h2>
                <div className="bg-rose-100/50 rounded-lg p-8 shadow-md">
                    <p className="text-2xl font-semibold mb-4 text-gray-700">"Ну просто красотка!"</p>
                    <ul className="space-y-3 text-lg md:text-xl text-gray-600">
                        <li><strong>Возраст:</strong> {polinaAge} лет</li>
                        <li><strong>Город:</strong> Октябрьский</li>
                        <li><strong>Главный интерес:</strong> Акробатика 🤸‍♀️</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;