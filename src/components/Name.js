// src/components/Name.js
import React from 'react';
import productData from '../product';
import { Card } from 'react-bootstrap';

const Name = () => {
  return <Card.Title>{productData.name}</Card.Title>;
};

export default Name;
