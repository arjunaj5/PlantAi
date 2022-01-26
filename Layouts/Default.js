import React from 'react';
import Header from '../Components/Header';

function Default({children}) {
  return <>
    <Header />
    {children}
  </>;
}

export default Default;
