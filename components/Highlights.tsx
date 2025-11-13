
import React from 'react';

const HighlightCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
        <div className="text-4xl mb-4 text-pink-400">{icon}</div>
        <h3 className="text-2xl font-bold font-playfair mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Highlights: React.FC = () => {
    return (
        <section id="highlights" className="py-20 px-6 bg-rose-50 scroll-animate">
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
};

export default Highlights;