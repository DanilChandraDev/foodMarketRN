import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import ContentTab from "../ContentTab";

const Tab = createMaterialTopTabNavigator();

const SecondRoute = () => <ContentTab />;
const SeconddRoute = () => <ContentTab />;

const HomeTabSection = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "Poppins-Medium",
                },

                tabBarActiveTintColor: "#020202",
                tabBarInactiveTintColor: "#8D92A3",
                tabBarItemStyle: { width: "auto" },
                tabBarStyle: {
                    backgroundColor: "white",
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomColor: "#F2F2F2",
                    borderBottomWidth: 1,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#020202",
                    height: 3,
                    width: 0.2,
                },
            }}
        >
            <Tab.Screen name="New Taste" component={ContentTab} />
            <Tab.Screen name="Popular" component={SecondRoute} />
            <Tab.Screen name="Recomended" component={SeconddRoute} />
        </Tab.Navigator>
    );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
