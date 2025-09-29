import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Svg, Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent1 from "../components/GroupComponent1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Button2 from "../components/Button2";
import {
  Width,
  Color,
  Border,
  Height,
  FontFamily,
  BoxShadow,
  Gap,
  Padding,
  FontSize,
} from "../GlobalStyles";

// IconCircle1 SVG Component - large white circle
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

// IconCircle2 SVG Component - smaller light circle  
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

const AgeVerification1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.ageVerification1}
      contentContainerStyle={styles.ageVerification1Content}
    >
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <FrameComponent3 />
        </View>
        <GroupComponent1 />
        <Pressable
          style={styles.frameContainer}
          onPress={() => navigation.navigate("AgeVerificationKidSelection1" as never)}
        >
          <View style={styles.frameChildLayout}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={styles.childDetails}>
              <View style={styles.gluki311Wrapper}>
                <Image
                  style={styles.gluki311}
                  contentFit="cover"
                  source={require("../assets/gluki-3-1-11.png")}
                />
              </View>
              <View style={styles.childDescription}>
                <Text style={[styles.imAKid, styles.imAKidTypo]}>
                  I'm a kid using GLUKI
                </Text>
                <Text style={[styles.imUnder18, styles.imAKidTypo]}>
                  I'm under 18 years old
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.buttonWrapper, styles.buttonLayout]}>
        <View style={[styles.button, styles.buttonLayout]}>
          <Button2
            buttonBackgroundColor="#a6acb3"
            button="Continue"
            buttonWidth={98}
            iconCircle={<IconCircle1 width={24} height={24} />}
            iconCircle1={<IconCircle2 width={16} height={16} />}
            onButtonPress={() => {/* TODO: Add navigation logic */}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ageVerification1Content: {
    flexDirection: "column",
    paddingHorizontal: 26,
    paddingTop: 68,
    paddingBottom: 44,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 63,
    height: 852,
  },
  frameLayout: {
    zIndex: 1,
    width: 323,
  },
  frameChildLayout: {
    borderWidth: 2,
    borderColor: Color.neutral200,
    borderStyle: "solid",
    borderRadius: Border.br_20,
    left: 0,
    top: 0,
    position: "absolute",
    height: Height.height_216_09,
    width: Width.width_305,
    backgroundColor: Color.neutral0,
  },
  imAKidTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  buttonLayout: {
    height: Height.height_58,
    flexDirection: "row",
  },
  ageVerification1: {
    width: "100%",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    flex: 1,
    maxWidth: "100%",
    backgroundColor: Color.neutral0,
  },
  frameParent: {
    height: 619,
    alignItems: "flex-end",
    gap: 29,
  },
  frameWrapper: {
    height: Height.height_127,
    justifyContent: "flex-end",
    paddingRight: 2,
    flexDirection: "row",
  },
  frameContainer: {
    height: Height.height_216_09,
    elevation: 15.4,
    boxShadow: BoxShadow.shadow_drop1,
    width: Width.width_305,
  },
  frameChild: {
    display: "none",
  },
  childDetails: {
    top: 18,
    left: 22,
    width: Width.width_258,
    height: 180,
    justifyContent: "space-between",
    gap: Gap.gap_0,
    alignItems: "center",
    position: "absolute",
  },
  gluki311Wrapper: {
    paddingHorizontal: Padding.padding_26,
    paddingVertical: Padding.padding_22,
    alignItems: "center",
    flexDirection: "row",
  },
  gluki311: {
    width: Width.width_60,
    height: 78,
  },
  childDescription: {
    justifyContent: "center",
    gap: Gap.gap_8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imAKid: {
    fontSize: FontSize.fs_22,
    color: Color.primary900,
  },
  imUnder18: {
    fontSize: FontSize.fs_16,
    color: Color.neutral500,
  },
  buttonWrapper: {
    width: 348,
    paddingLeft: Padding.padding_6,
  },
  button: {
    width: Width.width_342,
  },
});

export default AgeVerification1;
