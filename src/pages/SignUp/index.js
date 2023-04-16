import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Verified } from "../../assets";
import { BackgroundSignInUp, Button, Gap, TextInput } from "../../components";
import { Image } from "react-native";

const SignUp = ({ navigation }) => {
    return (
        <ScrollView>
            <BackgroundSignInUp label="REGISTER" />
            <View style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <View style={styles.borderPhoto}>
                            <View style={styles.photoContainer}>
                                <Text style={styles.addPhoto}> add Photo</Text>
                            </View>
                        </View>
                    </View>
                    <TextInput
                        label="Full Name"
                        placeholder="Type your full name"
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Email Address"
                        placeholder="Type your email address"
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Password"
                        placeholder="Type your password"
                        secure={true}
                    />

                    <Gap height={24} />
                    <Button
                        text="Continue"
                        onPress={() => navigation.navigate("SignUpAddress")}
                    />
                    <Gap height={12} />
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: -60,
        borderRadius: 40,
        flex: 1,
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8D92A3",
        textAlign: "center",
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
        marginBottom: 16,
    },
});
