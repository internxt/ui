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
declare const UserCheap: ({ fullName, email, avatar }: UserCheapProps) => import("react/jsx-runtime").JSX.Element;
export default UserCheap;
