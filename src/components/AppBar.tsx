import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>MusicAlbums 📖</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "blue",
    padding: 10,
  },
});
