import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { loadAsync } from "expo-font";
import { Provider } from "@ant-design/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAsyncAll = () =>
    Promise.all([
      loadAsync(
        "antoutline",
        require("@ant-design/icons-react-native/fonts/antoutline.ttf")
      ),
      loadAsync(
        "antfill",
        require("@ant-design/icons-react-native/fonts/antfill.ttf")
      ),
    ]);

  useEffect(() => {
    loadAsyncAll().then(() => {
      setIsReady(true);
    });
  }, []);

  if (isReady) {
    return (
      <Provider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }

  return (
    <View>
      <Text>Welcome to React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
