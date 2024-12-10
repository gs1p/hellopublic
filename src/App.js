// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/header';
import HomePage from './pages/home/home';
import Footer from './components/Footer/footer';
import ServicesBanner from './pages/services/servicesMain';
// import companyMilestones from './pages/history/companyMilestones';
import GS1PakistanHistory from './pages/history/companyMilestones';
import ContactUs from './pages/Contact us/Contact';
import IndustriesPage from './pages/Industries/Industries';
import Retail from './components/Industries/Retail/Retail';
import AboutUs from './pages/What we do/About';
import HealthCare from './components/Industries/Health/Health';
import TransportLogistics from './components/Industries/Logistics/Logistics';
import GS1BoardOfDirectors from './pages/GS1BoardOfDirectors/GS1BoardOfDirectors';
import GS1 from './pages/What is GS1/GS1';
import Barcode from './pages/Get a barcode/Barcode';
import SellOnline from './components/Industries/SellOnline/SellOnline';
import Agriculture from './components/Industries/Agriculture/Agriculture';
import TechnicalIndustries from './components/Industries/TechnicalIndustries/TechnicalIndustries';
import NewsEvents from './pages/NewsEvents/NewsEvents';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductPhotography from './pages/Product/ProductImaging';
import BarcodeGuide from './pages/BarcodeGuide/BarcodeGuide';
import BarcodeVerification from './pages/BarcodeVerification/Verify';
import Team from './pages/Team/Team';
import Update from './pages/Update/Update'
import TenSteps from './pages/Ten Steps for Using Barcodes/TenSteps'
import Estimator from './pages/Estimator/Estimator';
import VerifiedByGS1 from './pages/VBG/VerifiedByGs1';
import Training from './pages/Trainings/Train';




const App = () => {


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// All screens

  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Standards-&-services" element={<ServicesBanner></ServicesBanner>} />
        <Route path="/Retail" element={<Retail></Retail>} />
        <Route path="/industries" element={<IndustriesPage></IndustriesPage>} />
        <Route path="/Contact" element={<ContactUs></ContactUs>} />
        <Route path="/History" element={<GS1PakistanHistory></GS1PakistanHistory>} />
        <Route path="/HealthCare" element={<HealthCare></HealthCare>} />
        <Route path="/Transport-&-Logistics" element={<TransportLogistics></TransportLogistics>} />  
        <Route path="/Board-of-Directors" element={<GS1BoardOfDirectors></GS1BoardOfDirectors>} />
        <Route path="/About-us" element={<AboutUs></AboutUs>} />
        <Route path='Selling-Online' element={<SellOnline></SellOnline>}/>
        <Route path="/WhyGS1" element={<GS1></GS1>} />
        <Route path="/Getabarcode" element={<Barcode></Barcode>} />
        <Route path="/News-&-Events" element={<NewsEvents></NewsEvents>} />
        <Route path="/Food-&-Agriculture" element={<Agriculture></Agriculture>} />
        <Route path="/Technical-Industries" element={<TechnicalIndustries></TechnicalIndustries>} />
        <Route path="/Product-Photography" element={<ProductPhotography></ProductPhotography>} />
        <Route path="/Team" element={<Team></Team>} />
        <Route path='/update-your-gs1-identifier-registration'element={<Update></Update>}/>
        <Route path='/Verified-by-GS1' element={<VerifiedByGS1></VerifiedByGS1>} />
        <Route path='/ten-steps-to-using-barcodes' element={<TenSteps></TenSteps>} />
        <Route path="/Barcode-Guide" element={<BarcodeGuide></BarcodeGuide>} />
        <Route path="/Barcode-Verification" element={<BarcodeVerification></BarcodeVerification>} />
        <Route path="/Barcode-Estimator" element={<Estimator></Estimator>} />
        <Route path='/Education-&-Training' element={<Training></Training>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App
