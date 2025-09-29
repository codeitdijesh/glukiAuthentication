import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button1 from "./Button1";
import {
  Padding,
  Border,
  Height,
  FontSize,
  Color,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAccountContainerWrapper}>
      <View style={styles.createAccountContainer}>
        <Button1
          size="Default"
          state="Default"
          variant="Default"
          onButtonPress={() => navigation.navigate("AgeVerification1" as never)}
          variant1="Default"
        />
        <TouchableOpacity 
          style={styles.loginContainer}
          onPress={() => navigation.navigate("Login1" as never)}
        >
          <Text style={styles.buttonAlreadyContainer}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account? `}</Text>
            <Text style={styles.login}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createAccountContainerWrapper: {
    width: 367,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_24,
    flexDirection: "row",
    height: 106,
  },
  createAccountContainer: {
    width: 343,
    height: 106,
  },
  loginContainer: {
    alignSelf: "stretch",
    borderRadius: Border.br_12,
    height: Height.height_48,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.padding_8,
    flexDirection: "row",
  },
  buttonAlreadyContainer: {
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
});

export default FrameComponent11;