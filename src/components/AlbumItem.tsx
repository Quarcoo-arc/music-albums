import React, { useContext, useState } from "react";
import { Pressable, Text } from "react-native";
import { AlbumType } from "types";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { useLinkProps } from "@react-navigation/native";
import { AlbumsContext } from "context/AlbumsContext";
import { Button, Dialog, Portal } from "react-native-paper";

const AlbumItem = ({ albumInfo }: { albumInfo: AlbumType }) => {
  const [showDialog, setShowDialog] = useState(false);

  const hideDialog = () => setShowDialog(false);

  const { onPress } = useLinkProps({
    to: { screen: "Album", params: albumInfo },
  });
  const { deleteAlbum } = useContext(AlbumsContext);
  return (
    <Pressable
      className="bg-slate-300 p-5 rounded my-4 flex flex-row items-center justify-between"
      onPress={onPress}
    >
      <Portal>
        <Dialog visible={showDialog} onDismiss={hideDialog}>
          <Dialog.Title>Confirm Delete</Dialog.Title>
          <Dialog.Content>
            <Text className="font-medium">
              Are you sure you want to delete this album?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={() => deleteAlbum(albumInfo.id)}>Yes</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Text className="italic w-1/12">{albumInfo.id}</Text>
      <Text className="font-bold underline w-10/12">{albumInfo.title}</Text>
      <MaterialIcons
        name="delete"
        size={24}
        color="red"
        className="inline-block w-1/12"
        onPress={() => setShowDialog(true)}
      />
    </Pressable>
  );
};

export default AlbumItem;
