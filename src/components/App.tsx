import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/app.scss';
import { Footer } from './Footer';

// TODO nicer loader
const Loader = () => <div className="app">loading...</div>;

const Content = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app">
      <div>
        <button onClick={() => changeLanguage('fr')}>fr</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
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
