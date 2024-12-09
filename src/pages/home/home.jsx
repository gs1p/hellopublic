import React from 'react';
// import VideoBackground from './VideoBackground';
import './home.css';
import VideoBackground from '../../components/home/homeVIdeo/homeVideo';
import MembersSlider from '../../components/home/members/memberSlider';
import NeedBarcode from '../../components/home/Barcode/Need';
import BusinessJourney from '../../components/home/BusinessJourney/BusinessJourney';
import GS1Standards from '../services/Gs1Standards/Gs1Standards';
import GS1Info from '../../components/home/ScanFolder/script';
import SlideInElement from '../../components/Transitions/Slidein';


const HomePage = () => {
  return (
    <div className="home-page"> 
      <main>
        <VideoBackground></VideoBackground>
        <div className='Intro-home-para'>
         <SlideInElement>
        <h2>The Global Barcode Experts</h2>
        <p>We manage the barcode system used by retailers, suppliers and their partners, so youre in the right place if you need barcodes for your business or organisation in Pakistan. We also create other standards to help you share information efficiently. After all, its easier to get things done when you speak the same language as your customers, suppliers and partners.</p>
        </SlideInElement>
        </div>
        <GS1Standards></GS1Standards>
        <MembersSlider></MembersSlider> 
        <GS1Info></GS1Info>
        <BusinessJourney></BusinessJourney>
        <NeedBarcode></NeedBarcode>
      </main>
    </div>
  );
};

export default HomePage;