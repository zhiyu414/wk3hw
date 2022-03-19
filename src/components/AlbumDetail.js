import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
  return (
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable 
            onPress={() => navigation.navigate('Detail', album)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
          </Pressable>
          <View style={styles.headerContentStyle}>
            <Text style={styles.titleStyle}>{album.title}</Text>
            <Text style={styles.bookStyle}>{album.artist}</Text>
          </View>
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop:16,
    
  },
  cardContainerStyle: {
    marginLeft: 20,
    // marginRight: 5,
    marginTop: 8,
  },
  cardSectionStyle: {
    // paddingRight: 8,
    // paddingBottom:16,
    // borderWidth:6,
    // borderColor:"#000"
    // backgroundColor: "#fff",
    // borderColor: "#fff",
    // borderBottomWidth: 1
  },
  imageStyle: {
    height: 200,
    width: 140
  },
  titleStyle:{
    fontSize:16,
    fontWeight:"bold",
    fontFamily:"Roboto"
  },
  bookStyle:{
    fontSize:12,
    color:"#666666",
    marginTop:8,
    fontFamily:"Roboto",
    fontWeight:"800",
  }
});

export default AlbumDetail;
