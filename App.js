import React from 'react';
import Loading from './Loading'
import * as Location from "expo-location";
import {Alert} from "react-native-web";
import axios from "axios";

const API_KEY = "8f35236e52495f7a0285731abe7e56f3";

export default class extends React.Component{
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&APPID=8f35236e52495f7a0285731abe7e56f3`
    )
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Send to API and get Weather
      this.getWeather(latitude, longitude)
      this.setState({isLoading : false})
    } catch(error) {
      Alert.alert("Can't find you", "So sad")
    }


  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? <Loading /> : null;
  }
}
