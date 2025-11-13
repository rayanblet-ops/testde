
import React from 'react';

const QuoteCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
    <div className="bg-rose-100/60 p-6 rounded-lg shadow-md relative">
        <span className="absolute top-2 left-4 text-6xl text-pink-200/80 font-playfair opacity-50">“</span>
        <blockquote className="text-lg italic text-gray-700 z-10 relative">
            {quote}
        </blockquote>
        <cite className="block text-right mt-4 font-semibold text-pink-500">{author}</cite>
    </div>
);

const FriendsAndFamily: React.FC = () => {
    return (
        <section id="friends" className="py-20 px-6 bg-white scroll-animate">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-12">Мои друзья и близкие</h2>

                <div className="grid md:grid-cols-2 gap-10 text-left mb-16">
                    <div className="bg-rose-50 p-8 rounded-xl shadow-inner">
                        <h3 className="text-3xl font-bold font-playfair mb-4 text-gray-800 flex items-center gap-3">
                            <span className="text-3xl">💖</span>
                            Семья — моя опора
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Самые близкие люди, которые всегда поддержат, поймут и дадут лучший совет. Спасибо им за безграничную любовь, веру в меня и уютные семейные вечера!
                        </p>
                    </div>
                     <div className="bg-rose-50 p-8 rounded-xl shadow-inner">
                        <h3 className="text-3xl font-bold font-playfair mb-4 text-gray-800 flex items-center gap-3">
                            <span className="text-3xl">✨</span>
                             Совместные приключения
                        </h3>
                        <p className="text-gray-600 text-lg">
                            С друзьями не бывает скучно! Каждая встреча — это море смеха, новые истории и незабываемые моменты. Вместе мы готовы покорять любые вершины!
                        </p>
                    </div>
                </div>

                <h3 className="font-playfair text-3xl font-bold text-pink-500 mb-8">Что говорят друзья</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <QuoteCard 
                        quote="Полина — это человек-солнце! Она всегда на позитиве, готова помочь и поддержать в любую минуту. Я очень ценю нашу дружбу."
                        author="— Лучшая подруга"
                    />
                    <QuoteCard 
                        quote="С ней можно и посмеяться до слез, и поговорить по душам. Она очень надежный и искренний человек, на которого всегда можно положиться."
                        author="— Близкий друг"
                    />
                </div>
            </div>
        </section>
    );
};

export default FriendsAndFamily;