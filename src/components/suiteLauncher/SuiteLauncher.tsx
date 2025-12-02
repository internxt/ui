import { DotsNine, Lock } from '@phosphor-icons/react';
import { cloneElement, isValidElement } from 'react';
import { Popover } from '../popover';

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
export default function SuiteLauncher({
  className = '',
  suiteArray,
  soonText,
}: Readonly<SuiteLauncherProps>): JSX.Element {
  const SuiteButton = (
    <div className="flex h-10 w-10 items-center justify-center text-black dark:text-white">
      <DotsNine size={26} className="h-7 w-7" weight="bold" />
    </div>
  );

  const panel = (
    <div className="w-64 flex flex-wrap p-2" data-testid="suite-launcher-panel">
      {suiteArray.map((suiteApp, idx) => (
        <div
          key={idx}
          className={`w-1/3 flex items-center justify-center rounded-md ${suiteApp.isMain ? 'bg-primary/10 dark:bg-primary/20' : ''}`}
        >
          <div
            role="none"
            className={
              `flex items-center px-3 py-2 text-gray-80 w-full rounded-md ` +
              `${suiteApp.availableSoon ? '' : 'cursor-pointer hover:bg-gray-1 dark:hover:bg-gray-10'}`
            }
            style={{ lineHeight: 1.25 }}
            onClick={suiteApp.availableSoon ? undefined : suiteApp.onClick}
          >
            <div className="flex flex-col items-center w-full rounded-md">
              {suiteApp.isLocked ? (
                <Lock size={26} weight="regular" data-testid="suite-launcher-lock-icon" />
              ) : isValidElement(suiteApp.icon as JSX.Element) ? (
                cloneElement(suiteApp.icon as JSX.Element, {
                  size: 26,
                  className:
                    `${suiteApp.icon.props?.className ?? ''} ${suiteApp.isMain ? 'text-primary' : ''} ` +
                    `${suiteApp.availableSoon || suiteApp.isLocked ? 'opacity-50 filter grayscale' : ''}`,
                  weight: suiteApp.isMain ? 'fill' : 'regular',
                })
              ) : (
                suiteApp.icon
              )}

              <div className="mt-1 flex items-center">
                <span
                  className={`text-xs ${suiteApp.isMain ? 'text-primary font-medium' : 'text-gray-60'}`}
                  style={{ lineHeight: 1, opacity: suiteApp.availableSoon || suiteApp.isLocked ? 0.5 : 1 }}
                >
                  {suiteApp.title}
                </span>

                {suiteApp.availableSoon && (
                  <div className="flex rounded-sm px-1 ml-1 py-0.5 bg-purple-1 dark:bg-purple-10 items-center">
                    <span
                      className="font-medium dark:font-normal text-purple-10 dark:text-purple-1"
                      style={{ lineHeight: 1, fontSize: 'xx-small' }}
                    >
                      {soonText ?? 'Soon'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Popover className={className} childrenButton={SuiteButton} panel={() => panel} data-testid="app-suite-dropdown" />
  );
}
