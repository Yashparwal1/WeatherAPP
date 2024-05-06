// original _ apikey= 273fcc3ee5msh1d73973e653170fp1088fdjsnacaf4a62c866
// zed api = f7fa15d8ebmsh6d9a0542db699a5p1abe20jsnbfa115578c89
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR-API-KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city 
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err))
}

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)	
})

getWeather("Delhi")

const cities = ["Shanghai", "Boston", "Lucknow", "Kolkata", "London"]
const dataPoints = ["cloud_pct", "temp", "feels_like", "humidity", "min_temp", "max_temp", "wind_speed", "wind_degrees", "sunrise", "sunset"]; 
const forEachCities = () => {
	cities.forEach(city => {
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			dataPoints.forEach(dataPoint => {
				document.getElementById(`${city.toLowerCase()}_${dataPoint}`).textContent = response[dataPoint]
			})
		})
	.catch(err => console.error(err))
	})
}

forEachCities()
