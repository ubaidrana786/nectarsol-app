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

const User = () => {
  const specialPromoData = [
    {
      id: 1,
      title: "Name",
      image: images.avatar,
      description: "John Doe",
    },
    {
      id: 2,
      title: "Email",
      image: images.yawar,
      description: "johndoe@gmail.com",
    },
    {
      id: 3,
      title: "Contact #",
      image: images.aleem,
      description: "+92 340 123 4344",
    },
    {
      id: 4,
      title: "Address",
      image: images.waqas,
      description: "100 South Whales Street 48 Sydney, Australia",
    },
    {
      id: 5,
      title: "Age",
      image: images.waqas,
      description: "29",
    },
    {
      id: 6,
      title: "Age",
      image: images.waqas,
      description: "29",
    },
    {
      id: 7,
      title: "Age",
      image: images.waqas,
      description: "29",
    },
  ];

  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

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
              Profile
            </Text>
            <Text
              style={{
                ...FONTS.h4,
              }}
            >
              4.7{" "}
              <Image
                source={icons.ratingstar}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.yellow,
                }}
              />
            </Text>
          </View>
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
            }}
            onPress={() => console.log("Avatar Image")}
          >
            <Image
              source={images.avatar}
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.lightGreen,
                borderRadius: 5,
              }}
            >
              <Image
                source={icons.pencil}
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderPromos() {
    const HeaderComponent = () => <View>{renderHeader()}</View>;

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: "100%",
        }}
        onPress={() => console.log("Show Modal")}
      >
        <View
          style={{
            padding: SIZES.padding * 0.5,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            borderWidth: 1,
            borderColor: COLORS.transparent,
            borderBottomColor: COLORS.black,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...FONTS.h4,
                paddingBottom: SIZES.padding,
              }}
            >
              {item.title}
            </Text>
            <Image
              source={icons.pencil}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
          </View>
          <Text
            style={{
              ...FONTS.body5,
            }}
          >
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        data={specialPromos}
        renderItem={renderItem}
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
      {renderPromos()}
    </SafeAreaView>
  );
};

export default User;
