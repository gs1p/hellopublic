import React from 'react';
import './homeVideo.css';
import video from '../../../components/home/homeVIdeo/backgroundvideo1.mp4';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../../pages/What we do/Animation/AnimatedPage';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <AnimatedPage direction='topToBottom'>
        <h1 className="title111">Power <span className="highlight111">of Barcode</span></h1>
        </AnimatedPage>
        <AnimatedPage direction='topToBottom'>
        <p className="subtitle1">
        Fifty years ago, one GS1 barcode scan changed the world, making shopping smarter and supply chains stronger.
        </p>
        <Link to={`/industries`}>
          <button className="cta-button1">Start Exploring Now  &rarr;</button></Link>
        </AnimatedPage>
      </div>
    </div>
  );
};

export default VideoBackground;