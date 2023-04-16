import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Rating from "../Rating";

const ItemListFood = ({
    image,
    onPress,
    items,
    rating,
    price,
    type,
    totalOrder,
    name,
    date,
    status,
}) => {
    const renderContent = () => {
        switch (type) {
            case "product":
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <Rating rating={rating} />
                    </>
                );

            case "orderSummary":
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                );
            case "inProgress":
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>
                                {items} items. IDR{totalOrder}
                            </Text>
                        </View>
                    </>
                );
            case "pastOrders":
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>
                                {items} items. IDR{totalOrder}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                );
            default:
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>IDR 289.000</Text>
                        </View>
                        <Rating />
                    </>
                );
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            delayPressIn={50}
        >
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
            </View>
        </TouchableOpacity>
    );
};

export default ItemListFood;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 8,
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: "hidden",
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    title: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#020202",
    },
    price: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        color: "#8D92A3",
    },
    items: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        color: "#8D92A3",
    },
    date: {
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        color: "#8D92A3",
    },
    status: {
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        color: "#D9435E",
    },
});
