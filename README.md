# GLUKI React Native Expo App

# Download the googleservice-info.plist file from firebase console to connect with the database


## Features

- **Age Verification**: Two-path verification for adults and kids
- **Adult Flow**: Privacy policy → Create account → Account info → Setup complete
- **Kid Flow**: Age verification with kid-specific messaging
- **React Navigation**: Stack-based navigation with proper flow control
- **TypeScript**: Fully typed components and navigation

## Navigation Flow

1. **Onboarding** → Age verification selection
2. **Age Verification** → Two options:
   - **Adult**: Privacy Policy → Create Account → Account Info → Setup Complete
   - **Kid**: Kid selection warning → Go back to age verification

## Installation

```bash
# Install dependencies
npm install

# Run on different platforms
npm run android    # Android
npm run ios        # iOS (macOS required)
npm run web        # Web
```

## Project Structure

```
src/
├── screens/           # All screen components
│   ├── Onboarding1.tsx
│   ├── AgeVerification1.tsx
│   ├── AgeVerificationKidSelection.tsx
│   ├── AgeVerificationKidSelection1.tsx
│   ├── PrivacyPolicyTC.tsx
│   ├── CreateAccount.tsx
│   ├── AccountInfo.tsx
│   └── AccountSetupComplete.tsx
├── components/        # Reusable components
│   ├── Button1.tsx
│   ├── Button2.tsx
│   ├── FrameComponent11.tsx
│   ├── FrameComponent3.tsx
│   ├── GroupComponent1.tsx
│   └── AccountSetupContainer.tsx
├── assets/           # Images and static assets
└── GlobalStyles.ts   # Shared styles and constants
```


## Running the App

1. Make sure you have Expo CLI installed globally
2. Run `npm start` to start the development server
3. Use Expo Go app on your device or run on simulators

## Asset Requirements

The following image assets need to be added to `src/assets/`:
- gluki-3-1-1.png (Onboarding mascot)
- gluki-3-1-11.png (Age verification adult)
- Gluki-Happy-2.png (Happy mascot overlay)
- gluki-3-1-13.png (Kid selection)
- gluki-6-1.png (Kid warning page)
- gluki-3-1-14.png (Setup complete)
