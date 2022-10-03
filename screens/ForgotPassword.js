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
const LogIn = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToLogIn = () => {
    navigation.navigate("LogIn");
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
        onPress={goToSignUp}
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
          OTP Confirmation
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
        {/* OTP */}
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
            Enter OTP
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body4,
            }}
            placeholder="XXXXXX"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
          />
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
          onPress={goToLogIn}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
            }}
          >
            Confirm
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
export default LogIn;