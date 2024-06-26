import React from 'react';
import Hourly from '../offers/Hourly';
import Daily from '../offers/Daily';
import Weekly from '../offers/Weekly';
import Monthly from '../offers/Monthly';
import Annually from '../offers/Annually';
import Container from 'react-bootstrap/Container';

const HomeScreen = () => {
  return (
    <Container>
      <Hourly />
      <Daily />
      <Weekly />
      <Monthly />
      <Annually />
    </Container>
  );
}

export default HomeScreen;
