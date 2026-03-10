import { View, Text } from "react-native";
import React from "react";
import JoinedMembersListItem from "./JoinedMembersListItem";

const JoinedMembersList = ({ data }: any) => {
  return (
    <>
      {data.map((item: any) =>
        item?.members?.membder_Details?.map((i: any, index: number) => {
          if (index < 5) {
            return (
              <JoinedMembersListItem
                icon={i?.avatar}
                id={i?.id}
                name={i?.name}
              />
            );
          }
        })
      )}
    </>
  );
};

export default JoinedMembersList;
