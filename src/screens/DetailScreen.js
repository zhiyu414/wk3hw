import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text, Button ,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const _onPressButton=() =>{
  return(
    <MaterialCommunityIcons  name="bookmark" color={"#0062ee"} size={30} />
  )
}
const DetailScreen = ({ route ,navigation}) => {
  const { 
    title,
    artist,
    image,
    discription
  } = route.params;
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
            onPress={_onPressButton}
          >
            <Image
              style={{marginRight:22,marginVertical:22}}
              source={require("../imgs/wish.png")}
            />
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
            <Text style={styles.fostarstyle}>4.0</Text>
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
  }
});

export default DetailScreen;
