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
const Header = ({ leftContent, rightContent, className = '' }: HeaderProps): JSX.Element => {
  return (
    <header
      className={`
        flex
        items-center
        justify-between
        ${className}
      `}
    >
      <div className="flex items-center space-x-4">{leftContent}</div>

      <div className="flex items-center space-x-4">{rightContent}</div>
    </header>
  );
};

export default Header;
