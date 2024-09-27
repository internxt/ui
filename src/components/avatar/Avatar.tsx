import DefaultAvatar from './components/DefaultAvatar';
import PictureAvatar from './components/PictureAvatar';

export default function Avatar({
  src,
  diameter,
  className = '',
  fullName,
  style = {},
}: {
  diameter: number;
  fullName: string;
  src?: string | null;
  className?: string;
  style?: Record<string, string | number>;
}): JSX.Element {
  return src ? (
    <PictureAvatar src={src} diameter={diameter} className={className} style={style} />
  ) : (
    <DefaultAvatar diameter={diameter} className={className} fullName={fullName} />
  );
}
