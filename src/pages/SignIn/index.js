import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    BackgroundSignInUp,
    Button,
    Gap,
    Header,
    TextInput,
} from "../../components";
import { ScrollView } from "react-native";

const SignIn = ({ navigation }) => {
    return (
        <ScrollView style={styles.page}>
            <BackgroundSignInUp label="LOGIN" />
            <View style={styles.container}>
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
                <Button text="Sign In" />
                <Gap height={12} />
                <Button
                    text="Create New Account"
                    color="#8D92A3"
                    textColor="white"
                    onPress={() => navigation.navigate("SignUp")}
                />
            </View>
        </ScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        height: "100%",
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: -60,
        flex: 1,
        borderRadius: 40,
    },
});
