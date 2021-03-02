import React from 'react';

function Carousel(props) {
    const allBeers = [...props.beers];
    return (
        <div>
            {allBeers.map((beer) => {
                <div>{beer.name}</div>
            })}
        </div>
    );
}

export default Carousel;