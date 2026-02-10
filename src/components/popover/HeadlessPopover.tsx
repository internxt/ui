import { Popover as HPopover, Transition } from '@headlessui/react';
import { ReactNode } from 'react';

export interface HeadlessPopoverRenderProps {
  open: boolean;
  close: () => void;
  Button: typeof HPopover.Button;
  Panel: typeof HPopover.Panel;
}

interface HeadlessPopoverProps {
  trigger?: ReactNode;
  panel?: ReactNode | ((close: () => void) => ReactNode);
  className?: string;
  buttonClassName?: string;
  panelClassName?: string;
  panelStyle?: React.CSSProperties;
  buttonAs?: React.ElementType;
  isAnimated?: boolean;
  isStatic?: boolean;
  children?: (props: HeadlessPopoverRenderProps) => ReactNode;
}

const DEFAULT_PANEL_CLASS = 'absolute right-0 z-50 mt-1 rounded-md border border-gray-10 bg-surface py-1.5 shadow-subtle dark:bg-gray-5';

const BUTTON_CONTAINER_STYLE = { lineHeight: 0 } as const;

/**
 * HeadlessPopover component - A flexible popover wrapper around HeadlessUI.
 *
 * ## Two usage modes:
 *
 * ### 1. Simple Mode (use trigger + panel props):
 * ```tsx
 * <HeadlessPopover
 *   trigger={<button>Click me</button>}
 *   panel={<div>Content</div>}
 * />
 * ```
 *
 * ### 2. Render Props Mode (use children for full control):
 * ```tsx
 * <HeadlessPopover>
 *   {({ open, close, Button, Panel }) => (
 *     <>
 *       <Button>Custom Button</Button>
 *       <Panel>Custom Panel</Panel>
 *     </>
 *   )}
 * </HeadlessPopover>
 * ```
 *
 * **Note:** If `children` prop is provided, all other props (trigger, panel, etc.) are ignored.
 *
 * @property {ReactNode} [trigger]
 * - The content to be displayed inside the trigger button.
 *
 * @property {ReactNode | ((close: () => void) => ReactNode)} [panel]
 * - The content to be displayed inside the popover panel.
 * Can be a ReactNode or a function that receives a `close` function as a parameter.
 *
 * @property {string} [className]
 * - Additional custom classes for the outermost container of the popover.
 *
 * @property {string} [buttonClassName]
 * - Custom classes for the trigger button.
 *
 * @property {string} [panelClassName]
 * - Custom classes for the panel container.
 *
 * @property {React.CSSProperties} [panelStyle]
 * - Inline styles for the panel.
 *
 * @property {React.ElementType} [buttonAs]
 * - Custom element type for the button (e.g., 'div', CustomComponent).
 *
 * @property {boolean} [isAnimated=true]
 * - Whether to use transition animations when opening/closing.
 *
 * @property {boolean} [isStatic=false]
 * - Whether to keep the panel mounted in the DOM even when closed (static mode).
 *
 * @property {(props: HeadlessPopoverRenderProps) => ReactNode} [children]
 * - Render prop function for advanced customization. When provided, overrides all other props.
 *
 * @returns {JSX.Element}
 * - The rendered HeadlessPopover component.
 */
export default function HeadlessPopover({
  trigger,
  panel,
  className = '',
  buttonClassName = '',
  panelClassName,
  panelStyle,
  buttonAs,
  isAnimated = true,
  isStatic = false,
  children,
}: Readonly<HeadlessPopoverProps>): JSX.Element {
  if (children) {
    return (
      <HPopover className={className}>
        {({ open, close }: { open: boolean; close: () => void }) => <>{children({ open, close, Button: HPopover.Button, Panel: HPopover.Panel })}</>}
      </HPopover>
    );
  }

  const panelElement = (
    <HPopover.Panel
      className={panelClassName || DEFAULT_PANEL_CLASS}
      style={panelStyle}
      static={isStatic}
    >
      {({ close }: { close: () => void }) => (
        <>{typeof panel === 'function' ? panel(close) : panel}</>
      )}
    </HPopover.Panel>
  );

  const containerClassName = `relative ${className}`;
  const defaultButtonClassName = [
    'cursor-pointer',
    'outline-none',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary'
  ].join(' ');
  const finalButtonClassName = `${defaultButtonClassName} ${buttonClassName}`;

  return (
    <HPopover style={BUTTON_CONTAINER_STYLE} className={containerClassName}>
      <HPopover.Button as={buttonAs} className={finalButtonClassName}>
        {trigger}
      </HPopover.Button>

      {isAnimated ? (
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          className="z-50"
        >
          {panelElement}
        </Transition>
      ) : (
        panelElement
      )}
    </HPopover>
  );
}
