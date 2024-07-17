import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/CaviarDreams_Bold.ttf';
import './fonts/CaviarDreams_BoldItalic.ttf';
import Router from './Router';
import './utils/i18n';

function App() {
    const [language, setLanguage] = useState('en');

    const storedLanguage = localStorage.getItem('language');

    useEffect(() => {
        console.log(storedLanguage);
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            const defaultLanguage = document.documentElement.lang || 'en';
            setLanguage(defaultLanguage);
            localStorage.setItem('language', language);
        }
    }, [storedLanguage]);

    return <Router />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
