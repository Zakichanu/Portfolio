import { useEffect } from "react";
import profilePic from "../../assets/profile.jpg";
import myCV from "../../assets/CV_ENG.pdf";
import "./About.css";

const About = () => {
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);

    return (
        <div className="mt-20 flex flex-col md:flex-row sm:flex-row items-center">
            <img src={profilePic} alt="My Face" className="img-responsive fade-element rounded-3xl md:mr-10 md:ml-10 xl:mr-10 xl:ml-10" />
            <div style={{ fontFamily: "Bold" }}>
                <p style={{ color: "#1f458c" }} className="fade-element text-xl md:text-3xl lg:text-5xl text-black inter-var text-center">
                    About Me
                </p>
                <p style={{ color: "#11254c", fontFamily: "Bold" }} className="fade-element text-center md:text-3xl ml-4 mt-4 text-black inter-var ">
                    Salut! My name is <a style={{ fontFamily: "Bold-Italic", color: "#1f458c" }}>Zakaria TOBBAL</a>, though many know me as <a style={{ fontFamily: "Kilogram" }}>ZakichAnu</a>. I am currently based in Paris, France, where I work as a CTO, Project Manager, and Web Developer. My professional journey has been fueled by a deep passion for technology and innovation. I thrive on exploring the latest technological advancements and discovering how they can be harnessed to improve our world. Whether it’s through leading projects, developing web applications, or managing teams, my goal is to make a positive impact and drive progress.
                </p>
                <br />
                <div style={{color: "#1f458c"}} className="fade-element text-center md:text-3xl ml-4 mt-4 text-black inter-var">
                    <a href="https://www.linkedin.com/in/zakaria-tobbal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/Zakichanu" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href={myCV} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default About;