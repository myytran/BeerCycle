import React from 'react';
import Beer from './Beer';

function Carousel(props) {
    const allBeers = [...props.beers];
    return (
        <div className="carousel-container">
            {allBeers.map((beer) => {
                return (
                    <div>
                        <Beer />
                    </div>
                )
            })}
        </div>
    );
}

export default Carousel;