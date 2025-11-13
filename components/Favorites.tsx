
import React from 'react';

const FavoriteCard: React.FC<{ icon: string; title: string; items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform h-full text-left">
        <div className="text-4xl mb-4 text-pink-400">{icon}</div>
        <h3 className="text-2xl font-bold font-playfair mb-3 text-gray-800">{title}</h3>
        <ul className="space-y-1 text-gray-600">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-pink-400 mr-2">◆</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Favorites: React.FC = () => {
    return (
        <section id="favorites" className="py-20 px-6 bg-rose-50 scroll-animate">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-4">Мое любимое</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Маленькие радости и вещи, которые вдохновляют каждый день!</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FavoriteCard 
                        icon="🎵"
                        title="Музыка"
                        items={["Исполнитель: Macan", "Песня: 'Самый пьяный округ в мире'", "Жанр: Поп, рэп"]}
                    />
                    <FavoriteCard 
                        icon="🎬"
                        title="Фильмы и сериалы"
                        items={["Фильм: 'Хатико'", "Сериал: 'Слово пацана'", "Жанр: Драмы, комедии"]}
                    />
                    <FavoriteCard 
                        icon="📚"
                        title="Книги"
                        items={["Книга: 'После'", "Автор: Анна Тодд", "Жанр: Романтика, фэнтези"]}
                    />
                    <FavoriteCard 
                        icon="🍕"
                        title="Еда и блюда"
                        items={["Блюдо: Паста Карбонара", "Десерт: Чизкейк", "Напиток: Латте"]}
                    />
                    <FavoriteCard 
                        icon="🎨"
                        title="Цвета и стили"
                        items={["Цвет: Розовый, бежевый", "Стиль: Уютный, элегантный", "Элемент: Мягкие свитера"]}
                    />
                    <FavoriteCard 
                        icon="🏙️"
                        title="Места и города"
                        items={["Город: Дубай", "Место: Любимый парк", "Мечта: Побережье океана"]}
                    />
                </div>
                <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                    <h3 className="font-playfair text-3xl font-bold text-pink-500 mb-4">Любимая цитата</h3>
                    <blockquote className="text-xl italic text-gray-700 relative">
                        "Будь собой; все остальные роли уже заняты."
                        <cite className="block text-right mt-4 not-italic font-semibold text-gray-500">— Оскар Уайльд</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Favorites;