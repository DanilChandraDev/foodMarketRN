import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContentTab from "../ContentTab";
import InProgress from "../InProgress";
import PastOrder from "../PastOrder";

const Tab = createMaterialTopTabNavigator();

const SecondRoute = () => <ContentTab />;

const OrderTabSection = () => {
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
            <Tab.Screen name="In Progress" component={InProgress} />
            <Tab.Screen name="Past Orders" component={PastOrder} />
        </Tab.Navigator>
    );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
