
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-6 px-6">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Полина Бурашникова. Всех с праздником!</p>
                <p className="text-sm text-gray-400 mt-2">С любовью от друзей и семьи.</p>
            </div>
        </footer>
    );
};

export default Footer;
