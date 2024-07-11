import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// src/components/Menu.tsx
export function Menu() {


    const { t } = useTranslation();

    const navigate = useNavigate();
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);


    const handleHomeClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);

    };

    const handleAboutClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/about');
        }, 1500);

    };

    const handleBlogClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/blog');
        }, 1500);
    };

    const handleWorkClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/work');
        }, 1500);
    }

    return (

        <div className=" fade-element text-7xl md:text-7xl  lg:text-9xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ul>
                <li onClick={handleHomeClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">1.</a>{t('menu.home.prefix')}<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>{t('menu.home.suffix')}</a></li>
                <li onClick={handleAboutClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">2.</a>{t('menu.about.prefix')}<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>{t('menu.about.suffix')}</a></li>
                <li onClick={handleWorkClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">3.</a>{t('menu.work.prefix')}<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>{t('menu.work.suffix')}</a></li>
                <li onClick={handleBlogClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">4.</a>{t('menu.blog.prefix')}<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>{t('menu.blog.suffix')}</a></li>
            </ul>
        </div>


    );
}