'use client';

import { useEffect, useState } from 'react';
import { styles } from './styles';
import type { AuctionTimeProps } from './types';

// adds '0' at left to number 
// used for timer correctness
function pad(n: number) {
  return String(n).padStart(2, '0');
}

// describes time by day, hour, minute and second
function timeLeft(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (d > 0) return `${d}d ${pad(h)}h ${pad(m)}m`;
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
  listedAt,
}: AuctionTimeProps) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = source === 'newest' ? listedAt : endsAt;
  if (!date || now === null) return null;

  if (source === 'newest') {
    const ago = Math.floor((now - date.getTime()) / 1000);
    return (
      <span className={`${styles.time} ${styles.timeListed}`}>
        {listedAgo(ago)}
      </span>
    );
  }

  const seconds = Math.floor((date.getTime() - now) / 1000);
  if (seconds <= 0) {
    return (
      <span className={`${styles.time} ${styles.timeNormal}`}>Ended</span>
    );
  }

  const color = seconds < 3600 ? styles.timeUrgent : styles.timeNormal;
  return (
    <span className={`${styles.time} ${color}`}>
      {timeLeft(seconds)}
    </span>
  );
}
