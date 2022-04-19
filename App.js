import { View, StyleSheet } from "react-native";
import Home from "./Screens/Home";
import Navigation from "./Navigation";
export default function App() {
  return (
    <View style={styles.cont}>
      <Navigation />
    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
