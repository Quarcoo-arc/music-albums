import { createSlice } from "@reduxjs/toolkit";
import { USER } from "./types";
import Toast from "react-native-root-toast";

type stateType = {
  success: boolean;
  isLoading: boolean;
  error: string;
  data: null | {};
};

const initialState: stateType = {
  success: false,
  isLoading: false,
  error: "",
  data: null,
};

export const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    getUserAction: (state: stateType, { payload }) => {
      state.isLoading = true;
      state.error = "";
    },
    getUserSuccessAction: (state: stateType, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.success = true;
      state.data = payload;
    },
    getUserErrorAction: (state: stateType, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.success = false;
      Toast.show(
        typeof payload === "string"
          ? payload
          : payload.message && typeof payload.message === "string"
          ? payload.message
          : "Failed to fetch album author info",
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

export const { getUserAction, getUserErrorAction, getUserSuccessAction } =
  userSlice.actions;

export default userSlice.reducer;
