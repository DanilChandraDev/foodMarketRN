import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1ABC9C" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Poppins-Medium",
    },
});
