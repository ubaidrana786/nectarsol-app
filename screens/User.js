import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Settings = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToScan = () => {
    navigation.navigate("Scan");
  };
  const goToReffer = () => {
    navigation.navigate("Reffer");
  };

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
            onPress={goToScan}
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

  function renderButton() {
    return (
      <View
        style={{
          margin: SIZES.padding * 3,
          marginTop: 0,
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.lightGray,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={goToReffer}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
            }}
          >
            General/Reffer Form
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.lightGray,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={() => console.log("Security")}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
            }}
          >
            Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.lightGray,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={() => console.log("Advance")}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
            }}
          >
            Advance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.lightGray,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={() => console.log("Privacy Policy")}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.lightGray,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={() => console.log("Terms & Conditions")}
        >
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
            }}
          >
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.red,
            borderRadius: SIZES.radius / 5,
            justifyContent: "space-between",
            marginTop: SIZES.padding * 2,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={goToSignUp}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            Log Out
          </Text>
          <Image
            source={icons.logouticon}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderPromos() {
    const HeaderComponent = () => <View>{renderHeader()}</View>;

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar style="auto" />
      <View>
        {renderPromos()}
        {renderButton()}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
