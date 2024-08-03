import { StyleSheet, Text, View, Image } from "react-native";
import { IcDown, ProfileDummy } from "../../../assets";

import React from "react";
import { TouchableOpacity } from "react-native";

const HomeProfile = () => {
    return (
        <View style={styles.profileContainer}>
            <TouchableOpacity activeOpacity={0.6}>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.label}>Your Location</Text>
                        <Image
                            source={IcDown}
                            style={{ width: 12, height: 12, marginLeft: 8 }}
                        />
                    </View>
                    <Text style={styles.location}>Home</Text>
                </View>
            </TouchableOpacity>

            <Image source={ProfileDummy} style={styles.profile} />
        </View>
    );
};

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
    },
    location: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: "#020202",
    },
    label: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#FFFFFF",
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
});
