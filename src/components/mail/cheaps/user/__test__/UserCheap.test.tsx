import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserCheap from '../UserCheap';

const defaultProps = {
  fullName: 'John Doe',
  email: 'john.doe@internxt.com',
};

describe('UserCheap', () => {
  it('should match snapshot', () => {
    const component = render(<UserCheap {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('should render full name and email', () => {
    render(<UserCheap {...defaultProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@internxt.com')).toBeInTheDocument();
  });

  it('should render with avatar when src is provided', () => {
    const avatar = 'https://example.com/avatar.jpg';
    const component = render(<UserCheap {...defaultProps} avatar={avatar} />);
    expect(component).toMatchSnapshot();
  });

  it('should render without avatar when src is not provided', () => {
    const component = render(<UserCheap {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('should truncate long full name', () => {
    const longName = 'A Very Long Name That Should Be Truncated In The Component';
    render(<UserCheap fullName={longName} email={defaultProps.email} />);

    const nameEl = screen.getByText(longName);
    expect(nameEl.className).toContain('truncate');
  });

  it('should truncate long email', () => {
    const longEmail = 'a.very.long.email.address.that.should.be.truncated@internxt.com';
    render(<UserCheap fullName={defaultProps.fullName} email={longEmail} />);

    const emailEl = screen.getByText(longEmail);
    expect(emailEl.className).toContain('truncate');
  });
});
