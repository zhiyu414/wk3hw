import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const AlbumDetail = props => {
   let { album } = props;
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.cardSectionStyle]}>
          <View style={styles.headerContentStyle}>
            <Text>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    marginRight: 5,
    marginTop: 10,
    
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    
  },
  imageStyle: {
    height: 300,
    width: null
  },
});

export default AlbumDetail;
