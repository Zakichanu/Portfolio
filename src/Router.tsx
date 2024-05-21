import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroComponent } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./components/menu/Menu";
import { Blog } from "./components/blog/Blog";
import About from "./components/about/About";
import { WavyBackground } from "./components/aceternityUi/bgWavy/BgWavy";
import { Work } from "./components/work/Work";
import { FootAlert } from "./components/blog/blogPosts/FootAlert";
import { BlogExample } from "./components/blog/blogPosts/BlogExample";
import { BeingABabyCTO } from "./components/blog/blogPosts/BeingABabyCTO";
import { ApproachIOT } from "./components/blog/blogPosts/ApproachIOT";

function Router() {
    // NB : organization and chargingstation are the parameters passed in the URL. Organization represents the subdomain of the tenant and the charginstation represents the charging station ID.

    return (
        <BrowserRouter>
            <Navbar />
            <WavyBackground  colors={["#8AAAE5"]} backgroundFill="white" className="fade-element mx-auto" >
                <Routes>
                    <Route path="/" element={<HeroComponent />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/blog-example" element={<BlogExample />} />
                    <Route path="/blog/football-alert" element={<FootAlert />} />
                    <Route path="/blog/being-a-baby-cto" element={<BeingABabyCTO />} />
                    <Route path="/blog/approach-iot" element={<ApproachIOT />} />
                </Routes>
            </WavyBackground>
        </BrowserRouter>
    );
}

export default Router;