import { createContext } from "react";

export const AlbumsContext = createContext<{
  deleteAlbum: (albumId: number) => void;
}>({ deleteAlbum(albumId) {} });
