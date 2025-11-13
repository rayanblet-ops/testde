
import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';

const Contact: React.FC = () => {
    return (
        <section id="contacts" className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-8">Контакты и Соцсети</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Хотите поздравить Полину лично или следить за её успехами? Подписывайтесь!
                </p>
                <div className="flex justify-center items-center gap-6">
                    <a href="https://t.me/polixnett_0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-rose-100 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-pink-200 transition-colors duration-300 shadow-sm">
                        <TelegramIcon className="w-6 h-6"/>
                        <span>Telegram (@polixnett_0)</span>
                    </a>
                    <a href="https://t.me/polixnrttt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-rose-100 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-pink-200 transition-colors duration-300 shadow-sm">
                         <TelegramIcon className="w-6 h-6"/>
                        <span>Канал в Telegram</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
