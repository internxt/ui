import React from 'react';
import { useRef, useEffect, ReactNode, useState } from 'react';

export interface InfiniteScrollProps {
  children: ReactNode;
  handleNextPage: () => void;
  hasMoreItems: boolean | undefined;
  loader: React.ReactNode;
  scrollableTarget?: string;
  classNameLoader?: string;
}

/**
 * InfiniteScroll component
 *
 * @param {InfiniteScrollProps} props - The properties of the component.
 *
 * @property {ReactNode} children
 * - The child components or elements to be rendered inside the scrollable container.
 *
 * @property {() => void} handleNextPage
 * - A callback function that is triggered when the user reaches the bottom of the container
 * and more items need to be loaded.
 *
 * @property {boolean | undefined} hasMoreItems
 * - A flag indicating whether there are more items to load. If `false`, the loader will not be shown,
 * and no more items will be fetched.
 *
 * @property {React.ReactNode} loader
 * - The content to be shown as a loader while waiting for more items to load.
 *
 * @property {string} [scrollableTarget]
 * - An optional ID of the scrollable container that will be observed for scroll events.
 * If not provided, the default behavior is to observe the entire window.
 *
 * @property {string} [classNameLoader]
 * - An optional custom class name for the loader element, used to style the loader component.
 *
 * @returns {JSX.Element}
 * - A JSX element containing the children with the loader attached to the last item, if there are more items to load.
 *
 * The component uses the `IntersectionObserver` API to detect when the loader element (at the bottom of the list)
 * comes into view. When this happens, it triggers the `handleNextPage` callback to load the next set of items.
 * It also shows the loader element only when there are more items to load (`hasMoreItems` is `true`).
 */

const InfiniteScroll = ({
  children,
  handleNextPage,
  hasMoreItems,
  loader,
  scrollableTarget,
  classNameLoader,
}: InfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    if (scrollableTarget) {
      scrollContainerRef.current = document.getElementById(scrollableTarget);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasMoreItems) {
            handleNextPage();
            setShowLoader(true);
          } else {
            setShowLoader(false);
          }
        }
      },
      {
        root: scrollContainerRef.current || null,
        rootMargin: '100px',
        threshold: 0,
      },
    );

    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      currentLoaderRef && observer.unobserve(currentLoaderRef);
    };
  }, [hasMoreItems, handleNextPage, scrollableTarget]);

  const childrenWithLoader = React.Children.map(children, (child, index) => {
    if (index === React.Children.count(children) - 1 && hasMoreItems) {
      return (
        <>
          {child}
          <div ref={loaderRef} className={classNameLoader}>
            {showLoader && loader}
          </div>
        </>
      );
    }
    return child;
  });

  return <div>{childrenWithLoader}</div>;
};

export default InfiniteScroll;
