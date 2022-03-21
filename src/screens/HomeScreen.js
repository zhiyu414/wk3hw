import React from "react";
import { View ,StyleSheet, Image, TouchableOpacity ,Alert} from "react-native";
import BookList from "../components/BookList";
import bookData from "../json/book_section.json";

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={() => Alert.alert("search")}>
        <Image style={styles.imgstyle} source={require("../imgs/img_search.png") }/>
      </TouchableOpacity>
      </View>
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <BookList 
        list={bookData.albumList}
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
export default HomeScreen;
