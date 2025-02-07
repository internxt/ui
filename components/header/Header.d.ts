export interface HeaderProps {
    /**
     * Elements to be rendered on the left side of the header
     */
    leftContent?: JSX.Element;
    /**
     * Elements to be rendered on the right side of the header
     */
    rightContent?: JSX.Element;
    /**
     * Optional class name for additional styling
     */
    className?: string;
}
/**
 * Header component
 *
 * A flexible header component that can contain any content on its left and right sides.
 *
 * @param {HeaderProps} props - The properties for the Header component
 * @returns {JSX.Element} The rendered Header component
 */
declare const Header: ({ leftContent, rightContent, className }: HeaderProps) => JSX.Element;
export default Header;
