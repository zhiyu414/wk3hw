import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Image style={styles.imgstyle1} source={require("../imgs/img_list.png") }/>
        <Image style={styles.imgstyle2} source={require("../imgs/img_search.png") }/>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: "#fff",
    alignItems: "center",
    height: 56,
  },
  imgstyle1:{
    marginLeft:19,
    height:12,
    width:18,
  },
  imgstyle2:{
    marginRight:19.51,
    height:18,
    width:18,
  },
});

export default Header;
