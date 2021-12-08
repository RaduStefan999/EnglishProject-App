import React from "react";
import { StyleSheet, Text, ScrollView, Linking } from "react-native";
import { Divider, Button } from "react-native-elements";
import { useStateValue } from "../stateProvider";
import Questions from "../questions.json";
const congratScreen = ({ navigation }) => {
  const [{ user, score }] = useStateValue();
  return (
    <ScrollView contentContainerStyle={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {user}, You've scored {score} points out of{" "}
        {Questions.questions.length}
      </Text>
      <Divider width={100} />
      <Button
        title="About the app"
        color="#f194ff"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      />
    </ScrollView>
  );
};

export default congratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9C4B57",
  },
  congratsText: {
    fontSize: 26,
    textAlign: "center",
  },
});
