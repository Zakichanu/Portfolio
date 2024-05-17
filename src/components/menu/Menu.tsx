import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WavyBackground } from "../aceternityUi/bgWavy/BgWavy";

// src/components/Menu.tsx
export function Menu() {

    const navigate = useNavigate();
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);


    const handleHomeClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);

    };

    const handleAboutClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/about');
        }, 1500);

    };

    const handleBlogClick = () => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.remove('fade-in-up');
            element.classList.add('fade-out');
        });
        setTimeout(() => {
            navigate('/blog');
        }, 1500);

    };

    return (
        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto" >
            <div className=" fade-element text-7xl md:text-7xl  lg:text-9xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ul>
                    <li onClick={handleHomeClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">1.</a>H<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>OME</a></li>
                    <li onClick={handleAboutClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">2.</a>A<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>BOUT</a></li>
                    <li className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">3.</a>W<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>ORK</a></li>
                    <li onClick={handleBlogClick} className="hover:animate-pulse" style={{ color: "#1f458c", fontFamily: "Bold", cursor: "pointer" }}><a style={{ fontFamily: "Bold" }} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">4.</a>B<a style={{ color: "#11254c", fontFamily: "Kilogram" }}>LOG</a></li>
                </ul>
            </div>
        </WavyBackground>


    );
}