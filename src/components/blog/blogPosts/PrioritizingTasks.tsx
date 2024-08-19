import { useEffect } from "react";
import Thumbnail from "../../../assets/miyamotoMountains.webp";
import EisenHower from "../../../assets/eisenhower-matrix-example.webp";
import imgLink from "../../../assets/huberman.png";
import { useTranslation } from "react-i18next";
import { BentoGridItem } from "../../aceternityUi/bentoGrid/BentoGrid";

export function PrioritizingTasks() {

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
            title: t('prioritizeTasks.title'),
            description: (
                <>
                    <p>
                        {t('prioritizeTasks.intro')}
                    </p>
                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >{t("prioritizeTasks.core.1.title")}</p>
                    <br />
                    <p>
                        {t("prioritizeTasks.core.1.content.1")}

                        <br /><br />
                        {t("prioritizeTasks.core.1.content.2")} <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="https://www.notion.so/">{t("prioritizeTasks.core.1.content.3")}</a> {t("prioritizeTasks.core.1.content.4")}
                        <br /><br />
                        {t("prioritizeTasks.core.1.content.5")}
                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} > {t("prioritizeTasks.core.2.title")} </p>
                    <br />
                    <p>
                        {t("prioritizeTasks.core.2.content.1")}
                        <br /><br />
                        {t("prioritizeTasks.core.2.content.2")}
                        <br /><br />
                        <img
                            src={EisenHower}
                            alt="blog thumbnail"
                            loading="lazy" // Added lazy loading
                            className="rounded-2xl w-full h-auto" // Ensure image is responsive
                        />
                        <br /><br />
                        {t("prioritizeTasks.core.2.content.3")}

                    </p>

                    <br />
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t("prioritizeTasks.core.3.title")}
                    </p>
                    <br />
                    <p>
                        {t("prioritizeTasks.core.3.content.1")}
                        <br /><br />
                        {t("prioritizeTasks.core.3.content.2")}
                        <br /><br />
                        <b style={{ color: "#1f458c" }}><i>{t("prioritizeTasks.core.3.content.3")}
                        </i></b>
                        <br /><br />
                        {t("prioritizeTasks.core.3.content.4")}
                        <br />
                        {t("prioritizeTasks.core.3.content.5")}
                        <br />
                        {t("prioritizeTasks.core.3.content.6")}
                        <br /><br />
                        {t("prioritizeTasks.core.3.content.7")}
                    </p>

                    <br />
                    
                    <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >
                        {t("prioritizeTasks.core.4.title")}
                    </p>

                    <br />
                    <p>
                        {t("prioritizeTasks.core.4.content.1")}

                        <br /><br />
                        {t("prioritizeTasks.core.4.content.2")}
                        <br /><br />

                        {t("prioritizeTasks.core.4.content.3")} <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="mailto:zakaria.tobbal@zakichan.tech">email</a>.
                    </p>
                    <br /><br />

                    <BentoGridItem
                        key={0}
                        description={t('prioritizeTasks.linkDescription')}
                        header={<img src={imgLink} alt="random" className="flex flex-1 mx-auto my-auto w-full h-full max-h-full md:max-h-50 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
                        link={"https://youtu.be/_s16zjowQGA?si=gACdLVAe42C89Ab6"}
                        className={"md:col-span-3"}
                    />
                </>
            ),
            badge: t('prioritizeTasks.type'),
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center mt-10 fade-element max-w-4xl mx-auto pt-4 relative md:text-left px-4 md:px-0">
            {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10 mx-auto px-4 md:px-0">
                    <p style={{ fontFamily: "Bold", color: "#1f458c" }} className="text-2xl md:text-6xl mb-4">
                        {item.title}
                    </p>

                    <h2 className="bg-yellow-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        {t('general.date-of-publication')} 2024-08-20
                    </div><br /><br />
                    <div className="flex justify-center items-center text-2xl w-full md:w-4/5 h-auto prose prose-lg dark:prose-invert mx-auto text-justify px-4 md:px-0">
                        <img
                            src={Thumbnail}
                            alt="blog thumbnail"
                            loading="lazy" // Added lazy loading
                            className="rounded-2xl w-full h-auto" // Ensure image is responsive
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

