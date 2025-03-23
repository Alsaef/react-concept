import React from 'react';

const FAq = ({me}) => {
   
    return (
        <div>
            <h2>{me[0].name}</h2>
            <h2>Roll:{me[0].roll}</h2>
            <h2>{me[0].dep}</h2>
        </div>
    );
};

export default FAq;