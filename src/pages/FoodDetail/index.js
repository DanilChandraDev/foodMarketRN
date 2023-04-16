import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { FoodDummy6, IcBack, IcBackWhite } from "../../assets";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { Counter, Rating } from "../../components/molecules";
import { Button } from "../../components/atoms";

const FoodDetail = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ImageBackground source={FoodDummy6} style={styles.cover}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.back}>
                        <IcBack />
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Cherry Healthy</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.desc}>
                        Makanan khas Bandung yang cukup sering dipesan oleh anak
                        muda dengan pola makan yang cukup tinggi dengan
                        mengutamakan diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Text style={styles.desc}>
                        Seledri, telur, blueberry, madu
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labeltotal}>Total Price</Text>
                        <Text style={styles.priceTotal}>IDR 23.289.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            text="Order Now"
                            onPress={() => navigation.navigate("OrderSummary")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FoodDetail;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 24,
    },
    back: {
        marginTop: 20,
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor: "white",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1,
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#020202",
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    desc: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#8D92A3",
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#020202",
        marginBottom: 4,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
    },
    button: {
        width: 140,
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: "Poppins-Regular",
        color: "#8D92A3",
    },
    priceTotal: {
        fontSize: 18,
        ontFamily: "Poppins-Regular",
        color: "#020202",
    },
});
