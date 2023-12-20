import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppBar, TrackCard } from "components";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { AlbumPhotoType, RootStackParamList } from "types";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";
import { useLinkProps } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getAlbumPicsAction } from "store/Album/GetAlbum/reducer";

type Props = NativeStackScreenProps<RootStackParamList, "Album">;

const Album = ({ route }: Props) => {
  const dispatch = useDispatch();

  const { data }: { data: AlbumPhotoType[] } = useSelector(
    (state: RootState) => state.albumPics
  );

  useEffect(() => {
    dispatch(getAlbumPicsAction({ id: route.params.id }));
  }, [dispatch]);

  const { onPress } = useLinkProps({
    to: { screen: "Home" },
  });
  return (
    <View>
      <AppBar>
        <View className="flex flex-row pt-5 items-center justify-around">
          <MaterialIcons
            name="chevron-left-circle"
            className="w-1/12"
            size={24}
            color="white"
            onPress={onPress}
          />
          <Text className="text-2xl font-[Pacifico] text-center text-white w-10/12">
            {route.params.title}
          </Text>
        </View>
      </AppBar>
      <ScrollView className="mb-24 px-3 flex flex-col">
        {data &&
          data.map((track: AlbumPhotoType) => <TrackCard track={track} />)}
      </ScrollView>
    </View>
  );
};

export default Album;
