import * as React from 'react';
import { PageClientImpl } from './PageClientImpl';
import { isVideoCodec } from '@/utils/types';

export default function Page({
  params,
  searchParams,
}: {
  params: { roomName: string };
  searchParams: {
    region?: string;
    hq?: string;
    codec?: string;
  };
}) {
  const codec =
    typeof searchParams.codec === 'string' && isVideoCodec(searchParams.codec)
      ? searchParams.codec
      : 'vp9';
  const hq = searchParams.hq === 'true' ? true : false;

  return (
    <PageClientImpl roomName={params.roomName} region={searchParams.region} hq={hq} codec={codec} />
  );
}