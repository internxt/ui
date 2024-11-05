/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, afterEach, expect, vi } from 'vitest';
import Modal from '../Modal';
import { afterAll, beforeAll } from 'vitest';

describe('Modal Component', () => {
  const onCloseMock = vi.fn();
  const renderModal = () => {
    return render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Title</h2>
          <p className="mt-2">Modal Content</p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={onCloseMock}>
            Close
          </button>
        </div>
      </Modal>,
    );
  };

  beforeAll(() => {
    (global as any).IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    delete (global as any).IntersectionObserver;
  });

  it('should match snapshot when isOpen is true', () => {
    const { container } = renderModal();
    expect(container).toMatchSnapshot();
  });

  it('should render the modal when isOpen is true', () => {
    renderModal();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div>
          Modal Content
          <button>Button</button>
        </div>
      </Modal>,
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('should call onClose when press escape if preventClosing is false', () => {
    renderModal();

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();

    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when press escape if preventClosing is true', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} preventClosing={true}>
        <div>
          Modal Content
          <button>Button</button>
        </div>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();

    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should apply custom class names', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} className="custom-class">
        Modal Content
        <button>Button</button>
      </Modal>,
    );

    const dialogPanel = screen.getByTestId('dialog-panel');
    expect(dialogPanel).toHaveClass('custom-class');
  });

  it('should use default width and maxWidth if not provided', () => {
    renderModal();

    const dialogPanel = screen.getByTestId('dialog-panel');
    expect(dialogPanel).toHaveClass('w-full');
    expect(dialogPanel).toHaveClass('max-w-lg');
  });

  it('should apply provided width and maxWidth', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} width="w-1/2" maxWidth="max-w-xl">
        Modal Content
        <button>Button</button>
      </Modal>,
    );

    const dialogPanel = screen.getByTestId('dialog-panel');
    expect(dialogPanel).toHaveClass('w-1/2');
    expect(dialogPanel).toHaveClass('max-w-xl');
  });
});
