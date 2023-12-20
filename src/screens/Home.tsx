import { AlbumItem, AppBar, Pagination } from "components";
import { AlbumsContext } from "context/AlbumsContext";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { deleteAlbumAction } from "store/Album/DeleteAlbum/reducer";
import { getAllAlbumsAction } from "store/Album/reducer";
import { AlbumType } from "types";

const Home = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [displayAlbums, setDisplayAlbums] = useState<AlbumType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const itemsPerPage = 25;
  const dispatch = useDispatch();

  const scrollRef = useRef<any>(null);

  const { data }: { data: AlbumType[] } = useSelector(
    (state: RootState) => state.albums
  );

  useEffect(() => {
    dispatch(getAllAlbumsAction());
  }, [dispatch]);

  useEffect(() => {
    data && setAlbums(data);
  }, [data]);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    albums &&
      setDisplayAlbums(
        albums.slice(itemsPerPage * (pageNum - 1), itemsPerPage * pageNum)
      );
    scrollToTop();
  }, [pageNum, albums]);

  const deleteAlbum = (albumId: number) => {
    dispatch(deleteAlbumAction(albumId));
    setAlbums((prev) => prev.filter((item) => item.id !== albumId));
  };

  return (
    <View className="pb-3">
      <AppBar>
        <Text className="text-2xl font-[Pacifico] mt-5 text-center text-white">
          Music Albums 🎶
        </Text>
      </AppBar>
      <ScrollView ref={scrollRef} className="mb-24 px-3 flex flex-col">
        <AlbumsContext.Provider value={{ deleteAlbum }}>
          {displayAlbums &&
            displayAlbums.map((album: AlbumType) => (
              <AlbumItem key={album.id} albumInfo={album} />
            ))}
          <Pagination
            count={albums.length}
            pageNum={pageNum}
            setPageNum={setPageNum}
            itemsPerPage={itemsPerPage}
          />
        </AlbumsContext.Provider>
      </ScrollView>
    </View>
  );
};

export default Home;
