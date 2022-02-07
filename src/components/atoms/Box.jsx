import React from 'react';

const Box = ({ icon, header, text }) => (
    <div>
        <h3>
            {icon}{' '}{header}
        </h3>
        <p>{text}</p>
    </div>
);



export default Box;