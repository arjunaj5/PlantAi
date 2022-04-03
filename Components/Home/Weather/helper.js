
export const getWeather = async (lat,lon) => {
  const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e2836c481fd198ed096cd1d607ce4acc&units=metric`, {
    method: 'GET'
  })
  console.log(response)
  return await response.json();
}