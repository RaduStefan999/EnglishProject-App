import React from "react";
import { StyleSheet, View, Text } from "react-native";

const aboutScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        The "English By Quiz" mobile application was developed by the following
        students:
      </Text>
      <Text style={styles.text}>Godovaniuc Victoria</Text>
      <Text style={styles.text}>Pricopi Bianca-Nicoleta</Text>
      <Text style={styles.text}>Mihalache Radu-Stefan</Text>
      <Text style={styles.text}>
        Under the coordonation of Teacher Mrs Cehan
      </Text>
    </View>
  );
};

export default aboutScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9C4B57",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});
