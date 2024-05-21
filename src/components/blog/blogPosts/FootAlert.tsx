import { useEffect } from "react";
import { BentoGridItem } from "../../aceternityUi/bentoGrid/BentoGrid";
import imgRepo from "../../../assets/FSoccerAlertBot.png";

export function FootAlert() {
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
        <div className="flex flex-col justify-center items-center mt-10 fade-element max-w-4xl mx-auto pt-4 relative text-justify md:text-left px-4 md:px-0">
            {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10 text-justify mx-auto px-4 md:px-0">
                    <p style={{ fontFamily: "Bold", color: "#1f458c" }} className="text-2xl md:text-6xl  mb-4">
                        {item.title}
                    </p>

                    <h2 className="bg-green-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        Date of Publication: 2024-05-20
                    </div><br /><br />
                    <div className="text-2xl w-full md:w-4/5 h-auto prose prose-lg dark:prose-invert mx-auto text-justify px-4 md:px-0">
                        {item?.image && (
                            <img
                                src={item.image}
                                alt="blog thumbnail"
                                style={{ justifyContent: "center", width: "50%", height: "auto" }}
                                className="rounded-2xl justify-center mb-10 object-cover mx-auto"
                            />
                        )}
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
}

const dummyContent = [
    {
        title: "Football Alert Twitter Bot",
        description: (
            <>

                <p>
                    In this article, I will present the design and implementation of a Twitter bot named "Football Alert Bot". <br />
                    This bot was developed to tweet live scores of matches from the five major European leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1), as well as the Champions League and the Europa League. <br /> Additionally, it retrieves and tweets replays of notable goals. This article is developer-oriented and explains the technical aspects of this project.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >I. Prerequisites and Technologies Used</p>
                <br />
                <p>For this project, the following main technologies and tools were used:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Java 11
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="https://www.api-football.com/">Football API</a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="https://github.com/redouane59/twittered">Twitter API</a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="https://jsoup.org/">Jsoup</a>
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >II. How this project works</p>
                <br />
                <p>This bot is a Java server application. It uses the Football API to retrieve live scores and replays of goals. <br />
                    The bot then tweets this information using the Twitter API. The bot is scheduled to run periodically to check for new matches and goals. <br />
                    The best feature is the goal replay for some of the goal notifications. For this part, I used JSOUP, which was quite challenging but yielded excellent results (gaining 200 followers in one month, if I am not mistaken). </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >III. What was the point of this project?</p>
                <br />
                <p>
                    At the time, I was in my third year of university, and I had developed a strong interest in backend development. This interest was so profound that I felt the need to undertake a project to deepen my understanding of this aspect of programming. Unlike many who prefer learning through documentation and books, I have always been someone who learns best through hands-on practice. This practical approach allows me to understand tools and technologies in depth.
                    <br /><br />
                    Being passionate about football and fascinated by the dynamics of social media, I wanted to merge these interests into a single project. My goal was to create something that would provide real value to people. I envisioned a tool that could deliver instant notifications and replays of football goals, catering to fans' desire for timely updates and highlights. This project was not only a way to enhance my technical skills but also an opportunity to engage with the football community and explore the potential of social media platforms in disseminating real-time sports information. By doing so, I aimed to create a practical and enjoyable application that would resonate with football enthusiasts and keep them informed and entertained.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >IV. Conclusion</p>

                <br />
                <p>
                    You might be wondering where this account is now. Well, firstly, it was suspended by Twitter due to DMCA (Digital Millennium Copyright Act) issues related to the replays sourced from TV channels. Secondly, I was unable to maintain it because of my studies and internship commitments.

                    <br /><br />

                    I am planning to create a new version of this bot with a better design and more features. I have gained a lot more experience over the last three years, and I am confident that I can develop an improved version of this bot, especially using the JavaScript environment. The challenge in this new version will be to make it simpler and to manage replays and notifications more effectively. We'll see how it goes in the near future.

                    <br /><br />

                    I hope you enjoyed this article and that it has given you some insight into the development of a Twitter bot. If you have any questions or suggestions, feel free to contact me via email.

                    <br /><br />

                    Thank you for reading! I am sharing the repository with you, so if you want to check the code and the design of the bot, feel free to do so!

                </p>
                <br /><br />
                <BentoGridItem
                    key={0}
                    description=""
                    header={<img src={imgRepo} alt="random" className="flex flex-1 mx-auto my-auto w-auto h-auto max-h-40 md:max-h-auto rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
                    link={"https://github.com/Zakichanu/FSoccerAlertBot"}
                    className={"md:col-span-3"}
                />


            </>
        ),
        badge: "Projects",
        image:
            "/SoccerFootAlert.jpg",
    },
];
