import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export function Navbar(props: any) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const history = useNavigate();

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            if (isOpen) history('/');
            else history('/menu');
        }, 1500);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-xl md:text-3xl lg:text-4xl text-black font-bold inter-var text-center">ZT</p>
            </div>
            <div className="navbar-right">
                <button style={{ fontFamily: "Bold", color: "#11254c" }} className="text-xl md:text-3xl lg:text-4xl text-black font-bold inter-var text-center" onClick={handleMenuClick}>
                    {isOpen ? 'X' : '☰'}
                </button>
            </div>
        </nav>
    );
}