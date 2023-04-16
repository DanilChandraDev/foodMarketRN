import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, TextInput, Gap, Button, Select } from "../../components";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Verified } from "../../assets";

const SignUpAddress = ({ navigation }) => {
    return (
        <ScrollView style={styles.page}>
            <StatusBar translucent={false} style="light" />
            <Header
                title="Address"
                subTitle="We want to make sure the pizza goes to the right hands."
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

                <View style={styles.statement}>
                    <Image source={Verified} style={styles.icon} />
                    <Text style={styles.textStatement}>
                        We will protect your data to prevent security risks.
                    </Text>
                </View>
                <Gap height={24} />
                <Button
                    text="Sign Up Now"
                    onPress={() => {
                        navigation.replace("SuccessSignUp");
                    }}
                />
                <Gap height={12} />
                <Text style={styles.tnc}>
                    By registering I agree to the {""}
                    <Text
                        style={{
                            color: "#1A98D6",
                            textDecorationLine: "underline",
                        }}
                    >
                        terms and conditions
                    </Text>{" "}
                    of Winged Eats.
                </Text>
            </View>
        </ScrollView>
    );
};

export default SignUpAddress;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
    statement: {
        flexDirection: "row",
        marginTop: 22,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textStatement: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    tnc: {
        textAlign: "center",
    },
});
