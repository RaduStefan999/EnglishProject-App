/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Option from "../components/Option";
import Questions from "../questions.json";

export default function quizScreen({ route, navigation }) {
  const { index } = route.params;
  return (
    <ScrollView style={styles.main}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FF9C4B57",
  },
  questionNo: {
    color: "red",
    fontSize: 25,
    margin: 20,
  },
  Question: {
    fontSize: 30,
    margin: 25,
  },
  nextButton: {
    height: 50,
    width: "20%",
    backgroundColor: "#3700B3",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: "white",
    fontWeight: "900",
  },
});
