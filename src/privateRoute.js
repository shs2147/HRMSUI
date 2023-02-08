import React from 'react';
import WithAuth from './WithAuth';

const PrivatePage = () => {
  return <h1>Private Page</h1>;
};

export default WithAuth(PrivatePage);
