import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ToolbarButton } from '../';

describe('ToolbarButton component', () => {
  it('ToolbarButton onClick should be called correctly', () => {
    const buttonClick = vi.fn();
    render(
      <ToolbarButton onClick={buttonClick}>
        <span>Icon</span>
      </ToolbarButton>,
    );
    const button = screen.getByRole('button');
    button.click();
    expect(buttonClick).toHaveBeenCalledOnce();
  });

  it('ToolbarButton should not call onClick when disabled', () => {
    const buttonClick = vi.fn();
    render(
      <ToolbarButton onClick={buttonClick} disabled>
        <span>Icon</span>
      </ToolbarButton>,
    );
    const button = screen.getByRole('button');
    button.click();
    expect(buttonClick).not.toHaveBeenCalled();
  });

  it('ToolbarButton default state should render correctly', () => {
    const button = render(
      <ToolbarButton onClick={() => {}}>
        <span>Icon</span>
      </ToolbarButton>,
    );
    expect(button).toMatchSnapshot();
  });

  it('ToolbarButton active state should render correctly', () => {
    const button = render(
      <ToolbarButton onClick={() => {}} isActive>
        <span>Icon</span>
      </ToolbarButton>,
    );
    expect(button).toMatchSnapshot();
  });

  it('ToolbarButton disabled state should render correctly', () => {
    const button = render(
      <ToolbarButton onClick={() => {}} disabled>
        <span>Icon</span>
      </ToolbarButton>,
    );
    expect(button).toMatchSnapshot();
  });

  it('ToolbarButton active and disabled state should render correctly', () => {
    const button = render(
      <ToolbarButton onClick={() => {}} isActive disabled>
        <span>Icon</span>
      </ToolbarButton>,
    );
    expect(button).toMatchSnapshot();
  });
});
