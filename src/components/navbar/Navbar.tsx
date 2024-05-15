import { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('blur', isOpen);
    }, [isOpen]);

    return (
        <nav className={`navbar ${isOpen ? 'blur' : ''}`}>
            <div className="navbar-left">
                <h1>ZT</h1>
            </div>
            <div className="navbar-right">
                <button onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                {isOpen && (
                    <div className="navbar-menu">
                        <h1>Item 1</h1>
                        <h1>Item 2</h1>
                        <h1>Item 3</h1>
                    </div>
                )}
            </div>
        </nav>
    );
}