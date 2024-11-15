import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/list/List';

type DriveItemData = {
  id: string;
  name: string;
  power: string;
  type: string;
};

const meta: Meta<typeof List<DriveItemData, 'name' | 'power' | 'type'>> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
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
        width: 'flex grow items-center min-w-driveNameHeader',
        name: 'name',
        orderable: false,
      },
      {
        label: 'Power',
        width: 'flex grow items-center min-w-driveNameHeader',
        name: 'power',
        orderable: false,
      },
      {
        label: 'Type',
        orderable: false,
        width: 'flex grow items-center w-size',
        name: 'type',
      },
    ],
    disableKeyboardShortcuts: true,
    items: [
      { id: '1', name: 'Son Goku', power: '1000000k', type: 'Saiyan' },
      { id: '2', name: 'Vegeta', power: '950000k', type: 'Saiyan' },
      { id: '3', name: 'Piccolo', power: '300000k', type: 'Namekian' },
      { id: '4', name: 'Son Gohan', power: '700000k', type: 'Saiyan' },
      { id: '5', name: 'Krillin', power: '75000k', type: 'Human' },
      { id: '6', name: 'Trunks', power: '600000k', type: 'Saiyan' },
      { id: '7', name: 'Frieza', power: '1200000k', type: 'Alien' },
      { id: '8', name: 'Cell', power: '950000k', type: 'Bio-Android' },
      { id: '9', name: 'Majin Buu', power: '950000k', type: 'Majin' },
      { id: '12', name: 'Bulma', power: '5', type: 'Human' },
      { id: '13', name: 'Yamcha', power: '50000k', type: 'Human' },
      { id: '14', name: 'Tien Shinhan', power: '80000k', type: 'Human' },
      { id: '15', name: 'Android 18', power: '900000k', type: 'Android' },
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
    selectedItems: [],
    onSelectedItemsChanged: () => {},
  },
  render: (args) => <List {...args} />,
};
