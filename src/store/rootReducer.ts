import albumsReducer from "./Album/reducer";
import albumPicsReducer from "./Album/GetAlbum/reducer";
import deleteAlbumReducer from "./Album/DeleteAlbum/reducer";

const rootReducer = {
  albums: albumsReducer,
  albumPics: albumPicsReducer,
  deleteAlbum: deleteAlbumReducer,
};

export default rootReducer;
