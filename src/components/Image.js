// src/components/Image.js
import React from 'react';
import { Card } from 'react-bootstrap';
import productData from '../product';

const ImageComponent = () => {
  return <Card.Img variant="top" src={productData.image} alt={productData.name} />;
};

export default ImageComponent;
