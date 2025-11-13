import React from 'react';

// Card for the vision board
const VisionBoardCard: React.FC<{ icon: string; title: string; bgColor: string }> = ({ icon, title, bgColor }) => (
    <div className={`rounded-xl p-6 flex flex-col items-center justify-center text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300 ${bgColor}`}>
        <div className="text-5xl">{icon}</div>
        <h4 className="mt-4 font-bold text-lg font-playfair">{title}</h4>
    </div>
);

// Card for goal categories
const GoalCategoryCard: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
        <h3 className="font-playfair text-2xl font-bold text-pink-500 mb-4 flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            {title}
        </h3>
        <ul className="space-y-2 text-gray-600 list-inside">
            {children}
        </ul>
    </div>
);

// Goal tracker item
const GoalTrackerItem: React.FC<{ goal: string; status: 'planned' | 'in_progress' | 'done' }> = ({ goal, status }) => {
    const statusMap = {
        planned: { text: 'В планах', color: 'text-gray-400', icon: '○' },
        in_progress: { text: 'В процессе', color: 'text-yellow-500', icon: '...' },
        done: { text: 'Выполнено!', color: 'text-green-500', icon: '✓' }
    };
    
    return (
        <li className="flex items-center justify-between p-3 bg-rose-50/70 rounded-lg">
            <span className="text-gray-700">{goal}</span>
            <span className={`font-semibold text-sm flex items-center gap-2 ${statusMap[status].color}`}>
                {statusMap[status].icon} {statusMap[status].text}
            </span>
        </li>
    );
};

const DreamsPage: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-4">Мои мечты и цели</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Мечтать — значит видеть будущее. А ставить цели — значит строить к нему дорогу.</p>

                {/* Vision Board */}
                <h3 className="font-playfair text-3xl font-bold text-gray-700 mb-8">Доска желаний</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <VisionBoardCard icon="✈️" title="Путешествия" bgColor="bg-sky-400" />
                    <VisionBoardCard icon="🤸‍♀️" title="Спортивная карьера" bgColor="bg-rose-400" />
                    <VisionBoardCard icon="🎓" title="Образование" bgColor="bg-indigo-400" />
                    <VisionBoardCard icon="💖" title="Семья и Друзья" bgColor="bg-amber-400" />
                </div>

                {/* Goals Breakdown */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16 text-left">
                    <GoalCategoryCard title="Краткосрочные цели" icon="🎯">
                        <li><span className="text-pink-500 mr-2">✓</span>Освоить новый сложный элемент в акробатике.</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Закончить учебный год на "отлично".</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Прочитать 5 новых книг.</li>
                    </GoalCategoryCard>
                    <GoalCategoryCard title="Среднесрочные планы" icon="🚀">
                         <li><span className="text-pink-500 mr-2">✓</span>Успешно сдать экзамены.</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Поступить в престижный ВУЗ.</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Совершить первое большое путешествие.</li>
                    </GoalCategoryCard>
                    <GoalCategoryCard title="Большие мечты" icon="✨">
                        <li><span className="text-pink-500 mr-2">✓</span>Стать тренером и вдохновлять других.</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Увидеть северное сияние.</li>
                        <li><span className="text-pink-500 mr-2">✓</span>Создать крепкую и счастливую семью.</li>
                    </GoalCategoryCard>
                </div>

                {/* Travel & Skills */}
                 <div className="grid lg:grid-cols-2 gap-10 text-left">
                     <div className="bg-rose-50 p-8 rounded-xl shadow-inner">
                        <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <span className="text-3xl">🌍</span>
                            Карта путешествий
                        </h3>
                        <p className="text-gray-600 text-lg mb-4">Места, которые я обязательно хочу посетить:</p>
                        <ul className="space-y-2">
                           <li className="font-semibold text-gray-700">🇮🇹 Италия — попробовать настоящую пиццу.</li>
                           <li className="font-semibold text-gray-700">🇯🇵 Япония — увидеть цветение сакуры.</li>
                           <li className="font-semibold text-gray-700">🇺🇸 США — прогуляться по Нью-Йорку.</li>
                        </ul>
                    </div>
                     <div className="bg-rose-50 p-8 rounded-xl shadow-inner">
                        <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <span className="text-3xl">📈</span>
                            Трекер целей и навыков
                        </h3>
                        <ul className="space-y-3">
                            <GoalTrackerItem goal="Выучить английский до уровня B2" status="in_progress" />
                            <GoalTrackerItem goal="Научиться готовить пасту" status="planned" />
                            <GoalTrackerItem goal="Сдать на права" status="planned" />
                        </ul>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default DreamsPage;