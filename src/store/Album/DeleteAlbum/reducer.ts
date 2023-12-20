import { createSlice } from "@reduxjs/toolkit";
import { ALBUM } from "../types";
import Toast from "react-native-root-toast";

type stateType = {
  success: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: stateType = {
  success: false,
  isLoading: false,
  error: "",
};

export const deleteAlbumSlice = createSlice({
  name: ALBUM,
  initialState,
  reducers: {
    deleteAlbumAction: (state: stateType, { payload }) => {
      state.error = "";
      state.isLoading = true;
    },
    deleteAlbumSuccessAction: (state: stateType, { payload }) => {
      (state.error = ""), (state.isLoading = false);
      state.success = true;
      Toast.show("Successfully deleted album", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: true,
        shadow: true,
      });
    },
    deleteAlbumErrorAction: (state: stateType, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.success = false;
      Toast.show(payload.message || "Failed to delte album!");
    },
  },
});

export const {
  deleteAlbumAction,
  deleteAlbumSuccessAction,
  deleteAlbumErrorAction,
} = deleteAlbumSlice.actions;

export default deleteAlbumSlice.reducer;
