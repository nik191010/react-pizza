import React from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default FullPizza;
