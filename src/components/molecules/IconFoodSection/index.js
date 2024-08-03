import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FoodIcon } from "../../../assets/Dummy";
import { Image } from "react-native";

const IconFoodSection = () => {
    return (
        <View style={styles.page}>
            <View style={styles.iconFull}>
                <View style={styles.iconContainer}>
                    <Image source={FoodIcon} style={styles.icon} />
                </View>
                <Text style={styles.iconText}>Fast Food</Text>
            </View>
            <View style={styles.iconFull}>
                <View style={styles.iconContainer}>
                    <Image source={FoodIcon} style={styles.icon} />
                </View>
                <Text style={styles.iconText}>Fast Food</Text>
            </View>
            <View style={styles.iconFull}>
                <View style={styles.iconContainer}>
                    <Image source={FoodIcon} style={styles.icon} />
                </View>
                <Text style={styles.iconText}>Fast Food</Text>
            </View>
            <View style={styles.iconFull}>
                <View style={styles.iconContainer}>
                    <Image source={FoodIcon} style={styles.icon} />
                </View>
                <Text style={styles.iconText}>Fast Food</Text>
            </View>
        </View>
    );
};

export default IconFoodSection;

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexWrap: "wrap",
    },
    icon: {
        width: 50,
        height: 50,
    },
    iconContainer: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 0.7,
        borderRadius: 30,
    },
    iconFull: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    iconText: {
        fontFamily: "Poppins-Regular",
        marginTop: 4,
        fontSize: 12,
        textAlign: "center",
    },
});
