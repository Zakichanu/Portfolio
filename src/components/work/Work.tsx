import { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../aceternityUi/bentoGrid/BentoGrid";
import {
    IconBallFootball,
    IconFlame,
    IconAutomaticGearbox,
    IconChargingPile,
    IconCurrencyEuro,
    IconBrandGithub
} from "@tabler/icons-react";
import ballImg from "../../assets/FSA.png";
import logoRMA from "../../assets/bannerRMA.png";

export function Work() {
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });

        const elements = document.querySelectorAll('.h-screen');
        elements.forEach((element) => {
            element.classList.remove('justify-center');
        });

        return () => {
            elements.forEach((element) => {
                element.classList.add('justify-center');
            });
        };
    }, []);

    return (
        <BentoGrid className="fade-element max-w-4xl mx-auto mt-16">
            <div style={{ fontFamily: "Bold" }} className="md:col-span-3">
                <p style={{ color: "#1f458c" }} className="fade-element text-xl md:text-3xl lg:text-5xl text-black inter-var text-center">
                    Work
                </p>
                <p style={{ color: "#11254c", fontFamily: "Bold" }} className="fade-element text-center md:text-3xl ml-4 mt-4 text-black inter-var ">
                    Here are some of the projects I have worked on.
                </p>
            </div>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    link={item.link}
                    className={i === 0 ? "md:col-span-3" : (i === 5) ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}
const items = [
    {
        title: "My First ever Startup",
        description:
            "With two friends, we built the mobility of tomorrow.",
        header: <img src={logoRMA} alt="random" className="flex flex-1 mx-auto my-auto w-auto h-full max-h-36 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        icon: <IconChargingPile className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Pepper Third Party API",
        description: "I had to discover how to create APIs and also, scrap websites to get data. Check out the API I created for on github ;) (Might be deprecated now...)",
        header: <img src="https://www.pepper.com/images/icon-hero.png" alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-20 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        icon: <IconFlame className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Zakichanu/Pepper-Api"
    },
    {
        title: "Noctotion",
        description: "Side project also, helped to organize myself with all my tickets from github inside the notion application. For this, I used the Notion & the Github APIs.",
        header: <img src="https://clipart-library.com/new_gallery/164-1644922_octopus-emoji-png.png" alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-20 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        link: "https://github.com/Zakichanu/Noctotion",
        icon: <IconAutomaticGearbox className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "FSoccerAlertBot",
        description: "One of my very first achievements, I created a twitter bot that tweets the latest football scores, with an insane feature, I tell you more about that on the following article.",
        header: <img src={ballImg} alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-20 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        icon: <IconBallFootball className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Engineering Apprenticeship",
        description: "Through this journey, I discovered the world of banking and finance, and I was able to work on several complex web projects, that monitor and maintain a lot transaction. In fact, I worked for of the biggest bank in France, Crédit Mutuel.",
        header: <img src="data:image/png;base64,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" alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-20 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        icon: <IconCurrencyEuro className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "All my projects",
        description: "You can find all my projects on my github account. I have worked on a lot of projects, some of them are private, but you can still see the public ones.",
        header: <img src="data:image/png;base64,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" alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-20 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
        icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Zakichanu?tab=repositories"
    },
];
