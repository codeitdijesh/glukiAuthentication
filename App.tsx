import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './src/context/AuthContext';

// Screens
import Onboarding1 from './src/screens/Onboarding1';
import AgeVerification1 from './src/screens/AgeVerification1';
import AgeVerificationKidSelection1 from './src/screens/AgeVerificationKidSelection1';
import PrivacyPolicyTC from './src/screens/PrivacyPolicyTC';
import CreateAccount from './src/screens/CreateAccount';
import AccountInfo from './src/screens/AccountInfo';
import AccountSetupComplete from './src/screens/AccountSetupComplete';
import Login1 from './src/screens/Login1';

export type RootStackParamList = {
  Onboarding1: undefined;
  AgeVerification1: undefined;
  AgeVerificationKidSelection1: undefined;
  PrivacyPolicyTC: undefined;
  CreateAccount: undefined;
  AccountInfo: undefined;
  AccountSetupComplete: undefined;
  Login1: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Baloo2-Medium': require('./assets/fonts/Baloo2-Medium.ttf'),
    'Baloo2-Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
    'Fredoka-Regular': require('./assets/fonts/Fredoka-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AuthProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Onboarding1"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Onboarding1" component={Onboarding1} />
              <Stack.Screen name="AgeVerification1" component={AgeVerification1} />
              <Stack.Screen name="AgeVerificationKidSelection1" component={AgeVerificationKidSelection1} />
              <Stack.Screen name="PrivacyPolicyTC" component={PrivacyPolicyTC} />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
              <Stack.Screen name="AccountInfo" component={AccountInfo} />
              <Stack.Screen name="AccountSetupComplete" component={AccountSetupComplete} />
              <Stack.Screen name="Login1" component={Login1} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
