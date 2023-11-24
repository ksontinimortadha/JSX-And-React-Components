// src/components/Price.js
import React from 'react';
import productData from '../product';
import { Card } from 'react-bootstrap';

const Price = () => {
  return <Card.Text>{productData.price}</Card.Text>;
};

export default Price;
