import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Steps from "../components/Steps/Steps";
import Guarantee from "../components/Guarantee/Guarantee";
import Dentists from "../components/Dentists/Dentists";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import BeforeAfter from "../components/Before-After/Before-After";
import Enhancements from "../components/Solutions/Enhancements";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <Guarantee />
      <Dentists />
      <Features />

      <BeforeAfter />
      <Enhancements />
      <Footer />
    </div>
  );
}

export default LandingPage;
