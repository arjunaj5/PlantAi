import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import * as Location from 'expo-location';
import { getWeather } from "./helper";

const weatherIcon = require('../../../assets/images/weather-icon.png')

const Weather = () => {
  const [permission, setPermission] = useState(true);
  const [weatherResult, setWeatherResult] = useState(  {
    description: "",
    temperature: "",
    minTemperature: "",
    humidity: "",
    windSpeed: "",
    pressure: "",
    place: ""
  });


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setPermission(false);
        return;
      }

      let location = await Location.getLastKnownPositionAsync();

      const result = await getWeather(location.coords.latitude, location.coords.longitude);
      const weatherDetails = {
        description: result.weather[0].description.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
        temperature: Math.round(result.main.temp),
        minTemperature: Math.round(result.main.temp_min),
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        pressure: result.main.pressure,
        place: result.name
      };
      setWeatherResult(weatherDetails);
    })();
  }, []);

  if(!permission){
    return(
      <View>
        <Text>Location permission required</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={weatherIcon}
          style={styles.weatherIcon}
        />
        <View style={{justifyContent:"space-between", marginLeft: 10 }}>
          <Text style={styles.mainText}>Weather</Text>
          <Text style={styles.subText}>What's the weather.</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={styles.bigText}>{weatherResult.temperature}°C</Text>
          <Text style={[styles.minTempStyle]}>{weatherResult.minTemperature}°C</Text>
        </View>
        <Text style={styles.mainText}>{weatherResult.description}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={[styles.box,{backgroundColor: '#000', marginLeft:0}]}>
          <Text style={{color: '#fff', textAlign:"center"}} >Humidity</Text>
          <Text style={{fontSize: 16, fontWeight: "bold",textAlign:"center", color: '#fff'}} >{weatherResult.humidity}</Text>
        </View>

        <View style={[styles.box,{backgroundColor: '#3BA776'}]}>
          <Text style={styles.boxText} >Wind</Text>
          <Text style={{fontSize: 16, fontWeight: "bold",textAlign:"center"}} >{weatherResult.windSpeed} km/h</Text>
        </View>

        <View style={[styles.box,{backgroundColor: '#fff'}]}>
          <Text style={styles.boxText} >Pressure</Text>
          <Text style={{fontSize: 16, fontWeight: "bold",textAlign:"center"}} >{weatherResult.pressure} mb</Text>
        </View>
      </View>

    </View>
  );
}

export default Weather;