import Menu, { MenuItemsType } from '../menu/Menu';

const MENU_BUTTON_HEIGHT = 40;

export interface ContextMenuProps<T> {
  item: T;
  menuItemsRef: React.MutableRefObject<HTMLDivElement | null>;
  menu?: MenuItemsType<T>;
  openedFromRightClick: boolean;
  posX: number;
  posY: number;
  isContextMenuCutOff: boolean;
  genericEnterKey: () => void;
  handleMenuClose: () => void;
}

/**
 * Properties for `ContextMenuProps<T>`
 *
 * @template T - Generic type representing the item to which the context menu applies.
 *
 * @property {T} item
 * - The current item associated with the context menu.
 * This object is passed to each menu option's `action` and `disabled` functions.
 *
 * @property {React.MutableRefObject<HTMLDivElement | null>} menuItemsRef
 * - A mutable ref to the `div` containing the context menu. Used for handling the menu's positioning and visibility.
 *
 * @property {MenuType<T>} [menu]
 * - An array of menu options, where each option includes properties like `name`, `icon`, `action`, etc.
 * The `MenuType<T>` type allows some options to be separators (`separator: boolean`).
 *
 * @property {boolean} openedFromRightClick
 * - Indicates whether the context menu was opened via a right-click (`true`).
 * Determines whether the menu's position is set based on the click location or a predefined position.
 *
 * @property {number} posX
 * - X-coordinate for the menu's position, used if `openedFromRightClick` is `true`.
 *
 * @property {number} posY
 * - Y-coordinate for the menu's position, used if `openedFromRightClick` is `true`.
 *
 * @property {boolean} isContextMenuCutOff
 * - Specifies whether the menu should align to the bottom of the screen to prevent it
 * from being cut off on smaller screens. Switches menu positioning between top or bottom.
 *
 * @property {() => void} genericEnterKey
 * - A callback that executes if the Enter key is pressed without a selected menu option.
 * Can be used to define a default action.
 *
 * @property {() => void} handleMenuClose
 * - Function to close the context menu. Called after an action is executed or when pressing Enter in the menu.
 */

const ContextMenu = <T,>({
  item,
  menuItemsRef,
  menu,
  openedFromRightClick,
  posX,
  posY,
  isContextMenuCutOff,
  genericEnterKey,
  handleMenuClose,
}: ContextMenuProps<T>): JSX.Element => {
  return (
    <div
      className="z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5"
      style={
        openedFromRightClick
          ? { position: 'absolute', left: posX, top: posY, zIndex: 99 }
          : {
              position: 'absolute',
              right: 20,
              [isContextMenuCutOff ? 'bottom' : 'top']: MENU_BUTTON_HEIGHT,
              zIndex: 9999,
            }
      }
      ref={menuItemsRef}
    >
      <Menu item={item} genericEnterKey={genericEnterKey} handleMenuClose={handleMenuClose} menu={menu} />
    </div>
  );
};

export default ContextMenu;
