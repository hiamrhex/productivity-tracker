import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { Geist_400Regular, Geist_700Bold } from "@expo-google-fonts/geist";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const [fontsLoaded] = useFonts({ Geist_400Regular, Geist_700Bold });
  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.logoRow}>
        <MaterialCommunityIcons name="fire" size={30} color="#ffffff" />
        <Text style={styles.title}>Streakable</Text>
      </View>

      <View>
        <Text style={styles.tagline}>
          {isLogin ? "Welcome back." : "Day 1."}
        </Text>
        <Text style={styles.smallTagline}>
          {isLogin ? "Pick up your streak" : "Your streak starts now"}
        </Text>
      </View>

      <View style={styles.card}>
        {!isLogin && (
          <>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#555555"
              value={name}
              onChangeText={setName}
              placeholder="Tobi Ade"
            />
          </>
        )}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#555555"
          value={email}
          onChangeText={setEmail}
          placeholder="tobi@example.com"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#555555"
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          secureTextEntry={true}
        />

        {isLogin && (
          <Pressable onPress={() => {}}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </Pressable>
        )}

        <Pressable onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>
            {isLogin ? "Log in" : "Continue"}
          </Text>
        </Pressable>

        {isLogin && (
          <>
            <Text style={styles.or}>or</Text>
            <Pressable onPress={() => {}} style={styles.googleButton}>
              <MaterialCommunityIcons name="google" size={18} color="#ffffff" />
              <Text style={styles.googleText}>Continue with Google</Text>
            </Pressable>
          </>
        )}

        <Pressable onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </Text>
        </Pressable>
        {!isLogin && (
          <Text style={styles.legal}>
            By continuing, you agree to our{" "}
            <Text style={styles.legalLink} onPress={() => {}}>
              Terms
            </Text>{" "}
            and{" "}
            <Text style={styles.legalLink} onPress={() => {}}>
              Privacy Policy
            </Text>
            .
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: "Antropic-sans",
    color: "#ffffff",
    marginLeft: 6,
  },
  tagline: {
    fontSize: 44,
    fontFamily: "Antropic-sans",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
  },
  smallTagline: {
    fontSize: 16,
    fontFamily: "Antropic-sans",
    color: "#a1a1a1",
    marginBottom: 32,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#222222",
    backgroundColor: "#000000",
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  label: {
    color: "#ffffff",
    fontFamily: "Antropic-sans",
    paddingVertical: 8,
  },
  input: {
    backgroundColor: "#111111",
    color: "#ffffff",
    fontFamily: "Antropic-sans",
    borderWidth: 1,
    borderColor: "#333333",
    padding: 11,
    marginBottom: 16,
    borderRadius: 12,
  },
  forgot: {
    color: "#a1a1a1",
    fontFamily: "Antropic-sans",
    textAlign: "right",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 25,
    marginTop: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontFamily: "Antropic-sans",
    color: "#000000",
  },
  or: {
    color: "#555555",
    fontFamily: "Antropic-sans",
    textAlign: "center",
    marginVertical: 12,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "#333333",
    padding: 12,
    borderRadius: 25,
  },
  googleText: {
    color: "#ffffff",
    fontFamily: "Antropic-sans",
  },
  switchText: {
    color: "#a1a1a1",
    fontFamily: "Antropic-sans",
    textAlign: "center",
    marginTop: 20,
  },
  legal: {
    color: "#666666",
    fontFamily: "Antropic-sans",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  legalLink: {
    color: "#a1a1a1",
    textDecorationLine: "underline",
    fontFamily: "Antropic-sans",
  },
});
