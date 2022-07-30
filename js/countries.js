const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries()

const displayCountry = (countries) => {

    const countriesHtml = countries.map(country => singleCountry(country))
    const container = document.getElementById('countries-container')
    container.innerHTML = countriesHtml.join(' ');

}

const singleCountry = (country) => {
    console.log(country)

    return `
        <div class="single-country">
            <img src="${country.flags.png}"/>
            <h2>${country.name}</h2>
            <h5>${country.capital}</h5>
        </div>
    `
}