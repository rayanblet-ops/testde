import React from 'react';
import Hero from '../components/Hero';
import { TelegramIcon } from '../components/icons/TelegramIcon';

const HighlightCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
        <div className="text-4xl mb-4 text-pink-400">{icon}</div>
        <h3 className="text-2xl font-bold font-playfair mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Highlights: React.FC = () => (
    <section className="py-20 px-6 bg-rose-50">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-12">Ключевые моменты</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <HighlightCard 
                    icon="🤸"
                    title="Любимое увлечение"
                    description="Акробатика — это не просто хобби, а настоящая страсть! Гибкость, сила и грация в каждом движении."
                />
                <HighlightCard 
                    icon="🏆"
                    title="Достижения"
                    description="Неоднократная участница и победительница соревнований в разных городах, всегда стремящаяся к новым высотам."
                />
                <HighlightCard 
                    icon="✨"
                    title="Источник позитива"
                    description="Своей энергией и улыбкой Полина заряжает всех вокруг, делая мир чуточку ярче и добрее."
                />
            </div>
        </div>
    </section>
);

const Contact: React.FC = () => (
    <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-8">Контакты и Соцсети</h2>
            <p className="text-lg text-gray-600 mb-8">
                Хотите поздравить Полину лично или следить за её успехами? Подписывайтесь!
            </p>
            <div className="flex justify-center items-center gap-6">
                <a href="https://t.me/polixnett_0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-rose-100 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-pink-200 transition-colors duration-300 shadow-sm">
                    <TelegramIcon className="w-6 h-6"/>
                    <span>Telegram</span>
                </a>
                <a href="https://t.me/polixnrttt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-rose-100 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-pink-200 transition-colors duration-300 shadow-sm">
                     <TelegramIcon className="w-6 h-6"/>
                    <span>Канал в Telegram</span>
                </a>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <div className="py-20 px-6 bg-white text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-4">Добро пожаловать!</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Этот сайт посвящен дню рождения Полины Бурашниковой. Здесь вы найдете историю ее жизни, увлечений, достижений и мечт. Используйте меню, чтобы узнать больше!
                </p>
            </div>
            <Highlights /> 
            <Contact />
        </>
    );
};

export default HomePage;