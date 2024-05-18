import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroComponent } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./components/menu/Menu";
import { Blog } from "./components/blog/Blog";
import About from "./components/about/About";
import { WavyBackground } from "./components/aceternityUi/bgWavy/BgWavy";
import { Work } from "./components/work/Work";

function Router() {
    // NB : organization and chargingstation are the parameters passed in the URL. Organization represents the subdomain of the tenant and the charginstation represents the charging station ID.

    return (

        <BrowserRouter>
            <Navbar />
            <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto" >
                <Routes>
                    <Route path="/" element={<HeroComponent />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </WavyBackground>

        </BrowserRouter>
    );
}

export default Router;