import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DetailScreenProp, Posts } from "../../Types/navigationTypes";
import axios from "axios";

interface DetailStates {
  post: Posts;
}

class Detail extends React.Component<DetailScreenProp, DetailStates> {
  state = {
    post: { userId: 0, id: 0, title: "", body: "" },
  };

  async componentDidMount(): Promise<void> {
    await this.fetchPosts();
  }

  componentDidUpdate(prevProps: DetailScreenProp): void {
    if (prevProps.route.params.postId !== this.props.route.params.postId) {
      this.fetchPosts();
    }
  }

  fetchPosts = async () => {
    const fetchPosts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.route.params.postId}`
    );
    this.setState({ post: fetchPosts.data });
  };

  render(): React.ReactNode {
    const { post } = this.state;
    return (
      <View style={style.box}>
        <Text>{post.title}</Text>
        <Text style={style.linkText}>{post.body}</Text>
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

export default Detail;
