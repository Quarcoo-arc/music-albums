import { createContext } from "react";
import { AlbumType } from "types";

export const AlbumsContext = createContext<{
  deleteAlbum: (albumId: number) => void;
}>({ deleteAlbum(albumId) {} });
