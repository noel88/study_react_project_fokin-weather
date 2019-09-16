import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import  { MaterialCommunityIcons } from "@expo/vector-icons";
import  {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#373B44", "#4286F4"],
        title: "Thunderstorm in the house",
        subTitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "Is like rain, but gay"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subTitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7BE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subTitle: "Do you want to build a snowman? fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#7BE2FC", "#B9B6E5"],
        title: "Atmosphere",
        subTitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subTitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: ""
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subTitle: "It's like you have no glasses on"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subTitle: "Thanks a lot china"
    }
}

export default function Weather({temp, condition}) {
    return (
            <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={92} name={weatherOptions[condition].iconName} color={"white"} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
      fontSize: 42,
      color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }


})
