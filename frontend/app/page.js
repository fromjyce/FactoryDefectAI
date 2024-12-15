"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/header';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); 
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <Header />
    </div>
  );
}
