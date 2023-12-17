import { createSlice } from "@reduxjs/toolkit";
import { ALBUM } from "./types";
import { toast } from "react-toastify";

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
      toast.error(
        typeof payload === "string"
          ? payload
          : payload.message && typeof payload.message === "string"
          ? payload.message
          : "Failed to fetch albums"
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
