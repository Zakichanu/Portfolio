import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroComponent } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./components/menu/Menu";
import { Blog } from "./components/blog/Blog";
import About from "./components/about/About";
import { WavyBackground } from "./components/aceternityUi/bgWavy/BgWavy";
import { Work } from "./components/work/Work";
import { FootAlert } from "./components/blog/blogPosts/FootAlert";
import { BeingABabyCTO } from "./components/blog/blogPosts/BeingABabyCTO";
import { ApproachIOT } from "./components/blog/blogPosts/ApproachIOT";
import { ZakichanTechnologies } from "./components/blog/blogPosts/ZakichanTechnologies";
import { WhenUJump } from "./components/blog/blogPosts/WhenYouJump";
import { PrioritizingTasks } from "./components/blog/blogPosts/PrioritizingTasks";

function Router() {
    // NB : organization and chargingstation are the parameters passed in the URL. Organization represents the subdomain of the tenant and the charginstation represents the charging station ID.

    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={
                        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto">
                            <HeroComponent />
                        </WavyBackground>
                    } />
                    <Route path="/menu" element={
                        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto">
                            <Menu />
                        </WavyBackground>
                    } />
                    <Route path="/blog" element={
                        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto">
                            <Blog />
                        </WavyBackground>
                    }  />
                    <Route path="/about" element={
                        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto">
                            <About />
                        </WavyBackground>
                    }  />
                    <Route path="/work" element={
                        <WavyBackground colors={["#8AAAE5"]} backgroundFill="white" className="mx-auto">
                            <Work />
                        </WavyBackground>
                    }  />
                    <Route path="/blog/football-alert" element={<FootAlert />} />
                    <Route path="/blog/being-a-baby-cto" element={<BeingABabyCTO />} />
                    <Route path="/blog/approach-iot" element={<ApproachIOT />} />
                    <Route path="/blog/zakichan-technologies" element={<ZakichanTechnologies />} />
                    <Route path="/blog/when-you-jump" element={<WhenUJump />} />
                    <Route path="/blog/prioritize-tasks" element={<PrioritizingTasks />} />
                </Routes>
        </BrowserRouter>
    );
}

export default Router;