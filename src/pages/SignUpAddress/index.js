import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, TextInput, Gap, Button, Select } from "../../components";

const SignUpAddress = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Address"
                subTitle="Make sure it's validate"
                onBack={() => {}}
            />

            <View style={styles.container}>
                <TextInput
                    label="Phone Number"
                    placeholder="Type your phone number"
                />
                <Gap height={16} />
                <TextInput label="Address" placeholder="Type your address" />
                <Gap height={16} />
                <TextInput
                    label="House Number"
                    placeholder="Type your house number"
                />
                <Gap height={16} />
                <Select label="City" />
                <Gap height={24} />
                <Button
                    text="Sign Up Now"
                    onPress={() => {
                        navigation.replace("SuccessSignUp");
                    }}
                />
                <Gap height={12} />
            </View>
        </View>
    );
};

export default SignUpAddress;

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
});
