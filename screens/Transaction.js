import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Transaction() {
    return ( 
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/doanhthu.jpg')} />
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    img: {
      width: 500,
      height: 320,
      marginBottom: 350,
    },
    txt:{
      fontWeight:'bold',
      fontSize:20,
      marginBottom:10,
      color:'#000',
    }
  });

export default Transaction;