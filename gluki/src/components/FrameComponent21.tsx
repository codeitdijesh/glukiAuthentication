import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Svg, Ellipse } from "react-native-svg";
import {
  Height,
  Width,
  Border,
  Padding,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

// Ellipse-16161 SVG Component
const Ellipse16161 = ({ style, width = 122, height = 11 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 122 11" style={style}>
    <Ellipse cx="61" cy="5.5" rx="61" ry="5.5" fill="#D9D9D9"/>
  </Svg>
);

const FrameComponent21 = () => {
  return (
    <View style={styles.accountSetupCompleteInner}>
      <View style={styles.mascotContainerParent}>
        <View style={styles.mascotContainer}>
          <View style={styles.glukiLayout}>
            <Ellipse16161
              style={styles.glukiMascotChild}
              width={122}
              height={Height.height_11}
            />
            <Image
              style={[styles.gluki311, styles.glukiLayout]}
              contentFit="cover"
              source={require("../assets/Gluki-Happy-2.png")}
            />
          </View>
        </View>
        <View style={styles.tapAnywhereToContinue}>
          <Text style={styles.tapAnywhereTo}>Tap anywhere to continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glukiLayout: {
    height: Height.height_207_57,
    width: Width.width_165_22,
  },
  accountSetupCompleteInner: {
    zIndex: 1,
    width: 369,
    paddingLeft: 27,
    flexDirection: "row",
    height: 315,
  },
  mascotContainerParent: {
    zIndex: 1,
    gap: 59,
    width: Width.width_342,
    height: 315,
  },
  mascotContainer: {
    width: 253,
    height: 208,
    paddingLeft: 88,
    flexDirection: "row",
  },
  glukiMascotChild: {
    top: 196,
    left: 23,
    width: 122,
    height: Height.height_11,
    position: "absolute",
  },
  gluki311: {
    top: 0,
    left: 0,
    zIndex: 1,
    position: "absolute",
  },
  tapAnywhereToContinue: {
    borderRadius: Border.br_12,
    height: Height.height_48,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.padding_8,
    zIndex: 1,
    width: Width.width_342,
    flexDirection: "row",
  },
  tapAnywhereTo: {
    height: 23,
    width: 223,
    fontSize: FontSize.fs_18,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.neutral500,
    textAlign: "left",
  },
});

export default FrameComponent21;
