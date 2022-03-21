import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import Star from "react-native-star-view";

const BookDetail = ({ album, navigation }) => {
   
    return (
    
      <View style={styles.cardContainerStyle}>
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
            {album.star!=0? <Star score={album.star} style={styles.starStyle}/>:null}
            <Text style={styles.titleStyle}>{album.title}</Text>
            <Text style={styles.bookStyle}>{album.artist}</Text>
          </View>
          
      </View>
    )
  
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop:16,
    
  },
  cardContainerStyle: {   
    marginLeft: 20,
    marginTop: 8,
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
  },
  starStyle:{
    width:86,
    height:17,
    color:"yellow",
    marginBottom:8.5
  }
});

export default BookDetail;
