import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import Guarantee from "../components/Guarantee/Guarantee";
import Dentists from "../components/Dentists/Dentists";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import BeforeAfter from "../components/Before-After/Before-After";
function LandingPage() {
  return (
    <div>
      <Header />
      <Service />
      <Guarantee />
      <Dentists />
      <Features />

      <BeforeAfter />
      <Footer />
    </div>
  );
}

export default LandingPage;
