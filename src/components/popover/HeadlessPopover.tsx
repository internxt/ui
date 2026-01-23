import { Popover as HPopover, Transition } from '@headlessui/react';
import { ReactNode } from 'react';

export interface HeadlessPopoverRenderProps {
  open: boolean;
  close: () => void;
  Button: typeof HPopover.Button;
  Panel: typeof HPopover.Panel;
}

interface HeadlessPopoverProps {
  childrenButton?: ReactNode;
  panel?: ReactNode | ((close: () => void) => ReactNode);
  className?: string;
  classButton?: string;
  classPanel?: string;
  panelStyle?: React.CSSProperties;
  buttonAs?: React.ElementType;
  shouldUseTransition?: boolean;
  shouldAlwaysShow?: boolean;
  children?: (props: HeadlessPopoverRenderProps) => ReactNode;
}

const DEFAULT_PANEL_CLASS = 'absolute right-0 z-50 mt-1 rounded-md border border-gray-10 bg-surface py-1.5 shadow-subtle dark:bg-gray-5';

/**
 * HeadlessPopover component
 *
 * @property {ReactNode} childrenButton
 * - The content to be displayed inside the trigger button.
 *
 * @property {ReactNode | ((close: () => void) => ReactNode)} panel
 * - The content to be displayed inside the popover panel.
 * Can be a ReactNode or a function that receives a `close` function as a parameter.
 *
 * @property {string} [className]
 * - Additional custom classes for the outermost container of the popover.
 * Can be used for positioning or adding custom styles.
 *
 * @property {string} [classButton]
 * - Custom classes for the trigger button.
 *
 * @property {string} [classPanel]
 * - Custom classes for the panel container.
 *
 * @property {React.CSSProperties} [panelStyle]
 * - Inline styles for the panel.
 *
 * @property {React.ElementType} [buttonAs]
 * - Custom element type for the button.
 *
 * @property {boolean} [shouldUseTransition=true]
 * - Whether to use transition animations.
 *
 * @property {boolean} [shouldAlwaysShow=false]
 * - Whether to always show the panel (static mode).
 *
 * @property {(props: HeadlessPopoverRenderProps) => ReactNode} [children]
 * - Render prop function for advanced customization.
 *
 * @returns {JSX.Element}
 * - The rendered HeadlessPopover component.
 */
export default function HeadlessPopover({
  childrenButton,
  panel,
  className = '',
  classButton = '',
  classPanel,
  panelStyle,
  buttonAs,
  shouldUseTransition = true,
  shouldAlwaysShow = false,
  children,
}: Readonly<HeadlessPopoverProps>): JSX.Element {
  if (children) {
    return (
      <HPopover className={className}>
        {({ open, close }: { open: boolean; close: () => void }) => <>{children({ open, close, Button: HPopover.Button, Panel: HPopover.Panel })}</>}
      </HPopover>
    );
  }

  const PanelContent = ({ close }: { close: () => void }) => (
    <>{typeof panel === 'function' ? panel(close) : panel}</>
  );

  const Panel = (
    <HPopover.Panel
      className={classPanel || DEFAULT_PANEL_CLASS}
      style={panelStyle}
      static={shouldAlwaysShow}
    >
      {({ close }: { close: () => void }) => <PanelContent close={close} />}
    </HPopover.Panel>
  );

  return (
    <HPopover style={{ lineHeight: 0 }} className={`relative ${className}`}>
      <HPopover.Button as={buttonAs} className={`cursor-pointer outline-none ${classButton}`}>
        {childrenButton}
      </HPopover.Button>

      {shouldUseTransition ? (
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          className="z-50"
        >
          {Panel}
        </Transition>
      ) : (
        Panel
      )}
    </HPopover>
  );
}
