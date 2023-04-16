import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { WingedLogo } from "../../assets";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("SignIn");
        }, 2000);
    }, []);
    return (
        <View
            style={{
                backgroundColor: "#1A98D6",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <WingedLogo />
            <View style={{ height: 38 }} />
            <Text
                style={{
                    fontSize: 32,
                    color: "#FFFFFF",
                    fontFamily: "Poppins-Medium",
                }}
            >
                Winged Eats
            </Text>
        </View>
    );
};

export default SplashScreen;
