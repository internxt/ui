import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from '@/components/slider';
import { useArgs } from '@storybook/preview-api';

const onChangeDecorator: Decorator = (Story, context) => {
  const [, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.args,
      onChange: (newValue: number) => setArgs({ ...context.args, value: newValue }),
    },
  });
};

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [onChangeDecorator],
  argTypes: {
    min: {
      description: 'The minimum value of the slider',
      control: { type: 'number' },
      defaultValue: 0,
    },
    max: {
      description: 'The maximum value of the slider',
      control: { type: 'number' },
      defaultValue: 100,
    },
    value: {
      description: 'The current value of the slider',
      control: { type: 'number' },
    },
    className: {
      description: 'The current width of the slider',
      control: { type: 'text' },
    },
    step: {
      description: 'The steps of the slider',
      control: { type: 'number' },
    },
    percentageForProgressSliderBar: {
      description: 'The custom percentage of the slider',
      control: { type: 'number' },
    },
    ariaLabel: {
      description: 'Label of the component',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Function to handle value change',
      action: 'onInput',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const RangeSliderComponent: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};
