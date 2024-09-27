import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../../../components/avatar/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const FULL_NAME = 'My Internxt';
const IMAGE_SRC = 'https://internxt.com/favicon.ico';

export const DefaultAvatar: Story = {
  args: {
    fullName: FULL_NAME,
    diameter: 80,
  },
};

export const PictureAvatar: Story = {
  args: {
    src: IMAGE_SRC,
    diameter: 80,
  },
};
