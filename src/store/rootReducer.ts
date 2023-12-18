import albumsReducer from "./Album/reducer";
import albumPicsReducer from "./Album/GetAlbum/reducer";

const rootReducer = {
  albums: albumsReducer,
  albumPics: albumPicsReducer,
};

export default rootReducer;
