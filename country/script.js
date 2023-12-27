const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload=()=>{
    const countryName = JSON.parse(xhr.response);
    countryName.forEach(country => {
        console.log(`${country.name.common},${country.region},${country.subregion},${country.population}`);
    });
}