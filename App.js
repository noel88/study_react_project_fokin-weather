import React from 'react';
import Loading from './Loading'
import * as Location from "expo-location";
import {Alert} from "react-native-web";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "8f35236e52495f7a0285731abe7e56f3";

export default class extends React.Component{
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data: {main : {temp}, weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({isLoading: false, temp : temp, condition: weather[0].main})
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Send to API and get Weather
      this.getWeather(latitude, longitude)
    } catch(error) {
      Alert.alert("Can't find you", "So sad")
    }


  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
