import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Button, Gap } from "../../atoms";
import { IlEmptyOrder } from "../../../assets";
import { useNavigation } from "@react-navigation/native";

const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <StatusBar translucent={false} backgroundColor="#FFC700" />
            <IlEmptyOrder />
            <Gap height={30} />
            <Text style={styles.title}>Ouch Hungry</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Just stay at home while we are</Text>
            <Text style={styles.subTitle}>preparing your best foods</Text>
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

export default EmptyOrder;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
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
