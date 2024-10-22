'use client';

import { selectParticipants } from '@/lib/features/room/roomSlice';
import { useAppSelector } from '@/lib/hooks';
import React from 'react';

function VideoStream() {
  const participants = useAppSelector(selectParticipants);

  return (
    <div className='video-streams'>
      {participants.map((participant: any) => (
        <div key={participant.id} className='video-stream'>
          {/* We'll implement the actual video stream later using LiveKit */}
          <p>{participant.name}'s video</p>
        </div>
      ))}
    </div>
  );
}

export default VideoStream;
