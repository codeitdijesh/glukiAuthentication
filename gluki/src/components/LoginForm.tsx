import * as React from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { Svg, Path } from "react-native-svg";
import ErrorMessage1 from "./ErrorMessage1";
import Button2 from "./Button2";
import {
  FontSize,
  FontFamily,
  Padding,
  Color,
  Border,
  Height,
  Gap,
  Width,
} from "../GlobalStyles";

// Eye SVG Component
const Eye = ({ style, width = 24, height = 24 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" style={style}>
    <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#9ea1a7"/>
  </Svg>
);

const LoginForm = () => {
  const navigation = useNavigation();
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const allFieldsFilled = email.trim() !== "" && password.trim() !== "";

  const handleLogin = async () => {
    if (!allFieldsFilled) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setError("");
      await signIn({ email: email.trim(), password });
      // Navigate to Dashboard after successful login
      navigation.navigate("Dashboard" as never);
    } catch (error: any) {
      setError(error.message || "Login failed. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Reset Password", "Please enter your email address first.");
      return;
    }

    try {
      const { resetPassword } = useAuth();
      await resetPassword(email.trim());
      Alert.alert(
        "Password Reset",
        "Password reset email sent! Please check your inbox."
      );
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to send reset email.");
    }
  };

  const handleCreateAccount = () => {
    // Navigate to create account screen
    navigation.navigate("CreateAccount" as never);
  };

  return (
    <View style={styles.loginForm}>
      <View style={styles.frameParent}>
        <View style={styles.inputParent}>
          <TextInput
            style={[styles.input, styles.inputTypo]}
            placeholder="Email"
            placeholderTextColor="#9ea1a7"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
          />
          <View style={styles.password}>
            <View style={[styles.loginFormInput, styles.inputBorder]}>
              <View style={styles.wrapper}>
                <TextInput
                  style={[styles.loginFormPassword, styles.inputTypo]}
                  placeholder="Password"
                  placeholderTextColor="#9ea1a7"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect={false}
                />
              </View>
              <TouchableOpacity 
                style={styles.eyeIconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Eye style={styles.eyeIcon} width={Width.width_24} height={Height.height_24} />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotArea}>
              <TouchableOpacity style={styles.forgotWrapper} onPress={handleForgotPassword}>
                <Text
                  style={[styles.forgotPassword, styles.forgotPasswordTypo]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <ErrorMessage1
              showErrorMessage={!!error}
              errorMessageBorderStyle="solid"
              errorMessageBorderColor="#d84d52"
              errorMessageBorderWidth={2}
            />
            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.password}>
          <Button2 
            button={loading ? "Signing in..." : "Login"}
            disabled={loading}
            buttonBackgroundColor={allFieldsFilled && !loading ? Color.primary500Default : Color.neutral300}
            onButtonPress={handleLogin}
          />
          <TouchableOpacity style={styles.forgotWrapper} onPress={handleCreateAccount}>
            <Text
              style={[styles.newToGlukiContainer, styles.forgotPasswordTypo]}
            >
              <Text style={styles.newToGlukiTypo}>{`New to GLUKI? `}</Text>
              <Text style={styles.createAnAccount}>Create an Account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTypo: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  inputBorder: {
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral0,
    alignItems: "center",
    borderRadius: Border.br_12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  forgotPasswordTypo: {
    textAlign: "left",
    color: Color.colorGray,
    textDecorationLine: "underline",
    height: Height.height_20,
    fontSize: FontSize.fs_16,
  },
  loginForm: {
    width: 376,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_24,
    flexDirection: "row",
    minHeight: 396,
  },
  frameParent: {
    width: 352,
    gap: 48,
    minHeight: 396,
  },
  inputParent: {
    gap: 32,
    alignSelf: "stretch",
  },
  input: {
    width: "100%",
    paddingVertical: Padding.padding_12,
    paddingHorizontal: Padding.padding_16,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.neutral0,
    alignItems: "center",
    borderRadius: Border.br_12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  password: {
    alignSelf: "stretch",
  },
  loginFormInput: {
    gap: Gap.gap_36,
  },
  wrapper: {
    flexDirection: "row",
    flex: 1,
  },
  loginFormPassword: {
    width: Width.width_259,
    height: Height.height_24,
  },
  eyeIconContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeIcon: {
    width: Width.width_24,
    height: Height.height_24,
  },
  forgotArea: {
    alignItems: "flex-end",
    paddingLeft: 207,
    paddingRight: Padding.padding_10,
    alignSelf: "stretch",
    marginTop: 8,
  },
  forgotWrapper: {
    minHeight: Height.height_48,
    justifyContent: "center",
    padding: Padding.padding_8,
    alignItems: "center",
    borderRadius: Border.br_12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  forgotPassword: {
    width: 138,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  newToGlukiContainer: {
    width: 262,
  },
  newToGlukiTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  createAnAccount: {
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  errorText: {
    color: "#d84d52",
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "center",
    marginTop: 8,
  },
});

export default LoginForm;
