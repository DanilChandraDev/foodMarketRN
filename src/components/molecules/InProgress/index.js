import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ItemListFood from "../ItemListFood";
import { FoodDummy1 } from "../../../assets";

const InProgress = () => {
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
                onPress={() => navigation.navigate("OrderDetail")}
                type="inProgress"
                name="Soup Bumil"
            />
        </View>
    );
};

export default InProgress;

const styles = StyleSheet.create({});
