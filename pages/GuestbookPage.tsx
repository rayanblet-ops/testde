import React, { useState } from 'react';

interface Message {
    name: string;
    text: string;
    timestamp: Date;
}

const GuestbookPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            setError('Пожалуйста, заполните все поля!');
            return;
        }
        
        const newMessage: Message = { name, text, timestamp: new Date() };
        setMessages([newMessage, ...messages]);
        setName('');
        setText('');
        setError('');
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-4 text-center">Книга поздравлений</h2>
                <p className="text-lg text-gray-600 mb-10 text-center">Оставьте свое теплое пожелание для Полины здесь!</p>

                <div className="bg-rose-50/60 p-8 rounded-xl shadow-inner mb-12">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Ваше имя:</label>
                            <input 
                                type="text" 
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Например, 'Лучшая подруга'"
                                className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition-shadow"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Ваше поздравление:</label>
                            <textarea 
                                id="message"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={4}
                                placeholder="С Днем Рождения, Полина! Желаю..."
                                className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition-shadow"
                            ></textarea>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="text-center">
                            <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Отправить поздравление ✨
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-6">
                    {messages.length === 0 ? (
                        <p className="text-center text-gray-500">Поздравлений пока нет. Будьте первым!</p>
                    ) : (
                        messages.map((msg, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-300">
                                <p className="text-gray-600 italic">"{msg.text}"</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="font-bold text-pink-500">— {msg.name}</p>
                                    <p className="text-xs text-gray-400">{msg.timestamp.toLocaleTimeString()}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default GuestbookPage;