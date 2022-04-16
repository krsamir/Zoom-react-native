import React from "react";
import { View, Text } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import MenuButtons from "../Components/MenuButtons";
import ContactMenu from "../Components/ContactMenu";
Header;
function Home() {
  return (
    <View style={{ height: "100%" }}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <ContactMenu />
    </View>
  );
}

export default Home;
