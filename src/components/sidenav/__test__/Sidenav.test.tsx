import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import Sidenav, { SidenavProps } from '../Sidenav';
import { SidenavOption } from '../SidenavOptions';

const MockIcon = React.forwardRef<SVGSVGElement, { size?: number | string; weight?: string }>(({ size = 20 }, ref) => (
  <svg ref={ref} data-testid="mock-icon" width={size} height={size} />
));

describe('Sidenav Component', () => {
  const onHeaderClick = vi.fn();
  const onOptionClick = vi.fn();
  const onToggleCollapse = vi.fn();
  const onUpgradeClick = vi.fn();

  const mockOptions: SidenavOption[] = [
    { label: 'Inbox', icon: MockIcon, iconDataCy: 'inbox', isVisible: true, notifications: 5, onClick: onOptionClick },
    { label: 'Sent', icon: MockIcon, iconDataCy: 'sent', isVisible: true, onClick: onOptionClick },
    {
      label: 'Drafts',
      icon: MockIcon,
      iconDataCy: 'drafts',
      isVisible: true,
      notifications: 2,
      onClick: onOptionClick,
    },
    { label: 'Labels', icon: MockIcon, iconDataCy: 'labels', isVisible: true, onClick: onOptionClick },
    {
      label: 'Important',
      icon: MockIcon,
      iconDataCy: 'important',
      isVisible: true,
      subsection: true,
      onClick: onOptionClick,
    },
    { label: 'Work', icon: MockIcon, iconDataCy: 'work', isVisible: true, subsection: true, onClick: onOptionClick },
  ];

  const defaultProps: SidenavProps = {
    header: {
      logo: 'https://example.com/logo.png',
      title: 'Mail',
      onClick: onHeaderClick,
    },
    options: mockOptions,
    showSubsections: false,
  };

  const renderSidenav = (props: Partial<SidenavProps> = {}) => render(<Sidenav {...defaultProps} {...props} />);

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
        usage: '2.8 GB',
        limit: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
        isLoading: false,
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

  it('calls onClick when option is clicked', () => {
    const { getByText } = renderSidenav();
    fireEvent.click(getByText('Inbox'));
    expect(onOptionClick).toHaveBeenCalled();
  });

  it('calls onClick for subsection items', () => {
    const { getByText } = renderSidenav({ showSubsections: true });
    fireEvent.click(getByText('Important'));
    expect(onOptionClick).toHaveBeenCalled();
  });

  it('calls header onClick when logo is clicked', () => {
    const { getByAltText } = renderSidenav();
    fireEvent.click(getByAltText('Mail'));
    expect(onHeaderClick).toHaveBeenCalled();
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
        usage: '2.8 GB',
        limit: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
        isLoading: false,
      },
    });
    expect(getByText('2.8 GB')).toBeInTheDocument();
    expect(getByText('4 GB')).toBeInTheDocument();
    expect(getByText('Upgrade')).toBeInTheDocument();
  });

  it('calls onUpgradeClick when upgrade button is clicked', () => {
    const { getByText } = renderSidenav({
      storage: {
        usage: '2.8 GB',
        limit: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
        isLoading: false,
      },
    });
    fireEvent.click(getByText('Upgrade'));
    expect(onUpgradeClick).toHaveBeenCalled();
  });

  it('applies active styles to selected option', () => {
    const activeOptions = mockOptions.map((opt, idx) => ({ ...opt, isActive: idx === 0 }));
    const { getByText } = renderSidenav({ options: activeOptions });
    const inboxButton = getByText('Inbox').closest('button');
    expect(inboxButton).toHaveClass('bg-primary/20');
  });

  it('shows loading skeleton when storage is loading', () => {
    const { container, queryByText } = renderSidenav({
      storage: {
        usage: '2.8 GB',
        limit: '4 GB',
        percentage: 70,
        upgradeLabel: 'Upgrade',
        onUpgradeClick,
        isLoading: true,
      },
    });

    expect(queryByText('2.8 GB')).not.toBeInTheDocument();
    expect(queryByText('4 GB')).not.toBeInTheDocument();

    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
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
          usage: '2.8 GB',
          limit: '4 GB',
          percentage: 70,
          upgradeLabel: 'Upgrade',
          onUpgradeClick,
          isLoading: false,
        },
      });
      expect(queryByText('2.8 GB')).not.toBeInTheDocument();
      expect(queryByText('Upgrade')).not.toBeInTheDocument();
    });

    it('hides subsections when collapsed even if showSubsections is true', () => {
      const { queryByText } = renderSidenav({
        isCollapsed: true,
        showSubsections: true,
      });
      expect(queryByText('Important')).not.toBeInTheDocument();
      expect(queryByText('Work')).not.toBeInTheDocument();
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
      const optionButtons = container.querySelectorAll('button[title="Inbox"]');
      expect(optionButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Collapse toggle button', () => {
    it('does not render collapse button when onToggleCollapse is not provided', () => {
      const { container } = renderSidenav();

      const buttons = container.querySelectorAll('button');

      expect(buttons.length).toBe(5);
    });

    it('renders collapse button when onToggleCollapse is provided', () => {
      const { container } = renderSidenav({ onToggleCollapse });
      const buttons = container.querySelectorAll('button');

      expect(buttons.length).toBeGreaterThan(5);
    });

    it('calls onToggleCollapse when collapse button is clicked', () => {
      const { container } = renderSidenav({ onToggleCollapse });

      const collapseButton = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.querySelector('svg') && !btn.querySelector('img'),
      );
      expect(collapseButton).toBeDefined();
      fireEvent.click(collapseButton!);
      expect(onToggleCollapse).toHaveBeenCalled();
    });
  });
});
