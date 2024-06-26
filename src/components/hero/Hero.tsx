import { useEffect } from "react";



export function HeroComponent() {

    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);


    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div style={{ fontFamily: "Bold" }}>
                <p style={{ color: "#1f458c" }} className=" fade-element text-3xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
                    Hi, I'm <a style={{ fontFamily: "Bold-Italic", color: "#11254c" }}>Zakaria</a>
                </p>
                <p style={{ color: "#11254c", fontFamily: "Bold-Italic" }} className=" fade-element text-xl md:text-3xl mt-4 text-black font-bold inter-var text-center">
                    CTO, Web full-stack developer, and a passionate learner.
                </p>
            </div>
        </div>
    );
}
