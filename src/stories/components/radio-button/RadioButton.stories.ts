import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { RadioButton } from '../../../components/radio-button/RadioButton';

// Simulating onClick event for Radio Button (check or uncheck the button)
const onClick: Decorator = (Story, context) => {
  const [{ checked }, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.allArgs,
      onClick: () => setArgs({ ...context.args, checked: !checked }),
    },
  });
};

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Radio Button',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [onClick],
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const RadioButtonChecked: Story = {
  //
};
