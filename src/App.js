import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import React, { useEffect, useState } from 'react';

const testImage1 = require("./images/1.jpg")
const testImage2 = require("./images/2.jpg")
const testImage3 = require("./images/3.jpg")

function App() {
  const images = [testImage1, testImage2, testImage3]
  const [currentImage, setCurrentImage] = useState(testImage1);

  useEffect(() => {
    const image = document.querySelector(".thirdPage img");
    const t2 = gsap.timeline({repeat: -1});
    t2.to(image, {rotate: 10, duration: 3, ease: "none", y: 50, x: -50})
    t2.to(image, {rotate: 0, duration: 3, ease: "none", y: 0, x: 0})

    let currentImageNumber = 0;
    setInterval(() => {
      if (currentImageNumber < 2) {
        currentImageNumber++
      } else {
        currentImageNumber = 0
      }
      setCurrentImage(images[currentImageNumber])
    }, 4300)

    //circle images
    const t3 = gsap.timeline({ repeat: -1, delay: 2 });
    const circle1 = document.querySelector(".thirdPage .circle:nth-of-type(1)");
    t3.to(circle1, { duration: 2, scale: 8 },"start");
    t3.to(circle1, { delay:  0.5,duration: 2, scale: 0 },2);

    const circle2 = document.querySelector(".thirdPage .circle:nth-of-type(2)");
    t3.to(circle2, { duration: 2, scale: 6, width: 120 },"start");
    t3.to(circle2, { delay: 0.5, duration: 2, scale: 0 }, 2);

    const circle3 = document.querySelector(".thirdPage .circle:nth-of-type(3)");
    t3.to(circle3, { duration: 2, scale: 10 },"start");
    t3.to(circle3, { delay:  0.5,duration: 2, scale: 0 }, 2);

    const circle4 = document.querySelector(".thirdPage .circle:nth-of-type(4)");
    t3.to(circle4, { duration: 3, scale: 13 },"start");
    t3.to(circle4, { delay:  0.5,duration: 2, scale: 0 }, 2);

    const circle5 = document.querySelector(".thirdPage .circle:nth-of-type(5)");
    t3.to(circle5, { duration: 2, scale: 9 },"start");
    t3.to(circle5, { delay:  0.5,duration: 2, scale: 0},2);

    const circle6 = document.querySelector(".thirdPage .circle:nth-of-type(6)");
    t3.to(circle6, { duration: 4, scale: 4 },"start");
    t3.to(circle6, { delay:  0.5,duration: 2, scale: 0 }, 2);

    const circle7 = document.querySelector(".thirdPage .circle:nth-of-type(7)");
    t3.to(circle7, { duration: 4, scale: 8 },"start");
    t3.to(circle7, { delay:  0.5,duration: 2, scale: 0},2);
  }, [])

  const move2Up = (event) => {
    const element = event.target
    const selected = document.querySelector(".section.selected")
    const filter = document.querySelector(".filter")
    const firstPageElements = document.querySelectorAll(".firstPage > section")
    const secondPage = document.querySelector(".secondPage")
    const img = "/static/media/stones.7b2ed8d7aeace4fad9e4.jpg"
    selected.style.zIndex = 99;
    selected.style.backgroundImage = `url(${img})`;
    selected.style.top = element.style.top
    const t1 = gsap.timeline()
    t1.to(selected, { y: 0, duration: 1.5, height: '100vh', ease: 'power3.out' })
    t1.to(firstPageElements, { display: 'none', duration: 0 })
    t1.to(secondPage, {display: 'block', duration: 0})
    t1.to(selected, {
      xPercent: 50, yPercent: 50, duration: 2, borderRadius: 150, width: "25vh", height: '25vh'
    })
    t1.to(selected, {
      xPercent: 70, yPercent: 40, duration: 1, borderRadius: '50%', width: "20vh", height: '20vh'
    })
    t1.to(selected, { xPercent: 50, yPercent: -140, duration: 2 })
    t1.to(filter, { display: 'block', xPercent: 70, yPercent: 40, duration: 0, borderRadius: '50%', width: "20vh", height: '20vh' })
    t1.to(filter, { xPercent: -30, yPercent: -20, duration: 2 })
    t1.to(filter, { xPercent: -10, yPercent: 140, duration: 2 })
  }

  return (
    <div className="App">
      <div className='firstPage page'>
        <section className="section section-1" onClick={move2Up}></section>
        <section className="section section-2" onClick={move2Up}>Click here!</section>
        <section className="section section-3" onClick={move2Up}></section>
        <div className='section selected'></div>
        <div className='filter'></div>
        <div className="secondPage page">
          <h3>Second Page</h3>
          <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br /> <p>Scroll Down!</p></div>
        </div>
      </div>
      <div className="thirdPage page">
        <h1>Timeless Brands <br /><span>Think Long Term</span></h1>
        <div className='imageContainer'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <img src={currentImage} />
        </div>
      </div>
    </div>
  )
}

export default App;
