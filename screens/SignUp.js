import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
const SignUp = ({ navigation }) => {
  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
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
          Sign Up/Log In
        </Text>
      </TouchableOpacity>
    );
  }
  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{
            width: "30%",
          }}
        />
      </View>
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}
      >
        {/* Phone Number */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.body5,
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {/* Phone Number Input */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.black,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.black,
                ...FONTS.body4,
              }}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.black}
            />
          </View>
        </View>
      </View>
    );
  }
  function renderButton() {
    return (
      <View
        style={{
          margin: SIZES.padding * 3,
          marginTop: SIZES.padding * 25,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={goToForgotPassword}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <ScrollView>
        {renderHeader()}
        {renderLogo()}
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SignUp;