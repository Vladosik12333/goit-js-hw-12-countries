const BASE_URL = 'https://restcountries.com/v2/name/';

export default function (nameCountry) {
  return fetch(`${BASE_URL}${nameCountry}`)
    .then(resp => {
      if (resp.ok) return resp.json();
      throw new Error(resp.status);
    })
    .then(data => {
      if (!data.status) return data;
      throw new Error(data.status);
    })
    .catch(console.log);
}
