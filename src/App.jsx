
import Fronr from "./Component/Navbar/Fronr.jsx";
import Dbar from "./Component/Maincarosoule/Carosoule.jsx"
import CompanyCard from "./Component/CompanyCard/CompanyCard.jsx";
import PartnerList from "./Component/Patner/Patner.jsx";
import FeatureCard from "./Component/FeatureCard/FeatureCard.jsx";
import FooterComponent    from "./Component/Footer/Footer.jsx";
import VideoPlayer from "./Component/VideoBar/VideoBar.jsx";
import FirstHeading from "./Component/FirstHeading/FirstHeading.jsx";

function App() {
  return (
    <>
     <div >
      <Fronr />
      <Dbar />
      <PartnerList />
      <FirstHeading />
      <FeatureCard />

       <VideoPlayer />
       
      <CompanyCard />

    <FooterComponent />
   
    </div>
    </>
  );
}

export default App;