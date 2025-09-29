import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Svg, Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg";
import FrameComponent21 from "../components/FrameComponent21";
import { BoxShadow, Color, Width, FontFamily } from "../GlobalStyles";

// Background3 SVG Component - Cloud background
const Background3 = ({ style, width = 773, height = 813 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 773 813" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_553_6927" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(386.5 406.5) rotate(90) scale(406.5)">
        <Stop stopColor="#A3DCEB" />
        <Stop offset="1" stopColor="white" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="406.5" r="386.5" fill="url(#paint0_radial_553_6927)" />
    <Path 
      d="M523.087 566.866C507.093 520.7 441.78 547.362 450.446 578.024C420.456 563.361 401.575 594.637 415.866 608.857C459.629 609.746 597.805 606.193 597.805 606.193C597.805 606.193 607.726 573.358 570.405 586.024C570.405 542.831 537.527 556.867 523.087 566.866Z" 
      fill="white" 
      fillOpacity="0.9"
    />
    <Path 
      d="M214.558 511.128C190.158 479.928 162.057 504.13 168.057 520.129C140.057 515.13 134.335 540.961 145.057 551.628C177.89 552.295 281.557 549.63 281.557 549.63C281.557 549.63 276.059 511.128 247.058 529.128C247.058 496.728 225.391 503.628 214.558 511.128Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

// Union SVG Component - Speech bubble
const Union = ({ style, width = 291, height = 152 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 291 152" style={style}>
    <Path 
      d="M20 0H271C281.493 0 290 8.50659 290 19V113C290 123.493 281.493 132 271 132H210L225 152L250 132H20C8.50659 132 0 123.493 0 113V19C0 8.50659 8.50659 0 20 0Z" 
      fill="white"
      stroke="#FFD700"
      strokeWidth="3"
    />
  </Svg>
);

const AccountSetupComplete = () => {
  const navigation = useNavigation();

  const handleTapAnywhere = () => {
    // Navigate to dashboard
    navigation.navigate("Dashboard" as never);
  };

  return (
    <Pressable style={styles.container} onPress={handleTapAnywhere}>
      <ScrollView
        style={styles.accountSetupComplete}
        contentContainerStyle={styles.accountSetupCompleteContent}
      >
        <View style={styles.frameParent}>
          <View style={styles.backgroundParent}>
            <Background3 style={styles.backgroundIcon} width={Width.width_773} height={813} />
            <Union style={styles.speechBubbleIcon} width={291} height={152} />
          </View>
          <Text style={styles.youreAllSet}>{`You're all set. \nLet's start learning!`}</Text>
        </View>
        <FrameComponent21 />
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  accountSetupCompleteContent: {
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 23,
    height: 852,
  },
  accountSetupComplete: {
    width: "100%",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
  },
  frameParent: {
    width: Width.width_404,
    height: 484,
    zIndex: 2,
    justifyContent: "flex-end",
    paddingLeft: 83,
    paddingTop: 369,
    paddingRight: 78,
    paddingBottom: 59,
  },
  backgroundParent: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  youreAllSet: {
    width: 245,
    height: 56,
    fontSize: 24,
    fontFamily: FontFamily.fredokaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    zIndex: 2,
  },
  container: {
    flex: 1,
  },
  backgroundIcon: {
    top: -377,
    left: -162,
    width: Width.width_773,
    height: 813,
    position: "absolute",
  },
  speechBubbleIcon: {
    top: 332,
    left: 60,
    width: 291,
    height: 152,
    zIndex: 1,
    position: "absolute",
  },
  continueContainer: {
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  mascotContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  gluki311: {
    width: 165,
    height: 207,
  },
  tapAnywhereTo: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.neutral500,
    textAlign: "center",
  },
  placeholderImage: {
    backgroundColor: '#e8f5e8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 64,
  },
});

export default AccountSetupComplete;
