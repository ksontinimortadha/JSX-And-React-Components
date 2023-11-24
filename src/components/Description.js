// src/components/Description.js
import React from 'react';
import productData from '../product';
import { Card } from 'react-bootstrap';

const Description = () => {
  return <Card.Text>{productData.description}</Card.Text>;
};

export default Description;
