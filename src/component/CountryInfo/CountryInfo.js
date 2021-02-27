import React from 'react';

const CountryInfo = (props) => {
    // console.log('Country Info',props);
    const country = props.country;
    // let totalPopulation = 0;
    // for (let i = 0; i < country.length; i++) {
    //     const element = country[i];
    //     totalPopulation = totalPopulation + element.population;
    // }
    const totalPopulation = country.reduce((sum, country) => sum + country.population,0)
    return (
        <div>
            <h3>total population : {totalPopulation}</h3>
        </div>
    );
};

export default CountryInfo;