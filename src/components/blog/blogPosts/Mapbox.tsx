import { useEffect } from "react";
import thumbnail from "../../../assets/Hunter x Hunter (2011).jpeg";
import { useTranslation } from "react-i18next";

export function Mapbox() {

    const { t } = useTranslation();



    const dummyContent = [
        {
            title: t('mapbox.title'),
            description: (
                <>

                    <p>
                        {t('mapbox.intro')}
                    </p>
                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t('mapbox.core.1.title')}
                    </p>
                    <br />
                    <p>
                        {t('mapbox.core.1.content.1')}
                    </p>
                    <br /><br />
                    <p>
                        {t('mapbox.core.1.content.2')}
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t('mapbox.core.2.title')}
                    </p>
                    <br />
                    <p>
                        {t('mapbox.core.2.content.1')}
                        <br /><br />
                        {t('mapbox.core.2.content.2')}
                        <br /><br />
                        {t('mapbox.core.2.content.3')}
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t('mapbox.core.3.title')}
                    </p>
                    <br />
                    <p>
                        {t('mapbox.core.3.content.1')}
                    </p>
                    <br /><br/>
                    <p>
                        {t('mapbox.core.3.content.2')}
                    </p>
                    <br /><br/>
                    <p>
                        {t('mapbox.core.3.content.3')}
                    </p>
                    <br /><br/>
                    <p>
                        {t('mapbox.core.3.content.4')}
                    </p>
                    <br /><br/>
                    <p>
                        {t('mapbox.core.3.content.5')}
                    </p>
                    <br /><br/>
                    <p>
                        {t('mapbox.core.3.content.6')}
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t('mapbox.core.4.title')}
                    </p>
                    <br />
                    <p>
                        {t('mapbox.core.4.content.1')}
                    </p>
                    <br /><br />
                    <p>
                        {t('mapbox.core.4.content.2')}
                    </p>
                    <br /><br />
                    <p>
                        {t('mapbox.core.4.content.3')} <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="mailto:zakaria.tobbal@zakichan.tech">email</a>.
                    </p>
                    <br /><br />


                </>
            ),
            badge: t('mapbox.type'),
        },
    ];

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

    return (
        <div className="flex flex-col justify-center items-center mt-10 fade-element max-w-4xl mx-auto pt-4 relative md:text-left px-4 md:px-0">
            {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10 mx-auto px-4 md:px-0">
                    <p style={{ fontFamily: "Bold", color: "#1f458c" }} className="text-2xl md:text-6xl  mb-4">
                        {item.title}
                    </p>

                    <h2 className="bg-purple-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        {t("general.date-of-publication")} 2024-10-30
                    </div><br /><br />
                    <div className="flex justify-center items-center text-2xl w-full md:w-4/5 h-auto prose prose-lg dark:prose-invert mx-auto text-justify px-4 md:px-0">
                        <img
                            src={thumbnail}
                            alt="blog thumbnail"
                            loading="lazy" // Added lazy loading
                            className="rounded-2xl w-5/5 h-auto"
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
