type SIZE_KEYS = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';
/**
 * Renders an avatar component which can be either a picture or a default avatar with initials.
 *
 * @param {Object} props - The properties for the Avatar component.
 * @param {string} props.fullName - The full name of the user, used to generate initials if no image is provided.
 * @param {number} [props.diameter=80] - The diameter of the avatar in pixels. Ignored if `size` is provided.
 * @param {SIZE_KEYS} [props.size] - Predefined size for the avatar. If provided, overrides the `diameter`.
 *                                   The associated value in `SIZES` will be used as the diameter. Possible values are:
 *                                    - `'xxs'`: 28px
 *                                    - `'xs'`: 36px
 *                                    - `'sm'`: 40px
 *                                    - `'base'`: 48px
 *                                    - `'lg'`: 80px
 *                                    - `'xl'`: 128px
 * @param {string|null} [props.src] - The URL of the image to display as the avatar. If not provided, initials are shown
 * @param {string} [props.className=''] - Additional CSS classes to apply to the avatar component.
 * @param {Object} [props.style={}] - Additional inline styles to apply to the avatar component.
 * @returns {JSX.Element} The rendered avatar component.
 */
export declare const Avatar: ({ src, diameter, size, className, fullName, style, }: {
    fullName: string;
    diameter?: number;
    size?: SIZE_KEYS;
    src?: string | null;
    className?: string;
    style?: Record<string, string | number>;
}) => JSX.Element;
export {};
