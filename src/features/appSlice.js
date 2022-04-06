import { createSlice } from "@reduxjs/toolkit";

//create slice contains :
//name to identify the slice
//initialstatevalue
//reducer function that handles the state changes => state and action

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  //  action:how the state get updated
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
