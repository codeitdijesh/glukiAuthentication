import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Svg, Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg";
import { useAuth } from "../context/AuthContext";
import {
  FontFamily,
  LineHeight,
  FontSize,
  Padding,
  Color,
  Gap,
  Border,
} from "../GlobalStyles";

// Background SVG - Sky with clouds
const BackgroundSky = ({ style, width = 773, height = 773 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 773 773" style={style}>
    <Defs>
      <RadialGradient id="paint0_radial_dashboard" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(386.5 386.5) rotate(90) scale(386.5)">
        <Stop stopColor="#A3DCEB" />
        <Stop offset="1" stopColor="white" />
      </RadialGradient>
    </Defs>
    <Circle cx="386.5" cy="386.5" r="386.5" fill="url(#paint0_radial_dashboard)" />
  </Svg>
);

// Cloud SVG Component
const Cloud = ({ style, width = 188, height = 67 }: { style?: any, width?: number, height?: number }) => (
  <Svg width={width} height={height} viewBox="0 0 188 67" style={style}>
    <Path 
      d="M112.087 24.8656C96.0929 -21.2999 30.7804 5.36236 39.4464 36.0243C9.45624 21.361 -9.42536 52.6371 4.86602 66.8573C48.6291 67.746 186.805 64.1934 186.805 64.1934C186.805 64.1934 196.726 31.3578 159.405 44.0235C159.405 0.830683 126.527 14.8675 112.087 24.8656Z" 
      fill="white" 
      fillOpacity="0.9"
    />
  </Svg>
);

const Dashboard = () => {
  const navigation = useNavigation();
  const { user, userProfile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.navigate("Login1" as never);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/Background.svg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.backgroundContainer}>
          <BackgroundSky style={styles.backgroundSky} width={773} height={773} />
          <Cloud style={[styles.cloud1]} width={188} height={67} />
          <Cloud style={[styles.cloud2]} width={142} height={56} />
          
          <View style={styles.contentContainer}>
            <View style={styles.dashboardCard}>
              <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome to GLUKI!</Text>
                <Text style={styles.dashboardTitle}>Dashboard</Text>
                {userProfile?.childName && (
                  <Text style={styles.childName}>Hello, {userProfile.childName}! 👋</Text>
                )}
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Your Profile</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Email:</Text>
                  <Text style={styles.infoValue}>{user?.email}</Text>
                </View>
                {userProfile?.childName && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Name:</Text>
                    <Text style={styles.infoValue}>{userProfile.childName}</Text>
                  </View>
                )}
                {userProfile?.age && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Age:</Text>
                    <Text style={styles.infoValue}>{userProfile.age} years old</Text>
                  </View>
                )}
                {userProfile?.diagnosisDate && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Diagnosed:</Text>
                    <Text style={styles.infoValue}>{userProfile.diagnosisDate}</Text>
                  </View>
                )}
              </View>

              <View style={styles.featuresSection}>
                <Text style={styles.sectionTitle}>Coming Soon!</Text>
                <View style={styles.featureGrid}>
                  <View style={styles.featureCard}>
                    <Text style={styles.featureIcon}>🤖</Text>
                    <Text style={styles.featureText}>AI Chatbot</Text>
                  </View>
                  <View style={styles.featureCard}>
                    <Text style={styles.featureIcon}>🎮</Text>
                    <Text style={styles.featureText}>Games</Text>
                  </View>
                  <View style={styles.featureCard}>
                    <Text style={styles.featureIcon}>📊</Text>
                    <Text style={styles.featureText}>Tracking</Text>
                  </View>
                  <View style={styles.featureCard}>
                    <Text style={styles.featureIcon}>👨‍⚕️</Text>
                    <Text style={styles.featureText}>Support</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
                <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.neutral0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  backgroundContainer: {
    flex: 1,
    position: "relative",
  },
  backgroundSky: {
    position: "absolute",
    top: -337,
    left: -167,
    width: 773,
    height: 773,
  },
  cloud1: {
    position: "absolute",
    top: 145,
    right: 50,
    zIndex: 1,
  },
  cloud2: {
    position: "absolute",
    top: 99,
    left: -27,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    zIndex: 2,
  },
  dashboardCard: {
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_12,
    borderWidth: 3,
    borderColor: Color.primary500Default,
    padding: Padding.padding_24,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.primary500Default,
    marginBottom: 8,
  },
  dashboardTitle: {
    fontSize: FontSize.fs_28,
    lineHeight: LineHeight.lh_36,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  childName: {
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorDimgray,
    marginTop: 8,
    textAlign: "center",
  },
  infoSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.baloo2Bold,
    color: Color.colorBlack,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Color.neutral200,
  },
  infoLabel: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorDimgray,
  },
  infoValue: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  featuresSection: {
    marginBottom: 32,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  featureCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: Border.br_12,
    padding: 16,
    alignItems: "center",
    width: "45%",
    minHeight: 80,
    justifyContent: "center",
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureText: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorBlack,
    textAlign: "center",
  },
  signOutButton: {
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    alignSelf: "center",
  },
  signOutText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.neutral0,
    fontWeight: "500",
  },
});

export default Dashboard;
