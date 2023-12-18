import { AppBar } from "components";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getAllAlbumsAction } from "store/Album/reducer";

const Home = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.albums);

  useEffect(() => {
    dispatch(getAllAlbumsAction());
  }, [dispatch]);

  return (
    <View>
      <AppBar />
      <Text>Home</Text>
      {data &&
        data.map(({ title }: { title: string }, idx: number) => (
          <Text key={idx}>{title}</Text>
        ))}
    </View>
  );
};

export default Home;
