
import React from 'react';

const StatCard: React.FC<{ value: string; label: string; icon: string }> = ({ value, label, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
        <div className="text-4xl text-pink-500">{icon}</div>
        <div className="text-3xl font-bold text-gray-800 mt-2">{value}</div>
        <div className="text-gray-500 uppercase text-sm mt-1">{label}</div>
    </div>
);

const AchievementItem: React.FC<{ description: string; date: string; icon: string }> = ({ description, date, icon }) => (
    <div className="border-l-4 border-pink-200 pl-4 py-2 mb-4 bg-rose-50/50 rounded-r-lg">
        <p className="font-semibold text-gray-700 flex items-center">
            <span className="text-xl mr-3">{icon}</span>
            {description}
        </p>
        <p className="text-sm text-gray-500 ml-8">{date}</p>
    </div>
);

const AchievementCategory: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
     <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-playfair text-2xl font-bold text-pink-500 mb-4 flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            {title}
        </h3>
        <div>{children}</div>
    </div>
);

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="py-20 px-6 bg-rose-50 scroll-animate">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-4">Мои достижения</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Каждая награда — это результат большого труда, упорства и веры в себя.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    <StatCard value="15+" label="Грамот" icon="📜" />
                    <StatCard value="10+" label="Медалей" icon="🥇" />
                    <StatCard value="5+" label="Сертификатов" icon="📄" />
                </div>

                <div className="grid lg:grid-cols-2 gap-10 text-left">
                    <AchievementCategory title="Спортивные достижения" icon="🏆">
                        <AchievementItem 
                            icon="🥇"
                            description="1-е место на городских соревнованиях по акробатике"
                            date="Май 2024"
                        />
                        <AchievementItem 
                            icon="🥈"
                            description="Призер регионального турнира по спортивной гимнастике"
                            date="Февраль 2024"
                        />
                         <AchievementItem 
                            icon="🏅"
                            description="Сертификат за участие в мастер-классе от чемпиона"
                            date="Сентябрь 2023"
                        />
                    </AchievementCategory>
                    
                    <AchievementCategory title="Академические успехи" icon="🧠">
                        <AchievementItem 
                            icon="🥇"
                            description="Победитель школьной олимпиады по математике"
                            date="Апрель 2024"
                        />
                        <AchievementItem 
                            icon="📜"
                            description="Грамота за отличную учебу по итогам года"
                            date="Июнь 2023"
                        />
                    </AchievementCategory>

                     <AchievementCategory title="Творческие проекты" icon="🎨">
                        <AchievementItem 
                            icon="🏅"
                            description="Диплом за лучшее сольное выступление на школьном концерте"
                            date="Март 2024"
                        />
                        <AchievementItem 
                            icon="📄"
                            description="Сертификат участника городского конкурса талантов"
                            date="Декабрь 2023"
                        />
                    </AchievementCategory>

                     <AchievementCategory title="Волонтерская деятельность" icon="💖">
                        <AchievementItem 
                            icon="📜"
                            description="Благодарственное письмо за помощь в организации благотворительной ярмарки"
                            date="Октябрь 2023"
                        />
                    </AchievementCategory>
                </div>
            </div>
        </section>
    );
};

export default Achievements;