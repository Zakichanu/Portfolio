import { useEffect } from "react";
import myDesk from "../../../assets/myDesk.jpg";
import thumbnailTedX from "../../../assets/thumbnailTedX.png";
import { BentoGridItem } from "../../aceternityUi/bentoGrid/BentoGrid";

export function BeingABabyCTO() {
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
                        <img
                            src={myDesk}
                            alt="blog thumbnail"
                            style={{ justifyContent: "center", width: "100%", height: "auto" }}
                            className="rounded-2xl justify-center mb-10 object-cover mx-auto"
                        />
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
}

const dummyContent = [
    {
        title: "Being a baby CTO",
        description: (
            <>
                <p>
                    Launching a startup while being a student is a thrilling yet daunting task, especially when taking on the role of Chief Technology Officer (CTO). This article delves into the unique constraints and advantages of being a student CTO in a startup launched with friends, highlighting the impact of inexperience and the balancing act required to juggle academic and entrepreneurial responsibilities. NB : The photo above is my desk, where I spend most of my time working on my startup and academic projects the last 6 years.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >I. The Role of a Student CTO</p>
                <br />
                <p>
                    As the CTO, my main responsibilities include defining our technological vision, overseeing the development process, and ensuring our product meets our business goals. This role demands a strategic mindset, technical expertise, and leadership skills. Balancing these responsibilities with my academic commitments adds another layer of complexity, making effective time management and prioritization crucial.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >II. Our Project: Bring you a better experience of electric mobility</p>
                <br />
                <p>
                    Our startup is dedicated to revolutionizing the electric mobility sector by offering a comprehensive range of software and hardware services. As an electric mobility operator, we aim to enhance the user experience for all types of clients, from individual consumers to large businesses. Our innovative solutions include user-friendly mobile applications for easy access to electric vehicles, advanced fleet management systems for businesses, and cutting-edge charging infrastructure. By integrating these services, we strive to create a seamless and efficient ecosystem for electric mobility, making it more accessible and convenient for everyone.
                    <br />
                    We believe that the future of transportation lies in sustainable and smart solutions. Our commitment to this vision drives us to continuously develop and improve our offerings, ensuring that our clients have access to the latest technologies and services in electric mobility. Whether you're an individual looking for a reliable electric vehicle or a company seeking to optimize your fleet operations, our tailored solutions are designed to meet your specific needs. By bridging the gap between technology and mobility, we are paving the way for a greener, more efficient future in transportation.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >III. Constraints of Being a Student CTO in a Startup with Friends</p>
                <br />
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Time Management</a>: Balancing academic responsibilities with the demands of a startup is the the <b>biggest</b> challenges. Effective time management is essential to ensure that both my studies and the startup receive the attention they need.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Inexperience</a>: As students, our inexperience can be a significant constraint. We are constantly learning on the job, which can lead to mistakes and steep learning curves. However, these experiences are invaluable for our growth and development.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Resource Constraints</a>: Limited resources, including time, money, and expertise, can pose challenges for a student startup. Finding creative solutions and leveraging our network are essential to overcome these constraints.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Team Dynamics</a>: Working with friends can be both a strength and a challenge. Navigating personal relationships and professional responsibilities requires open communication, trust, and mutual respect. To be fair, we have been doing a great job so far (since 2022).
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Academic Commitments</a>: Balancing the demands of a startup with academic commitments can be overwhelming. Prioritizing tasks, setting boundaries, and seeking support are essential strategies to manage these competing responsibilities.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a style={{ fontFamily: "Bold", color: "#1f458c" }}>Risk Management</a>: As a student startup, we face unique risks and uncertainties. Managing these risks requires a proactive approach, clear communication, and contingency planning to mitigate potential challenges.

                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >IV. Navigating Inexperience and Building Expertise</p>

                <br />
                <p>
                    As a student CTO, embracing a mindset of continuous learning is essential for overcoming the challenges of inexperience. This means actively seeking out opportunities to enhance both technical and business skills through online courses, workshops, and seminars. Staying updated with the latest industry trends and best practices is crucial for maintaining a competitive edge. By dedicating time to learning, you not only improve your own capabilities but also contribute to the overall growth and success of your startup.
                    <br />
                    Seeking mentorship is another vital strategy for navigating the complexities of being a student CTO. Experienced mentors can provide invaluable insights and advice, helping you to make informed decisions and avoid common pitfalls. Their guidance can be particularly beneficial when dealing with unfamiliar situations or making strategic choices. Building a network of mentors and advisors who believe in your vision can significantly bolster your confidence and capabilities, providing a strong foundation for your startup's growth.
                    <br />
                    Fostering a collaborative approach within your team is also key to overcoming inexperience. Encouraging open communication and leveraging the diverse skills and perspectives of your team members can drive innovation and effective problem-solving. Emphasizing teamwork and collective decision-making helps to distribute the workload and ensures that various aspects of the project are addressed by those with the most relevant expertise. Additionally, being adaptable and open to change is crucial in the dynamic startup environment. Flexibility allows you to pivot when necessary and respond to market demands, ensuring the longevity and success of your venture.
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >V. Conclusion</p>

                <br />
                <p>
                    Being a student CTO in a startup launched with friends is a unique and rewarding journey. While inexperience and academic pressures pose significant challenges, the opportunity to learn and grow in such an environment is unparalleled. By embracing continuous learning, seeking mentorship, and maintaining a collaborative and adaptable approach, we can turn these challenges into stepping stones for success.
                    <br />
                    As we continue to develop our innovative platform, I am confident that our passion, combined with our willingness to learn and adapt, will help us overcome obstacles and achieve our goals. The journey of a student entrepreneur was just part of the beginning, and the experiences gained along the way will be invaluable for our future endeavors. Now that we are in 2024, we are more determined than ever to make a positive impact in the electric mobility sector and contribute to a sustainable and smarter future in transportation. Also, now I am not a baby CTO anymore, but a real one.

                    <br />
                    Thanks for reading. If you have any questions or suggestions, feel free to contact me via <a href="mailto:zakariatobb@gmail.com">email</a>.

                    <br /><br />

                    Check this video (in French), where me and my co-founders talk about our startup and being a student beside.
                </p>
                <br /><br />

                <BentoGridItem
                    key={0}
                    description=""
                    header={<img src={thumbnailTedX} alt="random" className="flex flex-1 mx-auto my-auto w-auto h-10 md:max-h-50 rounded-xl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
                    link={"https://m.youtube.com/watch?v=AE7bXP_PuyU"}
                    className={"md:col-span-3"}
                />
                <br /><br />
            </>
        ),
        badge: "Projects",
    },
];
