import { IconWeight, X } from '@phosphor-icons/react';

export interface BaseDialogProps {
  isOpen: boolean;
  title?: string;
  hideCloseButton?: boolean;
  subTitle?: string;
  dialogRounded?: boolean;
  children: JSX.Element | JSX.Element[];
  classes?: string;
  titleClasses?: string;
  panelClasses?: string;
  closeClass?: string;
  weightIcon?: IconWeight;
  bgColor?: string;
  onClose: () => void;
  dataTest?: string;
}

/**
 * BaseDialog component
 *
 * @property {boolean} isOpen
 * - Controls whether the dialog is open or closed. If true, the dialog is visible.
 *
 * @property {string} [title]
 * - The title of the dialog, displayed at the top of the dialog box.
 *
 * @property {boolean} [hideCloseButton]
 * - If true, hides the close button (X icon) in the top right corner of the dialog.
 *
 * @property {string} [subTitle]
 * - A subtitle for the dialog, displayed below the title.
 *
 * @property {boolean} [dialogRounded]
 * - If true, applies a more rounded corner style to the dialog.
 *
 * @property {JSX.Element | JSX.Element[]} children
 * - The content to be displayed inside the dialog. Can be a single JSX element or an array of elements.
 *
 * @property {string} [classes]
 * - Custom classes for the outermost container of the dialog. Allows additional styling like margins or padding.
 *
 * @property {string} [titleClasses]
 * - Custom classes for styling the title element. Can modify font size, weight, etc.
 *
 * @property {string} [panelClasses]
 * - Custom classes for the main dialog panel, where the content is displayed.
 *
 * @property {string} [closeClass]
 * - Custom classes for the close button, allowing for customization of the button's appearance.
 *
 * @property {IconWeight} [weightIcon]
 * - Controls the thickness of the close button icon (X). Options range from "thin" to "bold".
 *
 * @property {string} [bgColor]
 * - Custom background color for the dialog. Defaults to a light surface color if not provided.
 *
 * @property {() => void} onClose
 * - Callback function triggered when the close button or overlay is clicked, used to close the dialog.
 */

const BaseDialog = ({
  isOpen,
  title,
  subTitle,
  dialogRounded,
  children,
  onClose,
  classes,
  panelClasses,
  titleClasses,
  closeClass,
  weightIcon,
  bgColor,
  dataTest,
  hideCloseButton,
}: BaseDialogProps): JSX.Element => {
  return (
    <div
      data-test={dataTest}
      className={`${isOpen ? 'flex' : 'hidden'} ${
        classes || ''
      } absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`}
    >
      <div
        className={`${panelClasses || ''} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${dialogRounded ? 'rounded-2xl' : 'rounded-lg pt-8'} text-gray-100 ${
          bgColor || 'bg-surface'
        }`}
      >
        <div className={`${subTitle ? 'justify-between bg-gray-1 p-5' : ''} flex flex-row items-start`}>
          {title ? (
            <div className="relative flex max-w-full flex-1 flex-col truncate">
              <span className={`${titleClasses || ''} truncate text-xl`} title={title}>
                {title}
              </span>
              <span className="max-w-fit flex-1 truncate text-base font-normal text-gray-50">{subTitle}</span>
            </div>
          ) : null}
          {hideCloseButton ? null : (
            <div
              className={`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${closeClass || 'text-primary hover:text-primary-dark'} `}
            >
              <X role="button" onClick={onClose} size={28} weight={weightIcon} />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default BaseDialog;
