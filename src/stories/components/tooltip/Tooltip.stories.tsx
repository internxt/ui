import { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '@/components/tooltip';
import { Button } from '@/components/button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Tooltip Title',
    subtitle: 'Optional subtitle',
    popsFrom: 'top',
    arrow: true,
    delayInMs: 300,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const buttonHover = <Button>Hover me</Button>;

export const WithoutArrow: Story = {
  args: {
    arrow: false,
  },
  render: (args) => <Tooltip {...args}>{buttonHover}</Tooltip>,
};

export const PopsFromTop: Story = {
  render: (args) => <Tooltip {...args}>{buttonHover}</Tooltip>,
};

export const PopsFromLeft: Story = {
  args: {
    popsFrom: 'left',
  },
  render: (args) => <Tooltip {...args}>{buttonHover}</Tooltip>,
};

export const PopsFromRight: Story = {
  args: {
    popsFrom: 'right',
  },
  render: (args) => <Tooltip {...args}>{buttonHover}</Tooltip>,
};

export const PopsFromBottom: Story = {
  args: {
    popsFrom: 'bottom',
  },
  render: (args) => <Tooltip {...args}>{buttonHover}</Tooltip>,
};
