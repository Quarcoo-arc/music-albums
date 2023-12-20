import albumsReducer from "./Album/reducer";
import albumPicsReducer from "./Album/GetAlbum/reducer";
import deleteAlbumReducer from "./Album/DeleteAlbum/reducer";
import userReducer from "./User/reducer";

const rootReducer = {
  albums: albumsReducer,
  albumPics: albumPicsReducer,
  deleteAlbum: deleteAlbumReducer,
  user: userReducer,
};

export default rootReducer;
