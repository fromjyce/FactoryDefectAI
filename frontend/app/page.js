"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Landing from '@/components/landing';
import Features from '@/components/features';
import Footer from '@/components/footer';
import Flowchart from '@/components/flowchart';
import Prototype from '@/components/prototype';

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
      <Prototype />
      <Flowchart/>
      <Footer/>
    </div>
  );
}
