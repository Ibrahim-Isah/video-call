'use client';

import { recording, startRecording, stopRecording } from '@/lib/features/recording/recordingSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

function RecordingControl() {
  const dispatch = useAppDispatch();
  const isRecording = useAppSelector(recording);

  const handleStartRecording = () => {
    dispatch(startRecording());
  };

  const handleStopRecording = () => {
    dispatch(stopRecording());
  };

  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <p>Recording status: {isRecording ? 'Recording' : 'Not recording'}</p>
    </div>
  );
}

export default RecordingControl;
