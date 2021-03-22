import React from 'react';

function Beer({ beer }) {
    
    return (
            <div className="beer-container">
                    <h4>Name: {beer.name}</h4>
                    <p>ABV: {beer.abv}</p>
                    <p>Date Brewed: {beer.dateBrewed}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>Description: {beer.description}</p>
                    <img width="40px" height="120px" src={beer.img}></img>
                </div>
    );
}

export default Beer;