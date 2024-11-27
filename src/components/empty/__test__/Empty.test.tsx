import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Upload } from '@phosphor-icons/react';
import Empty from '../Empty';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('Empty component', () => {
  const mockOnClick = vi.fn();
  const mockContextMenu = vi.fn();
  const renderEmpty = (props = {}) => {
    return render(
      <Empty
        icon={<Upload data-testid={'upload-icon'} size={48} />}
        title="No items available"
        subtitle="Please add some items to get started."
        action={{
          text: 'Upload Files',
          icon: Upload,
          style: 'elevated',
          onClick: mockOnClick,
        }}
        contextMenuClick={mockContextMenu}
        {...props}
      />,
    );
  };
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const empty = renderEmpty();
    expect(empty).toMatchSnapshot();
  });

  it('should render the title and subtitle', () => {
    const { getByText } = renderEmpty();

    expect(getByText('No items available')).toBeInTheDocument();
    expect(getByText('Please add some items to get started.')).toBeInTheDocument();
  });

  it('should render action button and trigger onClick', () => {
    const { getByText } = renderEmpty();
    expect(getByText('Upload Files')).toBeInTheDocument();
    fireEvent.click(getByText('Upload Files'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not render action button if no action is passed', () => {
    const { queryByText } = renderEmpty({ action: undefined });

    const button = queryByText('Upload Files');
    expect(button).not.toBeInTheDocument();
  });

  it('should handle context menu click', () => {
    const { getByText } = renderEmpty();
    fireEvent.contextMenu(getByText('No items available'));

    expect(mockContextMenu).toHaveBeenCalledTimes(1);
  });

  it('should render the icon', () => {
    const { getByTestId } = renderEmpty();
    expect(getByTestId('upload-icon')).toBeInTheDocument();
  });
});
