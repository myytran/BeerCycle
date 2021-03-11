import React from 'react';
import Beer from './Beer';

function Carousel(props) {
    const allBeers = [...props.beers];
  
    return (
        <div>
            <h2>Carousel</h2>
            {allBeers.map((beer) => <Beer key={beer.name} beer={beer} />)}
        </div>
    );
}

export default Carousel;