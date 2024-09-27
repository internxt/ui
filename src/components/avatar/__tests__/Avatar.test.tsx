import { describe, expect, it } from 'vitest';
import renderer from 'react-test-renderer';
import Avatar from '../Avatar';

const FULL_NAME = 'My Internxt';
const IMAGE_SRC = 'https://internxt.com/favicon.ico';

describe('Avatar component', () => {
  it('Avatar with full name (first letters) should render correctly', () => {
    const avatarComponent = renderer.create(<Avatar diameter={80} fullName={FULL_NAME} />).toJSON();
    expect(avatarComponent).toMatchSnapshot();
  });

  it('Avatar with avatar (user image profile) should render correctly', () => {
    const avatarComponent = renderer.create(<Avatar fullName={FULL_NAME} diameter={80} src={IMAGE_SRC} />).toJSON();
    expect(avatarComponent).toMatchSnapshot();
  });
});
