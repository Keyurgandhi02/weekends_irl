import { View, Text } from "react-native";
import React from "react";
import UserProfileJoinedHangoutsItem from "./UserProfileJoinedHangoutsItem";

const UserProfileJoinedHangoutsList = ({ data }: any) => {
  return (
    <>
      {data?.flatMap((item: any) =>
        item.user_details.joinedhangouts.map((hang: any) => (
          <View key={hang?.id}>
            <UserProfileJoinedHangoutsItem userHangouts={hang} />
          </View>
        ))
      )}
    </>
  );
};

export default UserProfileJoinedHangoutsList;
