import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ItemListFood from "../ItemListFood";
import { FoodDummy1 } from "../../../assets";

const PastOrder = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                paddingTop: 8,
                backgroundColor: "white",
                paddingHorizontal: 24,
            }}
        >
            <ItemListFood
                image={FoodDummy1}
                inProgress={true}
                items={3}
                totalOrder="2.000.000"
                onPress={() => navigation.navigate("FoodDetail")}
                type="pastOrders"
                name="Soup Bumil"
                date="Jun 12, 14:00"
                status="Canceled"
            />
        </View>
    );
};

export default PastOrder;

const styles = StyleSheet.create({});
