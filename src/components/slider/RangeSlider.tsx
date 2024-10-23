import { ChangeEvent } from 'react';
import '../../styles/RangeSlider.css';

interface RangeSliderProps {
  value: number;
  min?: number;
  max: number;
  step?: number;
  className?: string;
  color?: string;
  onChange: (value: number) => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export const RangeSlider = ({
  value,
  min = 0,
  max,
  step = 1,
  className,
  onChange,
  disabled = false,
  ariaLabel = 'Range slider',
}: RangeSliderProps) => {
  const percentage = (value / max) * 100;
  const sliderBackground = `linear-gradient(to right, #3264fe ${percentage}%, #d5d5d5 ${percentage}%)`;

  const handleChange = (newValue: number) => {
    onChange(newValue);
  };

  return (
    <div className={className}>
      <input
        id="my-slider"
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onInput={(e: ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value))}
        disabled={disabled}
        aria-label={ariaLabel}
        style={{ background: sliderBackground }}
      />
    </div>
  );
};
