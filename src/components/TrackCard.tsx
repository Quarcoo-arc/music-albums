import React from "react";
import { Card, Text } from "react-native-paper";
import { AlbumPhotoType } from "types";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";

const TrackCard = ({ track }: { track: AlbumPhotoType }) => {
  return (
    <Card className="my-3" mode="elevated">
      <Card.Cover source={{ uri: track.thumbnailUrl }} />
      <Card.Title
        title={
          <Text className="italic">
            <MaterialIcons name="music-note" size={16} />
            {track.id}
          </Text>
        }
      />
      <Card.Content>
        <Text className="font-medium" variant="titleLarge">
          {track.title}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default TrackCard;
