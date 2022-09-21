import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const { name, area, population, flags } = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;