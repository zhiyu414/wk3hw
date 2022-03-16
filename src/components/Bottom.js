import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

const Bottom = () => {
  return (
      <View style={styles.bottomStyle}>
        <Image style={styles.btstyle1} source={require("../imgs/home.png") }/>
        <Image style={styles.btstyle1} source={require("../imgs/wishlist.png") }/>
        <Image style={styles.btstyle1} source={require("../imgs/mybooks.png") }/>
      </View>
  );
};

const styles = StyleSheet.create({
  bottomStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: "#fff",
    alignItems: "center",
    height: 56,
  }
});

export default Bottom;