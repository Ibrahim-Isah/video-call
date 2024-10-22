'use client';

import { encodePassphrase, generateRoomId, randomString } from '@/utils/client-utils';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import styles from './styles/Home.module.css';

export default function IndexPage() {
  const router = useRouter();

  const [roomName, setRoomName] = useState('');
  const startMeeting = () => {
    if (!roomName) return;
    const formattedRoomName = roomName.trim().replace(/\s+/g, '-');
    router.push(`/rooms/${formattedRoomName}`);
    return;
  };
  return (
    <>
      <main className={styles.main} data-lk-theme='default'>
        <div className='header'>
          <h2>Video Conference Call Demo for Snaphunt Interview</h2>
        </div>
        <Suspense fallback='Loading'>
          <div className={styles.tabContainer}>
            <div className={styles.tabContent}>
              <p style={{ margin: 0 }}>
                Create a room and share room name with your participants to join.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  id='roomName'
                  className='lk-form-control'
                  placeholder='Room Name'
                  name='roomName'
                  type='text'
                  value={roomName}
                  onChange={(ev) => setRoomName(ev.target.value)}
                />
              </div>
              <button style={{ marginTop: '1rem' }} className='lk-button' onClick={startMeeting}>
                Start Meeting
              </button>
            </div>
          </div>
        </Suspense>
      </main>
    </>
  );
}
