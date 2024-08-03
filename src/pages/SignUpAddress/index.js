import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Verified } from "../../assets";
import { Button, Gap, Header, Select, TextInput } from "../../components";
import { showMessage, useForm } from "../../utils";
import Axios from "axios";

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: "",
        address: "",
        houseNumber: "",
        city: "Jakarta",
    });

    const { registerReducer, photoReducer } = useSelector((state) => state);
    const dispatch = useDispatch();

    const onSubmit = () => {
        const data = {
            ...form,
            ...registerReducer,
        };
        console.log("data Register: ", data);
        dispatch({ type: "SET_LOADING", value: true });
        Axios.post(
            "https://foodmarketapi.danilchandra.my.id/api/register",
            data
        )
            .then((res) => {
                console.log("data success:", res.data);
                if (photoReducer.isUploadPhoto) {
                    const photoForUpload = new FormData();
                    photoForUpload.append("file", photoReducer);

                    console.log(
                        `TOKEN RAHASIA ${res.data.data.token_type} ${res.data.data.access_token}`
                    );
                    Axios.post(
                        "https://foodmarketapi.danilchandra.my.id/api/user/photo",
                        photoForUpload,
                        {
                            headers: {
                                Authorization: `${res.data.data.token_type} ${res.data.data.access_token})`,
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    )
                        .then((resUpload) => {
                            console.log("Success upload", resUpload);
                        })
                        .catch((err) => {
                            console.log("Upload photo gagal");
                        });
                }
                dispatch({ type: "SET_LOADING", value: false });
                showMessage("Register Success", "success");
                navigation.replace("SuccessSignUp");
            })
            .catch((err) => {
                dispatch({ type: "SET_LOADING", value: false });
                showMessage(err?.response?.data?.message);
            });
        //navigation.replace("SuccessSignUp");
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
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
                    value={form.phoneNumber}
                    onChangeText={(value) => setForm("phoneNumber", value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Address"
                    placeholder="Type your address"
                    value={form.address}
                    onChangeText={(value) => setForm("address", value)}
                />
                <Gap height={16} />
                <TextInput
                    label="House Number"
                    placeholder="Type your house number"
                    value={form.houseNumber}
                    onChangeText={(value) => setForm("houseNumber", value)}
                />
                <Gap height={16} />
                <Select
                    label="City"
                    value={form.city}
                    onSelectChange={(value) => setForm("city", value)}
                />
                <View style={styles.statement}>
                    <Image source={Verified} style={styles.icon} />
                    <Text style={styles.textStatement}>
                        We will protect your data to prevent security risks.
                    </Text>
                </View>
                <Gap height={24} />
                <Button text="Sign Up Now" onPress={onSubmit} />
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
