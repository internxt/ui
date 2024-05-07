import { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const Input = ({
  type = 'text',
  size = 'lg',
  disabled = false,
  accentColor,
  placeholder = '',
}: {
  type?: 'text' | 'password';
  size?: 'lg' | 'md';
  disabled?: boolean;
  accentColor?: 'red' | 'orange' | 'green';
  placeholder?: string;
}): JSX.Element => {
  const [intputType, setInputType] = useState(type);

  const handleInputType = () => {
    intputType === 'text' ? setInputType('password') : setInputType('text');
  };

  return (
    <div className="relative">
      <input
        type={intputType}
        disabled={disabled}
        placeholder={placeholder}
        className={`bg-transparent border rounded-md outline-none font-regular placeholder:text-gray-30
            ${size === 'lg' && 'text-lg h-10 px-4'}
            ${size === 'md' && 'text-base h-9 px-3.5'}
            ${!disabled ? 'border-gray-20 text-gray-100' : 'border-gray-5 text-gray-40'}
            ${!accentColor && 'border-gray-20 focus:border-primary focus:ring focus:ring-primary/10'}
            ${accentColor === 'red' && 'border-red focus:ring focus:ring-red/10'}
            ${accentColor === 'orange' && 'border-orange focus:ring focus:ring-orange/10'}
            ${accentColor === 'green' && 'border-green focus:ring focus:ring-green/10'}
        `}
      />

      {type === 'password' && (
        <button onClick={handleInputType}>
          {intputType === 'text' ? (
            <EyeSlash
              className={`absolute h-6 w-6 
                ${size === 'lg' && 'right-4 top-2'}
                ${size === 'md' && 'right-3.5 top-1.5'}
            `}
            />
          ) : (
            <Eye
              className={`absolute h-6 w-6 
                ${size === 'lg' && 'right-4 top-2'}
                ${size === 'md' && 'right-3.5 top-1.5'}
            `}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
