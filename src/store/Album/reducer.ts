import { createSlice } from "@reduxjs/toolkit";
import { ALBUM } from "./types";
import Toast from "react-native-root-toast";

type stateType = {
  success: boolean;
  isLoading: boolean;
  error: string;
  data: null | [];
};

const initialState: stateType = {
  success: false,
  isLoading: false,
  error: "",
  data: null,
};

export const AlbumSlice = createSlice({
  name: ALBUM,
  initialState,
  reducers: {
    getAllAlbumsAction: (state: stateType) => {
      state.isLoading = true;
      state.error = "";
    },
    getAllAlbumsSuccessAction: (state: stateType, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.success = true;
      state.data = payload;
    },
    getAllAlbumsErrorAction: (state: stateType, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.success = false;
      Toast.show(
        typeof payload === "string"
          ? payload
          : payload.message && typeof payload.message === "string"
          ? payload.message
          : "Failed to fetch albums",
        {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          animation: true,
          textColor: "red",
        }
      );
    },
  },
});

export const {
  getAllAlbumsAction,
  getAllAlbumsSuccessAction,
  getAllAlbumsErrorAction,
} = AlbumSlice.actions;

export default AlbumSlice.reducer;
