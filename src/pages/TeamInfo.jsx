import Header from "../components/home/Header.jsx";
import Footer from "../components/home/Footer.jsx"; // Asegurando consistencia
import FirstTeam from "../components/teams/FirstTeam.jsx";
import SeniorB from "../components/teams/SeniorB.jsx";
import HeroSlider from "../components/home/SlideExperimental.jsx";


function TeamInfo() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <FirstTeam />
      <SeniorB />
      <Footer />
    </div>
  );
}

export default TeamInfo;
