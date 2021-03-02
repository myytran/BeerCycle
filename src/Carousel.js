import React from 'react';

function Carousel(props) {
    const allBeers = [...props.beers];
    return (
        <div className="carousel-container">
            {allBeers.map((beer) => {
                return (
                    <div>
                        {beer.name}
                        {beer.abv}
                        {beer.img_url}
                        {beer.tagline}
                        {beer.description}
                    </div>
                )
            })}
        </div>
    );
}

export default Carousel;