import { useEffect } from "react";
import { useTranslation } from "react-i18next";



export function HeroComponent() {


    const { t } = useTranslation();

    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);


    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div style={{ fontFamily: "Bold" }}>
                <p style={{ color: "#1f458c" }} className=" fade-element text-3xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
                {t('hero.title')} <a style={{ fontFamily: 'Bold-Italic', color: '#11254c' }}>Zakaria</a>
                </p>
                <p style={{ color: "#11254c", fontFamily: "Bold-Italic" }} className=" fade-element text-xl md:text-3xl mt-4 text-black font-bold inter-var text-center">
                {t('hero.subtitle')}
                </p>
            </div>
        </div>
    );
}
