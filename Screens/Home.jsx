import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, Text } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import MenuButtons from "../Components/MenuButtons";
import ContactMenu from "../Components/ContactMenu";
Header;
function Home({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      {/* <SafeAreaView style={{ height: "100%" }}> */}
      <Text>{JSON.stringify(navigation)}</Text>
      <Header />
      <SearchBar />
      <MenuButtons navigation={navigation} />
      <ContactMenu />
      {/* </SafeAreaView> */}
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

export default Home;
