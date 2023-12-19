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

export { type AlbumType, type AlbumPhotoType };
