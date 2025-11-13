import React, { useState } from 'react';

const pages = [
    { path: '/', name: 'Главная', icon: '🏠', color: '#ff7979' },
    { path: '/about', name: 'О Полине', icon: '✨', color: '#badc58' },
    { path: '/timeline', name: 'История', icon: '📜', color: '#f9ca24' },
    { path: '/school', name: 'Школа', icon: '🎓', color: '#7ed6df' },
    { path: '/hobbies', name: 'Хобби', icon: '🤸‍♀️', color: '#e056fd' },
    { path: '/achievements', name: 'Достижения', icon: '🏆', color: '#f0932b' },
    { path: '/friends', name: 'Друзья', icon: '💖', color: '#ffbe76' },
    { path: '/birthdays', name: 'ДР', icon: '🎉', color: '#686de0' },
    { path: '/dreams', name: 'Мечты', icon: '🚀', color: '#ff7f50' },
    { path: '/favorites', name: 'Любимое', icon: '🎶', color: '#30336b' },
    { path: '/guestbook', name: 'Пожелания', icon: '💌', color: '#95afc0' },
];

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault(); // Prevent default hash change
        
        setIsOpen(false); // Start closing the menu
        
        // Wait for the menu closing animation to proceed before changing the page
        setTimeout(() => {
            window.location.hash = path;
        }, 400); // The CSS transition is 0.5s
    };

    const radius = 200; // Radius of the circle
    const startAngle = -Math.PI / 2; // Start at 270 degrees (top)
    const sweepAngle = 2 * Math.PI; // Sweep 360 degrees

    return (
        <>
            <div className="radial-menu-container">
                 <button onClick={toggleMenu} aria-label={isOpen ? "Закрыть меню" : "Открыть меню"} className={`menu-trigger ${isOpen ? 'is-open' : ''}`}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            
            <div className={`menu-overlay ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}></div>
            
            <div className={`menu-items-wrapper ${isOpen ? 'is-open' : ''}`}>
                 {pages.map((page, index) => {
                    const angle = startAngle + (index / pages.length) * sweepAngle;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    const itemStyle = isOpen
                        ? { transform: `translate(${x}px, ${y}px) scale(1)`, transitionDelay: `${index * 40}ms` }
                        : { transform: `translate(0, 0) scale(0)`, transitionDelay: `0ms` };
                    
                    return (
                        <div key={page.path} className="menu-item" style={itemStyle}>
                            <a 
                                href={`#${page.path}`} 
                                onClick={(e) => handleNavClick(e, page.path)} 
                                style={{ backgroundColor: page.color }}
                            >
                                <span className="icon">{page.icon}</span>
                                <span className="label">{page.name}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Header;