import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#BBAA95",
        justifyContent: "center",
        alignItems: "center",
        height: 85,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 4,
      },
      textStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color:"#FFFFCC"
      },
});

export default Header;