import { useEffect } from "react";

// src/components/Menu.tsx
export function Menu() {
    useEffect(() => {
        document.querySelectorAll('.fade-element').forEach((element) => {
            element.classList.add('fade-in-up');
        });
    }, []);


    return (
        <div className=" fade-element text-7xl md:text-7xl  lg:text-9xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ul>
                <li style={{color: "#1f458c", fontFamily: "Bold"}}><a style={{fontFamily: "Bold"}} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">1.</a>H<a style={{color: "#11254c", fontFamily: "Kilogram"}}>OME</a></li>
                <li style={{color: "#1f458c", fontFamily: "Bold"}}><a style={{fontFamily: "Bold"}} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">2.</a>A<a style={{color: "#11254c", fontFamily: "Kilogram"}}>BOUT</a></li>
                <li style={{color: "#1f458c", fontFamily: "Bold"}}><a style={{fontFamily: "Bold"}} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">3.</a>W<a style={{color: "#11254c", fontFamily: "Kilogram"}}>ORK</a></li>
                <li style={{color: "#1f458c", fontFamily: "Bold"}}><a style={{fontFamily: "Bold"}} className=" fade-element text-2xl text-black md:text-3xl  lg:text-3xl">4.</a>B<a style={{color: "#11254c", fontFamily: "Kilogram"}}>LOG</a></li>
            </ul>
        </div>

    );
}