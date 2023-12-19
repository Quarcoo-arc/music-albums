import React from "react";
import { Text, View } from "react-native";
import { AlbumType } from "types";

const AlbumItem = ({ albumInfo }: { albumInfo: AlbumType }) => {
  return (
    <View className="bg-slate-300 p-5 rounded my-4">
      <Text className="font-bold">
        {albumInfo.id} {albumInfo.title}
      </Text>
    </View>
  );
};

export default AlbumItem;
