import React from 'react';
import { StyleSheet, ScrollView,  View, Image } from 'react-native';

const DetailScreen = ({ route }) => {
  const { 
    image
  } = route.params;
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
         
      </View>
      <View style={styles.cardContainerStyle}>
          
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 200,
    width: null
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  discountStyle: {
    color: '#6099E4',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  priceStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 20,
  }
});

export default DetailScreen;
