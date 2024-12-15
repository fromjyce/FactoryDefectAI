"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Landing from '@/components/landing';
import Features from '@/components/features';

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
      <Landing />
      <Features />
    </div>
  );
}
