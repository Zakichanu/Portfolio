import { useEffect } from "react";
import PlugSync from "../../../assets/PlugSync.webp";
import { useTranslation } from "react-i18next";

export function ApproachIOT() {

    const { t } = useTranslation();
    useEffect(() => {
        const elements = document.querySelectorAll('.h-screen');
        elements.forEach((element) => {
            element.classList.remove('justify-center');
        });
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });

        return () => {
            elements.forEach((element) => {
                element.classList.add('justify-center');
            });
        };

    }, []);

    const dummyContent = [
        {
            title: t('approchIOT.title'),
            description: (
                <>
                    <p>
                        {t('approchIOT.intro')}
                    </p>
                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >{t("approchIOT.core.1.title")}</p>
                    <br />
                    <p>
                        {t("approchIOT.core.1.content.1")}

                        <br /><br />
                        <b style={{ color: "#1f458c" }}><i>{t("approchIOT.core.1.content.2")}</i></b><br /><br />
                        {t("approchIOT.core.1.content.3")}
                        <br />
                        {t("approchIOT.core.1.content.4")}
                        <br />
                        {t("approchIOT.core.1.content.5")}
                        <br />

                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} > {t("approchIOT.core.2.title")} </p>
                    <br />
                    <p>
                        {t("approchIOT.core.2.content.1")}
                        <br /><br />
                        <b style={{ color: "#1f458c" }}><i>
                        {t("approchIOT.core.2.content.2")}
                        </i></b><br /><br />
                        {t("approchIOT.core.2.content.3")}
                        <br />
                        {t("approchIOT.core.2.content.4")}
                        <br />
                        {t("approchIOT.core.2.content.5")}
                        <br />

                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t("approchIOT.core.3.title")}
                    </p>
                    <br />
                    <p>
                        {t("approchIOT.core.3.content.1")}
                        <br /><br />
                        <b style={{ color: "#1f458c" }}><i>
                        {t("approchIOT.core.3.content.2")}
                        </i></b><br /><br />
                        {t("approchIOT.core.3.content.3")}
                        <br />
                        {t("approchIOT.core.3.content.4")}
                        <br />
                        {t("approchIOT.core.3.content.5")}
                        <br />
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t("approchIOT.core.4.title")}
                    </p>

                    <br />
                    <p>
                        {t("approchIOT.core.4.content.1")}
                        <br /><br />
                        <b style={{ color: "#1f458c" }}><i>
                        {t("approchIOT.core.4.content.2")}    
                        </i></b><br /><br />
                        {t("approchIOT.core.4.content.3")}
                        <br />
                        {t("approchIOT.core.4.content.4")}
                        <br />
                        {t("approchIOT.core.4.content.5")}
                       <br />
                        {t("approchIOT.core.4.content.6")}
                        <br />
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >{t("approchIOT.core.5.title")}</p>

                    <br />
                    <p>
                        {t("approchIOT.core.5.content.1")}

                        <br />
                        {t("approchIOT.core.5.content.2")} <a href="https://www.wattpark.eu/">Wattpark</a>. {t("approchIOT.core.5.content.3")}

                        <br />

                        {t("approchIOT.core.5.content.4")}

                        <br />
                        {t("approchIOT.core.5.content.5")}
                    </p>
                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t("approchIOT.core.6.title")}
                    </p>

                    <br />
                    <p>
                        {t("approchIOT.core.6.content.1")}

                        <br /><br />

                        <b style={{ color: "#1f458c" }}><i>
                        {t("approchIOT.core.6.content.2")}    
                        </i></b><br /><br />
                        {t("approchIOT.core.6.content.3")}
                        <br />
                        {t("approchIOT.core.6.content.4")}
                        <br />
                        {t("approchIOT.core.6.content.5")}
                        <br />
                        {t("approchIOT.core.6.content.6")}
                        <br />
                        {t("approchIOT.core.6.content.7")}
                        <br />

                        <br />
                        {t("approchIOT.core.6.content.8")} <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="mailto:zakaria.tobbal@zakichan.tech">email</a>.
                    </p>
                    <br /><br />
                </>
            ),
            badge: t('approchIOT.type'),
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center mt-10 fade-element max-w-4xl mx-auto pt-4 relative text-justify md:text-left px-4 md:px-0">
            {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10 text-justify mx-auto px-4 md:px-0">
                    <p style={{ fontFamily: "Bold", color: "#1f458c" }} className="text-2xl md:text-6xl mb-4">
                        {item.title}
                    </p>

                    <h2 className="bg-yellow-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        {t('general.date-of-publication')} 2024-05-21
                    </div><br /><br />
                    <div className="flex justify-center items-center text-2xl w-full md:w-4/5 h-auto prose prose-lg dark:prose-invert mx-auto text-justify px-4 md:px-0">
                        <img
                            src={PlugSync}
                            alt="blog thumbnail"
                            loading="lazy" // Added lazy loading
                            className="rounded-2xl w-3/5 h-auto" // Ensure image is responsive
                        />
                    </div>
                    <br />
                    <div className="text-lg prose prose-lg dark:prose-invert text-bold">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
}

