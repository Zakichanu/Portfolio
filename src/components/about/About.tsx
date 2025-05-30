import { useEffect } from "react";
import profilePic from "../../assets/profile.jpg";
import myCV from "../../assets/CV_ENG.pdf";
import { useTranslation } from "react-i18next";

const About = () => {


    const { t } = useTranslation();
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);

    return (
        <>
        <p style={{ color: "#1f458c" }} className="mt-20 fade-element text-xl lg:text-5xl text-black inter-var text-center">
                    {t('about.title')}
                </p>
        <div className="flex flex-col md:flex-row sm:flex-row items-center">
            <img src={profilePic} alt="My Face" className="p-1 w-2/6 md:w-2/5 h-1/6 fade-element rounded-3xl md:mr-10 md:ml-10 xl:mr-10 xl:ml-10" />
            <div style={{ fontFamily: "Bold" }} className="w-1/2 md:w-1/2 h-1/6">
                <p style={{ color: "#11254c", fontFamily: "Bold" }} className="fade-element text-left md:text-3xl ml-4 mt-4 text-black inter-var p-2 ">
                {t('about.begginning-content')}<a style={{ fontFamily: "Bold-Italic", color: "#1f458c" }}>Zakaria TOBBAL</a>{t('about.middle-content')} <a style={{ fontFamily: "Kilogram" }}>Zakichanu</a>{t('about.end-content')}
                </p>
                <br />
                <div style={{color: "#1f458c"}} className="fade-element text-center md:text-3xl ml-4 mt-4 text-black inter-var">
                    <a href="https://www.linkedin.com/in/zakaria-tobbal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/Zakichanu" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href={myCV} target="_blank" rel="noopener noreferrer">{t('about.resume')}</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;