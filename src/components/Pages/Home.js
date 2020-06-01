import React from 'react';
import Page from '../Page';
import Movies from './Movies';
import Footer from '../Footer';

export default function Home() {
  return (
    <Page>
      <h1 style={{textAlign: 'center'}}>Les films les plus populaires</h1>
      <Movies />
      <Footer/>
    </Page>
  );
}
