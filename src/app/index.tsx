import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Dayo</Text>
    <Text style={styles.tagline}>Show up everyday.</Text>

    <TextInput style={styles.input}
      value={name}
      onChangeText={setName}
      placeholder="Tobi Ade"
    />

    <TextInput style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="tobi@example.com"
    />

    <TextInput style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="********"
      secureTextEntry={true}
    />

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 24,
    alignItems: "stretch"
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "sans-serifs",

  },
  tagline: {
    fontSize: 16,
    color: "#a1a1a1",
    marginBottom: 32,

  },
  input: {
    backgroundColor: "#111111",
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#333333",
    padding: 13,
    marginBottom: 30,
    borderRadius: 12,






  }


});