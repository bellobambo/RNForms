import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        placeholderTextColor="#999" // Adjusted placeholder text color
        autoCorrect={false}
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        placeholderTextColor="#999" // Adjusted placeholder text color
        multiline
      />

      <Text style={styles.text}>My Name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prevState) => !prevState)} // Fixed state toggle logic
          trackColor={{ false: "#767577", true: "#81b0ff" }} // Set custom colors for the switch
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }), // Ensures proper status bar height on both platforms
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc", // Added border color for better visibility
    borderRadius: 8, // Rounded corners for better UX
  },
  text: {
    fontSize: 20, // Reduced font size for better readability
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20, // Added margin for better spacing
  },
});
