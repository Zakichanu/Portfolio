import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroComponent } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./components/menu/Menu";
import { Blog } from "./components/blog/Blog";

function Router() {
    // NB : organization and chargingstation are the parameters passed in the URL. Organization represents the subdomain of the tenant and the charginstation represents the charging station ID.

    return (

        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<HeroComponent />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;