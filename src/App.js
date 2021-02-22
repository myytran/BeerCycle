import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const links = [
    { id: "carousel", text: "Carousel" },
    { id: "breweries", text: "Breweries" },
    { id: "beer-types", text: "Types of Beer" },
    { id: "footer", text: "Footer"},
  ]
  return (
    <div className="main-app">
          <Header links={links} />
        <div className="carousel-container" id="carousel" activeClass="active">
          <h2>Carousel</h2>
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
      <Footer links={links} />
    </div>
  );
}

export default App;
