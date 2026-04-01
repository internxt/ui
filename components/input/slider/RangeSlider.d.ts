export interface RangeSliderProps {
    value: number;
    min?: number;
    max: number;
    step?: number;
    percentageForProgressSliderBar?: number;
    className?: string;
    onChange: (value: number) => void;
    disabled?: boolean;
    ariaLabel?: string;
}
/**
 * RangeSlider component
 *
 * @param {RangeSliderProps} props - Properties of the RangeSlider component.
 *
 * @property {number} value
 * - The current value of the slider.
 *
 * @property {number} [min=0]
 * - The minimum value of the slider. Defaults to 0 if not specified.
 *
 * @property {number} max
 * - The maximum value of the slider.
 *
 * @property {number} [step]
 * - The step interval for the slider. Defines how much the value increments or decrements on each step.
 *
 * @property {number} [percentageForProgressSliderBar]
 * - Optional. This value could control the width or progress of the slider,
 * but it's not used in the component directly.
 *
 * @property {string} [className]
 * - Optional class name to apply custom styles to the slider container.
 *
 * @property {(value: number) => void} onChange
 * - Callback function triggered when the slider value changes. Receives the new value as an argument.
 *
 * @property {boolean} [disabled=false]
 * - Optional flag to disable the slider. Defaults to false if not specified.
 *
 * @property {string} [ariaLabel="Range slider"]
 * - Optional ARIA label for accessibility purposes. Defaults to 'Range slider' if not specified.
 *
 * @returns {JSX.Element}
 * - The rendered RangeSlider component.
 *
 * The slider visually represents its value with a linear gradient background.
 * The background dynamically adjusts as the slider's value changes, reflecting the percentage of progress.
 * The slider supports custom min, max, and step values, and handles input changes via the `onChange` callback.
 *
 * The component also provides accessibility through the `aria-label` attribute.
 */
declare const RangeSlider: ({ value, min, max, step, className, disabled, ariaLabel, onChange, }: RangeSliderProps) => import("react/jsx-runtime").JSX.Element;
export default RangeSlider;
