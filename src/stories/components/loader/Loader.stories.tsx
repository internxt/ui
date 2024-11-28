import type { Decorator, Meta, StoryObj } from '@storybook/react';
import Loader from '../../../components/Loader/Loader';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '300px', minWidth: '600px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [overlay],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  classNameContainer: 'absolute z-50 flex h-full w-full flex-col items-center justify-center bg-highlight/10',
  classNameLoader: 'text-blue-500',
  size: 40,
};

export const SpinnerLoader: Story = {
  args: {
    ...defaultArgs,
    type: 'spinner',
  },
};

export const PulseLoader: Story = {
  args: {
    ...defaultArgs,
    type: 'pulse',
  },
};

export const CustomSpinnerTextLoader: Story = {
  args: {
    ...defaultArgs,
    type: 'spinner',
    classNameText: 'mt-5 text-2xl font-medium text-gray-100',
    text: 'Cargando, por favor espera...',
  },
};

export const CustomPulseTextLoader: Story = {
  args: {
    ...defaultArgs,
    type: 'pulse',
    classNameText: 'mt-5 text-2xl font-medium text-gray-100',
    text: 'Cargando, por favor espera...',
  },
};

export const LargeLoader: Story = {
  args: {
    ...defaultArgs,
    size: 80,
  },
};
