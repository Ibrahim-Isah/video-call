'use client';

import { joinRoom, leaveRoom } from '@/lib/features/room/roomSlice';
import { useAppDispatch } from '@/lib/hooks';
import React, { useState } from 'react';

function JoinRoom() {
  const [roomName, setRoomName] = useState('');
  const dispatch = useAppDispatch();

  const handleJoin = () => {
    dispatch(joinRoom(roomName));
  };

  const handleLeave = () => {
    dispatch(leaveRoom());
  };

  return (
    <div>
      <input
        type='text'
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder='Enter room name'
      />
      <button onClick={handleJoin}>Join Room</button>
      <button onClick={handleLeave}>Leave Room</button>
    </div>
  );
}

export default JoinRoom;
