import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg";
import LoginForm from "../components/LoginForm";
import {
  Color,
  BoxShadow,
  Width,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

// Background SVG - Beautiful sky with clouds
const Background = ({ style, width = 773, height = 773 }: { style?: any, width?: number, height?: number }) => (
  <Svg width="773" height="773" viewBox="0 0 773 773" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_login" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#87CEEB" />
        <Stop offset="0.7" stopColor="#B0E0E6" />
        <Stop offset="0.9" stopColor="#E0F6FF" />
        <Stop offset="1" stopColor="#E0F6FF" opacity="0.8" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="386.5" r="386.5" fill="url(#paint0_radial_login)" />
    {/* White fluffy clouds */}
    <Path 
      d="M523.087 506.866C507.093 460.7 441.78 487.362 450.446 518.024C420.456 503.361 401.575 534.637 415.866 548.857C459.629 549.746 597.805 546.193 597.805 546.193C597.805 546.193 607.726 513.358 570.405 526.024C570.405 482.831 537.527 496.867 523.087 506.866Z" 
      fill="white" 
      fillOpacity="1"
    />
    <Path 
      d="M214.558 451.128C190.158 419.928 162.057 444.13 168.057 460.129C140.057 455.13 134.335 480.961 145.057 491.628C177.89 492.295 281.557 489.63 281.557 489.63C281.557 489.63 276.059 451.128 247.058 469.128C247.058 436.728 225.391 443.628 214.558 451.128Z" 
      fill="white" 
      fillOpacity="1"
    />
  </Svg>
);

// Ellipse1616 - Shadow component for Gluki mascot
const Ellipse1616 = ({ style, width = 122, height = 11 }: { style?: any, width?: number, height?: number }) => (
  <Svg width="122" height="11" viewBox="0 0 122 11" style={style}>
    <Circle cx="61" cy="5.5" rx="61" ry="5.5" fill="#D9D9D9"/>
  </Svg>
);

// Union - Speech bubble with golden border
const Union = ({ style, width = 291, height = 152 }: { style?: any, width?: number, height?: number }) => (
  <Svg width="291" height="152" viewBox="0 0 291 152" style={style}>
    {/* Speech bubble with golden border */}
    <Path 
      d="M20 0H271C281.493 0 290 8.50659 290 19V113C290 123.493 281.493 132 271 132H210L225 152L250 132H20C8.50659 132 0 123.493 0 113V19C0 8.50659 8.50659 0 20 0Z" 
      fill="white"
      stroke="#FFD700"
      strokeWidth="3"
    />
  </Svg>
);

const Login1 = () => {
  return (
    <SafeAreaView style={styles.login1FlexBox}>
      <KeyboardAvoidingView
        style={styles.login1FlexBox}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          style={[styles.scrollview, styles.login1FlexBox]}
          contentContainerStyle={styles.login1Content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.frameParent, styles.frameLayout]}>
            <View style={[styles.frameGroup, styles.frameLayout]}>
              <Background
                style={styles.frameChild}
                width={Width.width_773}
                height={Height.height_773}
              />
              <View style={[styles.ellipseParent, styles.gluki311Position]}>
                <Ellipse1616 style={styles.frameItem} width={122} height={11} />
                <Image
                  style={[styles.gluki311, styles.gluki311Position]}
                  contentFit="cover"
                  source={require("../assets/Gluki-Happy-2.png")}
                />
              </View>
              <Union
                style={[styles.unionIcon, styles.gluki311Position]}
                width={291}
                height={152}
              />
            </View>
            <View
              style={[
                styles.hiImGlukiLetsPlayLeaWrapper,
                styles.wrapperFlexBox,
              ]}
            >
              <Text
                style={[styles.hiImGluki, styles.hiImGlukiFlexBox]}
              >{`Hi, I'm GLUKI!\nLet's play, learn, and take on T1D together.`}</Text>
            </View>
          </View>
          <View style={[styles.welcomeBackWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.welcomeBack, styles.hiImGlukiFlexBox]}>
              Welcome Back!
            </Text>
          </View>
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login1Content: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 18,
    minHeight: 863,
    paddingBottom: 50,
  },
  login1FlexBox: {
    flex: 1,
    width: "100%",
  },
  frameLayout: {
    height: 387,
    width: 401,
  },
  gluki311Position: {
    zIndex: 1,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiImGlukiFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  scrollview: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: Color.neutral0,
    maxWidth: "100%",
  },
  frameParent: {
    alignItems: "flex-end",
    zIndex: null,
  },
  frameGroup: {
    zIndex: 1,
  },
  frameChild: {
    top: -386,
    left: -187,
    width: Width.width_773,
    height: Height.height_773,
    position: "absolute",
  },
  ellipseParent: {
    top: 214,
    left: 50,
    height: 153,
    width: Width.width_122,
    zIndex: 1,
  },
  frameItem: {
    top: 145,
    left: 0,
    width: 122,
    height: 11,
    position: "absolute",
  },
  gluki311: {
    top: 0,
    left: 0,
    height: 153,
    width: Width.width_122,
    zIndex: 1,
  },
  unionIcon: {
    top: 77,
    left: 80,
    width: 291,
    height: 152,
  },
  hiImGlukiLetsPlayLeaWrapper: {
    zIndex: 2,
    width: 306,
    height: 81,
    paddingRight: 48,
    marginTop: -293,
  },
  hiImGluki: {
    width: Width.width_258,
    fontSize: FontSize.fs_22,
    fontFamily: FontFamily.fredokaRegular,
    zIndex: 2,
  },
  welcomeBackWrapper: {
    width: 294,
    paddingRight: 105,
    height: 45,
    zIndex: null,
  },
  welcomeBack: {
    width: 192,
    fontSize: FontSize.fs_28,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    height: 45,
  },
});

export default Login1;
