import { createAppSlice } from "@/lib/createAppSlice";

export interface RecordingSliceState {
  isRecording: boolean;
}

const initialState: RecordingSliceState = {
  isRecording: false
};

export const recordingSlice = createAppSlice({
  name: 'recording',
  initialState,
  reducers: (create) => ({
    startRecording: create.reducer((state) => {
      state.isRecording = true;
    }),
    stopRecording: create.reducer((state) => {
      state.isRecording = false;
    })
  }),
  selectors: {
    recording: (record) => record.isRecording
  }
});

export const { startRecording, stopRecording } =
  recordingSlice.actions;
export const { recording } = recordingSlice.selectors;
