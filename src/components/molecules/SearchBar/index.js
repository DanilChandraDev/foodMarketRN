import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IcSearch } from "../../../assets";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const SearchBar = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={IcSearch} style={styles.icon} />
                <Text style={styles.title}>What would you like to eat?</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        marginHorizontal: 20,
        borderRadius: 25,
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    title: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
    },
});
