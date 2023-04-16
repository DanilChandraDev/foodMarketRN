import React from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from "../../assets";
import { Gap } from "../../components";
import {
    FoodCard,
    HomeProfile,
    HomeTabSection,
} from "../../components/molecules";

const Home = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <HomeProfile />
            </View>
            <View>
                <ScrollView horizontal>
                    <View style={styles.foodCardContainer}>
                        <Gap width={24} />
                        <FoodCard
                            image={FoodDummy1}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                        <FoodCard
                            image={FoodDummy2}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                        <FoodCard
                            image={FoodDummy3}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                        <FoodCard
                            image={FoodDummy4}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },

    foodCardContainer: {
        flexDirection: "row",
        marginVertical: 24,
    },
    tabContainer: {
        height: 700,
    },
});
