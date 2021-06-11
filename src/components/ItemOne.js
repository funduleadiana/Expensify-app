import React from 'react';

const ItemOne=(props)=>(
    <div>
        <h1>This is the one item of the portfolio</h1>
        <p>This page is for the item with the ID of: {props.match.params.id}</p>
    </div>
);

export default ItemOne;