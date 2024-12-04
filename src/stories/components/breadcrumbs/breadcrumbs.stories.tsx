import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from '@/components/breadcrumbs';
import { BreadcrumbItemData, BreadcrumbsMenuProps } from '@/components/breadcrumbs/BreadcrumbsItem';
import { Dispatch } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useEffect, useRef, useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { Menu } from '@/components/menu';

const breadcrumbItems: BreadcrumbItemData[] = [
  { uuid: '1', label: 'Home', icon: null, active: true },
  { uuid: '2', label: 'Category', icon: null, active: true },
  { uuid: '3', label: 'Product', icon: null, active: false },
];

const ExampleIconBlue = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="blue">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

const ExampleIconGreen = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="green">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

const menuBreadcrumbs = (props: BreadcrumbsMenuProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isVisible && labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <span ref={labelRef} onClick={handleClick} style={{ cursor: 'pointer' }}>
        {props.item.label}
      </span>
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            top: menuPosition.top,
            left: menuPosition.left,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            zIndex: 10,
          }}
        >
          <Menu
            item={{ id: 1, name: 'Sample Item' }}
            handleMenuClose={handleClick}
            menu={[
              { name: 'Title', isTitle: () => true },
              { separator: true },
              { name: 'Option 1', action: () => alert('Option 1 selected') },
              { name: 'Option 2', disabled: () => true, action: () => alert('Option 2 selected') },
              { name: 'Option 3', disabled: () => false, action: () => alert('Option 3 selected') },
              {
                name: 'Option 4',
                action: () => alert('Option 4 selected'),
              },
            ]}
          />
        </div>
      )}
      <CaretDown onClick={handleClick} weight="fill" />
    </>
  );
};

const defaultBreadcrumbsProps: BreadcrumbsProps<Dispatch> = {
  items: breadcrumbItems,
  namePath: [
    { name: 'Home', uuid: '1' },
    { name: 'Category', uuid: '2' },
    { name: 'Product', uuid: '3' },
  ],
  isSomeItemSelected: false,
  selectedItems: [],
  onItemDropped: () => () => Promise.resolve(),
  canItemDrop: () => () => true,
  acceptedTypes: ['breadcrumb'],
  dispatch: {} as Dispatch,
  itemComponent: () => <ExampleIconBlue />,
};

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBreadcrumbs: Story = {
  args: {
    ...defaultBreadcrumbsProps,
  },
};

export const BreadcrumbWithHiddenItems: Story = {
  args: {
    ...defaultBreadcrumbsProps,
    items: [
      ...breadcrumbItems,
      { uuid: '4', label: 'Extra Item', icon: null, active: false },
      { uuid: '5', label: 'More Items', icon: null, active: false },
    ],
  },
};

export const BreadcrumbWithIcons: Story = {
  args: {
    ...defaultBreadcrumbsProps,
    items: [
      ...breadcrumbItems,
      { uuid: '4', label: 'Extra Item', icon: <ExampleIconGreen />, active: false },
      { uuid: '5', label: 'More Items', icon: <ExampleIconGreen />, active: false },
    ],
  },
};

export const BreadcrumbsWithCustomMenu: Story = {
  args: {
    ...defaultBreadcrumbsProps,
    menu: menuBreadcrumbs,
  },
};
