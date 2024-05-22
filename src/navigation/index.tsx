import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../page/search";
import Dashboard from "../page/dashboard";
import List from "../page/list";
import Info from "../page/info";
import User from "../page/user";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

// 第一层路由：堆栈导航器
const Stack = createNativeStackNavigator();
const RootStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="search"
      component={Search}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="dashboard"
      component={Dashboard}
      options={({ navigation }) => ({
        title: "首页",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="dashboard" size={size} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="List"
      component={List}
      options={({ navigation }) => ({
        title: "新闻",
        headerTitle: "搜索",
        headerRight(props) {
          return (
            <Pressable onPress={() => navigation.navigate("search")}>
              <AntDesign name="search1" size={18} style={{ marginRight: 16 }} />
            </Pressable>
          );
        },
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="chrome" size={size} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="info"
      component={Info}
      options={({ navigation }) => ({
        title: "信息",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="copy1" size={size} color={color} />
        ),
      })}
    />
    <BottomTab.Screen
      name="user"
      component={User}
      options={({ navigation }) => ({
        title: "用户",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      })}
    />
  </BottomTab.Navigator>
);

export default Navigation;

const styles = StyleSheet.create({});
