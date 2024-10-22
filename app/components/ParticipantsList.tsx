'use client';

import { selectParticipants } from '@/lib/features/room/roomSlice';
import { useAppSelector } from '@/lib/hooks';
import React from 'react';

function ParticipantsList() {
  const participants = useAppSelector(selectParticipants);

  return (
    <div>
      <h2>Participants</h2>
      <ul>
        {participants.map((participant: any) => (
          <li key={participant.id}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantsList;
