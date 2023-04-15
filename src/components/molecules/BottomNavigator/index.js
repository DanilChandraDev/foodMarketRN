import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
    IcHomeOff,
    IcHomeOn,
    IcOrderOff,
    IcOrderOn,
    IcProfileOff,
    IcProfileOn,
} from "../../../assets";

const Icon = ({ label, focus }) => {
    switch (label) {
        case "Home":
            return focus ? (
                <View style={styles.focused}>
                    <IcHomeOn />
                    <Text style={styles.title}>{label}</Text>
                </View>
            ) : (
                <IcHomeOff />
            );
        case "Order":
            return focus ? (
                <View style={styles.focused}>
                    <IcOrderOn />
                    <Text style={styles.title}>{label}</Text>
                </View>
            ) : (
                <IcOrderOff />
            );
        case "Profile":
            return focus ? (
                <View style={styles.focused}>
                    <IcProfileOn />
                    <Text style={styles.title}>{label}</Text>
                </View>
            ) : (
                <IcProfileOff />
            );
        default:
            return <IcOrderOn />;
    }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Icon label={label} focus={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "absolute",
        bottom: 16,
        right: 18,
        left: 18,
        backgroundColor: "white",
        paddingTop: 6,
        paddingBottom: 4,
        paddingHorizontal: 40,
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 30,
        elevation: 4,
        shadowColor: "black",
    },
    focused: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 12,
        color: "black",
        fontFamily: "Poppins-Medium",
        marginTop: 3,
    },
});
