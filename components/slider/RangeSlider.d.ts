
interface RangeSliderProps {
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
export declare const RangeSlider: ({ value, min, max, step, className, disabled, ariaLabel, onChange, }: RangeSliderProps) => import("react/jsx-runtime").JSX.Element;
export {};
