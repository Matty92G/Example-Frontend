import React from 'react';

const User = () => {
  return (
    <div>
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} alt="Profile Pic" />
    </div>
  );
};

export default User;
