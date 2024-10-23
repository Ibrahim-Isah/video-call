export const toggleRoomRecording = async ({ isRecording, roomName, recordingEndpoint }: {
  isRecording: boolean;
  roomName: string;
  recordingEndpoint: string
}) => {
      let response: Response;
      if (isRecording) {
        response = await fetch(`${recordingEndpoint}/stop?roomName=${roomName}`);
      } else {
        response = await fetch(`${recordingEndpoint}/start?roomName=${roomName}`);
      }

      if (!response.ok) throw new Error('Failed to toggle recording');
      return !isRecording;
}
