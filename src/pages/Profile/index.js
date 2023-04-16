import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ProfileDummy } from "../../assets";
import { Gap, ProfileTabSection } from "../../components";

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.photo}>
                <View style={styles.borderPhoto}>
                    <Image
                        source={ProfileDummy}
                        style={styles.photoContainer}
                    />
                </View>
            </View>

            <Text style={styles.name}>Danil Chandra Saputra</Text>
            <Text style={styles.email}>danil.chandra15@gmail.com</Text>
            <Gap height={24} />
            <ProfileTabSection />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: "#F0F0F0",
        padding: 24,
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: "#8D92A3",
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
    },
    photo: {
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: "#020202",
        textAlign: "center",
    },
    email: {
        fontSize: 13,
        fontFamily: "Poppins-Light",
        color: "#8D92A3",
        textAlign: "center",
    },
});
