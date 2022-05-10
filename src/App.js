import React, {useEffect, useState} from "react";
import LoadingScreen from 'react-loading-screen';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Description from "./components/Description"
import Products from "./components/Products";
import { Roadmap } from "./components/Readmap";
import Mission from "./components/Mission";
import Team from "./components/Team"
import Faq from "./components/Faq"
import Footer from "./components/Footer";
import Light from "./components/Light";
import Ticket from "./components/Ticket"

import { getMintedTotal } from "./components/util/interact.js"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [countnft, setCountnft] = useState(0);

  const [image, setImage] = useState("./story/story1.jpg");

  const [count, setCount] = useState(0);

  useEffect(async () => {
      const count = await getMintedTotal();
      setCount(count);
  }, []);

  function handleChangeCount (count) {
    setCount(count);
  }

  const images = [
    "./story/story1.jpg",
    "./story/story2.jpg",
    "./story/story3.jpg",
    "./story/story4.jpg",
    "./story/story5.jpg",
    "./story/story6.jpg",
    "./story/story7.jpg",
    "./story/story8.jpg",
    "./story/story9.jpg",
    "./story/story10.jpg",
    "./story/story11.jpg",
  ];

  let random;
  let imageNum;
  
  function changeImage () {
    random = Math.random();
    imageNum = parseInt(random*11);

    if(image===images[imageNum]) {
      changeImage();
    } else {
      setImage(images[imageNum]);
    }
  }

  const handleNftChange = (count) => {
    setCountnft(countnft + count);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage()
    }, 500);
    
    window.addEventListener('load', () => {
      setIsLoaded(true);
    })

    return () => clearInterval(interval);
  });

  return (
    <div>
      {
        isLoaded? 
        <div className="App">          

          <Header />

          <Banner />

          <Description />

          <Roadmap />

          <Mission />

          <hr />

          <Team />

          <hr />

          <Products />

        </div>
      :<LoadingScreen
        loading={true}
        bgColor='#1b1d54'
        spinnerColor='#ff8b14'
        textColor='#ffffff'
        logoSrc='/logo.png'
      > Post Apocalyptic</LoadingScreen>
      }

    </div>
  );
}

export default App;
