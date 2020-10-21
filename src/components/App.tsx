import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
import { Footer } from './Footer';
import { Header } from './Header';

const getDarkMode = () => {
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme !== null) {
    return localStorageTheme === 'dark';
  }

  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// TODO nicer loader
const Loader = () => <div id="app">loading...</div>;

const Content = () => {
  const prefersDark = getDarkMode();
  const [isDark, setIsDark] = useState(prefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div id="app">
      <Header setIsDarkHandler={setIsDark} useDarkTheme={isDark} />
      <div>MAIN: TODO</div>
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
};
