import React from 'react';

const Banner = ({me}) => {
    console.log(me);
    return (
        <div>
            <h2>{me[0].name}</h2>
        </div>
    );
};

export default Banner;