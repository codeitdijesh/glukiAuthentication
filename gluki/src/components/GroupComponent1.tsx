import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  Height,
  Width,
  BoxShadow,
  FontFamily,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

const GroupComponent1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable 
      style={[styles.rectangleParent, styles.frameChildLayout]}
      onPress={() => navigation.navigate("PrivacyPolicyTC")}
    >
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={styles.frameParent}>
        <View style={styles.gluki311Parent}>
          <Image
            style={styles.gluki311}
            contentFit="cover"
            source={require("../assets/gluki-3-1-11.png")}
          />
          <Image
            style={styles.glukiHappy2Icon}
            contentFit="cover"
            source={require("../assets/Gluki-Happy-2.png")}
          />
        </View>
        <View style={styles.adultDescription}>
          <Text style={[styles.imAnAdult, styles.imAnAdultTypo]}>
            I'm an adult
          </Text>
          <Text style={[styles.parentOrCaregiver, styles.imAnAdultTypo]}>
            Parent or caregiver over the age of 18
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    borderWidth: 2,
    borderColor: Color.neutral200,
    borderStyle: "solid",
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_20,
    height: Height.height_217,
    width: Width.width_305,
  },
  imAnAdultTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    flexDirection: "row",
    paddingHorizontal: Padding.padding_22,
    paddingTop: Padding.padding_18,
    paddingBottom: 23,
    elevation: 15.4,
    boxShadow: BoxShadow.shadow_drop1,
  },
  frameChild: {
    display: "none",
  },
  frameParent: {
    width: Width.width_258,
    height: 176,
    justifyContent: "space-between",
    gap: Gap.gap_0,
    alignItems: "center",
  },
  gluki311Parent: {
    width: 119,
    height: Height.height_94,
  },
  gluki311: {
    top: 37,
    left: 75,
    width: 44,
    height: 57,
    position: "absolute",
  },
  glukiHappy2Icon: {
    top: 0,
    left: 0,
    width: 83,
    zIndex: 1,
    position: "absolute",
    height: Height.height_94,
  },
  adultDescription: {
    justifyContent: "center",
    gap: Gap.gap_8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imAnAdult: {
    fontSize: FontSize.fs_22,
    color: Color.primary900,
    alignSelf: "stretch",
  },
  parentOrCaregiver: {
    width: Width.width_194,
    fontSize: FontSize.fs_16,
    color: Color.neutral500,
  },
});

export default GroupComponent1;
