import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Svg, Circle, Path, Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";
import FrameComponent11 from "../components/FrameComponent11";
import { BoxShadow, Color, Width, Height, FontFamily } from "../GlobalStyles";

// Background SVG - keep vibrant sky, just softer bottom edge
const Background = ({ style, width, height }: { style: any, width: number, height: number }) => (
  <Svg width="773" height="773" viewBox="0 0 773 773" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_553_6927" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#87CEEB" />
        <Stop offset="0.7" stopColor="#B0E0E6" />
        <Stop offset="0.9" stopColor="#E0F6FF" />
        <Stop offset="1" stopColor="#E0F6FF" stopOpacity="0.8" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="386.5" r="386.5" fill="url(#paint0_radial_553_6927)" />
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

// Union SVG with larger tail pointing properly toward Gluki
const Union = ({ style, width, height }: { style: any, width: number, height: number }) => (
  <Svg width="291" height="152" viewBox="0 0 291 152" style={style}>
    {/* Speech bubble with larger tail */}
    <Path 
      d="M20 0H271C281.493 0 290 8.50659 290 19V113C290 123.493 281.493 132 271 132H210L225 152L250 132H20C8.50659 132 0 123.493 0 113V19C0 8.50659 8.50659 0 20 0Z" 
      fill="white"
      stroke="#FFD700"
      strokeWidth="3"
    />
  </Svg>
);

// Ellipse from your assets/Ellipse-1616.svg
const Ellipse1616 = ({ style, width, height }: { style: any, width: number, height: number }) => (
  <Svg width="122" height="11" viewBox="0 0 122 11" style={style}>
    <Ellipse cx="61" cy="5.5" rx="61" ry="5.5" fill="#D9D9D9"/>
  </Svg>
);

const Onboarding1 = () => {

  return (
    <ScrollView
      style={styles.onboarding1}
      contentContainerStyle={styles.onboarding1Content}
      >
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.backgroundParent, styles.gluki311Position]}>
          <Background style={styles.backgroundIcon} width={Width.width_773} height={773} />
          <View style={[styles.glukiMascot, styles.glukiPosition]}>
            <Ellipse1616
              style={styles.glukiMascotChild}
              width={122}
              height={Height.height_11}
            />
            <Image
              style={[styles.gluki311, styles.glukiPosition]}
              contentFit="cover"
              source={require("../assets/gluki-3-1-1.png")}
            />
          </View>
          <Union
            style={[styles.unionIcon, styles.glukiPosition]}
            width={291}
            height={152}
          />
        </View>
        <Text style={styles.hiImGluki}>{`Hi, I'm GLUKI! \nLet's play, learn, and take on T1D together.`}</Text>
      </View>
      <FrameComponent11 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  onboarding1Content: {
    flexDirection: "column",
    paddingBottom: 17,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 149,
    height: 852,
  },
  parentLayout: {
    height: 580,
    width: 393,
  },
  gluki311Position: {
    left: 0,
    top: 0,
  },
  glukiPosition: {
    zIndex: 1,
    position: "absolute",
  },
  onboarding1: {
    width: "100%",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
  },
  frameParent: {
    zIndex: 2,
  },
  backgroundParent: {
    position: "absolute",
    height: 580,
    width: 393,
  },
  backgroundIcon: {
    top: -337,
    left: -167,
    width: Width.width_773,
    height: 773,
    position: "absolute",
  },
  glukiMascot: {
    top: 372,
    left: 115,
    height: Height.height_207_57,
    width: Width.width_165_22,
    zIndex: 1,
  },
  glukiMascotChild: {
    top: 196,
    left: 23,
    width: 122,
    height: Height.height_11,
    position: "absolute",
  },
  gluki311: {
    height: Height.height_207_57,
    width: Width.width_165_22,
    zIndex: 1,
    left: 0,
    top: 0,
  },
  unionIcon: {
    top: 212,
    left: 60,
    width: 291,
    height: 152,
  },
  hiImGluki: {
    top: 235,
    left: 84,
    fontSize: 24,
    fontFamily: FontFamily.fredokaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 242,
    zIndex: 2,
    position: "absolute",
  },
});

export default Onboarding1;
