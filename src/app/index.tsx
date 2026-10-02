import { View, Text, StyleSheet } from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dayo</Text>
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
});