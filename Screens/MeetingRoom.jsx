import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function MeetingRoom() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Room Id"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.startMeetingButton} onPress={() => {}}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  startMeetingContainer: {},
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,
  },
});
