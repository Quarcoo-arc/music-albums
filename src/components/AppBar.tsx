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
    flex: 1,
    height: 50,
    color: "white",
    backgroundColor: "blue",
    padding: 10,
  },
});
