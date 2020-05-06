# RNGalaxy

This is a collection of my best practice for architecting and building awesome (large, robust and maintainable) React Native App.

The following topics will be fully discussed in the wiki pages and explain why it's important and best practice in a React Native project.

## 1. Integrate `module resolver` in your app

Run `yarn add babel-plugin-module-resolver` and config you alias in `babel.config.js`. Easy to solve the deep dependencies.

## 2. Use `react-native debugger`

Integrate `react-native debugger` into the project, then it will be easy to debug the actions and states. Best dev debug tool for React Native.

## 3. Debug the released React Native app

- [ ] Using Javascript dev tools in safari and set break point in bundle.js.

## 4. Deep understanding redux

- [ ] Why redux?
- [ ] How redux works?
- [ ] Are there any other frameworks can be used?
- [ ] Source code analysing.

## 5. Deep understing RxJS (redux-observalble)

- [ ] The magic and power in RxJS (async actions).
- [ ] Why it may be the best state managment library.
- [ ] [async redux middleware comparision](https://sandstorm.de/de/blog/post/async-redux-middleware-comparison.html)
- [ ] Common use cases, common operators.

## 6. Using Styled Components to build UI components and pages

- [ ] How styled-components make you UI and styles clean?
- [ ] Comparing with style-sheet, why it is the best practice?
- [ ] The power for styled-components to build reuseble components

## 7. Build a notification service with Firebase

- [ ] Using react-native-firebase and integrate firbase into Node.js to build whole a notification system
- [ ] Config tips and the difference between foreground and background notification.
- [ ] react-native-push-notification

## 7. Common use cases for the third part libraries

- [ ] react-native-camera
- [ ] react-native-maps
- [ ] react-native-device-info
- [ ] lottie-react-native (animation)
- [ ] react-native-vector-icons
- [ ] react-native-permissions (have a problem when publish the app on iOS)
- [ ] react-native-linear-gradient (provide a customized component to use it)
- [ ] react-native-keychain
- [ ] react-native-picker (note the different behavior on iOS and android)
- [ ] react-native-tab-view
- [ ] react-native-slider
- [ ] react-native-image-picker
- [ ] react-native-image-editor
- [ ] react-native-blur
- [ ] react-native-share
- [ ] react-navigation
- [ ] react-native-elements
- [ ] react-native-touch-id
- [ ] react-navigation-redux-helpers
- [ ] redux-form
- [ ] react-native-swiper

## 8. Using reselct with redux

- [ ] Why reselct is powerful and valuble to the project?
- [ ] How to use it?

## 9. Life time for the app and react components

- [ ] Life time for the app (iOS, android).
- [ ] Life time for the components.

## 10. Store specific states in the local storage

- [ ] How to store specific states in the cache?
- [ ] How to config the redux to do it?

## 11. Components-Based dvelopment (CBD)

- [ ] How to use react-redux, RxJS to build reusable components. (It's not only a simple componente but also can be a complex product logic contains many pages which can be reused in multi cases)

## 13. The new architecture for iOS part

- [ ] [Using cocoapods to manage native dependencies](https://sandstorm.de/de/blog/post/react-native-managing-native-dependencies-using-xcode-and-cocoapods.html)

## 14. Animations in React Native

- [ ] [Animation libs in React Native](https://blog.bitsrc.io/top-5-animation-libraries-in-react-native-d00ec8ddfc8d)

## 15. Using TypeScript

- [ ] [Migrate to TypesSript](https://blog.usejournal.com/migrating-a-flow-react-native-app-to-typescript-c74c7bceae7d)
- [ ] [Flow or TypeScript](https://areknawo.com/typescript-vs-flow-with-react-in-the-background/)

## 16. Integrating app analytics tool: Mixpanel

- [ ] Using react-native-mixpanel
- [ ] Send actions with epics

## 17. Localisation

- [ ] [Using i18n](https://medium.com/@nicolas.kovacs/react-native-localize-and-i18n-js-117f09428017)

## * Common debug errors

- [ ] List of common errors when developing and debugging React Native app.
- [ ] Many problems related to specific React Native version.

## * Using GraphQL in React Native

- [GraphQL in React Native](https://pusher.com/tutorials/learning-graphql-react-native)
- [Apollo docs](https://www.apollographql.com/docs/react/integrations/react-native/)
- [Client server](https://hasura.io/learn/graphql/react-native/introduction/)
