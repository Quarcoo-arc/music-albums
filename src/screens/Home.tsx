import { AlbumItem, AppBar } from "components";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getAllAlbumsAction } from "store/Album/reducer";
import { AlbumType } from "types";

const Home = () => {
  const dispatch = useDispatch();

  const { data }: { data: AlbumType[] } = useSelector(
    (state: RootState) => state.albums
  );

  useEffect(() => {
    dispatch(getAllAlbumsAction());
  }, [dispatch]);

  return (
    <View className="pb-3">
      <AppBar />
      <ScrollView className="mb-24 px-3 flex flex-col">
        {data &&
          data.map((album: AlbumType) => (
            <AlbumItem key={album.id} albumInfo={album} />
          ))}
      </ScrollView>
    </View>
  );
};

export default Home;
