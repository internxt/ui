import type { Meta, StoryObj } from '@storybook/react';
import List, { ListProps } from '../../../components/list/List';
import { useState } from 'react';
import { MenuType } from '../../../components';

type DriveItemData = {
  id: number;
  name: string;
  power: number;
  type: string;
};

type OrderBy = { field: 'name' | 'power' | 'type'; direction: 'ASC' | 'DESC' };

type ListWrapperProps = Omit<
  ListProps<DriveItemData, 'name' | 'power' | 'type'>,
  'items' | 'orderBy' | 'onOrderByChanged'
> & {
  items: DriveItemData[];
};

const menu: MenuType<unknown> = [
  { name: 'Techniques', action: () => {} },
  { name: 'Training', action: () => {} },
  { separator: true },
  { name: 'More info...', action: () => {} },
];

const ListWrapper = (props: ListWrapperProps) => {
  const { items, ...args } = props;
  const [orderBy, setOrderBy] = useState<OrderBy | undefined>(undefined);
  const [sortedItems, setSortedItems] = useState(items);
  const [selectedItems, setSelectedItems] = useState<DriveItemData[]>([]);

  const handleOrderByChanged = (value: OrderBy) => {
    setOrderBy(value);

    const sorted = [...items].sort((a, b) => {
      if (value.direction === 'ASC') {
        return a[value.field] > b[value.field] ? 1 : -1;
      }
      return a[value.field] < b[value.field] ? 1 : -1;
    });

    setSortedItems(sorted);
  };

  const handleSelectedItems = (changes: { props: DriveItemData; value: boolean }[]) => {
    setSelectedItems(changes.filter((item) => item.value).map((item) => item.props));
  };

  return (
    <div className="flex justify-center">
      <List
        {...args}
        selectedItems={selectedItems}
        onSelectedItemsChanged={handleSelectedItems}
        items={sortedItems}
        orderBy={orderBy}
        onOrderByChanged={handleOrderByChanged}
        menu={menu}
      />
    </div>
  );
};

const meta: Meta<typeof List<DriveItemData, 'name' | 'power' | 'type'>> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListLayout: Story = {
  args: {
    header: [
      {
        label: 'Name',
        width: 'flex grow min-w-driveNameHeader',
        name: 'name',
        orderable: true,
        defaultDirection: 'ASC',
      },
      {
        label: 'Power',
        width: 'flex grow min-w-driveNameHeader',
        name: 'power',
        orderable: true,
        defaultDirection: 'ASC',
      },
      {
        label: 'Type',
        width: 'flex grow w-size',
        name: 'type',
        orderable: true,
        defaultDirection: 'ASC',
      },
    ],
    disableKeyboardShortcuts: true,
    items: [
      { id: 1, name: 'Son Goku', power: 1500000, type: 'Saiyan' },
      { id: 2, name: 'Vegeta', power: 1000000, type: 'Saiyan' },
      { id: 3, name: 'Piccolo', power: 800000, type: 'Namekian' },
      { id: 4, name: 'Son Gohan', power: 1000000, type: 'Saiyan' },
      { id: 5, name: 'Krillin', power: 150000, type: 'Human' },
      { id: 6, name: 'Trunks', power: 600000, type: 'Saiyan' },
      { id: 7, name: 'Frieza', power: 1200000, type: 'Alien' },
      { id: 8, name: 'Cell', power: 950000, type: 'Android' },
      { id: 9, name: 'Majin Buu', power: 950000, type: 'Majin' },
      { id: 12, name: 'Bulma', power: 5, type: 'Human' },
      { id: 13, name: 'Yamcha', power: 50000, type: 'Human' },
      { id: 14, name: 'Tien Shinhan', power: 180000, type: 'Human' },
      { id: 15, name: 'Android 18', power: 900000, type: 'Android' },
      { id: 16, name: 'Master Roshi', power: 10000, type: 'Human' },
    ],
    itemComposition: [
      (props) => (
        <div
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          {props.name}
        </div>
      ),
      (props) => (
        <div
          style={{
            color: 'darkblue',
          }}
        >
          {props.power}
        </div>
      ),
      (props) => <div style={{}}>{props.type}</div>,
    ],
  },
  render: (args) => <ListWrapper {...args} className="max-h-[500px] overflow-y-auto" />,
};
