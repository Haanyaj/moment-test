import React from 'react';
import Page from '../Page';
import Movies from './Movies';
import Footer from '../Footer';

export default function Home() {
  return (
    <Page>
      <h1 style={{textAlign: 'center'}}>Films tendances</h1>
      <Movies />
      <Footer/>
    </Page>
  );
}
