import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Svg, Circle, Path, Defs, RadialGradient, Stop, ClipPath, Rect, G } from "react-native-svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  BoxShadow,
  Width,
  FontFamily,
  Height,
  Padding,
  FontSize,
  LineHeight,
  Border,
  Gap,
  StyleVariable,
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

// Union1 SVG Component - Speech bubble
const Union1 = ({ style, width = 293, height = 123 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 293 123" style={style}>
    <Path 
      d="M262.867 1C278.869 1 291.841 13.9719 291.841 29.9736V73.9443C291.841 89.9461 278.869 102.918 262.867 102.918H234.253C230.72 112.034 215.743 118.74 208.492 121.001C213.202 114.1 215.06 107.092 215.602 102.918H30.1338C14.1321 102.918 1.16023 89.946 1.16016 73.9443V29.9736C1.16028 13.972 14.1322 1.00011 30.1338 1H262.867Z" 
      fill="white"
    />
    <Path 
      d="M291.841 29.9736H292.746V29.9736L291.841 29.9736ZM291.841 73.9443L292.746 73.9443V73.9443H291.841ZM234.253 102.918V102.013H233.633L233.409 102.591L234.253 102.918ZM208.492 121.001L207.744 120.491L206.277 122.64L208.762 121.865L208.492 121.001ZM215.602 102.918L216.499 103.034L216.632 102.013H215.602V102.918ZM30.1338 102.918L30.1338 103.823H30.1338V102.918ZM1.16016 73.9443H0.254724V73.9443L1.16016 73.9443ZM1.16016 29.9736L0.254724 29.9736V29.9736H1.16016ZM30.1338 1V0.0945676H30.1338L30.1338 1ZM262.867 1V1.90543C278.369 1.90543 290.935 14.472 290.935 29.9736L291.841 29.9736L292.746 29.9736C292.746 13.4719 279.369 0.0945676 262.867 0.0945676V1ZM291.841 29.9736H290.935V73.9443H291.841H292.746V29.9736H291.841ZM291.841 73.9443L290.935 73.9443C290.935 89.446 278.369 102.013 262.867 102.013V102.918V103.823C279.369 103.823 292.746 90.4461 292.746 73.9443L291.841 73.9443ZM262.867 102.918V102.013H234.253V102.918V103.823H262.867V102.918ZM234.253 102.918L233.409 102.591C231.755 106.857 227.351 110.681 222.296 113.757C217.277 116.81 211.79 119.024 208.223 120.137L208.492 121.001L208.762 121.865C212.445 120.717 218.072 118.447 223.237 115.304C228.367 112.182 233.218 108.095 235.097 103.245L234.253 102.918ZM208.492 121.001L209.24 121.511C214.044 114.473 215.943 107.324 216.499 103.034L215.602 102.918L214.704 102.802C214.177 106.861 212.36 113.728 207.744 120.491L208.492 121.001ZM215.602 102.918V102.013H30.1338V102.918V103.823H215.602V102.918ZM30.1338 102.918L30.1338 102.013C14.6322 102.012 2.06566 89.4459 2.06559 73.9443L1.16016 73.9443L0.254724 73.9443C0.254799 90.4461 13.6321 103.823 30.1338 103.823L30.1338 102.918ZM1.16016 73.9443H2.06559V29.9736H1.16016H0.254724V73.9443H1.16016ZM1.16016 29.9736L2.06559 29.9736C2.06571 14.4721 14.6322 1.90554 30.1338 1.90543L30.1338 1L30.1338 0.0945676C13.6321 0.0946816 0.254851 13.4719 0.254724 29.9736L1.16016 29.9736ZM30.1338 1V1.90543H262.867V1V0.0945676H30.1338V1Z" 
      fill="#FDD950"
    />
  </Svg>
);

// CaretLeft1 SVG Component - Back button
const CaretLeft1 = ({ style, width = 33, height = 32 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 33 32" style={style}>
    <Path 
      d="M21.2141 25.2931C21.3071 25.386 21.3808 25.4963 21.431 25.6177C21.4813 25.7391 21.5072 25.8692 21.5072 26.0006C21.5072 26.132 21.4813 26.2621 21.431 26.3835C21.3808 26.5048 21.3071 26.6151 21.2141 26.7081C21.1212 26.801 21.0109 26.8747 20.8895 26.9249C20.7681 26.9752 20.638 27.0011 20.5066 27.0011C20.3753 27.0011 20.2451 26.9752 20.1237 26.9249C20.0024 26.8747 19.8921 26.801 19.7991 26.7081L9.79915 16.7081C9.70617 16.6152 9.63241 16.5049 9.58209 16.3835C9.53176 16.2621 9.50586 16.132 9.50586 16.0006C9.50586 15.8691 9.53176 15.739 9.58209 15.6176C9.63241 15.4962 9.70617 15.3859 9.79915 15.2931L19.7991 5.29306C19.9868 5.10542 20.2413 5 20.5066 5C20.772 5 21.0265 5.10542 21.2141 5.29306C21.4018 5.4807 21.5072 5.73519 21.5072 6.00056C21.5072 6.26592 21.4018 6.52042 21.2141 6.70806L11.9204 16.0006L21.2141 25.2931Z" 
      fill="#9E9E9E"
    />
  </Svg>
);

// IconCircle1 and IconCircle2 components (reused from previous pages)
const IconCircle1 = ({ style, width = 24, height = 24 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" style={style}>
    <Defs>
      <ClipPath id="clip0_573_4916">
        <Rect width="24" height="24" fill="white" transform="translate(0.00585938)" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_573_4916)">
      <Path 
        d="M12.0059 22C17.5287 22 22.0059 17.5228 22.0059 12C22.0059 6.47715 17.5287 2 12.0059 2C6.48301 2 2.00586 6.47715 2.00586 12C2.00586 17.5228 6.48301 22 12.0059 22Z" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

const IconCircle2 = ({ style, width = 16, height = 16 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" style={style}>
    <Defs>
      <ClipPath id="clip0_573_4918">
        <Rect width="16" height="16" fill="white" transform="translate(0.00585938)" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_573_4918)">
      <Path 
        d="M8.00651 14.6673C11.6884 14.6673 14.6732 11.6825 14.6732 8.00065C14.6732 4.31875 11.6884 1.33398 8.00651 1.33398C4.32461 1.33398 1.33984 4.31875 1.33984 8.00065C1.33984 11.6825 4.32461 14.6673 8.00651 14.6673Z" 
        stroke="#FAFAFA" 
        strokeWidth="1.33" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

const AgeVerificationKidSelection1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={require("../../assets/Background.svg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.ageVerificationKidSelecti}
        contentContainerStyle={styles.ageVerificationKidSelectiContent}
      >
      <View style={styles.ageVerification}>
        <Text style={[styles.oopsThisPart, styles.grabAGrownFlexBox]}>
          Oops! This part is for{'\n'}a grown-up.
        </Text>
        <View style={styles.ellipseParent}>
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
          <Union1
            style={[styles.unionIcon, styles.iconPosition]}
            width={291}
            height={120}
          />
          <Image
            style={[styles.gluki61, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/gluki-6-1.png")}
          />
          <Pressable 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <CaretLeft1
              style={[styles.caretleftIcon, styles.iconPosition]}
              width={32}
              height={32}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.accountSetup, styles.accountSetupFlexBox]}>
        <View style={styles.grownUpAssistance}>
          <View
            style={[
              styles.grabAGrownUpToHelpYouSeWrapper,
              styles.accountSetupFlexBox,
            ]}
          >
            <Text
              style={[styles.grabAGrown, styles.grabAGrownFlexBox]}
            >{` Grab a grown up to help you setup your account. \n\n`}</Text>
          </View>
          <Pressable 
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.ageVerificationKidSelectiButton}>
              <IconCircle1 style={styles.iconCircle} width={24} height={24} />
              <Text style={styles.button2}>Go Back</Text>
              <IconCircle2
                style={styles.ageVerificationKidSelectiIconCircle}
                width={16}
                height={16}
              />
            </View>
          </Pressable>
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ageVerificationKidSelectiContent: {
    flexDirection: "column",
    paddingBottom: 76,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 45,
    height: 852,
  },
  grabAGrownFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  framePosition: {
    zIndex: 1,
    position: "absolute",
  },
  iconPosition: {
    zIndex: 2,
    position: "absolute",
  },
  accountSetupFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  ageVerification: {
    width: 404,
    height: 532,
    zIndex: 3,
    paddingHorizontal: 30,
    paddingTop: 150,
    paddingBottom: 285,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  oopsThisPart: {
    width: 280,
    fontSize: 23,
    paddingTop: 10,
    fontFamily: FontFamily.fredokaRegular,
    zIndex: 3,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 20,
  },
  ellipseParent: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: -337,
    left: -167,
    width: 773,
    height: 773,
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
  unionIcon: {
    top: 145,
    left: 40,
    width: 320,
    height: 140,
  },
  gluki61: {
    top: 315,
    left: 121,
    width: 168,
    height: Height.height_217,
  },
  backButton: {
    top: 68,
    left: 26,
    width: Width.width_32,
    height: Height.height_32,
    justifyContent: "center",
    alignItems: "center",
  },
  caretleftIcon: {
    width: Width.width_32,
    height: Height.height_32,
  },
  accountSetup: {
    width: 373,
    paddingLeft: 31,
    flexDirection: "row",
    height: 199,
  },
  grownUpAssistance: {
    alignItems: "flex-end",
    gap: 33,
    width: Width.width_342,
    height: 199,
  },
  grabAGrownUpToHelpYouSeWrapper: {
    width: 325,
    height: 108,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_16,
    flexDirection: "row",
  },
  grabAGrown: {
    width: 309,
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
  },
  button: {
    height: Height.height_58,
    width: Width.width_342,
    flexDirection: "row",
  },
  ageVerificationKidSelectiButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_12,
    backgroundColor: Color.primary500Default,
    justifyContent: "center",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_12,
    gap: Gap.gap_8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  iconCircle: {
    width: Width.width_24,
    height: Height.height_24,
    display: "none",
  },
  button2: {
    height: Height.height_38,
    width: 88,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.baloo2Medium,
    color: Color.neutral0,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  ageVerificationKidSelectiIconCircle: {
    width: StyleVariable.widthW4,
    height: StyleVariable.heightH4,
    display: "none",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  ageVerificationKidSelecti: {
    width: "100%",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: "transparent",
    maxWidth: "100%",
    flex: 1,
  },
});

export default AgeVerificationKidSelection1;