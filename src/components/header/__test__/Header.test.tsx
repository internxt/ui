import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Header } from './../index';

describe('Header component', () => {
  it('Empty Header should render correctly', () => {
    const headerComponent = render(<Header />);
    expect(headerComponent).toMatchSnapshot();
  });

  it('Header with left content should render correctly', () => {
    const leftContent = <div>Left Content</div>;
    const headerComponent = render(<Header leftContent={leftContent} />);
    expect(headerComponent).toMatchSnapshot();
  });

  it('Header with right content should render correctly', () => {
    const rightContent = <div>Right Content</div>;
    const headerComponent = render(<Header rightContent={rightContent} />);
    expect(headerComponent).toMatchSnapshot();
  });

  it('Header with both left and right content should render correctly', () => {
    const leftContent = <div>Left Content</div>;
    const rightContent = <div>Right Content</div>;
    const headerComponent = render(<Header leftContent={leftContent} rightContent={rightContent} />);
    expect(headerComponent).toMatchSnapshot();
  });

  it('Header with custom className should render correctly', () => {
    const customClass = 'custom-header-class';
    const headerComponent = render(<Header className={customClass} />);
    expect(headerComponent).toMatchSnapshot();
  });

  it('Header with all props should render correctly', () => {
    const leftContent = <div>Left Content</div>;
    const rightContent = <div>Right Content</div>;
    const customClass = 'custom-header-class';
    const headerComponent = render(
      <Header leftContent={leftContent} rightContent={rightContent} className={customClass} />,
    );
    expect(headerComponent).toMatchSnapshot();
  });
});
