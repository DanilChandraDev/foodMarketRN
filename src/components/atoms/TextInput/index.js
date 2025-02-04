import { StyleSheet, Text, View, TextInput as TextInputRN } from "react-native";
import React from "react";

const TextInput = ({ label, placeholder, secure = false, ...restProps }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN
                secureTextEntry={secure}
                style={styles.input}
                placeholder={placeholder}
                {...restProps}
            />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#020202",
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#020202",
        borderRadius: 8,
        padding: 10,
    },
});
