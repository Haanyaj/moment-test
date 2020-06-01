import React from 'react';
import Page from '../Page';
import Films from './Films';
import Footer from '../Footer';

export default function Home() {
  return (
    <Page>
      <h1 style={{textAlign: 'center'}}>Les films les plus populaires</h1>
      <Films />
      <Footer/>
    </Page>
  );
}
