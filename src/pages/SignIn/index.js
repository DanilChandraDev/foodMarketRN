import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BackgroundSignInUp, Button, Gap, TextInput } from "../../components";
import { useForm } from "../../utils";

const SignIn = ({ navigation }) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [form, setForm] = useForm({
        email: "",
        password: "",
    });

    const onSubmit = () => {
        console.log("form", form);
    };

    return (
        <ScrollView style={styles.page}>
            <BackgroundSignInUp label="LOGIN" />
            <View style={styles.container}>
                <TextInput
                    label="Email Address"
                    placeholder="Type your email address"
                    value={form.email}
                    onChangeText={(value) => setForm("email", value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Password"
                    placeholder="Type your password"
                    secure={true}
                    value={form.password}
                    onChangeText={(value) => setForm("password", value)}
                />
                <Gap height={24} />
                <Button text="Sign In" onPress={onSubmit} />
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
