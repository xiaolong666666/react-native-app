import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  // WingBlank,
  // WhiteSpace,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { get } from "../../api/request";
import { Card, WhiteSpace, WingBlank } from "@ant-design/react-native";

const DEFAULT_AVATAR =
  "https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/26/16fdfc888fff5195~tplv-t2oaga2asx-image.image";
const DEFAULT_BRIEF = "这个人很懒，什么也没有留下...";

const List = ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await get({ path: "/list" });
      const _list = data
        .filter(
          (v: any) =>
            v?.item_info?.article_info?.cover_image &&
            v?.item_info?.author_user_info
        )
        .map((v: any) => ({
          title: v?.item_info?.article_info?.title,
          cover_image: v?.item_info?.article_info?.cover_image,
          author: v?.item_info?.author_user_info?.user_name,
          avatar:
            v?.item_info?.author_user_info?.avatar_large || DEFAULT_AVATAR,
          brief_content:
            v?.item_info?.author_user_info?.brief_content || DEFAULT_BRIEF,
        }));
      setList(_list);
    })();
  }, []);
  return (
    <ScrollView>
      {list.map((item: any, idx) => (
        <NewsItem key={item.title} info={item} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const NewsItem = ({ info, navigation }: any) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate({ name: "search", params: info })}
  >
    <View>
      <WingBlank size="md">
        <Card>
          <Card.Header title={info.title} />
          <Card.Body>
            <Image
              source={{
                uri: info.avatar,
              }}
              style={styles.img}
            />
          </Card.Body>
          <Card.Footer
            content={
              <Image source={{ uri: info.avatar }} style={styles.avatar} />
            }
            extra={info.author}
          />
        </Card>
      </WingBlank>
      <WhiteSpace size="md" />
    </View>
  </TouchableWithoutFeedback>
);

export default List;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  avatar: {
    width: 30,
    height: 30,
  },
});
