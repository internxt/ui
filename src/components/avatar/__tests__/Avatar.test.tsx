import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Avatar } from '../Avatar';

const FULL_NAME = 'My Internxt';
const IMAGE_SRC = 'https://internxt.com/favicon.ico';

describe('Avatar component', () => {
  it('Avatar with full name (first letters) should render correctly', () => {
    const avatarComponent = render(<Avatar diameter={80} fullName={FULL_NAME} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  it('Avatar with avatar (user image profile) should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} diameter={80} src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  it('XXS Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xxs" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  it('XS Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xs" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  it('SM Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="sm" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  it('Base Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="base" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  it('LG Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="lg" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  it('XL Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xl" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
});
