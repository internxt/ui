import { CaretUp } from '@phosphor-icons/react';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import CircleButton from '../CircleButton';

describe('CircleButton component', () => {
  it('should render default button correctly', () => {
    const button = render(<CircleButton />);
    expect(button).toMatchSnapshot();
  });

  it('should render active default button correctly', () => {
    const button = render(<CircleButton active />);
    expect(button).toMatchSnapshot();
  });

  it('should render warning button correctly', () => {
    const button = render(<CircleButton variant="warning" />);
    expect(button).toMatchSnapshot();
  });

  it('should render active warning button correctly', () => {
    const button = render(<CircleButton variant="warning" active />);
    expect(button).toMatchSnapshot();
  });

  it('should render cancel button correctly', () => {
    const button = render(<CircleButton variant="cancel" />);
    expect(button).toMatchSnapshot();
  });

  it('should render button with children correctly', () => {
    const button = render(
      <CircleButton>
        <span>Test Child</span>
      </CircleButton>,
    );
    expect(button).toMatchSnapshot();
  });

  it('should render button with custom className correctly', () => {
    const button = render(<CircleButton className="custom-class" />);
    expect(button).toMatchSnapshot();
  });

  it('should render button with dropdown correctly', () => {
    const dropdown = <div>Dropdown Content</div>;
    const button = render(<CircleButton dropdown={dropdown} />);
    expect(button).toMatchSnapshot();
  });

  it('should render button with warning indicator correctly', () => {
    const button = render(<CircleButton variant="warning" indicator={{}} />);
    expect(button).toMatchSnapshot();
  });

  it('should render button with custom indicator correctly', () => {
    const indicator = {
      icon: <CaretUp size={12} />,
      className: 'custom-indicator',
    };
    const button = render(<CircleButton indicator={indicator} />);
    expect(button).toMatchSnapshot();
  });

  it('should handle main button click correctly', () => {
    const onClick = vi.fn();
    render(<CircleButton onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('should handle dropdown toggle click correctly', () => {
    const onClickToggleButton = vi.fn();
    const dropdown = <div>Dropdown Content</div>;
    render(<CircleButton dropdown={dropdown} onClickToggleButton={onClickToggleButton} />);
    const toggleButton = screen.getAllByRole('button')[1]; // Get the second button (dropdown toggle)
    fireEvent.click(toggleButton);
    expect(onClickToggleButton).toHaveBeenCalledOnce();
  });

  it('should show dropdown content when toggle is clicked', () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <CircleButton
          dropdown={<div>Dropdown Content</div>}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          handleOpen={() => setIsOpen(true)}
        />
      );
    };
    render(<TestComponent />);
    const toggleButton = screen.getAllByRole('button')[1];
    fireEvent.click(toggleButton);
    expect(screen.getByText('Dropdown Content')).toBeInTheDocument();
  });

  it('should handle dropdown visibility correctly', () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <CircleButton
          dropdown={<div>Dropdown Content</div>}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          handleOpen={() => setIsOpen(true)}
        />
      );
    };
    render(<TestComponent />);
    const toggleButton = screen.getAllByRole('button')[1];

    // Open dropdown
    fireEvent.click(toggleButton);
    expect(screen.getByText('Dropdown Content')).toBeInTheDocument();

    // Simulate click outside - in this case, we just dispatch a global click event
    fireEvent.click(document.body);
    expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
  });

  it('should not render dropdown toggle for cancel variant', () => {
    const dropdown = <div>Dropdown Content</div>;
    const button = render(<CircleButton variant="cancel" dropdown={dropdown} />);
    expect(button).toMatchSnapshot();
  });

  it('should not render dropdown toggle for warning variant', () => {
    const dropdown = <div>Dropdown Content</div>;
    const button = render(<CircleButton variant="warning" dropdown={dropdown} />);
    expect(button).toMatchSnapshot();
  });
});
