import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  PixelRatio,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Example() {
  const [val, setVal] = useState("react-native");
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View>
          <Text>逻辑宽度：{Dimensions.get("window").width}</Text>
          <Text>屏幕像素比：{PixelRatio.get()}</Text>
          <Text>
            物理宽度：{Dimensions.get("window").width * PixelRatio.get()}
          </Text>
        </View>
        <View>
          <Text>{val}</Text>
        </View>
        <TextInput value={val} onChange={(e) => setVal(e.nativeEvent.text)} />
        <ScrollView>
          {new Array(100).fill(0).map((_, idx) => (
            <Text>{idx} item</Text>
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop:
      Platform.OS === "Windows" || Platform.OS === "android"
        ? StatusBar.currentHeight
        : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    marginTop: 20,
    transform: [{ scale: 2 }, { rotate: "-2deg" }],
  },
});
