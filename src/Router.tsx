import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroComponent } from "./components/Hero";

function Router() {
    // NB : organization and chargingstation are the parameters passed in the URL. Organization represents the subdomain of the tenant and the charginstation represents the charging station ID.
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroComponent />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;