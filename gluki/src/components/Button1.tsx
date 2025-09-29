import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button2 from "./Button2";
import { Height } from "../GlobalStyles";

export type Button1Type = {
  variant1?: string;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;

  /** Style props */
  buttonAlignSelf?: string;
  buttonWidth?: number | string;

  /** Action props */
  onButtonPress?: () => void;
  buttonText?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Button1 = ({
  size = "Default",
  state = "Default",
  variant = "Default",
  onButtonPress,
  buttonAlignSelf,
  buttonWidth,
  variant1,
  buttonText = "Create an Account",
}: Button1Type) => {
  const button3Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", buttonAlignSelf),
      ...getStyleValue("width", buttonWidth),
    };
  }, [buttonAlignSelf, buttonWidth]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.button, button3Style]}>
      <Button2
        size="Default"
        state="Default"
        variant={variant1}
        button={buttonText}
        iconCircle={null}
        iconCircle1={null}
        onButtonPress={onButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    height: Height.height_58,
    flexDirection: "row",
  },
});

export default Button1;