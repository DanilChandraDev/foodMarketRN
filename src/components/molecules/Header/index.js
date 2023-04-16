import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IcBack } from "../../../assets";
import { TouchableOpacity } from "react-native";

const Header = ({ title, subTitle, onBack }) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.back}>
                        <IcBack />
                    </View>
                </TouchableOpacity>
            )}
            <View style={{ paddingRight: 13 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subTitle}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontFamily: "Poppins-Medium",
        color: "#020202",
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8092A3",
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    back: {
        padding: 16,
        marginRight: 16,
        marginLeft: -10,
    },
});
