import { ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

type TooltipContentProps =
  | { content: ReactNode; title?: never; subtitle?: never }
  | { content?: never; title: string; subtitle?: string };

type TooltipBaseProps = {
  children: ReactNode;
  popsFrom: 'right' | 'left' | 'top' | 'bottom';
  className?: string;
  delayHideInMs?: number;
  delayShowInMs?: number;
  arrow?: boolean;
  tooltipClassName?: string;
  titleClassName?: string;
  animation?: 'scale' | 'fade' | 'none';
};

export type TooltipProps = TooltipBaseProps & TooltipContentProps;

/**
 * Tooltip component
 *
 * @property {ReactNode} children
 * - The content that triggers the tooltip when hovered over.
 *
 * @property {string} [title]
 * - The main text displayed inside the tooltip.
 *
 * @property {ReactNode} [content]
 * - Custom content to render inside the tooltip bubble. When provided, `title` and `subtitle` are ignored.
 *
 * @property {string} [subtitle]
 * - An optional subtitle displayed below the main title inside the tooltip.
 *
 * @property {'right' | 'left' | 'top' | 'bottom'} popsFrom
 * - Determines the direction from which the tooltip appears relative to the trigger element.
 *   - "right": Tooltip appears to the right of the element.
 *   - "left": Tooltip appears to the left of the element.
 *   - "top": Tooltip appears above the element.
 *   - "bottom": Tooltip appears below the element.
 *
 * @property {string} [className]
 * - Additional CSS classes to style the tooltip container. Use to override default styles.
 *
 * @property {number} [delayHideInMs]
 * - The delay (in milliseconds) before hiding the tooltip after the mouse leaves the trigger element.
 *   - If not provided, the tooltip hides immediately.
 *
 * @property {number} [delayShowInMs]
 * - The delay (in milliseconds) before showing the tooltip after the mouse enters the trigger element.
 *   - If not provided, the tooltip shows immediately.
 *
 * @property {boolean} [arrow=true]
 * - Whether to display the arrow pointing to the trigger element.
 *   - Default is true.
 *
 * @property {string} [tooltipClassName]
 * - Additional CSS classes to style the tooltip bubble (background, padding, border-radius).
 *
 * @property {string} [titleClassName]
 * - Additional CSS classes to style the title text.
 *
 * @property {'scale' | 'fade' | 'none'} [animation='scale']
 * - The animation style used when showing/hiding the tooltip.
 *   - "scale": Scale and fade transition (default).
 *   - "fade": Opacity-only transition.
 *   - "none": No animation, instant show/hide.
 *
 * @returns {JSX.Element}
 * - A tooltip component that shows additional information when hovering over its children.
 */

const POSITION_CONFIG = {
  right: {
    tooltip: 'left-full top-1/2 -translate-y-1/2 ml-1.5',
    triangle: 'flex-row-reverse',
    clip: 'polygon(100% 0%, 100% 100%, 0% 50%)',
    arrowSize: 'h-4 w-1.5',
  },
  left: {
    tooltip: 'right-full top-1/2 -translate-y-1/2 mr-1.5',
    triangle: 'flex-row',
    clip: 'polygon(0% 0%, 0% 100%, 100% 50%)',
    arrowSize: 'h-4 w-1.5',
  },
  top: {
    tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-1.5 origin-bottom',
    triangle: 'flex-col',
    clip: 'polygon(0% 0%, 100% 0%, 50% 100%)',
    arrowSize: 'h-1.5 w-4',
  },
  bottom: {
    tooltip: 'top-full left-1/2 -translate-x-1/2 mt-1.5',
    triangle: 'flex-col-reverse',
    clip: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    arrowSize: 'h-1.5 w-4',
  },
} as const;

const clearTimeoutRef = (ref: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
  if (ref.current !== null) {
    clearTimeout(ref.current);
    ref.current = null;
  }
};

const Tooltip = ({
  children,
  title,
  subtitle,
  content,
  popsFrom,
  className,
  delayHideInMs,
  delayShowInMs,
  arrow = true,
  tooltipClassName,
  titleClassName,
  animation = 'scale',
}: TooltipProps): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setVisibility = useCallback(
    (value: boolean, delay?: number) => {
      clearTimeoutRef(hideTimeoutRef);
      clearTimeoutRef(showTimeoutRef);

      if (delay === undefined) {
        setVisible(value);
        return;
      }

      const ref = value ? showTimeoutRef : hideTimeoutRef;
      ref.current = setTimeout(() => {
        ref.current = null;
        setVisible(value);
      }, delay);
    },
    [],
  );

  const show = useCallback(() => setVisibility(true, delayShowInMs), [setVisibility, delayShowInMs]);
  const hide = useCallback(() => setVisibility(false, delayHideInMs), [setVisibility, delayHideInMs]);

  useEffect(() => {
    return () => {
      clearTimeoutRef(hideTimeoutRef);
      clearTimeoutRef(showTimeoutRef);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  const ANIMATION_CLASSES = {
    none: visible ? 'opacity-100' : 'invisible opacity-0',
    fade: `transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`,
    scale: `transition-all duration-150 ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`,
  };

  const animationClass = ANIMATION_CLASSES[animation];

  const { tooltip: tooltipPosition, triangle: trianglePosition, clip, arrowSize } = POSITION_CONFIG[popsFrom];

  const isInteractive = delayHideInMs !== undefined;

  return (
    <div
      data-testid="tooltip-container"
      className={`relative flex w-max items-center ${className ?? ''}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={visible ? tooltipId : undefined}
    >
      <div
        role="tooltip"
        id={tooltipId}
        aria-hidden={!visible}
        className={[
          `absolute ${isInteractive ? '' : 'pointer-events-none'}`,
          tooltipPosition,
          'flex items-center',
          trianglePosition,
          'drop-shadow-tooltip',
          animationClass,
        ].join(' ')}
        onMouseEnter={isInteractive ? show : undefined}
        onMouseLeave={isInteractive ? hide : undefined}
      >
        <div
          className={tooltipClassName ?? 'w-max rounded-lg bg-gray-90 px-4 py-1.5 text-center dark:bg-gray-10'}
        >
          {content ?? (
            <>
              <span className={titleClassName ?? 'text-base text-white'}>{title}</span>
              {subtitle && <p className="-mt-1 text-sm text-gray-40">{subtitle}</p>}
            </>
          )}
        </div>
        {arrow && (
          <div
            className={`bg-gray-90 dark:bg-gray-10 ${arrowSize}`}
            style={{ clipPath: clip, marginTop: popsFrom === 'top' ? '-1px' : undefined }}
            data-testid="tooltip-arrow"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
