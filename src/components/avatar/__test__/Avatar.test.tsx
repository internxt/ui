import { render } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import { Avatar } from '../';
import DefaultAvatar from '../components/DefaultAvatar';
import PictureAvatar from '../components/PictureAvatar';

const FULL_NAME = 'My Internxt';
const IMAGE_SRC = 'https://internxt.com/favicon.ico';

describe('Avatar component', () => {
  test('Avatar with full name (first letters) should render correctly', () => {
    const avatarComponent = render(<Avatar diameter={80} fullName={FULL_NAME} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('Avatar with single word name should render correctly', () => {
    const avatarComponent = render(<Avatar diameter={80} fullName="Javi" />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('Avatar with empty spaces name should return empty content', () => {
    const avatarComponent = render(<Avatar diameter={80} fullName="   " />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('Avatar with fullname as null should render correctly with empty letters', () => {
    const avatarComponent = render(<Avatar diameter={80} fullName={null as any} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('Avatar with avatar (user image profile) should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} diameter={80} src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('XXS Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xxs" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  test('XS Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xs" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('SM Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="sm" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('Base Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="base" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  test('LG Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="lg" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });
  test('XL Avatar should render correctly', () => {
    const avatarComponent = render(<Avatar fullName={FULL_NAME} size="xl" src={IMAGE_SRC} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('DefaultAvatar handles default parameters', () => {
    const avatarComponent = render(<DefaultAvatar fullName="John Doe" diameter={80} />);
    expect(avatarComponent).toMatchSnapshot();
  });

  test('PictureAvatar handles default parameters', () => {
    const avatarComponent = render(<PictureAvatar src={IMAGE_SRC} diameter={80} />);
    expect(avatarComponent).toMatchSnapshot();
  });
});
