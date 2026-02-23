import { render, screen, fireEvent } from '@testing-library/react';
import SuiteLauncher from '../SuiteLauncher';
import { describe, it, expect, vi } from 'vitest';

describe('SuiteLauncher', () => {
  it('should match snapshot', () => {
    const suiteLauncher = render(<SuiteLauncher suiteArray={[]} />);;
    expect(suiteLauncher).toMatchSnapshot();
  });

  it('renders Popover button and panel', () => {
    render(<SuiteLauncher suiteArray={[]} />);
    expect(screen.getByTestId('popover-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('popover-button'));
    expect(screen.getByTestId('suite-launcher-panel')).toBeInTheDocument();
  });

  it('renders suite items, shows soon text, renders lock icon and handles clicks correctly', () => {
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onClick3 = vi.fn();

    const Icon = (props: any) => (
      <span data-testid="mock-icon" {...props}>
        Icon
      </span>
    );

    const suiteArray = [
      { icon: <Icon className="orig" />, title: 'App 1', onClick: onClick1, isMain: true },
      { icon: <Icon />, title: 'App 2', onClick: onClick2, availableSoon: true },
      { icon: <Icon />, title: 'App 3', onClick: onClick3, isLocked: true },
    ];

    render(<SuiteLauncher suiteArray={suiteArray} soonText="Pronto" />);
    fireEvent.click(screen.getByTestId('popover-button'));

    // Titles are rendered
    expect(screen.getByText('App 1')).toBeInTheDocument();
    expect(screen.getByText('App 2')).toBeInTheDocument();
    expect(screen.getByText('App 3')).toBeInTheDocument();

    // Custom soonText is shown for availableSoon items
    expect(screen.getByText('Pronto')).toBeInTheDocument();

    // Locked item shows the Lock icon
    expect(screen.getByTestId('suite-launcher-lock-icon')).toBeInTheDocument();

    // Clicking available item triggers its onClick
    fireEvent.click(screen.getByText('App 1'));
    expect(onClick1).toHaveBeenCalled();

    // Clicking "availableSoon" item should NOT trigger its onClick
    fireEvent.click(screen.getByText('App 2'));
    expect(onClick2).not.toHaveBeenCalled();

    // Even if locked, clicking should call its onClick because isLocked keeps the icon displayed
    // the onClick handler is attached but opacity/grayscale is applied
    fireEvent.click(screen.getByText('App 3'));
    expect(onClick3).toHaveBeenCalled();
  });
});
