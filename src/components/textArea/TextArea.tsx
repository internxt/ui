interface TextAreaComponentProps {
  disabled?: boolean;
  accentColor?: 'red';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
}

const TextArea = ({
  disabled = false,
  accentColor,
  placeholder = '',
  value = '',
  onChange,
  className,
  name,
}: TextAreaComponentProps): JSX.Element => {
  return (
    <textarea
      disabled={disabled}
      placeholder={placeholder}
      className={`
        w-full h-full py-4 px-3.5 bg-transparent border rounded-md outline-none text-lg font-regular resize-none
        placeholder:text-gray-30
        ${className}
        ${!disabled ? 'border-gray-20 text-gray-100' : 'border-gray-5 text-gray-40'}
        ${!accentColor && 'border-gray-20 focus:border-primary focus:ring focus:ring-primary/10'}
        ${accentColor === 'red' && 'border-red focus:ring focus:ring-red/10'}
        `}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default TextArea;
