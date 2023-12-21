import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AlbumType } from "types";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";
import { useLinkProps } from "@react-navigation/native";
import { AlbumsContext } from "context/AlbumsContext";
import { Button, Dialog, List, Portal } from "react-native-paper";

const descriptions = [
  "A beautiful Hip Hop album released in 2019",
  "Most listened-to R&B album world-wide in 2018",
  "Hot Afrobeats music you most certainly would love",
  "Music orchestra that southens the soul",
  "Pop music that will make you want to pop off",
  "Heavy Metal music for the alkaline folks",
  "The Best of Jazz Music for the sax lovers",
];

const AlbumItem = ({ albumInfo }: { albumInfo: AlbumType }) => {
  const [showDialog, setShowDialog] = useState(false);

  const hideDialog = () => setShowDialog(false);

  const { onPress } = useLinkProps({
    to: { screen: "Album", params: albumInfo },
  });
  const { deleteAlbum } = useContext(AlbumsContext);
  return (
    <View>
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
      <List.Item
        onPress={onPress}
        className="bg-slate-500 py-5 my-4"
        title={
          <Text className="text-white font-semibold">{albumInfo.title}</Text>
        }
        description={
          <Text className="text-gray-200">
            {descriptions[Math.floor(Math.random() * 7)]}
          </Text>
        }
        right={(props) => (
          <MaterialIcons
            {...props}
            name="delete"
            size={24}
            color="#cf0404"
            onPress={() => setShowDialog(true)}
          />
        )}
        left={(props) => (
          <MaterialIcons
            {...props}
            size={24}
            name="folder-music"
            onPress={onPress}
            color="#e5e7eb"
          />
        )}
      />
    </View>
  );
};

export default AlbumItem;
