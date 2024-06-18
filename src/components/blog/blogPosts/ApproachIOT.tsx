import { useEffect } from "react";
import PlugSync from "../../../assets/PlugSync.webp";

export function ApproachIOT() {
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
                    <p style={{ fontFamily: "Bold", color: "#1f458c" }} className="text-2xl md:text-6xl mb-4">
                        {item.title}
                    </p>

                    <h2 className="bg-yellow-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {item.badge}
                    </h2>

                    <div style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} className="text-lg prose prose-lg dark:prose-invert text-bold">
                        Date of Publication: 2024-05-21
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


const dummyContent = [
    {
        title: "How to Approach IoT in 2024",
        description: (
            <>
                <p>
                    The Internet of Things (IoT) holds immense potential for transforming industries by enabling enhanced connectivity, data collection, and automation. However, successfully launching an IoT project requires careful planning and execution. Here’s a streamlined guide to help you navigate your IoT project, including a real-world example of the PlugSync module.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >I. Defining Objectives and Scope</p>
                <br />
                <p>
                    The first step in any IoT project is to clearly define your objectives and the scope of your project. Identify the specific problems you aim to solve and the benefits you expect to gain.

                    <br /><br />
                    <b style={{ color: "#1f458c" }}><i>Key Questions:</i></b><br /><br />
                    - What are the main goals of your IoT project?<br />
                    - What challenges are you looking to address?<br />
                    - What outcomes do you expect to achieve?<br />

                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >II. Conducting Feasibility Analysis</p>
                <br />
                <p>
                    Conduct a comprehensive feasibility analysis to ensure your project is viable. This includes market research to understand the demand, competitive landscape, and technical requirements.
                    <br /><br />
                    <b style={{ color: "#1f458c" }}><i>Steps:</i></b><br /><br />
                    - Identify target market and user needs<br />
                    - Evaluate technical requirements and constraints<br />
                    - Conduct a SWOT analysis<br />

                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >III. Prototyping and Testing</p>
                <br />
                <p>
                    Develop a prototype of your IoT solution to test its functionality and user experience. This allows you to identify potential issues early on and make necessary adjustments.
                    <br /><br />
                    <b style={{ color: "#1f458c" }}><i>Best Practices:</i></b><br /><br />
                    - Use rapid prototyping tools to create a working model<br />
                    - Conduct user testing to gather feedback and iterate on the design<br />
                    - Ensure compatibility with existing systems and devices<br />
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >IV. Deployment, Monitoring, and Iteration</p>

                <br />
                <p>
                    Once your IoT solution is ready, deploy it in a controlled environment to monitor its performance and gather data. Use analytics tools to track key metrics and identify areas for improvement.
                    <br /><br />
                    <b style={{ color: "#1f458c" }}><i>Key Considerations:</i></b><br /><br />
                    - Establish a monitoring system to track performance and detect anomalies<br />
                    - Collect and analyze data to gain insights and optimize the system<br />
                    - Implement regular updates and improvements based on user feedback and data analysis<br />
                    - Establish a secure tunnel to connect to your devices in case of issues or updates<br />
                </p>

                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >V. Real-World Example: Plug Sync by RMA</p>

                <br />
                <p>
                    To illustrate these steps, let’s consider a real-world project that I worked on: The Plug Sync. In brief, Plug Sync is a module that enables charging stations to be online and visible to most customers in Europe. We developed this module to help manufacturers of charging stations increase their visibility and gain a better understanding of their customers.

                    <br />
                    Basically, we executed this project in partnership with the French manufacturer of charging stations, <a href="https://www.wattpark.eu/">Wattpark</a>. We began by defining the objectives and scope of the project, which included enhancing the visibility of charging stations and providing valuable insights to electric vehicle customers. We conducted a feasibility analysis to understand the market demand and technical requirements, and then developed a prototype to test the functionality and user experience.

                    <br />

                    The project demanded significant architecture and design work to ensure its success. We needed to guarantee that the module was secure, that the data was encrypted, and that the system was easy to monitor.

                    <br />
                    It was a challenging project, but the results were rewarding. The Plug Sync module is now deployed in several charging stations across France, providing valuable data and insights to electric vehicle users (as seen in the picture in this article). We continue to monitor and iterate on the system to ensure optimal performance and user experience. The Plug Sync project exemplifies the importance of careful planning, prototyping, and monitoring in IoT projects.
                </p>
                <br />
                <p className="text-4xl mb-4" style={{ fontFamily: "Bold-Italic", color: "#1f458c" }} >VI. Conclusion</p>

                <br />
                <p>
                    Successfully launching an IoT project requires a strategic approach that encompasses defining objectives, conducting feasibility analysis, prototyping, and monitoring. By following these steps and best practices, you can navigate your IoT project effectively and achieve your desired outcomes.

                    <br /><br />

                    <b style={{ color: "#1f458c" }}><i>Key Takeaways:</i></b><br /><br />
                    - Define clear objectives and scope for your IoT project<br />
                    - Conduct a feasibility analysis to ensure project viability<br />
                    - Develop a prototype to test functionality and user experience<br />
                    - Deploy, monitor, and iterate on the system to optimize performance<br />
                    - Learn from real-world examples to gain insights and inspiration<br />

                    <br />
                    Thanks for reading. If you have any questions or suggestions, feel free to contact me via <a style={{ fontFamily: "Bold", color: "#1f458c" }} href="mailto:zakaria.tobbal@zakichan.tech">email</a>.
                </p>
                <br /><br />
            </>
        ),
        badge: "Guideline",
    },
];
