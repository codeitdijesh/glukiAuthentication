import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Svg, Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg";
import AccountSetupContainer from "../components/AccountSetupContainer";
import {
  Height,
  BoxShadow,
  Color,
  Width,
  Border,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

// Ellipse-1603 SVG Component - Sky background
const Ellipse1603 = ({ style, width = 773, height = 773 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 773 773" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_553_6774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(386.5 386.5) rotate(90) scale(386.5)">
        <Stop stopColor="#A3DCEB" />
        <Stop offset="1" stopColor="white" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="386.5" r="386.5" fill="url(#paint0_radial_553_6774)" />
  </Svg>
);

// Vector-2566 SVG Component - Cloud 1
const Vector2566 = ({ style, width = 188, height = 67 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 188 67" style={style}>
    <Path 
      d="M112.087 24.8656C96.0929 -21.2999 30.7804 5.36236 39.4464 36.0243C9.45624 21.361 -9.42536 52.6371 4.86602 66.8573C48.6291 67.746 186.805 64.1934 186.805 64.1934C186.805 64.1934 196.726 31.3578 159.405 44.0235C159.405 0.830683 126.527 14.8675 112.087 24.8656Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

// Vector-2565 SVG Component - Cloud 2
const Vector2565 = ({ style, width = 142, height = 56 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 142 56" style={style}>
    <Path 
      d="M74.5577 15.1278C50.1577 -16.0722 22.0567 8.12994 28.057 24.1293C0.0572872 19.1299 -5.66526 44.9612 5.05688 55.6282C37.8902 56.2948 141.557 53.6299 141.557 53.6299C141.557 53.6299 136.059 15.1277 107.058 33.1282C107.058 0.728153 85.3911 7.6279 74.5577 15.1278Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../assets/Background.svg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <ScrollView
            style={[styles.scrollview, styles.scrollviewFlexBox]}
            contentContainerStyle={styles.createAccountScrollViewContent}
          >
            <View style={styles.frameParent}>
              <View style={styles.backgroundParent}>
                <Ellipse1603 style={styles.frameChild} width={773} height={773} />
                <Vector2566
                  style={[styles.frameItem, styles.framePosition]}
                  width={188}
                  height={67}
                />
                <Vector2565
                  style={[styles.frameInner, styles.framePosition]}
                  width={142}
                  height={56}
                />
                <View style={styles.accountSetupContainerWrapper}>
                  <AccountSetupContainer />
                </View>
              </View>
            </View>
          <View style={[styles.buttonLoginWrapper, styles.buttonLayout]}>
            <View style={[styles.buttonLogin, styles.buttonLayout]}>
              <Text style={styles.alreadyHaveAnContainer}>
                <Text
                  style={styles.alreadyHaveAn}
                >{`Already have an account? `}</Text>
                <Text style={styles.login}>Login</Text>
              </Text>
            </View>
          </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createAccountScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 164,
    height: 852,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  buttonLayout: {
    height: Height.height_48,
    flexDirection: "row",
  },
  scrollview: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: "transparent",
    maxWidth: "100%",
  },
  frameParent: {
    height: 610,
    zIndex: 1,
    width: Width.width_404,
  },
  backgroundParent: {
    position: "relative",
    height: 610,
    width: Width.width_404,
    zIndex: 1,
  },
  frameChild: {
    top: -337,
    left: -167,
    width: 773,
    height: 773,
    position: "absolute",
  },
  framePosition: {
    zIndex: 1,
    position: "absolute",
  },
  frameItem: {
    top: 145,
    left: 244,
    width: 188,
    height: 67,
  },
  frameInner: {
    top: 99,
    left: -27,
    width: 142,
    height: 56,
  },
  accountSetupContainerWrapper: {
    position: "absolute",
    top: 180,
    left: 24,
    width: 369,
    height: 428,
    zIndex: 2,
    flexDirection: "row",
  },
  buttonLoginWrapper: {
    width: 372,
    paddingLeft: 30,
  },
  buttonLogin: {
    width: 341,
    borderRadius: Border.br_12,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.padding_8,
  },
  alreadyHaveAnContainer: {
    height: Height.height_20,
    width: 246,
    fontSize: FontSize.fs_16,
    textDecorationLine: "underline",
    color: Color.colorGray,
    textAlign: "left",
  },
  alreadyHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
  },
  login: {
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
});

export default CreateAccount;
