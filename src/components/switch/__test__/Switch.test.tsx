import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SwitchComponent } from '../';

describe('Switch component', () => {
  it('Switch onClick should be called correctly', () => {
    const switchClick = vi.fn();
    render(<SwitchComponent size="md" onClick={switchClick} />);
    const switchComponent = screen.getByTestId('switch');
    fireEvent.click(switchComponent);
    expect(switchClick).toHaveBeenCalledOnce();
  });

  it('Switch onCheckedChange should be called with the correct value', async () => {
    const onCheckedChangeMock = vi.fn();
    render(<SwitchComponent size="md" onCheckedChange={onCheckedChangeMock} />);

    const switchComponent = screen.getByTestId('switch');

    await userEvent.click(switchComponent);

    expect(onCheckedChangeMock).toHaveBeenCalledWith(true);

    await userEvent.click(switchComponent);

    expect(onCheckedChangeMock).toHaveBeenCalledWith(false);
  });

  it('Medium switch should render correctly by default size', () => {
    const switchComponent = render(<SwitchComponent />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Medium switch should render correctly', () => {
    const switchComponent = render(<SwitchComponent size="md" />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Medium switch disabled should render correctly', () => {
    const switchComponent = render(<SwitchComponent disabled size="md" />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Large switch should render correctly', () => {
    const switchComponent = render(<SwitchComponent size="lg" />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Large switch disabled should render correctly', () => {
    const switchComponent = render(<SwitchComponent disabled size="lg" />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Extra Large switch should render correctly', () => {
    const switchComponent = render(<SwitchComponent size="xl" />);
    expect(switchComponent).toMatchSnapshot();
  });

  it('Extra Large switch disabled should render correctly', () => {
    const switchComponent = render(<SwitchComponent disabled size="xl" />);
    expect(switchComponent).toMatchSnapshot();
  });
});
