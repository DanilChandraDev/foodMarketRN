import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import FlashMessage from "react-native-flash-message";
import { Loading } from "./components";

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    "[Reanimated] Mismatch between JavaScript part and native part of Reanimated (2.17.0 vs. 2.14.4)",
]);

const MainApp = () => {
    const { isLoading } = useSelector((state) => state.globalReducer);
    return (
        <NavigationContainer>
            <Router />
            <FlashMessage position="top" />
            {isLoading && <Loading />}
        </NavigationContainer>
    );
};

export default function App() {
    const [fontsLoaded] = useFonts({
        "Poppins-Light": require("./../assets/Poppins-Light.ttf"),
        "Poppins-Regular": require("./../assets/Poppins-Regular.ttf"),
        "Poppins-Medium": require("./../assets/Poppins-Medium.ttf"),
    });

    return (
        <SafeAreaProvider>
            <StatusBar
                translucent={false}
                backgroundColor="#1A98D6"
                style="light"
            />
            <Provider store={store}>
                <MainApp />
            </Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({});
