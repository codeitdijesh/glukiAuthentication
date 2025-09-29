import React, { useMemo } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Svg, Path } from "react-native-svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Height,
  Width,
  Padding,
  FontSize,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

// CaretLeft SVG Component 
const CaretLeft = ({ style, width = 33, height = 32 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 33 32" style={style}>
    <Path 
      d="M21.2141 25.2931C21.3071 25.386 21.3808 25.4963 21.431 25.6177C21.4813 25.7391 21.5072 25.8692 21.5072 26.0006C21.5072 26.132 21.4813 26.2621 21.431 26.3835C21.3808 26.5048 21.3071 26.6151 21.2141 26.7081C21.1212 26.801 21.0109 26.8747 20.8895 26.9249C20.7681 26.9752 20.638 27.0011 20.5066 27.0011C20.3753 27.0011 20.2451 26.9752 20.1237 26.9249C20.0024 26.8747 19.8921 26.801 19.7991 26.7081L9.79915 16.7081C9.70617 16.6152 9.63241 16.5049 9.58209 16.3835C9.53176 16.2621 9.50586 16.132 9.50586 16.0006C9.50586 15.8691 9.53176 15.739 9.58209 15.6176C9.63241 15.4962 9.70617 15.3859 9.79915 15.2931L19.7991 5.29306C19.9868 5.10542 20.2413 5 20.5066 5C20.772 5 21.0265 5.10542 21.2141 5.29306C21.4018 5.4807 21.5072 5.73519 21.5072 6.00056C21.5072 6.26592 21.4018 6.52042 21.2141 6.70806L11.9204 16.0006L21.2141 25.2931Z" 
      fill="#9E9E9E"
    />
  </Svg>
);

export type FrameComponent3Type = {
  /** Style props */
  frameViewWidth?: number | string;
  ageContentWidth?: number | string;
  ageContentPaddingLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FrameComponent3 = ({
  frameViewWidth,
  ageContentWidth,
  ageContentPaddingLeft,
}: FrameComponent3Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  const ageContentStyle = useMemo(() => {
    return {
      ...getStyleValue("width", ageContentWidth),
      ...getStyleValue("paddingLeft", ageContentPaddingLeft),
    };
  }, [ageContentWidth, ageContentPaddingLeft]);

  return (
    <View
      style={[styles.caretleftParent, styles.ageContentLayout, frameViewStyle]}
    >
      <Pressable 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <CaretLeft style={styles.caretleftIcon} width={32} height={32} />
      </Pressable>
      <View
        style={[styles.ageContent, styles.ageContentLayout, ageContentStyle]}
      >
        <Text style={styles.whosCreatingThis}>
          Who's creating this account?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ageContentLayout: {
    zIndex: 1,
    width: 321,
  },
  caretleftParent: {
    height: Height.height_127,
    gap: 23,
  },
  backButton: {
    width: Width.width_32,
    height: Height.height_32,
    justifyContent: "center",
    alignItems: "center",
  },
  caretleftIcon: {
    width: Width.width_32,
    height: Height.height_32,
  },
  ageContent: {
    height: Height.height_72,
    flexDirection: "row",
    paddingLeft: Padding.padding_32,
  },
  whosCreatingThis: {
    width: 289,
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    color: Color.colorBlack,
    textAlign: "center",
  },
});

export default FrameComponent3;