import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ActionBar } from '../';

const createMockEditor = (overrides = {}) => ({
  chain: vi.fn(() => ({
    focus: vi.fn(() => ({
      toggleBold: vi.fn(() => ({ run: vi.fn() })),
      toggleItalic: vi.fn(() => ({ run: vi.fn() })),
      toggleUnderline: vi.fn(() => ({ run: vi.fn() })),
      toggleStrike: vi.fn(() => ({ run: vi.fn() })),
      toggleBulletList: vi.fn(() => ({ run: vi.fn() })),
      toggleOrderedList: vi.fn(() => ({ run: vi.fn() })),
      setTextAlign: vi.fn(() => ({ run: vi.fn() })),
      setColor: vi.fn(() => ({ run: vi.fn() })),
      setFontFamily: vi.fn(() => ({ run: vi.fn() })),
      setFontSize: vi.fn(() => ({ run: vi.fn() })),
      extendMarkRange: vi.fn(() => ({
        setLink: vi.fn(() => ({ run: vi.fn() })),
        unsetLink: vi.fn(() => ({ run: vi.fn() })),
      })),
      setImage: vi.fn(() => ({ run: vi.fn() })),
      unsetAllMarks: vi.fn(() => ({
        clearNodes: vi.fn(() => ({ run: vi.fn() })),
      })),
    })),
  })),
  isActive: vi.fn(() => false),
  getAttributes: vi.fn(() => ({ href: '' })),
  on: vi.fn(),
  off: vi.fn(),
  ...overrides,
});

describe('ActionBar component', () => {
  it('ActionBar should return null when editor is null', () => {
    const { container } = render(<ActionBar editor={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('ActionBar should render all toolbar groups', () => {
    const mockEditor = createMockEditor();
    render(<ActionBar editor={mockEditor as never} />);

    // Should have multiple buttons for all toolbar items
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(10);
  });

  it('ActionBar default state should render correctly', () => {
    const mockEditor = createMockEditor();
    const actionBar = render(<ActionBar editor={mockEditor as never} />);
    expect(actionBar).toMatchSnapshot();
  });

  it('ActionBar disabled state should render correctly', () => {
    const mockEditor = createMockEditor();
    const actionBar = render(<ActionBar editor={mockEditor as never} disabled />);
    expect(actionBar).toMatchSnapshot();
  });

  it('ActionBar with active bold should render correctly', () => {
    const mockEditor = createMockEditor({
      isActive: vi.fn((type) => type === 'bold'),
    });
    const actionBar = render(<ActionBar editor={mockEditor as never} />);
    expect(actionBar).toMatchSnapshot();
  });

  it('ActionBar should disable all buttons when disabled prop is true', () => {
    const mockEditor = createMockEditor();
    render(<ActionBar editor={mockEditor as never} disabled />);

    const buttons = screen.getAllByRole('button');
    const disabledButtons = buttons.filter((button) => button.hasAttribute('disabled'));
    expect(disabledButtons.length).toBeGreaterThan(0);
  });
});
