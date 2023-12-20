type AlbumType = {
  id: number;
  userId: number;
  title: string;
};

type AlbumPhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type RootStackParamList = {
  Home: undefined;
  Album: AlbumType;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  company: {};
};

export {
  type AlbumType,
  type AlbumPhotoType,
  type RootStackParamList,
  type User,
};
