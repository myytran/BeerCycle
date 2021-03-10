import React from 'react';

function Beer({ beer }) {
    console.log({beer})
    return (
        <div>
            {beer}
        </div>
    );
}

export default Beer;