import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { RadioButton } from '../../../components/radio-button/RadioButton';

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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RadioButton> = {
  title: 'Components/Radio Button',
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [onClick],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioButtonChecked: Story = {
  //
};
