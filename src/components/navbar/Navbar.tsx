// src/components/navbar/Navbar.tsx
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export function Navbar() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const language = i18n.language;
    const history = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/menu') {
            setIsOpen(false);
        }
    }, [location]);

    const handleMenuClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            setIsOpen(!isOpen);
            if (isOpen) history(-1);
            else history('/menu');
        }, 1500);
    };

    const handleLogoClick = () => {
        if (location.pathname !== '/') {
            document.querySelectorAll('.fade-element').forEach((element) => {
                element.classList.remove('fade-in-up');
                element.classList.add('fade-out');
            });
        }
        setTimeout(() => {
            history('/');
        }, 1500);
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'fr-FR' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p onClick={handleLogoClick} style={{ fontFamily: 'Kilogram', color: '#1f458c', cursor: 'pointer' }} className="text-xl md:text-3xl lg:text-4xl inter-var text-center hover:animate-pulse">ZT</p>
            </div>
            <div className="fade-element navbar-right">
                <button onClick={toggleLanguage} style={{ fontFamily: 'Bold', color: '#11254c', marginRight: '8px' }} className="text-xl md:text-xl lg:text-2xl text-black font-bold inter-var text-center">
                    {language === 'en' ? 'FR' : 'EN'}
                </button>
                <button style={{ fontFamily: 'Bold', color: '#11254c' }} className="text-xl md:text-3xl lg:text-4xl text-black font-bold inter-var text-center" onClick={handleMenuClick}>
                    {isOpen || location.pathname === '/menu' ? 'x' : '☰'}
                </button>
            </div>
        </nav>
    );
}
