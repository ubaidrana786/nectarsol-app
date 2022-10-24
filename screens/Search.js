import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";

const Search = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={goToHome}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.black,
            ...FONTS.h4,
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    );
  }


  function renderSearchBar() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 1,
          marginHorizontal: SIZES.padding * 3,
        }}
      >


        {/* Searchbar */}
        <View
          style={{
            marginTop: SIZES.padding * 1,
          }}
        >
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body4,
            }}
            placeholder="Search Here"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
            // secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => console.log("Searched")}
          >
            <Image
              source={icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

//   function renderButton() {
//     return (
//       <View
//         style={{
//           margin: SIZES.padding * 3,
//           marginTop: SIZES.padding * 5,
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             height: 50,
//             backgroundColor: COLORS.black,
//             borderRadius: SIZES.radius / 5,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onPress={goToHome}
//         >
//           <Text
//             style={{
//               color: COLORS.white,
//               ...FONTS.h4,
//             }}
//           >
//             Submit
//           </Text>
//         </TouchableOpacity>
//         <View
//           style={{
//             marginTop: SIZES.padding * 2,
//           }}
//         >
//           <Text
//             style={{
//               color: COLORS.black,
//               ...FONTS.body5,
//             }}
//           >
//             Don't have an account?{" "}
//             <Text
//               style={{
//                 color: COLORS.black,
//                 ...FONTS.body5,
//               }}
//             //   onPress={goToSignUp}
//             >
//               Sign Up
//             </Text>
//           </Text>
//         </View>
//       </View>
//     );
//   }

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "android" ? "padding" : null}
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <ScrollView>
        {renderHeader()}
        {/* {renderLogo()} */}
        {renderSearchBar()}
        {/* {renderButton()} */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Search;
