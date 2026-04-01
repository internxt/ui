import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import TransparentModal from '../TransparentModal';

describe('TransparentModal Component', () => {
  const onCloseMock = vi.fn();
  const renderTransparentModal = (props = {}) => {
    return render(
      <TransparentModal isOpen={true} onClose={onCloseMock} {...props}>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Title</h2>
          <p className="mt-2">Modal Content</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={onCloseMock}>
            Close
          </button>
        </div>
      </TransparentModal>,
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
    vi.restoreAllMocks();
  });

  afterAll(() => {
    delete (global as any).IntersectionObserver;
  });

  it('should match snapshot when isOpen is true', () => {
    const { container } = renderTransparentModal();
    expect(container).toMatchSnapshot();
  });

  it('should render the modal when isOpen is true', () => {
    renderTransparentModal();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <TransparentModal isOpen={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </TransparentModal>,
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('should call onClose when clicking outside if disableBackdrop is false', () => {
    renderTransparentModal();
    fireEvent.mouseDown(document.body);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when clicking outside if disableBackdrop is true', () => {
    renderTransparentModal({ disableBackdrop: true });
    fireEvent.mouseDown(document.body);
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should apply custom class names', () => {
    render(
      <TransparentModal isOpen={true} onClose={onCloseMock} className="custom-class" disableBackdrop>
        Modal Content
      </TransparentModal>,
    );
    const modalElement = screen.getByText('Modal Content');
    expect(modalElement).toHaveClass('custom-class');
  });

  it('should show backdrop when disableBackdrop is false', () => {
    renderTransparentModal();
    const backdrop = document.querySelector('.bg-black\\/50');
    expect(backdrop).toBeInTheDocument();
  });

  it('should not show backdrop when disableBackdrop is true', () => {
    renderTransparentModal({ disableBackdrop: true });
    const backdrop = document.querySelector('.bg-black\\/50');
    expect(backdrop).not.toBeInTheDocument();
  });

  it('should update transition classes after timeout when isOpen is true', async () => {
    renderTransparentModal();
    const modalContainer = document.querySelector('.relative.flex.bg-black\\/15');

    expect(modalContainer).toHaveClass('opacity-0');
    expect(modalContainer).toHaveClass('scale-95');

    await waitFor(() => {
      expect(modalContainer).toHaveClass('opacity-100');
      expect(modalContainer).toHaveClass('scale-100');
    });
  });

  it('should reset transition classes when isOpen changes to false', async () => {
    const { rerender } = renderTransparentModal();
    const modalContainer = document.querySelector('.relative.flex.bg-black\\/15');

    await waitFor(() => {
      expect(modalContainer).toHaveClass('opacity-100');
      expect(modalContainer).toHaveClass('scale-100');
    });

    rerender(
      <TransparentModal isOpen={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </TransparentModal>,
    );

    expect(modalContainer).toHaveClass('opacity-0');
    expect(modalContainer).toHaveClass('scale-95');

    await waitFor(() => {
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });
  });

  it('should add pointer-events-none class when disableBackdrop is true', () => {
    renderTransparentModal({ disableBackdrop: true });
    const container = document.querySelector('.fixed.inset-0.z-50');
    expect(container).toHaveClass('pointer-events-none');
  });
});
