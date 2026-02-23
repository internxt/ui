export interface TextAreaComponentProps {
  disabled?: boolean;
  accentColor?: 'red';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
}

/**
 * TextArea component
 *
 * @param {TextAreaComponentProps} props - Properties of the TextArea component.
 *
 * @property {boolean} [disabled=false]
 * - Optional flag to disable the text area. Defaults to false if not specified.
 *
 * @property {'red'} [accentColor]
 * - Optional accent color for the text area.
 *
 * @property {string} [placeholder='']
 * - Optional placeholder text that is displayed when the text area is empty.
 *
 * @property {string} [value='']
 * - Optional value for the text area. The content inside the text area is controlled by this value.
 *
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange]
 * - Optional callback function triggered when the text area value changes. Receives the event object as an argument.
 *
 * @property {string} [name]
 * - Optional name attribute for the text area, typically used for form submissions.
 *
 * @returns {JSX.Element}
 * - The rendered TextArea component.
 */

const TextArea = ({
  disabled = false,
  accentColor,
  placeholder = '',
  value = '',
  onChange,
  className,
  name,,
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
