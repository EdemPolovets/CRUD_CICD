import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent';
  const widthClass = fullWidth ? 'w-full' : '';
  const classes = `${baseClasses} ${widthClass} ${className}`;
  
  return <input className={classes} {...props} />;
};

