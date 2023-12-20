import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppBar, Pagination, TrackCard } from "components";
import React, { useEffect, useRef, useState } from "react";
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
  const itemsPerPage = 15;
  const [tracks, setTracks] = useState<AlbumPhotoType[]>([]);
  const [displayTracks, setDisplayTracks] = useState<AlbumPhotoType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();

  const scrollRef = useRef<any>(null);

  const { data }: { data: AlbumPhotoType[] } = useSelector(
    (state: RootState) => state.albumPics
  );

  useEffect(() => {
    dispatch(getAlbumPicsAction({ id: route.params.id }));
  }, [dispatch]);

  const { onPress } = useLinkProps({
    to: { screen: "Home" },
  });

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    data && setTracks(data);
  }, [data]);

  useEffect(() => {
    tracks &&
      setDisplayTracks(
        tracks.slice(itemsPerPage * (pageNum - 1), itemsPerPage * pageNum)
      );

    scrollToTop();
  }, [pageNum, tracks]);

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
      <ScrollView ref={scrollRef} className="mb-24 px-3 flex flex-col">
        {displayTracks &&
          displayTracks.map((track: AlbumPhotoType) => (
            <TrackCard key={track.id} track={track} />
          ))}
        <Pagination
          count={tracks.length}
          pageNum={pageNum}
          setPageNum={setPageNum}
          itemsPerPage={itemsPerPage}
        />
      </ScrollView>
    </View>
  );
};

export default Album;
