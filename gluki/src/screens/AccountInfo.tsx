import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Svg, Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg";
import Button2 from "../components/Button2";
import { useAuth } from "../context/AuthContext";
import firestoreService from "../services/firestoreService";
import {
  FontFamily,
  LineHeight,
  FontSize,
  Padding,
  Color,
  Gap,
  BoxShadow,
  Width,
  Height,
  Border,
} from "../GlobalStyles";

// Ellipse-1603 SVG Component - Sky background
const Ellipse1603 = ({ style, width = 773, height = 773 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 773 773" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_553_6774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(386.5 386.5) rotate(90) scale(386.5)">
        <Stop stopColor="#A3DCEB" />
        <Stop offset="1" stopColor="white" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="386.5" r="386.5" fill="url(#paint0_radial_553_6774)" />
  </Svg>
);

// Vector-2566 SVG Component - Cloud 1
const Vector2566 = ({ style, width = 188, height = 67 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 188 67" style={style}>
    <Path 
      d="M112.087 24.8656C96.0929 -21.2999 30.7804 5.36236 39.4464 36.0243C9.45624 21.361 -9.42536 52.6371 4.86602 66.8573C48.6291 67.746 186.805 64.1934 186.805 64.1934C186.805 64.1934 196.726 31.3578 159.405 44.0235C159.405 0.830683 126.527 14.8675 112.087 24.8656Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

// Vector-2565 SVG Component - Cloud 2
const Vector2565 = ({ style, width = 142, height = 56 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 142 56" style={style}>
    <Path 
      d="M74.5577 15.1278C50.1577 -16.0722 22.0567 8.12994 28.057 24.1293C0.0572872 19.1299 -5.66526 44.9612 5.05688 55.6282C37.8902 56.2948 141.557 53.6299 141.557 53.6299C141.557 53.6299 136.059 15.1277 107.058 33.1282C107.058 0.728153 85.3911 7.6279 74.5577 15.1278Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

const AccountInfo = () => {
  const navigation = useNavigation();
  const { user, refreshUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [diagnosisDate, setDiagnosisDate] = useState("");
  const [loading, setLoading] = useState(false);

  const allFieldsFilled = name.trim() !== "" && age.trim() !== "" && diagnosisDate.trim() !== "";

  const validateInputs = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Please enter the child's name");
      return false;
    }
    
    const ageNum = parseInt(age);
    if (!age.trim() || isNaN(ageNum) || ageNum < 1 || ageNum > 18) {
      Alert.alert("Error", "Please enter a valid age between 1 and 18");
      return false;
    }
    
    // Basic date format validation (MM/DD/YYYY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!diagnosisDate.trim() || !dateRegex.test(diagnosisDate.trim())) {
      Alert.alert("Error", "Please enter a valid diagnosis date in MM/DD/YYYY format");
      return false;
    }
    
    return true;
  };

  const handleSaveAccountInfo = async () => {
    if (!user) {
      Alert.alert("Error", "No user found. Please log in again.");
      return;
    }

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    
    try {
      await firestoreService.updateAccountInfo(user.uid, {
        childName: name.trim(),
        age: age.trim(),
        diagnosisDate: diagnosisDate.trim(),
      });

      // Refresh user profile to get updated data
      await refreshUserProfile();

      Alert.alert(
        "Success", 
        "Account information saved successfully!",
        [{ text: "OK", onPress: () => navigation.navigate("Dashboard" as never) }]
      );
    } catch (error) {
      console.error("Error saving account info:", error);
      Alert.alert("Error", "Failed to save account information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.accountInfoFlexBox}>
      <KeyboardAvoidingView
        style={styles.accountInfoFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../assets/Background.svg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.accountInfoScrollViewContent}
          >
            <View style={styles.backgroundParent}>
              <Ellipse1603 style={styles.frameChild} width={773} height={773} />
              <Vector2566
                style={[styles.frameItem, styles.framePosition]}
                width={188}
                height={67}
              />
              <Vector2565
                style={[styles.frameInner, styles.framePosition]}
                width={142}
                height={56}
              />
              <View style={styles.accountInfoContainerWrapper}>
            <View style={styles.accountInfoContainer}>
              <View style={styles.accountInfoContainer2}>
                <View style={styles.accountInfoContainer3}>
                  <View style={styles.accountInfoHeading}>
                    <Text style={styles.accountInformation}>
                      Account Information
                    </Text>
                    <Text style={[styles.createYourGluki, styles.nameTypo]}>
                      Create your GLUKI profile
                    </Text>
                  </View>
                  <View style={styles.inputFieldsContainer}>
                    <View style={styles.inputFlexBox}>
                      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                      <TextInput
                        style={[styles.input, styles.inputBorder]}
                        placeholder="Child's Name"
                        placeholderTextColor="#9ea1a7"
                        value={name}
                        onChangeText={setName}
                        autoComplete="off"
                        autoCorrect={false}
                        autoCapitalize="words"
                        selectionColor="#007AFF"
                      />
                    </View>
                    <View style={[styles.ageInputField, styles.inputFlexBox]}>
                      <Text style={[styles.name, styles.nameTypo]}>Age</Text>
                      <TextInput
                        style={[styles.input, styles.inputBorder]}
                        placeholder="Age"
                        placeholderTextColor="#9ea1a7"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                      />
                    </View>
                    <View style={styles.inputFlexBox}>
                      <Text style={[styles.name, styles.nameTypo]}>
                        When were you diagnosed with Type 1 Diabetes?
                      </Text>
                      <TextInput
                        style={[styles.input, styles.inputBorder]}
                        placeholder="MM/DD/YYYY"
                        placeholderTextColor="#9ea1a7"
                        value={diagnosisDate}
                        onChangeText={setDiagnosisDate}
                        autoComplete="off"
                        autoCorrect={false}
                        selectionColor="#007AFF"
                      />
                    </View>
                  </View>
                  <View style={styles.button}>
                    <Button2
                      buttonBackgroundColor={allFieldsFilled && !loading ? Color.primary500Default : "#a6acb3"}
                      button={loading ? "Saving..." : "Finish Setup"}
                      buttonWidth="100%"
                      onButtonPress={allFieldsFilled && !loading ? handleSaveAccountInfo : undefined}
                    />
                  </View>
                </View>
              </View>
            </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  accountInfoScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 46,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
  },
  nameTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: LineHeight.lh_26,
    fontSize: FontSize.fs_20,
    alignSelf: "stretch",
  },
  inputBorder: {
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: "white",
  },
  inputFlexBox: {
    gap: Gap.gap_12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  accountInfoFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 31,
    maxWidth: "100%",
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
  },
  backgroundParent: {
    position: "relative",
    width: Width.width_404,
    height: 852,
    zIndex: 1,
  },
  frameChild: {
    top: -337,
    left: -167,
    width: 773,
    height: 773,
    position: "absolute",
  },
  framePosition: {
    zIndex: 1,
    position: "absolute",
  },
  frameItem: {
    top: 145,
    left: 244,
    width: 188,
    height: 67,
  },
  frameInner: {
    top: 99,
    left: -27,
    width: 142,
    height: 56,
  },
  accountInfoContainerWrapper: {
    position: "absolute",
    top: 180,
    left: 24,
    width: 369,
    height: 624,
    zIndex: 2,
    flexDirection: "row",
  },
  accountInfoContainer: {
    width: Width.width_344,
    justifyContent: "space-between",
    alignItems: "center",
    height: 624,
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_12,
    borderWidth: 3,
    borderColor: Color.primary500Default,
    padding: Padding.padding_20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  accountInfoContainer2: {
    gap: 120,
    alignSelf: "stretch",
    alignItems: "center",
  },
  accountInfoContainer3: {
    gap: 24,
    alignSelf: "stretch",
  },
  accountInfoHeading: {
    gap: 4,
    alignSelf: "stretch",
    alignItems: "center",
  },
  accountInformation: {
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  createYourGluki: {
    color: Color.colorDimgray,
    textAlign: "center",
  },
  inputFieldsContainer: {
    gap: Gap.gap_36,
    alignSelf: "stretch",
  },
  name: {
    color: Color.neutral900,
    textAlign: "left",
  },
  input: {
    fontSize: FontSize.fs_16,
    borderRadius: Border.br_12,
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    backgroundColor: "white",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    color: Color.colorBlack,
  },
  ageInputField: {
    zIndex: 5000,
  },
  button: {
    width: 175,
    height: Height.height_58,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
});

export default AccountInfo;
