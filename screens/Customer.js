import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { useMyContextController } from "../provider";
import firestore from "@react-native-firebase/firestore";

function Customer() {
  const [{ userLogin }] = useMyContextController();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;

        if (currentUser) {
          const userDocument = await firestore().collection("USER").doc(currentUser.email).get();

          if (userDocument.exists) {
            setUserData(userDocument.data());
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  const { Email, phoneNumber, role, name } = userData;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/khachhang.jpg')} />
      <Text style={styles.label}>Customer Information:</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  txt:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:10,
    color:'#000',
  }
});

export default Customer;


