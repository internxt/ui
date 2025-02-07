import { Button } from '@/components/button';
import { Header } from '@/components/header';
import type { Meta, StoryObj } from '@storybook/react';
const IMAGE_SRC = 'https://internxt.com/favicon.ico';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TestHeader: Story = {
  args: {
    leftContent: (
      <div className="flex items-center space-x-2 h-12 rounded-2xl border border-white/10 bg-black/50 p-2">
        <img src={IMAGE_SRC} alt="X Meet Logo" className="h-7 w-7" />
        <span className="text-gray-400 font-semibold">Meet</span>
        <span className="text-xs text-yellow px-1 py-0.5 rounded bg-gray-800">BETA</span>
      </div>
    ),
    rightContent: (
      <div className="flex space-x-2 flex-row">
        <Button variant="primary" className="text-gray-300">
          Log in
        </Button>
        <Button variant="secondary" className="bg-blue-600">
          Sign up
        </Button>
      </div>
    ),
    className: 'px-4 py-3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with logo, beta badge, and authentication buttons.',
      },
    },
  },
};

export const CustomHeader: Story = {
  args: {
    className: 'border-b p-4',
    leftContent: (
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-gray-900">My App</span>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </nav>
      </div>
    ),
    rightContent: (
      <div className="flex items-center space-x-4">
        <Button variant="secondary" className="border-gray-300">
          Contact
        </Button>
        <Button variant="primary" className="bg-indigo-600">
          Get Started
        </Button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternative header style with different button styling.',
      },
    },
  },
};
