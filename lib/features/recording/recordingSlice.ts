import { createAppSlice } from '@/lib/createAppSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { toggleRoomRecording } from './recordingAPI';

interface RecordingState {
  isRecording: boolean;
  processingRecRequest: boolean;
  error: string | null;
}

const initialState: RecordingState = {
  isRecording: false,
  processingRecRequest: false,
  error: null,
};

export const recordingSlice = createAppSlice({
  name: 'recording',
  initialState,
  reducers: (create) => ({
    setRecRequest: create.reducer((state, action: PayloadAction<boolean>) => {
      state.processingRecRequest = action.payload;
    }),
    toggleRecording: create.asyncThunk(
      async ({
        isRecording,
        roomName,
        recordingEndpoint,
      }: {
        isRecording: boolean;
        roomName: string;
        recordingEndpoint: string;
      }) => {
        const response = await toggleRoomRecording({ isRecording, roomName, recordingEndpoint });

        return response;
      },
      {
        pending: (state) => {
          state.processingRecRequest = true;
        },
        fulfilled: (state, action: PayloadAction<boolean>) => {
          state.isRecording = action.payload;
          state.processingRecRequest = false;
        },
        rejected: (state) => {
          state.error = 'Failed to toggle recording';
          state.processingRecRequest = false;
        },
      }
    ),
  }),
  selectors: {
    processingRecRequest: (state) => state.processingRecRequest,
  }
});

export const { setRecRequest, toggleRecording } = recordingSlice.actions;

export const { processingRecRequest } = recordingSlice.selectors