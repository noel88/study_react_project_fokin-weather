import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, Text, View } from 'react-native';
import  { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Weather({temp}) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={92} name={"weather-lighting-rainy"} />
                <Text style={styles.text}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </View>
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
    text: {
      fontSize : 42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }


})
