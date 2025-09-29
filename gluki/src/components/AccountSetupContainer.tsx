import * as React from "react";
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { useAuth } from "../context/AuthContext";
import Button2 from "./Button2";
import {
  FontSize,
  FontFamily,
  Padding,
  Color,
  Border,
  Width,
  Gap,
  LineHeight,
  Height,
} from "../GlobalStyles";

const AccountSetupContainer = () => {
  const navigation = useNavigation();
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const allFieldsFilled = email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "" && name.trim() !== "";

  const handleCreateAccount = async () => {
    setError("");
    setIsLoading(true);

    // Validation
    if (!allFieldsFilled) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    try {
      await signUp({
        email: email.trim(),
        password,
        firstName: name.trim(),
        lastName: "" // Leave lastName empty since we only collect one name field
      });
      
      // Navigate to next screen after successful signup
      console.log("Navigating to AccountInfo");
      Alert.alert("Account created successfully");
      navigation.navigate("AccountInfo" as never);
    } catch (error: any) {
      setError(error.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const eyeIconSvg = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6912 11.6963C23.6584 11.6222 22.8643 9.86062 21.099 8.09531C18.7468 5.74312 15.7759 4.5 12.5059 4.5C9.23585 4.5 6.26491 5.74312 3.91273 8.09531C2.14741 9.86062 1.3496 11.625 1.32054 11.6963C1.27789 11.7922 1.25586 11.896 1.25586 12.0009C1.25586 12.1059 1.27789 12.2097 1.32054 12.3056C1.35335 12.3797 2.14741 14.1403 3.91273 15.9056C6.26491 18.2569 9.23585 19.5 12.5059 19.5C15.7759 19.5 18.7468 18.2569 21.099 15.9056C22.8643 14.1403 23.6584 12.3797 23.6912 12.3056C23.7338 12.2097 23.7558 12.1059 23.7558 12.0009C23.7558 11.896 23.7338 11.7922 23.6912 11.6963ZM12.5059 18C9.62023 18 7.09929 16.9509 5.01241 14.8828C4.15614 14.0313 3.42765 13.0603 2.8496 12C3.4275 10.9396 4.156 9.9686 5.01241 9.11719C7.09929 7.04906 9.62023 6 12.5059 6C15.3915 6 17.9124 7.04906 19.9993 9.11719C20.8572 9.9684 21.5873 10.9394 22.1668 12C21.4909 13.2619 18.5462 18 12.5059 18ZM12.5059 7.5C11.6158 7.5 10.7458 7.76392 10.0058 8.25839C9.26576 8.75285 8.68899 9.45566 8.34839 10.2779C8.0078 11.1002 7.91868 12.005 8.09232 12.8779C8.26595 13.7508 8.69453 14.5526 9.32387 15.182C9.95321 15.8113 10.755 16.2399 11.6279 16.4135C12.5009 16.5872 13.4057 16.4981 14.2279 16.1575C15.0502 15.8169 15.753 15.2401 16.2475 14.5001C16.7419 13.76 17.0059 12.89 17.0059 12C17.0046 10.8069 16.5301 9.66303 15.6865 8.81939C14.8428 7.97575 13.6989 7.50124 12.5059 7.5ZM12.5059 15C11.9125 15 11.3325 14.8241 10.8391 14.4944C10.3458 14.1648 9.96127 13.6962 9.73421 13.148C9.50715 12.5999 9.44774 11.9967 9.56349 11.4147C9.67925 10.8328 9.96497 10.2982 10.3845 9.87868C10.8041 9.45912 11.3386 9.1734 11.9206 9.05764C12.5025 8.94189 13.1057 9.0013 13.6539 9.22836C14.2021 9.45542 14.6706 9.83994 15.0003 10.3333C15.3299 10.8266 15.5059 11.4067 15.5059 12C15.5059 12.7956 15.1898 13.5587 14.6272 14.1213C14.0646 14.6839 13.3015 15 12.5059 15Z" fill="#9EA1A6"/>
</svg>`;

  return (
    <View style={styles.accountSetupContainer}>
      <Text style={styles.letsSetUp}>Let's set up your account!</Text>
      <View style={styles.inputFieldsContainer}>
        <View style={styles.inputFields}>
          <View style={styles.accountSetupContainerInputFields}>
            <TextInput
              style={[styles.inputEmail, styles.passwordTypo]}
              placeholder="Name"
              placeholderTextColor="#a6acb3"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
            <TextInput
              style={[styles.inputEmail, styles.passwordTypo]}
              placeholder="Email"
              placeholderTextColor="#a6acb3"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={[styles.inputPassword, styles.inputBorder]}>
              <View style={styles.wrapper}>
                <TextInput
                  style={[styles.password, styles.passwordTypo]}
                  placeholder="Password"
                  placeholderTextColor="#a6acb3"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <SvgXml xml={eyeIconSvg} width={20} height={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.inputPassword, styles.inputBorder]}>
              <View style={styles.wrapper}>
                <TextInput
                  style={[styles.password, styles.passwordTypo]}
                  placeholder="Confirm Password"
                  placeholderTextColor="#a6acb3"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <SvgXml xml={eyeIconSvg} width={20} height={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}
          <View style={styles.button}>
            <Button2
              buttonBackgroundColor={allFieldsFilled && !isLoading ? Color.primary500Default : "#a6acb3"}
              button={isLoading ? "Creating Account..." : "Create Account"}
              buttonWidth={164}
              onButtonPress={handleCreateAccount}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  inputBorder: {
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.neutral400,
    borderStyle: "solid",
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_12,
    width: Width.width_345,
    flexDirection: "row",
    alignItems: "center",
  },
  accountSetupContainer: {
    width: Width.width_344,
    height: 428,
    gap: Gap.gap_48,
    alignItems: "center",
  },
  letsSetUp: {
    width: 273,
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  inputFieldsContainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputFields: {
    gap: 42,
    alignSelf: "stretch",
  },
  accountSetupContainerInputFields: {
    gap: Gap.gap_32,
    alignSelf: "stretch",
  },
  inputEmail: {
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.neutral400,
    borderStyle: "solid",
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_12,
    width: Width.width_345,
    flexDirection: "row",
    alignItems: "center",
  },
  inputPassword: {
    gap: Gap.gap_36,
  },
  wrapper: {
    flexDirection: "row",
    flex: 1,
  },
  password: {
    flex: 1,
    height: Height.height_24,
  },
  button: {
    width: Width.width_342,
    height: Height.height_58,
    flexDirection: "row",
  },
  eyeIcon: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#d84d52",
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "center",
    marginTop: 8,
  },
});

export default AccountSetupContainer;
