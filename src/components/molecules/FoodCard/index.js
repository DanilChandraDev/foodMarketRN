import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Rating from "../Rating";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FoodCard = ({ image, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.text}>Cherry Healthy</Text>
                    <Rating />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginRight: 24,
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
        overflow: "hidden",
        borderColor: "black",
        borderBottomWidth: 0.5,
    },
    image: {
        width: 200,
        height: 140,
        resizeMode: "cover",
    },
    content: {
        padding: 12,
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#020202",
    },
});
