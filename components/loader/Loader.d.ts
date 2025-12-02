import { default as React } from '../../../node_modules/react';
export interface LoaderProps {
    classNameContainer?: string;
    classNameLoader?: string;
    classNameText?: string;
    type?: 'spinner' | 'pulse';
    text?: string;
    size?: number;
}
/**
 * Loader component.
 *
 * @property {string} [classNameContainer]
 * - Optional class name for the container wrapping the loader.
 * Useful for applying custom styles to the outermost container.
 *
 * @property {string} [classNameLoader]
 * - Optional class name for the loader element itself (spinner or pulse).
 * Allows custom styling of the loading animation.
 *
 * @property {string} [classNameText]
 * - Optional class name for the text displayed below the loader.
 * Allows style or adjust the appearance of the text.
 *
 * @property {'spinner' | 'pulse'} [type='spinner']
 * - Determines the type of loader to render.
 * Can be `'spinner'` for a rotating animation or `'pulse'` for a pulsing effect.
 * Defaults to `'spinner'`.
 *
 * @property {string} [text]
 * - Optional text to display below the loader.
 *
 * @property {number} [size=32]
 * - Size of the spinner loader in pixels.
 * Applies to the width and height of the SVG element for the `'spinner'` type.
 * Defaults to `32`.
 */
declare const Loader: React.FC<LoaderProps>;
export default Loader;
