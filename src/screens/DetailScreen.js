import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, Button ,TouchableOpacity} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from "react-native-star-view";
// import { useState } from 'react/cjs/react.production.min';



const DetailScreen = ({ route ,navigation}) => {
  const { 
    title,
    artist,
    image,
    discription,
    star
  } = route.params;
  const [wish,updatewish]=useState(false)
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
      <View >
        <View style={{backgroundColor:"#fff",height:56,flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home', route)}
          >
            <Image
              style={{marginLeft:22,marginVertical:22}}
              source={require("../imgs/right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity  
            onPress={()=>updatewish(!wish)}
          >
            {wish?
              <Image
              style={{marginRight:22,marginVertical:22}}
              source={require("../imgs/wishAfter.png")}
              />:<Image
              style={{marginRight:22,marginVertical:22}}
              source={require("../imgs/wish.png")}
              />
            }
            
          </TouchableOpacity>


        </View>
        <View style={styles.imagecantenerStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: image
            }}
            />
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.detailtitleStyle}>{title}</Text>
          <Text style={styles.detailartistStyle}>{artist}</Text>
          
          <View style={{flexDirection:"row"}}>
            <Star score={star} style={styles.starStyle}/>
            <Text style={styles.fostarstyle}>{star}.0</Text>
            <Text style={styles.fistarstyle}>/5.0</Text>
          </View>
          
          <Text style={styles.detailStyle}>{discription}</Text>
         
        </View>
        <View style={styles.buttonStyle}>
          <Button 
            title="Buy Now for $46.99"
            color="#6200EE"
          /> 
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  imagecantenerStyle:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:8,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 300,
    width: 210,
  },
  detailtitleStyle:{
    fontSize:24,
    fontWeight:"bold",
    marginTop:28,
  },
  detailartistStyle:{
    fontSize:14,
    color:"#666666",
    marginVertical:8,
  },
  detailStyle:{
    color:"black",
    fontSize:14,
    marginHorizontal:20,
    marginTop:16,
    marginBottom:28,
    textAlign: "center",
    lineHeight:24,
  },
  textStyle:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    backgroundColor:"#fff",
    marginHorizontal:85,
    borderRadius:4,
  },
  fostarstyle:{
    fontSize:14,
  },
  fistarstyle:{
    fontSize:14,
    color:"#666666",
  },
  starStyle:{
    width:86,
    height:17,
    color:"yellow",
    marginRight:18
  }
});

export default DetailScreen;
