'use client';
import { useEffect, useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';

const monoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['600'] });

type AuctionTimeProps = {
  source: 'ending_soon' | 'newest';
  endsAt: Date | null;
  listedAt: Date | null;
};

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function timeLeft(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h > 0 ? `${h}h ${pad(m)}m ${pad(s)}s` : `${pad(m)}m ${pad(s)}s`;
}

function listedAgo(seconds: number) {
  if (seconds < 60) return 'Listed just now';
  if (seconds < 3600) return `Listed ${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `Listed ${Math.floor(seconds / 3600)}h ago`;
  return `Listed ${Math.floor(seconds / 86400)}d ago`;
}

export function AuctionTime({ 
  source, 
  endsAt, 
  listedAt 
}: AuctionTimeProps) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const date = source === 'newest' ? 
    listedAt : endsAt;
  if (!date || now === null) return null;
  if (source === 'newest') {
    const ago = Math.floor((now - date.getTime()) / 1000);
    return (
      <span
        className={monoFont.className}
        style={{ 
          fontSize: 13, 
          color: '#5E5B55' }}
      >
        {listedAgo(ago)}
      </span>
    );
  }
  const seconds = Math.floor((date.getTime() - now) / 1000);
  if (seconds <= 0) {
    return (
      <span
        className={monoFont.className}
        style={{ 
          fontSize: 13, 
          color: '#141414' }}
      >
        Ended
      </span>
    );
  }
  return (
    <span
      className={monoFont.className}
      style={{
        fontSize: 13,
        color: seconds < 3600 ? 
          '#C7341A' : '#141414',
      }}
    >
      {timeLeft(seconds)}
    </span>
  );
}