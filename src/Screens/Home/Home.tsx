import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { HomeScreenProp, Posts } from "../../Types/navigationTypes";
import axios from "axios";

interface HomeStates {
  posts: Posts[];
  error: string;
}

class Home extends React.Component<HomeScreenProp, HomeStates> {
  state = {
    posts: [],
    error: "",
  };

  async componentDidMount(): Promise<void> {
    try {
      const postData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: postData.data });
    } catch (error) {
      this.setState({ error: "Failed to load data" });
    }
  }

  goToDetail = (id: number) =>
    this.props.navigation.navigate("Details", { postId: id });

  render(): React.ReactNode {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={style.box}>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => this.goToDetail(item.id)}>
                <Text style={style.linkText}>Read more</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  box: {
    padding: 10,
    margin: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  linkText: {
    color: "blue",
  },
});

export default Home;
