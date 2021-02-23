import React from 'react';

function Carousel(props) {
    return (
        <div>
            {beers.map(beer => {
                <div>{beer.name}</div>
            })}
        </div>
    );
}

export default Carousel;