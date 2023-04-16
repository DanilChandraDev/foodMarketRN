import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { ImageBackground } from "react-native";
import { SignUpPic } from "../../../assets";

const BackgroundSignInUp = ({ label }) => {
    return (
        <>
            <StatusBar translucent style="light" />
            <ImageBackground
                source={SignUpPic}
                style={styles.backgroundContent}
            >
                <View style={styles.backgroundText}>
                    <Text style={styles.title}>{label}</Text>
                    <Text style={styles.subTitle}>
                        Enjoy all the features of Winged Eats, including promo
                        leaks and the latest info about your order
                    </Text>
                </View>
            </ImageBackground>
        </>
    );
};

export default BackgroundSignInUp;

const styles = StyleSheet.create({
    backgroundContent: {
        height: 300,
    },
    title: {
        fontSize: 24,
        fontFamily: "Poppins-Medium",
        color: "white",
        textAlign: "center",
    },
    subTitle: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "white",
        textAlign: "center",
    },
    backgroundText: {
        position: "absolute",
        right: 12,
        left: 12,
        bottom: 70,
    },
});
