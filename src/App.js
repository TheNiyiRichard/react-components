import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './css/style.css';
import './css/reset.css';


// Import images
import image1 from './assets/images/tutor-one.png';
import image2 from './assets/images/v-hero-image.jpg';
import image3 from './assets/images/tutor-two.jpeg';
import image4 from './assets/images/tutor-three.webp';

function App() {
  const galleryItems = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <>
      <Header />
      <Banner
        title="I am Adeniyi Richard, A Software Developer"
        text="I am currently learning react so this is me trying new things with component and props concept."
        buttonType="primary"
        buttonText="Learn More"
      />
      <div className="container">
        <Gallery items={galleryItems} />
      </div>
      <Footer />
    </>
  );
}

export default App;