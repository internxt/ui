import { ReactNode } from 'react';

/**
 * Card component
 *
 * @property {string} [className]
 * - Optional additional CSS classes to customize the appearance of the card.
 * By default, the card has rounded corners, border, padding, and shadow.
 *
 * @property {ReactNode} children
 * - The content to be rendered inside the card. This can be any valid React node.
 */

const Card = ({ className = '', children }: { className?: string; children: ReactNode }): JSX.Element => {
  return (
    <div
      className={`rounded-xl border border-gray-10 bg-surface p-5 shadow-[0_12px_20px_0_rgba(0,0,0,0.02)] dark:bg-gray-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
