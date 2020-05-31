import React from 'react';
import Page from '../Page';
import Films from './Films';
import Footer from '../Footer';

export default function Home() {
  return (
    <Page>
      <Films />
      <Footer/>
    </Page>
  );
}
