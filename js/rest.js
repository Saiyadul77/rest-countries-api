const restCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[0])
    const getCountries = countries.map(country => allCountries(country));
    const container = document.getElementById('countries');
    container.innerHTML = getCountries.join(' ');
    // console.log(getCountries[0])
}
// original 
/* const allCountries = country => {
    return `
    <div class='country'>
    <h2>${country.name.common}</h2>
<img src="${country.flags.png}">
    </div>
    `
} */

// destructuring method 1

/* const allCountries = country => {
    const {name, age}= country;
    return `
    <div class='country'>
    <h2>${name.common}</h2>
<img src="${flags.png}">
    </div>
    `
} */

// destructuring method 2

const allCountries = ({ name, flags, area }) => {
    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <img src="${flags.png}">

    </div>
    `
}
restCountries();