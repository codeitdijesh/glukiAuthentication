import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import {
  FontFamily,
  LineHeight,
  Color,
  BoxShadow,
  Padding,
  Width,
  Height,
  FontSize,
  Gap,
} from "../GlobalStyles";

const PrivacyPolicyTC = () => {
  const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.privacyPolicyTc}
      contentContainerStyle={styles.privacyPolicyTCContent}
    >
      <View style={styles.privacyPolicyTcInner}>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.caretleftParent}>
              <View style={styles.safetyFirstWrapper}>
                <Text style={styles.safetyFirst}>Safety First!</Text>
              </View>
            </View>
            <View
              style={[
                styles.pleaseReviewThePrivacyPoliWrapper,
                styles.frameWrapperLayout,
              ]}
            >
              <Text style={[styles.pleaseReviewThe, styles.iHaveReadTypo]}>
                Please review the Privacy Policy and Terms and Conditions
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleWrapper, styles.frameParentLayout]}>
            <View style={styles.frameChild} />
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.frameContainer, styles.frameWrapperLayout]}>
              <View style={[
                styles.wrapper,
                frameCheckboxchecked && styles.checkedWrapper
              ]}>
                <Checkbox
                  status={frameCheckboxchecked ? "checked" : "unchecked"}
                  onPress={() => setFrameCheckboxchecked(!frameCheckboxchecked)}
                  color={Color.primary500Default}
                  uncheckedColor={Color.colorBlack}
                />
              </View>
              <Text style={[styles.iHaveRead, styles.iHaveReadTypo]}>
                I have read and agree with the Privacy Policy and Terms and
                Conditions
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Button1
        size="Default"
        state="Default"
        variant="Default"
        buttonAlignSelf="unset"
        buttonWidth={342}
        variant1="Default"
        buttonText="Accept & Continue"
        onButtonPress={() => navigation.navigate("CreateAccount" as never)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  privacyPolicyTCContent: {
    flexDirection: "column",
    paddingLeft: 26,
    paddingTop: 68,
    paddingRight: 32,
    paddingBottom: 46,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 63,
    height: 852,
  },
  frameParentLayout: {
    width: 346,
    zIndex: 1,
  },
  frameWrapperLayout: {
    height: 52,
    zIndex: 1,
    flexDirection: "row",
  },
  iHaveReadTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: LineHeight.lh_26,
    color: Color.colorBlack,
  },
  privacyPolicyTc: {
    width: "100%",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: Color.neutral0,
    flex: 1,
    maxWidth: "100%",
  },
  privacyPolicyTcInner: {
    width: 347,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_1,
    flexDirection: "row",
    height: 617,
  },
  frameParent: {
    gap: 27,
    zIndex: 1,
    height: 617,
  },
  frameGroup: {
    height: 150,
    paddingBottom: Padding.padding_6,
    gap: 21,
    width: 322,
    zIndex: 1,
  },
  caretleftParent: {
    height: 71,
    gap: 3,
    width: 253,
    zIndex: 1,
  },
  safetyFirstWrapper: {
    paddingLeft: 98,
    height: Height.height_36,
    width: 253,
    zIndex: 1,
    flexDirection: "row",
  },
  safetyFirst: {
    width: 158,
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    textAlign: "center",
    color: Color.colorBlack,
    height: Height.height_36,
  },
  pleaseReviewThePrivacyPoliWrapper: {
    paddingLeft: 28,
    width: 322,
  },
  pleaseReviewThe: {
    width: 294,
    fontSize: FontSize.fs_18,
    textAlign: "center",
  },
  rectangleWrapper: {
    paddingLeft: Padding.padding_6,
    height: 361,
    zIndex: 1,
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: 24,
    backgroundColor: Color.colorWhitesmoke,
    width: 340,
    height: 361,
  },
  frameWrapper: {
    paddingLeft: Padding.padding_1,
    width: 340,
  },
  frameContainer: {
    width: 339,
    gap: Gap.gap_12,
    alignItems: "flex-start",
  },
  wrapper: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderRadius: 4,
    backgroundColor: Color.neutral0,
  },
  iHaveRead: {
    width: 303,
    fontSize: FontSize.fs_16,
    textAlign: "left",
  },
  checkedWrapper: {
    backgroundColor: Color.primary500Default,
    borderColor: Color.primary500Default,
  },
});

export default PrivacyPolicyTC;
