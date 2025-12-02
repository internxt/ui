export interface SuiteLauncherProps {
    className?: string;
    suiteArray: {
        icon: JSX.Element;
        title: string;
        onClick: () => void;
        isMain?: boolean;
        availableSoon?: boolean;
        isLocked?: boolean;
    }[];
    soonText?: string;
}
/**
 * SuiteLauncher renders a dropdown menu with a list of suite applications.
 *
 * @param {suiteLauncherProps} props
 * - Object containing properties for the suiteLauncher component.
 *
 * @param {suiteLauncherProps['suiteArray']} props.suiteArray
 * - Array of objects containing the suite applications.
 *
 * @param {string} [props.className]
 * - Optional CSS class name for the suiteLauncher component.
 *
 * @param {string} [props.soonText]
 * - Optional text to display when a suite application is available soon. It should be a translated string. Defaults to "Soon".
 *
 * @returns {JSX.Element}
 * - The rendered suiteLauncher component.
 */
export default function SuiteLauncher({ className, suiteArray, soonText, }: Readonly<SuiteLauncherProps>): JSX.Element;
