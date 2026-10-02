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

    <TextInput
      value={name}
      onChangeText={setName}
      placeholder="Full name"
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
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  tagline: {
    fontSize: 16,
    color: "#a1a1a1"
  }
});