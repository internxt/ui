import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Sidenav, SidenavProps, SidenavOption } from '../Sidenav';

const MockIcon = React.forwardRef<SVGSVGElement, { size?: number | string; weight?: string }>(
  ({ size = 20 }, ref) => <svg ref={ref} data-testid="mock-icon" width={size} height={size} />,
);

describe('Sidenav Component', () => {
  const onOptionClick = vi.fn();
  const onMenuClick = vi.fn();
  const onToggleCollapse = vi.fn();
  const onUpgradeClick = vi.fn();

  const mockOptions: SidenavOption[] = [
    { id: 0, title: 'Inbox', icon: MockIcon, notifications: 5 },
    { id: 1, title: 'Sent', icon: MockIcon },
    { id: 2, title: 'Drafts', icon: MockIcon, notifications: 2 },
    { id: 3, title: 'Labels', icon: MockIcon },
    { id: 4, title: 'Important', icon: MockIcon, subsection: true },
    { id: 5, title: 'Work', icon: MockIcon, subsection: true },
  ];

  const defaultProps: SidenavProps = {
    header: {
      logo: 'https://example.com/logo.png',
      title: 'Mail',
    },
    options: mockOptions,
    activeOptionId: 0,
    showSubsections: false,
    onOptionClick,
    onMenuClick,
  };

  const renderSidenav = (props: Partial<SidenavProps> = {}) =>
    render(<Sidenav {...defaultProps} {...props} />);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = renderSidenav();
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when collapsed', () => {
    const { container } = renderSidenav({ isCollapsed: true, onToggleCollapse });
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with storage', () => {
    const { container } = renderSidenav({
      storage: {
        used: '2.8 GB',
        total: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with primary action', () => {
    const { container } = renderSidenav({
      primaryAction: <button data-testid="primary-action">New message</button>,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders header with logo and title', () => {
    const { getByAltText, getByText } = renderSidenav();
    expect(getByAltText('Mail')).toBeInTheDocument();
    expect(getByText('Mail')).toBeInTheDocument();
  });

  it('renders all non-subsection options', () => {
    const { getByText, queryByText } = renderSidenav();
    expect(getByText('Inbox')).toBeInTheDocument();
    expect(getByText('Sent')).toBeInTheDocument();
    expect(getByText('Drafts')).toBeInTheDocument();
    expect(getByText('Labels')).toBeInTheDocument();
    expect(queryByText('Important')).not.toBeInTheDocument();
    expect(queryByText('Work')).not.toBeInTheDocument();
  });

  it('renders subsections when showSubsections is true', () => {
    const { getByText } = renderSidenav({ showSubsections: true });
    expect(getByText('Important')).toBeInTheDocument();
    expect(getByText('Work')).toBeInTheDocument();
  });

  it('renders notifications badge', () => {
    const { getByText } = renderSidenav();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });

  it('calls onOptionClick when option is clicked', () => {
    const { getByText } = renderSidenav();
    fireEvent.click(getByText('Inbox'));
    expect(onOptionClick).toHaveBeenCalledWith(0, false);
  });

  it('calls onOptionClick with isSubsection true for subsection items', () => {
    const { getByText } = renderSidenav({ showSubsections: true });
    fireEvent.click(getByText('Important'));
    expect(onOptionClick).toHaveBeenCalledWith(4, true);
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const { container } = renderSidenav();
    const menuButton = container.querySelector('button:has(svg)');
    fireEvent.click(menuButton!);
    expect(onMenuClick).toHaveBeenCalled();
  });

  it('renders primary action when provided', () => {
    const { getByTestId } = renderSidenav({
      primaryAction: <button data-testid="primary-action">New message</button>,
    });
    expect(getByTestId('primary-action')).toBeInTheDocument();
  });

  it('renders storage information when provided', () => {
    const { getByText } = renderSidenav({
      storage: {
        used: '2.8 GB',
        total: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
      },
    });
    expect(getByText('2.8 GB')).toBeInTheDocument();
    expect(getByText('4 GB')).toBeInTheDocument();
    expect(getByText('Upgrade')).toBeInTheDocument();
  });

  it('calls onUpgradeClick when upgrade button is clicked', () => {
    const { getByText } = renderSidenav({
      storage: {
        used: '2.8 GB',
        total: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
      },
    });
    fireEvent.click(getByText('Upgrade'));
    expect(onUpgradeClick).toHaveBeenCalled();
  });

  it('applies active styles to selected option', () => {
    const { getByText } = renderSidenav({ activeOptionId: 0 });
    const inboxButton = getByText('Inbox').closest('button');
    expect(inboxButton).toHaveClass('bg-primary/20');
  });

  describe('Collapsed state', () => {
    it('hides title when collapsed', () => {
      const { queryByText } = renderSidenav({ isCollapsed: true });
      expect(queryByText('Mail')).not.toBeInTheDocument();
    });

    it('hides option titles when collapsed', () => {
      const { queryByText } = renderSidenav({ isCollapsed: true });
      expect(queryByText('Inbox')).not.toBeInTheDocument();
      expect(queryByText('Sent')).not.toBeInTheDocument();
    });

    it('hides notifications when collapsed', () => {
      const { queryByText } = renderSidenav({ isCollapsed: true });
      expect(queryByText('5')).not.toBeInTheDocument();
    });

    it('hides storage when collapsed', () => {
      const { queryByText } = renderSidenav({
        isCollapsed: true,
        storage: {
          used: '2.8 GB',
          total: '4 GB',
          percentage: 70,
          upgradeLabel: 'Upgrade',
          onUpgradeClick,
        },
      });
      expect(queryByText('2.8 GB')).not.toBeInTheDocument();
      expect(queryByText('Upgrade')).not.toBeInTheDocument();
    });

    it('hides subsections when collapsed even if showSubsections is true', () => {
      const { container } = renderSidenav({
        isCollapsed: true,
        showSubsections: true,
      });
      const buttons = container.querySelectorAll('button');
      // Should only have non-subsection options (4) + collapse button if provided
      expect(buttons.length).toBe(4);
    });

    it('shows collapsed primary action when collapsed', () => {
      const { getByTestId, queryByTestId } = renderSidenav({
        isCollapsed: true,
        primaryAction: <button data-testid="primary-action">New message</button>,
        collapsedPrimaryAction: <button data-testid="collapsed-primary-action">+</button>,
      });
      expect(queryByTestId('primary-action')).not.toBeInTheDocument();
      expect(getByTestId('collapsed-primary-action')).toBeInTheDocument();
    });

    it('adds title attribute to options when collapsed for tooltip', () => {
      const { container } = renderSidenav({ isCollapsed: true });
      const optionButtons = container.querySelectorAll('button[title]');
      expect(optionButtons.length).toBeGreaterThan(0);
      expect(optionButtons[0]).toHaveAttribute('title', 'Inbox');
    });
  });

  describe('Collapse toggle button', () => {
    it('does not render collapse button when onToggleCollapse is not provided', () => {
      const { container } = renderSidenav();
      const collapseButton = container.querySelector('.absolute');
      expect(collapseButton).not.toBeInTheDocument();
    });

    it('renders collapse button when onToggleCollapse is provided', () => {
      const { container } = renderSidenav({ onToggleCollapse });
      const collapseButton = container.querySelector('.absolute');
      expect(collapseButton).toBeInTheDocument();
    });

    it('calls onToggleCollapse when collapse button is clicked', () => {
      const { container } = renderSidenav({ onToggleCollapse });
      const collapseButton = container.querySelector('.absolute');
      fireEvent.click(collapseButton!);
      expect(onToggleCollapse).toHaveBeenCalled();
    });
  });
});
