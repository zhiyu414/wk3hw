import React from "react";
import { View ,StyleSheet, Image} from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.headerStyle}>
        <Image style={styles.imgstyle} source={require("../imgs/img_search.png") }/>
      </View>
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 56,
  },
  imgstyle:{
    height:18,
    width:18,
    marginRight:20,
  }
});
export default AlbumScreen;
