import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RoomSliceState {
  isConnected: boolean;
  roomName: string;
  participants: any[];
}

const initialState: RoomSliceState = {
  isConnected: false,
    roomName: '',
    participants: [],
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const roomSlice = createAppSlice({
  name: 'room',
  initialState,
  reducers: (create) => ({
    joinRoom: create.reducer((state, action: PayloadAction<string>) => {
      state.isConnected = true;
      state.roomName = action.payload;
    }),
    leaveRoom: create.reducer((state) => {
      state.isConnected = false;
      state.roomName = '';
      state.participants = [];
    }),
    updateParticipants: create.reducer((state, action: PayloadAction<any[]>) => {
      state.participants = action.payload;
    })
  }),
  selectors: {
    selectParticipants: (room) => room.participants
  }
});

export const { joinRoom, leaveRoom, updateParticipants } =
  roomSlice.actions;

export const { selectParticipants } = roomSlice.selectors;