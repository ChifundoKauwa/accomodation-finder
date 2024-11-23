"use client";

import React, { Suspense } from 'react';

import Landing from './components/Landing/landing-content'


function Home() {
  return (
    <Suspense>
        <Landing/>
    </Suspense>
  
  );
}

export default Home;
