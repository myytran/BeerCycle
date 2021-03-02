import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import LandingImg from './LandingImg';

function App() {
  const [beers, setBeers] = useState(null);

  const links = [
    { id: "carousel", text: "Carousel" },
    { id: "breweries", text: "Breweries" },
    { id: "beer-types", text: "Types of Beer" },
    { id: "footer", text: "Footer"},
  ];
   const footerLinks = [
    { id: "support", text: "Support"},
    { id: "terms", text: "Terms of Use"}
  ]

 // fetch data from Beers API
 const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
    .then(response => response.json())
    .then(data => {
      let newBeers = data.map((beer) => {
        return {
          name: beer.name,
          abv: beer.abv,
          img: beer.image_url,
          tagline: beer.tagline,
          description: beer.description
        };
      });
      setBeers(newBeers.splice(0, 15));

    })
 }

useEffect(() => {
  fetchData();
}, []);


  return (
    <div className="main-app">
          <Header links={links} />
          <LandingImg />
        <div className="carousel-container" id="carousel" activeClass="active">
          <h2>Carousel</h2>
          {beers && <Carousel beers={beers} />}
        </div>
        <div id="breweries" className="breweries-container">
          <h2>Breweries</h2>
            <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </span>
        </div>
        <div id="beer-types" className="beer-types-container">
          <h2>Types of Beer</h2>
            <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </span>
        </div>
        <div id="footer">
          <Footer footerLinks={footerLinks} />
        </div>
    </div>
  );
}

export default App;
