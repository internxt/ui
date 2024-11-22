import React from 'react';
import { useRef, useEffect, ReactNode, useState } from 'react';

interface InfiniteScrollProps {
  children: ReactNode;
  handleNextPage: () => void;
  hasMoreItems: boolean | undefined;
  loader: React.ReactNode;
  scrollableTarget?: string;
  classNameLoader?: string;
}

/**
 * InfiniteScroll component to implement infinite scrolling functionality.
 *
 * @param hildren - The elements to be displayed inside the scroll container.
 * @param handleNextPage - Function to handle loading the next page of content
 * when the user scrolls to the bottom.
 * @param hasMoreItems - Flag indicating whether there are more items to load.
 * If `false` or `undefined`, no more items will be loaded.
 * @param loader - The component to display as a loader while new items are being fetched.
 * @param [scrollableTarget] - The ID of the scrollable container.
 * @param classNameLoader ClassName for loader.
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
