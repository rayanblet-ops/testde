import React, { useState } from 'react';

const TimelinePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('2024');

    const tabData = {
        '2024': {
            title: '2024: Год прорыва и дружбы',
            description: 'Ключевые события, фотографии и интересные факты за 2024 год.',
            points: [
                'Год новых побед и ярких впечатлений в кругу верных друзей.',
                'Успешное участие в знаковых соревнованиях и укрепление командного духа.',
                'Открыла для себя новые грани акробатики и вдохновила многих своим примером.'
            ]
        },
        '2025': {
            title: '2025: Новые горизонты',
            description: 'Планы, цели и мечты на 2025 год и далее.',
            points: [
                'Взгляд в будущее, постановка амбициозных целей и мечты о большем.',
                'Планирование новых выступлений, освоение сложных элементов и подготовка к следующему этапу.',
                'Полна решимости и энергии, чтобы сделать этот период еще более успешным и запоминающимся.'
            ]
        }
    };
    
    const currentContent = tabData[activeTab as keyof typeof tabData];

    const TabButton: React.FC<{tabId: string; label: string}> = ({ tabId, label}) => (
         <button
            onClick={() => setActiveTab(tabId)}
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${activeTab === tabId ? 'bg-pink-500 text-white shadow-md' : 'bg-white text-pink-500 hover:bg-pink-100'}`}
        >
            {label}
        </button>
    );

    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-12">Моя история</h2>
                <div className="flex justify-center border-b-2 border-rose-100 pb-4 mb-8">
                     <div className="flex justify-center gap-4 p-2 bg-rose-100/60 rounded-full">
                        <TabButton tabId="2024" label="2024" />
                        <TabButton tabId="2025" label="2025 - настоящее время" />
                    </div>
                </div>

                <div key={activeTab} className="bg-rose-50/50 p-6 md:p-8 rounded-2xl shadow-inner animate-fade-in">
                    <div className="text-center">
                        <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h3>
                        <ul className="space-y-3 text-lg text-gray-600 inline-block text-left">
                            {currentContent.points.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1 font-bold">✓</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelinePage;