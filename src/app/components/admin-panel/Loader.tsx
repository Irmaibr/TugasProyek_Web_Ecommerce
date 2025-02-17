import React from 'react';

const Loader = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,6,0.8)] grid place-items-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;