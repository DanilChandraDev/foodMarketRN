import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemListFood from "../ItemListFood";
import {
    FoodDummy1,
    FoodDummy2,
    FoodDummy3,
    FoodDummy4,
} from "../../../assets";
import { Gap } from "../../atoms";
import { useNavigation } from "@react-navigation/native";

const ContentTab = () => {
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
                rating={3}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy2}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy3}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy4}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy1}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy2}
                onPress={() => navigation.navigate("FoodDetail")}
            />
            <ItemListFood
                image={FoodDummy3}
                onPress={() => navigation.navigate("FoodDetail")}
            />

            <Gap height={60} />
        </View>
    );
};

export default ContentTab;

const styles = StyleSheet.create({});
