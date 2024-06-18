import { useEffect } from "react";
import { BentoGridItem } from "../../aceternityUi/bentoGrid/BentoGrid";
import imgLink from "../../../assets/LogoZakichanTech.png";
import thumbnail from "../../../assets/tibidabo.webp";

export function ZakichanTechnologies() {
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

                    <h2 className="bg-purple-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        Date of Publication: 2024-06-19
                    </div><br /><br />
                    <div className="flex justify-center items-center text-2xl w-full md:w-4/5 h-auto prose prose-lg dark:prose-invert mx-auto text-justify px-4 md:px-0">
                        <img
                            src={thumbnail}
                            alt="blog thumbnail"
                            loading="lazy" // Added lazy loading
                            className="rounded-2xl w-3/5 h-auto"
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

const dummyContent = [
    {
        title: "The Journey of Zakichan Technologies",
        description: (
            <>

                <p>
                    Transitioning from the role of Chief Technology Officer (CTO) in a startup with friends to launching my own business has been an exhilarating journey. Being a CTO gave me a deep appreciation for entrepreneurship and the incredible potential it holds. The collaborative environment was fantastic, but I often found myself wondering what it would be like to venture out on my own. This curiosity and desire for a new challenge led to the birth of my own company, Zakichan Technologies, while I continue to serve as a CTO in my existing startup.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >I. The Birth of Zakichan Technologies</p>
                <br />
                <p>
                    Zakichan Technologies is a newly launched company dedicated to providing top-notch web technology services and strategic consulting on technical aspects. My goal is to help businesses navigate the complexities of web technologies, ensuring they can leverage the best tools and strategies to achieve their objectives. Our services are designed to cater to a wide range of clients, from small startups needing their first web presence to established companies looking to optimize their digital strategies.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >II. Strategic Consulting and Web Services</p>
                <br />
                <p>
                    At Zakichan Technologies, we offer a variety of services tailored to meet the unique needs of each client. Our web technology services include website development, e-commerce solutions, and custom web applications. We use the latest technologies and frameworks to ensure our clients have fast, secure, and scalable solutions.
                    <br /><br />
                    In addition to web services, we provide strategic consulting to help businesses align their technology goals with their overall business strategy. This includes advising on technology stack choices, system integrations, and digital transformation strategies. Our consulting services aim to empower businesses to make informed decisions that drive growth and efficiency.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >III. A Passion for Content Creation</p>
                <br />
                <p>
                    Beyond consulting and services, Zakichan Technologies opens the door to another long-held passion of mine: content creation. Since childhood, I have been fascinated by the idea of making videos and sharing experiences that matter to me. With Zakichan Technologies, I now have the platform to create content focused on computing and the development of innovative, fun tools. This content will not only help me refine my skills but also build my personal brand, showcasing my expertise in a dynamic and engaging way.
                    <br /><br />
                    Content creation is an integral part of Zakichan Technologies' mission. I aim to share my knowledge and inspire others in the field of technology. Topics will range from coding best practices and emerging tech trends to hands-on projects that demonstrate the practical applications of our services. This content will serve as a valuable resource for both clients and the broader tech community, fostering a deeper understanding and appreciation of web technologies.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >IV. The 10-Week Challenge</p>

                <br />
                <p>
                    To kickstart Zakichan Technologies, I have set an ambitious goal: to acquire 15 clients within the first 10 weeks. This challenge will push me to quickly develop and refine my service offerings, build a robust network, and deliver exceptional value to my clients. While the pressure is intense, it also drives me to innovate and hustle in ways I haven't experienced before. Achieving this milestone will not only validate my business model but also instill a profound sense of accomplishment and confidence in my entrepreneurial abilities.

                    <br /><br />

                    The 10-week challenge is not just about acquiring clients; it’s also about building a reputation for excellence and reliability. Each new client represents an opportunity to showcase what Zakichan Technologies can do, to exceed expectations, and to lay the groundwork for long-term relationships. This intensive period will test my skills, my resilience, and my ability to deliver high-quality solutions under tight deadlines.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >V. Balancing Dual Roles</p>
                <br />
                <p>
                    Balancing my role as a CTO in my existing startup with the demands of launching Zakichan Technologies is undoubtedly challenging, but it's also incredibly rewarding. The experience I gain from each role complements the other. My work as a CTO keeps me grounded in the latest technological advancements and management strategies, which directly informs the services and insights I provide through Zakichan Technologies. Conversely, the entrepreneurial skills and client interactions from my new venture enhance my effectiveness as a CTO.

                    <br /><br />

                    Time management and prioritization are crucial in juggling these dual roles. By maintaining a clear schedule and setting realistic goals, I ensure that both my responsibilities as a CTO and the growth of Zakichan Technologies receive the attention they deserve. This balancing act is not without its difficulties, but the fulfillment I derive from pursuing both paths makes it worthwhile.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >VI. Looking Ahead</p>
                <br />
                <p>
                    The journey from CTO to solo entrepreneur is just beginning, but the potential is immense. Zakichan Technologies represents the culmination of my technical skills, strategic thinking, and creative passions. As I embark on this new venture, I am excited about the opportunities to help other companies succeed and to share my knowledge through engaging content. This business is more than just a company; it is a platform for continuous learning, innovation, and personal growth.

                    <br /><br />

                    Launching Zakichan Technologies has shown me that the leap from collaborative entrepreneurship to solo ventures is not only possible but also immensely fulfilling. The journey is filled with challenges, but the rewards of independence, creativity, and direct impact make it all worthwhile. As I look to the future, I am eager to expand my services, reach new audiences with my content, and continue pushing the boundaries of what Zakichan Technologies can achieve.

                    <br /><br />

                    In the coming months, I plan to expand our service offerings, delve deeper into emerging technologies, and build a strong community around Zakichan Technologies. This will include hosting webinars, launching a YouTube channel, and creating an online forum where tech enthusiasts can share ideas, ask questions, and collaborate on projects. My vision is to make Zakichan Technologies not just a service provider, but a hub for innovation and learning in the tech community.

                    <br /><br />

                    The transition from CTO to solo entrepreneur, while maintaining my existing role, has been a transformative experience. With Zakichan Technologies, I am not just building a business; I am building a legacy of innovation, learning, and excellence in the field of web technologies. This dual journey is challenging, but it is also incredibly enriching, offering endless opportunities for growth and success.

                    <br /><br /><br />
                    Thanks for reading. Make sure you check all the blog posts, on the link below! If you have any questions or suggestions, feel free to contact me via <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="mailto:zakaria.tobbal@zakichan.tech">email</a>.
                </p>
                <br />

                <BentoGridItem
                    key={0}
                    description="Make sure you check all the blog posts!"
                    header={<img src={imgLink} alt="random" className="flex flex-1 mx-auto my-auto w-50 h-30 max-h-30 md:max-h-50 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
                    link={"https://me.zakichan.tech/blog"}
                    className={"md:col-span-3"}
                />


            </>
        ),
        badge: "Thoughts",
    },
];
