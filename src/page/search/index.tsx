import { View, Text } from "react-native";
import React from "react";

const Search = ({ route }) => {
  const info = route.params;
  return (
    <View>
      <Text>Search Page</Text>
      <Text>{JSON.stringify(info, null, 4)}</Text>
    </View>
  );
};

export default Search;
