import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ToolbarGroup, ToolbarItem } from '../';
import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react';

describe('ToolbarGroup component', () => {
  const mockItems: ToolbarItem[] = [
    { id: 'bold', icon: TextBIcon, onClick: vi.fn(), isActive: false },
    { id: 'italic', icon: TextItalicIcon, onClick: vi.fn(), isActive: true },
  ];

  it('ToolbarGroup should render all items', () => {
    render(<ToolbarGroup items={mockItems} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('ToolbarGroup item onClick should be called correctly', () => {
    const onClickBold = vi.fn();
    const items: ToolbarItem[] = [{ id: 'bold', icon: TextBIcon, onClick: onClickBold, isActive: false }];

    render(<ToolbarGroup items={items} />);
    const button = screen.getByRole('button');
    button.click();
    expect(onClickBold).toHaveBeenCalledOnce();
  });

  it('ToolbarGroup should not call onClick when disabled', () => {
    const onClickBold = vi.fn();
    const items: ToolbarItem[] = [{ id: 'bold', icon: TextBIcon, onClick: onClickBold, isActive: false }];

    render(<ToolbarGroup items={items} disabled />);
    const button = screen.getByRole('button');
    button.click();
    expect(onClickBold).not.toHaveBeenCalled();
  });

  it('ToolbarGroup default state should render correctly', () => {
    const items: ToolbarItem[] = [
      { id: 'bold', icon: TextBIcon, onClick: () => {}, isActive: false },
      { id: 'italic', icon: TextItalicIcon, onClick: () => {}, isActive: false },
    ];
    const group = render(<ToolbarGroup items={items} />);
    expect(group).toMatchSnapshot();
  });

  it('ToolbarGroup with active items should render correctly', () => {
    const items: ToolbarItem[] = [
      { id: 'bold', icon: TextBIcon, onClick: () => {}, isActive: true },
      { id: 'italic', icon: TextItalicIcon, onClick: () => {}, isActive: false },
    ];
    const group = render(<ToolbarGroup items={items} />);
    expect(group).toMatchSnapshot();
  });

  it('ToolbarGroup disabled state should render correctly', () => {
    const items: ToolbarItem[] = [
      { id: 'bold', icon: TextBIcon, onClick: () => {}, isActive: false },
      { id: 'italic', icon: TextItalicIcon, onClick: () => {}, isActive: false },
    ];
    const group = render(<ToolbarGroup items={items} disabled />);
    expect(group).toMatchSnapshot();
  });

  it('ToolbarGroup empty items should render correctly', () => {
    const group = render(<ToolbarGroup items={[]} />);
    expect(group).toMatchSnapshot();
  });
});
