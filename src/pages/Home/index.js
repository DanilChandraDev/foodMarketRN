import React from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import {
    Carousel1,
    FoodDummy1,
    FoodDummy2,
    FoodDummy3,
    FoodDummy4,
} from "../../assets";
import { Gap } from "../../components";
import {
    CarouselPromo,
    FoodCard,
    HomeProfile,
    HomeTabSection,
    IconFoodSection,
    SearchBar,
} from "../../components/molecules";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Home = ({ navigation }) => {
    const { scrolled } = false;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={this.handleScroll}
        >
            <StatusBar
                translucent
                style="light"
                backgroundColor={scrolled ? "white" : "transparent"}
            />
            <View style={styles.page}>
                <Gap height={25} />
                <HomeProfile />
                <SearchBar />
                <Gap height={25} />
            </View>

            <View>
                <CarouselPromo />
                <IconFoodSection />
                <Gap height={20} />
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
        backgroundColor: "#1A98D6",
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
