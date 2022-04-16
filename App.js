import { View, StatusBar, StyleSheet } from "react-native";
import Home from "./Screens/Home";

export default function App() {
  return (
    <View style={styles.AndroidSafeArea}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    paddingTop: StatusBar.currentHeight,
  },
});
