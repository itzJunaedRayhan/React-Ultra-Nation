import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, region, flag} = props.country;
    return (
        <div className='country'>
            <h4>Country Name : {name}</h4>
            <img src={flag} alt=""/>
            <h4>population : {population}</h4>
            <h4>Region : {region}</h4>
            <button onClick={() => {props.handleAddCountry(props.country)}}>Add Country</button>
        </div>
    );
};

export default Country;