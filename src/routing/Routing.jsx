import { Route, Routes, Link, Router } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PricingPage from "../pages/PricingPage";
import FAQPage from "../pages/FAQPage";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>

      <Route path="/faq" element={<FAQPage />}></Route>
    </Routes>
  );
}

export default Routing;
