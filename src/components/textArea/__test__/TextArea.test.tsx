import React from 'react';
import { describe, expect, it } from 'vitest';
import TextArea from '../TextArea';
import { render } from '@testing-library/react';

describe('Text area component', () => {
  it('TextArea enabled should render correctly', () => {
    const textArea = render(<TextArea />);
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea enabled with placeholder should render correctly', () => {
    const textArea = render(<TextArea placeholder="Placeholder" />);
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea enabled with accent color red should render correctly', () => {
    const textArea = render(<TextArea accentColor="red" />);
    expect(textArea).toMatchSnapshot();
  });

  it('TextArea disabled should render correctly', () => {
    const textArea = render(<TextArea disabled={true} />);
    expect(textArea).toMatchSnapshot();
  });
});
