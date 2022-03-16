import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const HotAlbumDetail = props => {
   let { album } = props;
   return (
     <View style={styles.containerst}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  containerst:{
    flexDirection: 'column',
  },
  cardContainerStyle: {
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 20,
    width: 140,
  },
  headerTitleStyle: {
    fontSize: 16,
    width:140,
    height:18,
    marginBottom:8,
    marginTop:16,
  },
  headerContentStyle: {
    fontSize: 12,
    color: "#666666",
    width: 140,
    height:14,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    paddingLeft:20,
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default HotAlbumDetail;
