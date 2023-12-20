import React from "react";
import { Card, Text } from "react-native-paper";
import { AlbumPhotoType } from "types";

const TrackCard = ({ track }: { track: AlbumPhotoType }) => {
  return (
    <Card className="my-3" mode="elevated">
      <Card.Cover source={{ uri: track.thumbnailUrl }} />
      <Card.Title title={track.title} />
      <Card.Content>
        <Text variant="titleLarge">{track.title}</Text>
        <Text variant="bodyMedium">{track.url}</Text>
      </Card.Content>
    </Card>
  );
};

export default TrackCard;
