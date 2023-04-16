import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, SignIn } from "./pages";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Router from "./router";
import { Gap } from "./components";

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
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({});
