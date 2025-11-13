import React from 'react';

const GalleryPage: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center flex items-center justify-center min-h-[60vh]">
                <div>
                    <h2 className="font-playfair text-4xl font-bold text-pink-500 mb-8">Фотогалерея</h2>
                    <div className="bg-rose-100/50 rounded-lg p-8 shadow-md">
                        <p className="text-3xl font-semibold mb-4 text-gray-700">📸</p>
                        <p className="text-lg text-gray-600">
                           Фотоальбомы с лучшими моментами появятся здесь совсем скоро.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;