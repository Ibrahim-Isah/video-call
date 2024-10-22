import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';

import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import './styles/globals.css';
import { Viewport } from 'next';

interface Props {
  readonly children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
