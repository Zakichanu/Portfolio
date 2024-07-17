import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const history = useNavigate();
    const location = useLocation();

    // if last location was menu, then open is false
    useEffect(() => {
        if (location.pathname !== '/menu') {
            setIsOpen(false);
        }
    });

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

        };
        setTimeout(() => {
            history('/');
        }, 1500);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p onClick={handleLogoClick} style={{ fontFamily: "Kilogram", color: "#1f458c", cursor: "pointer" }} className="text-xl md:text-3xl lg:text-4xl inter-var text-center hover:animate-pulse">ZT</p>
            </div>
            <div className="fade-element navbar-right">
                <button style={{ fontFamily: "Bold", color: "#11254c" }} className="text-xl md:text-3xl lg:text-4xl text-black font-bold inter-var text-center" onClick={handleMenuClick}>
                    {isOpen || location.pathname === "/menu" ? 'x' : '☰'}
                </button>
            </div>
        </nav>
    );
}