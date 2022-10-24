import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
const images = require("../assets/images/avatar.png");
import { COLORS, FONTS, SIZES, icons } from "../constants/";
import {Card} from 'react-native-shadow-cards';
// import BottemSheet from "./BottemSheet";

const LawyersList = () => {
  const Data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
   
  ];

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding * 2,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            Settings
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.lightGray,
            }}
          >
            <Image
              source={icons.scan}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (

    <View style={{ flex: 1, paddingHorizontal: SIZES.padding * 1 }}>
      <View>{renderHeader()}</View>
      <FlatList
        data={Data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(element) => {
          return (
            <Card style={{padding: 10,margin:10, }}>
            
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
               
                }}
              >
                <Image
                  source={images}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                />
                <View>
                  <Text style={{ fontSize: SIZES.h3, paddingLeft: 10 }}>
                    {element.item.name}
                  </Text>
                  <Text style={{ paddingLeft: 10 }}>{element.item.email}</Text>
                  <Text style={{ paddingLeft: 10 }}>{element.item.email}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ paddingLeft: 10 }}>{element.item.email}</Text>
                <Text style={{ paddingLeft: 10 }}>{element.item.email}</Text>
        
              </View>
              <View>
              <Text style={{ padding: 10 }}>{element.item.company.catchPhrase}{element.item.company.catchPhrase}{element.item.company.catchPhrase}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  title="View Details"
                  // onPress={() => Alert.alert("Left button pressed")}
                />
                <Button
                  title="Book Appointment"
                  // onPress={() => Alert.alert("Right button pressed")}
                />
              </View>
          
            </Card>
          );
        }}
      />
    
    </View>
 
  );
};

export default LawyersList;
