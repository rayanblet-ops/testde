
import React from 'react';

const About: React.FC = () => {
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
        <section id="about" className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-8">О Полине</h2>
                <div className="bg-rose-100/50 rounded-lg p-8 shadow-md flex flex-col md:flex-row items-center gap-8">
                    <img src="https://storage.googleapis.com/aai-web-samples/user-images/f8099818-f682-4519-94b6-e24c558c4021.jpeg" alt="Полина" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"/>
                    <div className="text-left">
                        <p className="text-2xl font-semibold mb-4 text-gray-700">"Ну просто красотка!"</p>
                        <ul className="space-y-2 text-lg text-gray-600">
                            <li><strong>Возраст:</strong> {polinaAge} лет</li>
                            <li><strong>Город:</strong> Октябрьский</li>
                            <li><strong>Главный интерес:</strong> Акробатика 🤸‍♀️</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;