import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const HotAlbumDetail = props => {
   let { album } = props;
   return (
     <View style={{flexDirection: 'column'}}>
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
  cardContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#222",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default HotAlbumDetail;
