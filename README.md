# React Native Video App

A React Native (TypeScript) application demonstrating a minimal, production-style video streaming flow with native playback.

---

## Overview

This project implements a three-screen video experience:

- **Home:** Catalogue list of videos (FlatList)
- **Details:** Title, synopsis, and a Play button
- **Player:** Fullscreen native video player (ExoPlayer on Android)

---

## What I've Achieved

- Designed and implemented a clean, production-style RN app focusing on core video playback flow
- Integrated native video playback (ExoPlayer) via a **custom RN bridge**, not `react-native-video`
- Implemented navigation flow from catalogue → details → player
- Built a minimal, intuitive UI with working **play/pause**, **seek**, **resume**, and time updates (every 1000ms)
- Added **mute/unmute** button and **subtitle toggle placeholder** for extensibility
- Implemented **auto-hide controls** for immersive playback experience
- Added **resume/continue watching** support using persistent progress tracking

---

## Tech Stack

- React Native (TypeScript)
- React Navigation for screen-to-screen navigation
- NativeWind for styling (Tailwind CSS for RN)
- Custom Native Module (Android):
  - `ExoPlayerViewManager` for ExoPlayer 3 integration
  - Exposes props: `source`, `paused`, `seekTime`, `startTime`, `mute`
  - Emits events: `onProgress`, `onPlaybackStateChanged`, `onIsPlayingChanged`, `onLoad`
- State Handling: Local state + navigation params

---

## Platform Notes

- **Android:** Fully functional using custom ExoPlayer native bridge
- **iOS:** AVPlayer bridge not implemented due to no macOS build environment
  - A placeholder is rendered on iOS to avoid crashes
  - JS code is platform-agnostic, allowing easy AVPlayer integration later

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you encounter issues running or building the project, start with the official [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---

### Android Build Issues

If the app fails to build or install using `npm run android`, try the following:

1. **Clean and rebuild the Android project manually**

   - Open the `android/` folder in **Android Studio**
   - Sync Gradle files, then choose **Build → Clean Project** followed by **Build → Rebuild Project**
   - Once the build succeeds, return to the root folder and run:

   ```sh
   npm run android

   ```

2. **Build from the command line**
   ```sh
   cd android
   ./gradlew clean assembleDebug
   cd ..
   npm run android
   ```

---

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
