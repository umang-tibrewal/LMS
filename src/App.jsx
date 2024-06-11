
import Fronr from "./Component/Navbar/Fronr.jsx";
import Dbar from "./Component/Maincarosoule/Carosoule.jsx"
import CompanyCard from "./Component/CompanyCard/CompanyCard.jsx";
import PartnerList from "./Component/Patner/Patner.jsx";
import FeatureCard from "./Component/FeatureCard/FeatureCard.jsx";
import FooterComponent    from "./Component/Footer/Footer.jsx";
import VideoPlayer from "./Component/VideoBar/VideoBar.jsx";
import FirstHeading from "./Component/FirstHeading/FirstHeading.jsx";
import Productcard from "./Component/Productcard/Productcard.jsx";
import LearnHeading from "./Component/LearnHeading/LearnHeading.jsx";
import LmsDiscription from "./Component/LmsDiscription/LmsDiscription.jsx";
import NumberMain from "./Component/NumberMain/NumberMain.jsx";

function App() {
  return (
    <>
     <div >
      <Fronr />
      <Dbar />
      <PartnerList />
      <FirstHeading />
      <FeatureCard />
      <LmsDiscription />
      <NumberMain />
       <VideoPlayer />
       <LearnHeading />
       <Productcard />
      <CompanyCard />

    <FooterComponent />
   
    </div>
    </>
  );
}

export default App;