import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import {
  Width,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
  Height,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

// WarningCircle SVG Component
const WarningCircle = ({ style, width = 28, height = 28 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" style={style}>
    <Path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm0 6c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6c0-.8.7-1.5 1.5-1.5zm0 14c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#D84D52"/>
  </Svg>
);

export type ErrorMessage1Type = {
  showErrorMessage?: boolean;

  /** Style props */
  errorMessageBorderStyle?: string;
  errorMessageBorderColor?: string;
  errorMessageBorderWidth?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ErrorMessage1 = ({
  showErrorMessage,
  errorMessageBorderStyle,
  errorMessageBorderColor,
  errorMessageBorderWidth,
}: ErrorMessage1Type) => {
  const errorMessageStyle = useMemo(() => {
    return {
      ...getStyleValue("borderStyle", errorMessageBorderStyle),
      ...getStyleValue("borderColor", errorMessageBorderColor),
      ...getStyleValue("borderWidth", errorMessageBorderWidth),
    };
  }, [
    errorMessageBorderStyle,
    errorMessageBorderColor,
    errorMessageBorderWidth,
  ]);

  return (
    !!showErrorMessage && (
      <View
        style={[
          styles.errorMessage,
          styles.errorMessageFlexBox,
          errorMessageStyle,
        ]}
      >
        <View style={[styles.warningcircleParent, styles.errorMessageFlexBox]}>
          <WarningCircle
            style={styles.warningcircleIcon}
            width={Width.width_28}
            height={Height.height_28}
          />
          <Text style={styles.yourPasswordNeeds}>
            Your password needs 8+ characters with at least 1 letter, 1 number,
            and 1 symbol (!, #, ?, *)
          </Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  errorMessageFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  errorMessage: {
    width: Width.width_344,
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 11.7,
    borderRadius: Border.br_16,
    backgroundColor: Color.neutral0,
    justifyContent: "center",
    padding: Padding.padding_12,
  },
  warningcircleParent: {
    gap: Gap.gap_10,
    flex: 1,
  },
  warningcircleIcon: {
    width: Width.width_28,
    height: Height.height_28,
  },
  yourPasswordNeeds: {
    fontSize: FontSize.fs_14,
    lineHeight: LineHeight.lh_24,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorBlack,
    textAlign: "left",
    flex: 1,
  },
});

export default ErrorMessage1;
