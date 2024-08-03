import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IceCream } from "../../assets/Ilustration";
import { Button, Gap } from "../../components";

const SuccessSignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <IceCream />
            <Gap height={30} />
            <Text style={styles.title}>You All Set Up !</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>All food now on your phone</Text>
            <Text style={styles.subTitle}>
                Express Eats, Lightning-Fast Delivery!
            </Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button
                    text="Find Foods"
                    onPress={() => {
                        navigation.replace("MainApp");
                    }}
                />
            </View>
        </View>
    );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: { fontSize: 20, fontFamily: "Poppins-Regular", color: "#020202" },
    subTitle: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8D92A3",
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 80,
    },
});
