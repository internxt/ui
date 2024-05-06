// import React from 'react';

const Input = ({
  size = 'lg',
  disabled = false,
  accentColor,
  placeholder = '',
}: {
  size?: 'lg' | 'md';
  disabled?: boolean;
  accentColor?: 'red' | 'orange' | 'green';
  placeholder?: string;
}): JSX.Element => {
  return (
    <div>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type="text"
        className={`bg-transparent border rounded-md outline-none text-base font-regular placeholder:text-gray-30
        ${size === 'lg' && 'h-10 px-4'}
        ${size === 'md' && 'h-9 px-3.5'}
        ${!disabled ? 'border-gray-20 text-gray-100' : 'border-gray-5 text-gray-40'}
        ${!accentColor && 'border-gray-20 focus:border-primary focus:ring focus:ring-primary/10'}
        ${accentColor === 'red' && 'border-red focus:ring focus:ring-red/10'}
        ${accentColor === 'orange' && 'border-orange focus:ring focus:ring-orange/10'}
        ${accentColor === 'green' && 'border-green focus:ring focus:ring-green/10'}
        `}
      />
    </div>
  );
};

export default Input;
