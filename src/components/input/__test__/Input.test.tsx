import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Input from '../Input';
import React from 'react';

describe('Input component', () => {
  const onChange = vi.fn();
  const onClear = vi.fn();
  const onFocus = vi.fn();
  const onBlur = vi.fn();
  const onKeyDown = vi.fn();
  const defaultProps = {
    label: 'Test Label',
    placeholder: 'Enter text',
    value: '',
    onChange,
    onClear,
    onFocus,
    onBlur,
    onKeyDown,
  };

  const renderInput = (props = {}) => {
    return render(<Input {...defaultProps} {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const copyable = renderInput();
    expect(copyable).toMatchSnapshot();
  });

  it('should render the input field', () => {
    const { getByRole } = renderInput();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the input with label when provided', () => {
    const { getByText, getByRole } = renderInput();
    expect(getByText('Test Label')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the input with placeholder when provided', () => {
    const { getByPlaceholderText } = renderInput();
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should handle value changes', () => {
    const { getByRole } = renderInput();
    fireEvent.change(getByRole('textbox'), { target: { value: 'Test' } });
    expect(onChange).toHaveBeenCalledWith('Test');
  });

  it('should render as a password input when variant is password', () => {
    const { getByPlaceholderText } = renderInput({ variant: 'password' });
    expect((getByPlaceholderText('Enter text') as HTMLInputElement).type).toBe('password');
  });

  it('should toggle password visibility when clicking the eye icon', () => {
    const { getByPlaceholderText, getByRole } = renderInput({ variant: 'password' });
    fireEvent.focus(getByPlaceholderText('Enter text'));
    const eyeIcon = getByRole('button');
    fireEvent.mouseDown(eyeIcon);
    expect((getByPlaceholderText('Enter text') as HTMLInputElement).type).toBe('text');
    fireEvent.mouseDown(eyeIcon);
    expect((getByPlaceholderText('Enter text') as HTMLInputElement).type).toBe('password');
  });

  it('should render the search icon when variant is search', () => {
    const { container } = renderInput({ variant: 'search' });
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('should render the correct style variant is search and disabled', () => {
    const { container } = renderInput({ variant: 'search', disabled: true });
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('text-gray-20');
    expect(icon).toBeInTheDocument();
  });

  it('should call onClear when clear icon is clicked', async () => {
    const { getByRole } = renderInput({ value: 'Text to find', variant: 'search' });
    fireEvent.mouseDown(getByRole('button'));
    expect(onClear).toHaveBeenCalled();
  });

  it('should not call onClear when clear icon is clicked if is not provided', async () => {
    const { getByRole } = renderInput({ value: 'Text to find', variant: 'search', onClear: undefined });
    fireEvent.mouseDown(getByRole('button'));
    expect(onClear).not.toHaveBeenCalled();
  });

  it('clear button should have correct style depending if it focused or not', async () => {
    const { getByRole } = renderInput({ value: 'Text to find', variant: 'search', autofocus: true });
    expect(getByRole('button')).toHaveClass('bg-white');
  });

  it('should set the cursor at the end of the input value when focusInput is called and variant is not email', () => {
    const testValue = 'Test value';
    const { rerender, getByRole } = renderInput({ value: testValue, autofocus: true, variant: 'default' });

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    expect(input).toHaveFocus();

    rerender(<Input value={testValue} autofocus variant="email" />);

    expect(input.selectionStart).toBe(testValue.length);
    expect(input.selectionEnd).toBe(testValue.length);
  });

  it('should not set the cursor position when variant is email', () => {
    const testValue = 'Test value';
    const { getByRole } = renderInput({ value: testValue, autofocus: true, variant: 'email' });

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveFocus();
    expect(input.selectionStart).not.toBe(testValue.length);
    expect(input.selectionEnd).not.toBe(testValue.length);
  });

  it('should apply the correct styles based on error accent', () => {
    const { container, getByText, getByRole } = renderInput({ accent: 'error', message: 'Error message' });
    expect(getByRole('textbox')).toHaveClass('border-red');
    expect(getByText('Error message')).toBeInTheDocument();
    expect(container.querySelector('svg')?.parentElement).toHaveClass('text-red');
  });

  it('should apply the correct styles based on warning accent', () => {
    const { container, getByText, getByRole } = renderInput({ accent: 'warning', message: 'Warning message' });
    expect(getByRole('textbox')).toHaveClass('focus:border-orange');
    expect(getByText('Warning message')).toBeInTheDocument();
    expect(container.querySelector('svg')?.parentElement).toHaveClass('text-orange');
  });

  it('should apply the correct styles based on success accent', () => {
    const { container, getByText, getByRole } = renderInput({ accent: 'success', message: 'Success message' });
    expect(getByRole('textbox')).toHaveClass('focus:border-green');
    expect(getByText('Success message')).toBeInTheDocument();
    expect(container.querySelector('svg')?.parentElement).toHaveClass('text-green');
  });

  it('should not allow input when disabled', () => {
    const { getByRole } = renderInput({ disabled: true });
    expect(getByRole('textbox')).toBeDisabled();
  });

  it('should focus input when autofocus is true', () => {
    const { getByRole } = renderInput({ autofocus: true });
    expect(getByRole('textbox')).toHaveFocus();
  });

  it('should focus the input when message is present', () => {
    const { getByRole } = renderInput({ message: 'Test message' });
    expect(getByRole('textbox')).toHaveFocus();
  });

  it('should render the correct maxLength counter', () => {
    const { getByText } = renderInput({ maxLength: 10, value: 'test' });
    expect(getByText('4/10')).toBeInTheDocument();
  });

  it('should call onFocus and onBlur correctly', () => {
    const { getByRole } = renderInput();
    const input = getByRole('textbox');

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it('should not call onFocus, onBlur if not provided', () => {
    const { getByRole } = renderInput({ onBlur: undefined, onFocus: undefined });
    const input = getByRole('textbox');

    fireEvent.focus(input);
    expect(onFocus).not.toHaveBeenCalled();

    fireEvent.blur(input);
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('should trigger onKeyDown event when key is pressed', () => {
    const { getByRole } = renderInput();
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter' });
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should handle variant="email" and set correct input type', () => {
    const { getByRole } = renderInput({ variant: 'email' });
    expect((getByRole('textbox') as HTMLInputElement).type).toBe('email');
  });

  it('should render the correct input type for text', () => {
    const { getByRole } = renderInput();
    expect((getByRole('textbox') as HTMLInputElement).type).toBe('text');
  });

  it('should render label with correct styles when disabled', () => {
    const { getByText } = renderInput({ disabled: true });
    expect(getByText('Test Label')).toHaveClass('text-gray-40');
  });
});
