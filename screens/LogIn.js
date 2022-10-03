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
  // const goToForgotPassword = () => {
  //   navigation.navigate("ForgotPassword");
  // };
  // const goToWelCome = () => {
  //   navigation.navigate("WelCome");
  // };
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
          Profile
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
        {/* Name */}
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
            Name
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
            placeholder="John Doe"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
          />
        </View>

         {/* Gender */}
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
            Gender
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
            placeholder="M/F/O"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
          />
        </View>

        {/* Age */}
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
            Age
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
            placeholder="28"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.black}
          />
        </View>

        {/* Password */}
        {/* <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body5,
            }}
          >
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body4,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View> */}


        {/* <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body5,
            }}
          >
            Forgot Password?{" "}
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body5,
              }}
              onPress={goToForgotPassword}
            >
              Reset
            </Text>
          </Text>
        </View> */}
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          margin: SIZES.padding * 3,
          marginTop: SIZES.padding * 5,
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
          onPress={goToHome}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        {/* <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body5,
            }}
          >
            Don't have an account?{" "}
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body5,
              }}
              onPress={goToSignUp}
            >
              Sign Up
            </Text>
          </Text>
        </View> */}
      </View>
    );
  }

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
        {renderLogo()}
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
