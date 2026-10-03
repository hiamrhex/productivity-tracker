import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Pressable,} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Signup() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
  <View style={styles.container}>
    <MaterialCommunityIcons name="fire" size={48} color="#ffffff" />
    <Text style={styles.title}>Streakable</Text>
    <Text style={styles.tagline}>Show up everyday.</Text>
    
    <View style={styles.card}>
      <Text style={styles.label}>Full name</Text>
      <TextInput style={styles.input}
        placeholderTextColor="#555555"
        value={name}
        onChangeText={setName}
        placeholder="Tobi Ade"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} 
        placeholderTextColor="#555555"
        value={email}
        onChangeText={setEmail}
        placeholder="tobi@example.com"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input}
        placeholderTextColor="#555555"
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry={true}
      />

      <Pressable onPress={() => {}} style={styles.button}>
        <Text>Continue</Text>
      </Pressable>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    paddingTop: 100,
    padding: 24,
    alignItems: "center",
    
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Geist",
    textAlign: "center",

  },
  tagline: {
    fontSize: 16,
    color: "#a1a1a1",
    marginBottom: 32,
    textAlign: "center",

  },
  input: {
    backgroundColor: "#111111",
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#333333",
    padding: 11,
    marginBottom: 20,
    borderRadius: 12,


  },
  button: {
    backgroundColor: "#ffffff",
    padding: 10,
    justifyContent: "flex-end",
    borderRadius: 25,
    alignItems: "center",
    fontWeight: "bold",
    color: "#000000",
    width: "100%",


  },
  card: {
    borderColor: "#222222",
    backgroundColor:"#000000",
    borderRadius: 20,
    padding: 20,
    marginTop: 0,
    borderCurve: "circular",
    borderWidth: 1,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    width: "85%",

  },
  label: {
    color: "#ffffff",
    padding: 10,
    fontWeight: "bold",
  }


});