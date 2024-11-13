'use client';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = `px-4 py-2 rounded-2xl transition-all duration-700 ease-in-out`;

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary via-green-500 to-lime-400 text-white',
    secondary: 'bg-gray-200 text-gray-800 border-2 border-gray-800 hover:bg-gradient-to-r from-primary via-green-500 to-lime-400 hover:text-white hover:scale-105 shadow-lg transition-all duration-300 ease-in-out',
};

  const sizeStyles = {
    sm: 'text-sm px-2 py-1',
    md: 'text-md px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
