/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, afterEach, expect, vi } from 'vitest';
import { Modal } from '../';
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
    vi.restoreAllMocks();
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

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toBeInTheDocument();

    fireEvent.keyDown(modalContent, { key: 'Escape', code: 'Escape' });

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

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toBeInTheDocument();

    fireEvent.keyDown(modalContent, { key: 'Escape', code: 'Escape' });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should call onClose when click outside if preventClosing is false', () => {
    renderModal();

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when click outside if preventClosing is true', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} preventClosing={true}>
        <div>
          Modal Content
          <button>Button</button>
        </div>
      </Modal>,
    );

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toBeInTheDocument();

    fireEvent.mouseDown(modalContent);

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should apply custom class names', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} className="custom-class">
        Modal Content
        <button>Button</button>
      </Modal>,
    );

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toHaveClass('custom-class');
  });

  it('should use default width and maxWidth if not provided', () => {
    renderModal();

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toHaveClass('w-full');
    expect(modalContent).toHaveClass('max-w-lg');
  });

  it('should apply provided width and maxWidth', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} width="w-1/2" maxWidth="max-w-xl">
        Modal Content
        <button>Button</button>
      </Modal>,
    );

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toHaveClass('w-1/2');
    expect(modalContent).toHaveClass('max-w-xl');
  });

  it('should update transition classes after timeout when isOpen is true', async () => {
    renderModal();

    const modalContent = screen.getByTestId('ModalContent');
    expect(modalContent).toHaveClass('opacity-0');
    expect(modalContent).toHaveClass('scale-95');

    await waitFor(() => {
      expect(modalContent).toHaveClass('opacity-100');
      expect(modalContent).toHaveClass('scale-100');
    });
  });

  it('should reset transition classes when isOpen changes to false and closes the modal', async () => {
    const { rerender } = renderModal();

    const modalContent = screen.getByTestId('ModalContent');
    await waitFor(() => {
      expect(modalContent).toHaveClass('opacity-100');
      expect(modalContent).toHaveClass('scale-100');
    });

    rerender(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>,
    );

    await waitFor(() => {
      expect(modalContent).toHaveClass('opacity-0');
      expect(modalContent).toHaveClass('scale-95');
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });
  });

  it('closeLastOpenModal should close only the last opened modal', () => {
    const onClose1 = vi.fn();
    const onClose2 = vi.fn();

    render(
      <>
        <Modal isOpen={true} onClose={onClose1}>
          <div data-testid="modal-1">Modal 1</div>
        </Modal>
        <Modal isOpen={true} onClose={onClose2}>
          <div data-testid="modal-2">Modal 2</div>
        </Modal>
      </>,
    );

    fireEvent.mouseDown(document.body);

    expect(onClose1).not.toHaveBeenCalled();
    expect(onClose2).toHaveBeenCalled();
  });

  it('should stop propagation when stopMouseDownPropagation is true', () => {
    const parentHandler = vi.fn();
    const { container } = render(
      <div onMouseDown={parentHandler}>
        <Modal isOpen={true} onClose={onCloseMock} stopMouseDownPropagation={true}>
          <div>Modal Content</div>
        </Modal>
      </div>,
    );

    const modalWrapper = container.querySelector('[role="modal"]');
    expect(modalWrapper).toBeInTheDocument();

    fireEvent.mouseDown(modalWrapper!);

    expect(parentHandler).not.toHaveBeenCalled();
  });

  it('should not stop propagation when stopMouseDownPropagation is false', () => {
    const parentHandler = vi.fn();
    const { container } = render(
      <div onMouseDown={parentHandler}>
        <Modal isOpen={true} onClose={onCloseMock} stopMouseDownPropagation={false}>
          <div>Modal Content</div>
        </Modal>
      </div>,
    );

    const modalWrapper = container.querySelector('[role="modal"]');
    expect(modalWrapper).toBeInTheDocument();

    fireEvent.mouseDown(modalWrapper!);

    expect(parentHandler).toHaveBeenCalled();
  });
});
