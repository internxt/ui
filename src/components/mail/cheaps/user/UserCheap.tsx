import { Avatar } from '@/components/avatar';

interface UserCheapProps {
  fullName: string;
  email: string;
  avatar?: string;
}

/**
 * A cheap user component to render a user's information.
 *
 * @param {UserCheapProps} props - The props object.
 * @param {string} props.fullName - The user's full name.
 * @param {string} props.email - The user's email address.
 * @param {string} [props.avatar] - The user's avatar URL. If not provided, the avatar will be generated from the user's name.
 */
const UserCheap = ({ fullName, email, avatar }: UserCheapProps) => (
  <div className="flex flex-row gap-2 border max-w-64 bg-surface w-full border-gray-10 shadow-subtle rounded-lg">
    <div className="flex flex-row w-full gap-2 p-4">
      <Avatar src={avatar} fullName={fullName} diameter={40} />
      <div className="flex flex-col min-w-0">
        <p className="font-medium text-gray-100 truncate">{fullName}</p>
        <p className="text-sm text-gray-50 truncate">{email}</p>
      </div>
    </div>
  </div>
);

export default UserCheap;
