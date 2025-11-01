import { useState } from "react";
import { Pressable, ToastAndroid, View } from "react-native";
import {
  Appbar,
  Button,
  Checkbox,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");
  const [text1Checked, setText1Checked] = useState(true);
  const [text2Checked, setText2Checked] = useState(false);

  const addEntry = async () => {
    const data = {
      weight: text,
      [process.env.EXPO_PUBLIC_TEXT_1]: text1Checked,
      [process.env.EXPO_PUBLIC_TEXT_2]: text2Checked,
    };

    if (!process.env.EXPO_PUBLIC_API_ENDPOINT) {
      ToastAndroid.show("Public Endpoint not Set", ToastAndroid.SHORT);
    }
  };

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Weight Tracker" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          padding: 20,
          paddingTop: 150,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Bitcount",
          }}
        >
          Welcome! Log Your Weight
        </Text>

        <TextInput
          label="Enter your weight"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          numberOfLines={1}
          keyboardType="numeric"
          style={{
            width: "100%",
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            }}
            onPress={() => {
              setText1Checked(!text1Checked);
            }}
          >
            <Checkbox
              status={text1Checked ? "checked" : "unchecked"}
              onPress={() => {
                setText1Checked(!text1Checked);
              }}
            />
            <Text>{process.env.EXPO_PUBLIC_TEXT_1}</Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            }}
            onPress={() => {
              setText2Checked(!text2Checked);
            }}
          >
            <Checkbox status={text2Checked ? "checked" : "unchecked"} />
            <Text>{process.env.EXPO_PUBLIC_TEXT_2}</Text>
          </Pressable>
        </View>

        <Button
          icon="plus-circle-outline"
          mode="contained"
          onPress={addEntry}
          style={{
            marginTop: 10,
            width: "100%",
          }}
          disabled={text === "" ? true : false}
        >
          Add Entry
        </Button>
        <Button
          icon="chart-line"
          mode="contained"
          onPress={() => console.log(text)}
          style={{
            marginTop: 10,
            width: "100%",
            backgroundColor: "#4b3f72",
          }}
        >
          View Full report
        </Button>
      </View>
    </PaperProvider>
  );
}
