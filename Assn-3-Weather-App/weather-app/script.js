const button = document.querySelector('#location-button')
const results = document.querySelector('.results')
const input = document.querySelector('input')

const generateEndpointWithName = (name) => `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fbc954f04e62dbcdc3db0960f067ab53`
const generateEndpoint = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fbc954f04e62dbcdc3db0960f067ab53`
const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = { latitude, longitude };
          resolve(currentLocation);
        },
        (error) => {
          reject(`Error getting geolocation: ${error.message}`);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

let currentGeoLocation = null;

getCurrentLocation()
  .then((location) => {
    currentGeoLocation = location;
    console.log('Current Geolocation:', currentGeoLocation);
  })
  .catch((error) => {
    console.error(error);
  });



const generateCard = (location, temperature, detail) => `<div class="card">
<div class="card-content">
  <div class="card-top">
    <span class="card-title">${temperature}°C</span>
    <p>${detail}.</p>
  </div>
  <div class="card-bottom">
    <p>${location}</p>
    <svg width="32"  viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
  </div>
</div>
<div class="card-image">
  <img src="./images/${detail.toLowerCase()}.png" width="82" height="82" fill="white"  viewBox="0 0 16 16">
  </img>   
</div>
</div>`
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fbc954f04e62dbcdc3db0960f067ab53
// https://api.openweathermap.org/data/2.5/weather?q=London&fbc954f04e62dbcdc3db0960f067ab53
// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=fbc954f04e62dbcdc3db0960f067ab53

const getWeather = async () => {
  try {
    const locationToSearch = input.value

    // console.log(currentGeoLocation.latitude)
    if (locationToSearch !== '' && locationToSearch !== null) {
      // console.log(locationToSearch)
      const response = await fetch(generateEndpointWithName(locationToSearch))
      const data = await response.json()
      const place = data.name
      const temp = Math.round(data.main.temp-273.15 )
      console.log(data)

      const det = data.weather[0].main
      results.innerHTML = generateCard(place, temp, det)
      console.log(det)

    } else {
      const response = await fetch(generateEndpoint(currentGeoLocation.latitude, currentGeoLocation.longitude))
      // console.log(response)
      const data = await response.json()
      const place = data.name
      const temperature = Math.round(data.main.temp-273.15 )
      const detail = data.weather[0].main
      console.log(data)
      results.innerHTML = generateCard(place, temperature, detail)
      console.log(detail)
    }
  } catch (error) {
    console.log(error)
    alert("PLease try a different location");
  } finally {
  }

}
button.addEventListener('click', getWeather)