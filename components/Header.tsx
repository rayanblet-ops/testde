import React, { useState, useEffect } from 'react';

const pages = [
    { path: '/', name: 'Главная', icon: '🏠', color: '#ff7979' },
    { path: '/about', name: 'О Полине', icon: '✨', color: '#badc58' },
    { path: '/timeline', name: 'История', icon: '📜', color: '#f9ca24' },
    { path: '/school', name: 'Школа', icon: '🎓', color: '#7ed6df' },
    { path: '/hobbies', name: 'Хобби', icon: '🤸‍♀️', color: '#e056fd' },
    { path: '/achievements', name: 'Успехи', icon: '🏆', color: '#f0932b' },
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
    const [radius, setRadius] = useState(220);

    useEffect(() => {
        const handleResize = () => {
             const isMobile = window.innerWidth < 640;
        
            if (isMobile) {
                const viewportWidth = document.documentElement.clientWidth;
                const viewportHeight = window.innerHeight;
                const itemWidth = 60;
                const padding = 20;

                const maxRadiusForWidth = (viewportWidth / 2) - (itemWidth / 2) - padding;
                const maxRadiusForHeight = (viewportHeight / 2) - (itemWidth / 2) - padding;
                
                setRadius(Math.max(100, Math.min(maxRadiusForWidth, maxRadiusForHeight)));
            } else {
                setRadius(220);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        
        setIsOpen(false);
        
        setTimeout(() => {
            window.location.hash = path;
        }, 400);
    };
    
    const startAngle = -Math.PI / 2;
    const sweepAngle = 2 * Math.PI;

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
                    
                    const itemStyle = {
                      transform: isOpen
                        ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                        : 'translate(-50%, -50%) scale(0)',
                      transitionDelay: isOpen ? `${index * 40}ms` : '0ms'
                    };
                    
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