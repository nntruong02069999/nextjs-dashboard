import React from 'react';

export const Input = ({ type = "text", placeholder = "", className = "", ...props }) => (
  <input type={type} placeholder={placeholder} className={`input ${className}`} {...props} />
); 