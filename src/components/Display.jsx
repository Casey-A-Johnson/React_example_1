import React from 'react';

const Display = (props) => {
  return (
    <div>
      <h1>Form Information</h1>
      <p>First Name: {props.Name}</p>
      <p>Email Address: {props.Email}</p>
      <p>Message: {props.Message}</p>
    </div>
  );
};

export default Display;
