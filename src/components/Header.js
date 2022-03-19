import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Image style={styles.imgstyle} source={require("../imgs/img_search.png") }/>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
  },
  imgstyle:{
    height:18,
    width:18,
    flexDirection:"row",
    justifyContent: "flex-end",
  }
});

export default Header;
