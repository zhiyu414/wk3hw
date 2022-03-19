import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
  return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.cardSectionStyle]}>
          
        </View>
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
            <Text>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 200,
    width: 140
  }
});

export default AlbumDetail;
