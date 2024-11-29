import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Popover, { PopoverProps } from '../Popover';
import { describe, it, expect, vi, afterEach } from 'vitest';

describe('Popover', () => {
  const defaultProps: PopoverProps = {
    childrenButton: <span>Open Popover</span>,
    panel: (closePopover) => (
      <div>
        <button onClick={closePopover}>Close Popover</button>
        <p>Popover Content</p>
      </div>
    ),
  };
  const renderPopover = (props = {}) => {
    return render(<Popover {...defaultProps} {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const popover = renderPopover();
    expect(popover).toMatchSnapshot();
  });

  it('renders the button', () => {
    const { getByText } = renderPopover();
    expect(getByText('Open Popover')).toBeInTheDocument();
  });

  it('toggles the popover on button click', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    expect(queryByText('Popover Content')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(getByText('Popover Content')).toBeInTheDocument();

    fireEvent.click(button);
    await waitFor(() => expect(queryByText('Popover Content')).not.toBeInTheDocument());
  });

  it('closes the popover when clicking outside', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Popover Content')).toBeInTheDocument());

    fireEvent.mouseDown(document.body);
    await waitFor(() => expect(queryByText('Popover Content')).not.toBeInTheDocument());
  });

  it('closes the popover when the close button inside is clicked', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Popover Content')).toBeInTheDocument());

    const closeButton = getByText('Close Popover');
    fireEvent.click(closeButton);
    await waitFor(() => expect(queryByText('Popover Content')).not.toBeInTheDocument());
  });

  it('applies custom classes to the container and button', () => {
    const { container, getByText } = renderPopover({ className: 'custom-container', classButton: 'custom-button' });
    const button = getByText('Open Popover');

    expect(container.firstChild).toHaveClass('custom-container');
    expect(button.parentElement).toHaveClass('custom-button');
  });

  it('applies transition classes when opening the popover', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    fireEvent.click(button);

    await waitFor(() => {
      const popoverPanel = queryByText('Popover Content')?.parentElement?.parentElement;
      expect(popoverPanel).toHaveClass('opacity-100');
      expect(popoverPanel).toHaveClass('scale-100');
    });
  });

  it('applies transition classes when closing the popover', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Popover Content')).toBeInTheDocument());

    const closeButton = getByText('Close Popover');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const popoverPanel = queryByText('Popover Content')?.parentElement?.parentElement;
      expect(popoverPanel).toHaveClass('opacity-0');
      expect(popoverPanel).toHaveClass('scale-95');
    });

    await waitFor(() => expect(queryByText('Popover Content')).not.toBeInTheDocument());
  });

  it('open and close the popover when various main button clicks ', async () => {
    const { getByText, queryByText } = renderPopover();

    const button = getByText('Open Popover');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Popover Content')).toBeInTheDocument());

    fireEvent.click(button);
    await waitFor(() => expect(queryByText('Popover Content')).not.toBeInTheDocument());

    fireEvent.click(button);
    await waitFor(() => expect(getByText('Popover Content')).toBeInTheDocument());
  });

  it('should call onMouseDown stopPropagation when the button is clicked', () => {
    const stopPropagationSpy = vi.fn();
    const { getByText } = renderPopover();
    const button = getByText('Open Popover');

    button.onmousedown = (e) => {
      e.stopPropagation = stopPropagationSpy;
      e.stopPropagation();
    };
    fireEvent.mouseDown(button);
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
