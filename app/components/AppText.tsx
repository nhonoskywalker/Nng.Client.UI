import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

function AppText({ children }) {
    return (
        <Text>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;