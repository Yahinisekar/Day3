const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
  const countryFlag = JSON.parse(xhr.response);
  countryFlag.forEach((country) => {
    console.log(
      `${country.name.common}:${country.flags.png}`
    );
  });
};
