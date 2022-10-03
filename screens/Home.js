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
const Home = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Criminal Law",
    },
    {
      id: 2,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Property Law",
    },
    {
      id: 3,
      icon: icons.internet,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "Corporate Law",
    },
    {
      id: 4,
      icon: icons.more,
      color: COLORS.green,
      backgroundColor: COLORS.lightGreen,
      description: "Family Law",
    },
    {
      id: 5,
      icon: icons.bill,
      color: COLORS.secondary,
      backgroundColor: COLORS.lightGreen,
      description: "Cleaning",
    },
    {
      id: 6,
      icon: icons.games,
      color: COLORS.secondary,
      backgroundColor: COLORS.lightGreen,
      description: "Geyser",
    },
    {
      id: 7,
      icon: icons.phone,
      color: COLORS.secondary,
      backgroundColor: COLORS.lightGreen,
      description: "Electrician",
    },
    {
      id: 8,
      icon: icons.wallet,
      color: COLORS.secondary,
      backgroundColor: COLORS.lightGreen,
      description: "Painter",
    },
  ];
  const specialPromoData = [
    {
      id: 1,
      icon: images.ibrahim,
      title: "Ibrahim Ali",
      description: "Criminal Lawyer",
    },
    {
      id: 2,
      icon: images.yawar,
      title: "Yawar Tariq",
      description: "Family Affair Lawyer",
    },
    {
      id: 3,
      icon: images.aleem,
      title: "Aleem Iqbal",
      description: "Property Lawyer",
    },
    {
      id: 4,
      icon: images.waqas,
      title: "Waqas Ahmad",
      description: "Corporate Lawyer",
    },
  ];
  const [features, setFeatures] = React.useState(featuresData);
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding * 2,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.transparent,
            }}
            // onPress={goToSignUp}
            onPress={() => console.log("Go To Search Screen")}
          >
            <Image
              source={icons.eye}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.transparent,
            }}
            // onPress={goToSignUp}
            onPress={() => console.log("This Is Logo")}
          >
            <Image
              source={images.wallieLogo}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
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
              backgroundColor: COLORS.transparent,
            }}
            onPress={goToSignUp}
          >
            <Image
              source={icons.user}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderBanner() {
    return (
      <View
        style={{
          height: 120,
          borderRadius: 20,
        }}
      >
        <Image
          source={images.banner}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
      </View>
    );
  }
  function renderFeatures() {
    const Header = () => (
      <View
      style={{
        flexDirection: "row",
        marginBottom: SIZES.padding,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
          }}
        >
          Services
        </Text>
      </View>
      <TouchableOpacity onPress={() => console.log("View All Services")}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body5,
          }}
        >
          View All
        </Text>
      </TouchableOpacity>
    </View>
    );
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 1.5,
          width: 60,
          alignItems: "center",
        }}
        onPress={() => console.log(item.description)}
      >
        <View
          style={{
            height: 40,
            width: 40,
            marginBottom: 1,
            borderRadius: 50,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            flexWrap: "wrap",
            ...FONTS.body5,
            fontSize: 9,
          }}
        >
          {item.description}
        </Text>
      </TouchableOpacity>
    );
    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{
          marginTop: SIZES.padding * 2,
        }}
      />
    );
  }
  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );
    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
            }}
          >
            Popular Lawyers
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("View All Lawyers")}>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body5,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 90,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Text
            style={{
              ...FONTS.h5,
            }}
          >
            {item.title}
          </Text>
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
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromos}
        keyExtractor={(item) => `${item.id}`}
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
export default Home;