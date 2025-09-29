import React, { useMemo } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  Border,
  Color,
  Padding,
  Gap,
  Width,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type Button2Type = {
  button?: string;
  iconCircle?: React.ReactNode;
  iconCircle1?: React.ReactNode;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;

  /** Style props */
  buttonBackgroundColor?: string;
  buttonWidth?: number | string;
  disabled?: boolean;
  /** Action props */
  onButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Button2 = ({
  size = "Default",
  state = "Default",
  variant = "Default",
  buttonBackgroundColor,
  button,
  buttonWidth,
  iconCircle,
  iconCircle1,
  onButtonPress,
  disabled,
}: Button2Type) => {
  const button1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
    };
  }, [buttonBackgroundColor]);

  const button2Style = useMemo(() => {
    return {
      ...getStyleValue("width", buttonWidth),
    };
  }, [buttonWidth]);

  return (
    <Pressable style={[styles.button, button1Style]} onPress={onButtonPress} disabled={disabled}>
      {iconCircle && <View style={styles.iconCircle}>{iconCircle}</View>}
      <Text style={[styles.button2, button2Style]}>{button}</Text>
      {iconCircle1 && <View style={styles.buttonIconCircle}>{iconCircle1}</View>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_12,
    backgroundColor: Color.primary500Default,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_12,
    gap: Gap.gap_8,
    alignItems: "center",
    minHeight: Height.height_58,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconCircle: {
    width: Width.width_24,
    height: Height.height_24,
    display: "none",
  },
  button2: {
    height: Height.height_38,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.baloo2Medium,
    color: Color.neutral0,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
  buttonIconCircle: {
    width: Width.width_24,
    height: Height.height_24,
    display: "none",
  },
});

export default Button2;