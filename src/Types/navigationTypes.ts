import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    postId: number;
  };
};

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, "Home">;

export type DetailScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
