import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, TextInput, Gap, Button } from "../../components";

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Sign Up"
                subTitle="Register and eat"
                onBack={() => {}}
            />

            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
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
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        height: "100%",
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
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
        marginTop: 16,
        marginBottom: 16,
    },
});
