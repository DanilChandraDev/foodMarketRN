import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { BackgroundSignInUp, Button, Gap, TextInput } from "../../components";
import { showMessage, useForm } from "../../utils";
import * as ImagePicker from "expo-image-picker";

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: "",
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("form", form);
        dispatch({ type: "SET_REGISTER", value: form });
        navigation.navigate("SignUpAddress");
    };

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.2,
        });

        //console.log(result.assets[0]);
        if (!result.canceled) {
            setImage(result.assets[0].uri);

            const dataImage = {
                uri: result.assets[0].uri,
                type: result.assets[0].type,
                name: `${form.name}-avatar`,
            };
            dispatch({ type: "SET_PHOTO", value: dataImage });
            dispatch({ type: "SET_UPLOAD_STATUS", value: true });
            console.log("Response", dataImage);
        } else {
            alert("You did not select any image.");
        }
    };

    /* const addPhoto = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (response.didCancel || response.error) {
                showMessage("You haven't choose any photo");
            } else {
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }; */

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <BackgroundSignInUp label="REGISTER" />
            <View style={styles.page}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={pickImage}>
                        <View style={styles.photo}>
                            <View style={styles.borderPhoto}>
                                {!image ? (
                                    <View style={styles.photoContainer}>
                                        <Text style={styles.addPhoto}>
                                            {" "}
                                            add Photo
                                        </Text>
                                    </View>
                                ) : (
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.photoImage}
                                    />
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        label="Full Name"
                        placeholder="Type your full name"
                        value={form.name}
                        onChangeText={(value) => setForm("name", value)}
                    />
                    <Gap height={16} />
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
                    <Button text="Continue" onPress={onSubmit} />
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
    photoImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
});
