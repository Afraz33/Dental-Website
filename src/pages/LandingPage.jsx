import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import Dentists from "../components/Dentists/Dentists";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Dentists />
    </div>
  );
}

export default LandingPage;
