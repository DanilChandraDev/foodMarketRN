import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import {
    SignIn,
    SplashScreen,
    SignUp,
    SignUpAddress,
    SuccessSignUp,
    Home,
    Profile,
    Order,
    FoodDetail,
    OrderSummary,
    OrderDetail,
} from "../pages";
import { BottomNavigator } from "../components";
import OrderSuccess from "../pages/OrderSuccess";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{ swipeEnabled: false }}
            tabBar={(props) => <BottomNavigator {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpAddress"
                component={SignUpAddress}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SuccessSignUp"
                component={SuccessSignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderSummary"
                component={OrderSummary}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderSuccess"
                component={OrderSuccess}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderDetail"
                component={OrderDetail}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;
