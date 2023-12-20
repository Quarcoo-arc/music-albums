import React, { useContext } from "react";
import { Pressable, Text } from "react-native";
import { AlbumType } from "types";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { useLinkProps } from "@react-navigation/native";
import { AlbumsContext } from "context/AlbumsContext";

const AlbumItem = ({ albumInfo }: { albumInfo: AlbumType }) => {
  const { onPress } = useLinkProps({
    to: { screen: "Album", params: albumInfo },
  });
  const { deleteAlbum } = useContext(AlbumsContext);
  return (
    <Pressable
      className="bg-slate-300 p-5 rounded my-4 flex flex-row items-center justify-between"
      onPress={onPress}
    >
      <Text className="italic w-1/12">{albumInfo.id}</Text>
      <Text className="font-bold underline w-10/12">{albumInfo.title}</Text>
      <MaterialIcons
        name="delete"
        size={24}
        color="red"
        className="inline-block w-1/12"
        onPress={() => deleteAlbum(albumInfo.id)}
      />
    </Pressable>
  );
};

export default AlbumItem;
