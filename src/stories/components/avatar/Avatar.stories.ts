import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../../components/avatar/Avatar';

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

export const DefaultAvatarXXS: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'xxs',
  },
};

export const PictureAvatarXXS: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'xxs',
  },
};
export const DefaultAvatarXS: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'xs',
  },
};

export const PictureAvatarXS: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'xs',
  },
};
export const DefaultAvatarSM: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'sm',
  },
};

export const PictureAvatarSM: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'sm',
  },
};
export const DefaultAvatarBase: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'base',
  },
};

export const PictureAvatarBase: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'base',
  },
};
export const DefaultAvatarLG: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'lg',
  },
};

export const PictureAvatarLG: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'lg',
  },
};
export const DefaultAvatarXL: Story = {
  args: {
    fullName: FULL_NAME,
    size: 'xl',
  },
};

export const PictureAvatarXL: Story = {
  args: {
    src: IMAGE_SRC,
    size: 'xl',
  },
};
