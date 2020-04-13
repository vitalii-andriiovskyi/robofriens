import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div style={{overflowY: 'scroll', height: '800px', border: '1px solid black'}}>
      {children}
    </div>
  );
};

export default Scroll;