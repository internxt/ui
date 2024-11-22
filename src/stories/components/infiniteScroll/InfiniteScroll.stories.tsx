import type { Meta, StoryObj } from '@storybook/react';
import InfiniteScroll from '../../../components/infiniteScroll/InfiniteScroll';
import { useState } from 'react';

const meta: Meta<typeof InfiniteScroll> = {
  title: 'Components/InfiniteScroll',
  component: InfiniteScroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    handleNextPage: { action: 'handleNextPage' },
    hasMoreItems: {
      control: 'boolean',
    },
    loader: {
      control: 'text',
    },
    scrollableTarget: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const loader = new Array(10).fill(0).map((_item, index) => (
  <div key={index} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
    Loading item...
  </div>
));

const InfiniteScrollWrapper = ({ hasMoreItems }: { hasMoreItems: boolean | undefined }) => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item loaded ${i + 1}`));

  const handleNextPage = () => {
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => `Item loaded ${prev.length + i + 1}`)]);
    }, 1000);
  };

  return (
    <div
      style={{
        height: '300px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '8px',
      }}
    >
      <InfiniteScroll handleNextPage={handleNextPage} hasMoreItems={hasMoreItems} loader={loader}>
        {items.map((item) => (
          <div key={item} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export const Default: Story = {
  args: {
    hasMoreItems: true,
  },
  render: (args) => <InfiniteScrollWrapper {...args} />,
};

export const NoMoreItems: Story = {
  args: {
    hasMoreItems: false,
  },
  render: (args) => <InfiniteScrollWrapper {...args} />,
};
