import React from 'react';

const BirthdaysPage: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center flex items-center justify-center min-h-[60vh]">
                <div>
                    <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-8">Дни рождения</h2>
                    <div className="bg-rose-100/50 rounded-lg p-8 shadow-md">
                        <p className="text-3xl font-semibold mb-4 text-gray-700">🎉</p>
                        <p className="text-lg text-gray-600">
                            Этот раздел скоро пополнится яркими фотографиями с празднования дней рождения! Заглядывайте позже.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BirthdaysPage;