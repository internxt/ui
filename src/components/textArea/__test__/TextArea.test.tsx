import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TextArea } from '../';
import { render } from '@testing-library/react';

describe('Text area component', () => {
  const onChange = vi.fn();
  const renderTextArea = (props = {}) => render(<TextArea onChange={onChange} {...props} />);
  it('TextArea enabled should render correctly', () => {
    const textArea = renderTextArea();
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea enabled with placeholder should render correctly', () => {
    const textArea = renderTextArea({ placeholder: 'Placeholder' });
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea enabled with accent color red should render correctly', () => {
    const textArea = renderTextArea({ accentColor: 'red' });
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea disabled should render correctly', () => {
    const textArea = renderTextArea({ disabled: true });
    expect(textArea).toMatchSnapshot();
  });
});
