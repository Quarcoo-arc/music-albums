import { createSlice } from "@reduxjs/toolkit";
import { ALBUM } from "../types";
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

export const albumPicsSlice = createSlice({
  name: ALBUM,
  initialState,
  reducers: {
    getAlbumPicsAction: (state: stateType, { payload }) => {
      state.error = "";
      state.isLoading = true;
    },
    getAlbumPicsSuccessAction: (state: stateType, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.success = true;
      state.data = payload;
    },
    getAlbumPicsErrorAction: (state: stateType, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.success = false;
      Toast.show(
        typeof payload === "string"
          ? payload
          : payload.message && typeof payload.message === "string"
          ? payload.message
          : "Failed to fetch album pictures",
        {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          animation: true,
          shadow: true,
          hideOnPress: true,
        }
      );
    },
  },
});

export const {
  getAlbumPicsAction,
  getAlbumPicsSuccessAction,
  getAlbumPicsErrorAction,
} = albumPicsSlice.actions;

export default albumPicsSlice.reducer;
