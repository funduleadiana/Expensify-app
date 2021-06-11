import React from 'react';

import { NavLink} from 'react-router-dom';


const Portfolio =()=> {
    return(
        <div>
        <h1>My work</h1>
        <p>Choose below to see some of my work</p>
            <NavLink to="/portfolio/1" activeClassName="selected" >Item one</NavLink>
            <NavLink to="/portfolio/2" activeClassName="selected">Item Two</NavLink>
        </div>
    )
};

export default Portfolio;