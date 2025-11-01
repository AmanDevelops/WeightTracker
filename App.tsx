import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";
export default function App() {
  const [text, setText] = useState("");

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Weight Tracker App" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Weight Tracker App!</Text>

        <TextInput
          label="Enter Weight"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          numberOfLines={1}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button
          icon="android"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          Add to Log
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingTop: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Bitcount",
  },
  button: {
    marginTop: 10,
    width: "100%",
  },
  input: {
    width: "100%",
  },
});
