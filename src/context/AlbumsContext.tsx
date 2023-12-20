import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { AlbumType } from "types";

export const AlbumsContext = createContext<{
  albums: AlbumType[];
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}>({ albums: [], pageNum: 1, setPageNum: () => 1 });

const AlbumsContextProvider = ({ children }: { children: ReactNode }) => {
  const [albums, setAlbums] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  //  Delete Album Function

  // Fetch Albums for redux store

  return (
    <AlbumsContext.Provider value={{ albums, pageNum, setPageNum }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsContextProvider;
