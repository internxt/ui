import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HeadlessPopover from '../HeadlessPopover';
import { describe, it, expect } from 'vitest';

describe('HeadlessPopover', () => {
  it('shows and hides panel when button is clicked', () => {
    const { getByText, queryByText } = render(
      <HeadlessPopover
        childrenButton={<span>Toggle</span>}
        panel={(close) => <div>Panel Content</div>}
      />
    );

    expect(queryByText('Panel Content')).not.toBeInTheDocument();

    fireEvent.click(getByText('Toggle'));
    expect(getByText('Panel Content')).toBeInTheDocument();

    fireEvent.click(getByText('Toggle'));
    expect(queryByText('Panel Content')).not.toBeInTheDocument();
  });

  it('closes when close button inside panel is clicked', () => {
    const { getByText, queryByText } = render(
      <HeadlessPopover
        childrenButton={<span>Toggle</span>}
        panel={(close) => <button onClick={close}>Close</button>}
      />
    );

    fireEvent.click(getByText('Toggle'));
    expect(getByText('Close')).toBeInTheDocument();

    fireEvent.click(getByText('Close'));
    expect(queryByText('Close')).not.toBeInTheDocument();
  });

  it('applies custom styling classes', () => {
    const { getByText, container } = render(
      <HeadlessPopover
        childrenButton={<span>Toggle</span>}
        panel={<div>Content</div>}
        className="custom-container"
        classButton="custom-button"
      />
    );

    expect(container.firstChild).toHaveClass('custom-container');
    expect(getByText('Toggle')).toHaveClass('custom-button');
  });

  it('works with custom children function', () => {
    const { getByText, queryByText } = render(
      <HeadlessPopover>
        {({ open, close, Button, Panel }) => (
          <>
            <Button>Open Menu</Button>
            <Panel>
              <button onClick={close}>Close Menu</button>
              {open && <div>Menu is open</div>}
            </Panel>
          </>
        )}
      </HeadlessPopover>
    );

    expect(queryByText('Menu is open')).not.toBeInTheDocument();

    fireEvent.click(getByText('Open Menu'));
    expect(getByText('Menu is open')).toBeInTheDocument();
  });
});
