/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import InfiniteScroll from '../InfiniteScroll';

describe('InfiniteScroll Component', () => {
  const handleNextPage = vi.fn();
  const loader = <div data-testid="loader">Loading...</div>;
  const renderInfiniteScroll = () => {
    return render(
      <InfiniteScroll handleNextPage={handleNextPage} hasMoreItems={true} loader={loader}>
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>,
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

  it('should match snapshot', () => {
    const infiniteScroll = renderInfiniteScroll();
    expect(infiniteScroll).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    renderInfiniteScroll();

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should show loader when scrolling to the bottom', async () => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((callback) => ({
        observe: () => {
          callback([{ isIntersecting: true }]);
        },
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    renderInfiniteScroll();

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
  });

  it('should not show loader when there are no more items', async () => {
    render(
      <InfiniteScroll handleNextPage={handleNextPage} hasMoreItems={false} loader={loader}>
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>,
    );

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
  });

  it('should call handleNextPage when scrolled to the bottom', async () => {
    renderInfiniteScroll();

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    await waitFor(() => expect(handleNextPage).toHaveBeenCalled());
  });

  it('should pass the correct scrollable container when scrollableTarget is set', () => {
    render(
      <div id="scroll-container" style={{ height: '100px', overflowY: 'scroll' }}>
        <InfiniteScroll
          handleNextPage={handleNextPage}
          hasMoreItems={true}
          loader={loader}
          scrollableTarget="scroll-container"
        >
          <div>Item 1</div>
          <div>Item 2</div>
        </InfiniteScroll>
      </div>,
    );

    const scrollableContainer = document.getElementById('scroll-container');
    expect(scrollableContainer).toBeInTheDocument();
  });
});
