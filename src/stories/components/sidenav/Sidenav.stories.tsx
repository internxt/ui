import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { Sidenav, SidenavProps } from '@/components/sidenav';
import { Button } from '@/components/button';
import {
  TrayIcon,
  PaperPlaneTiltIcon,
  FileIcon,
  TrashIcon,
  CaretDownIcon,
  StarIcon,
  TagIcon,
  NotePencilIcon,
  HardDrivesIcon,
  EnvelopeSimpleIcon,
  ShieldCheckIcon,
  LockKeyIcon,
} from '@phosphor-icons/react';

const SUITE_ARRAY = [
  {
    icon: <HardDrivesIcon />,
    title: 'Drive',
    onClick: () => console.log('Drive clicked'),
  },
  {
    icon: <EnvelopeSimpleIcon />,
    title: 'Mail',
    onClick: () => console.log('Mail clicked'),
    isMain: true,
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'VPN',
    onClick: () => console.log('VPN clicked'),
    availableSoon: true,
  },
  {
    icon: <LockKeyIcon />,
    title: 'Pass',
    onClick: () => console.log('Pass clicked'),
    isLocked: true,
  },
];

const meta: Meta<typeof Sidenav> = {
  title: 'Components/Sidenav',
  component: Sidenav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onToggleCollapse: { action: 'toggleCollapse' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SidenavProps>;

const MAIL_OPTIONS = [
  {
    label: 'Inbox',
    icon: TrayIcon,
    iconDataCy: 'sidenav-inbox',
    isVisible: true,
    notifications: 12,
  },
  {
    label: 'Sent',
    icon: PaperPlaneTiltIcon,
    iconDataCy: 'sidenav-sent',
    isVisible: true,
  },
  {
    label: 'Drafts',
    icon: FileIcon,
    iconDataCy: 'sidenav-drafts',
    isVisible: true,
    notifications: 3,
  },
  {
    label: 'Trash',
    icon: TrashIcon,
    iconDataCy: 'sidenav-trash',
    isVisible: true,
  },
  {
    label: 'Labels',
    icon: CaretDownIcon,
    iconDataCy: 'sidenav-labels',
    isVisible: true,
  },
  {
    label: 'Important',
    icon: StarIcon,
    iconDataCy: 'sidenav-important',
    isVisible: true,
    subsection: true,
  },
  {
    label: 'Work',
    icon: TagIcon,
    iconDataCy: 'sidenav-work',
    isVisible: true,
    subsection: true,
  },
  {
    label: 'Personal',
    icon: TagIcon,
    iconDataCy: 'sidenav-personal',
    isVisible: true,
    subsection: true,
  },
];

const InteractiveSidenav = (args: SidenavProps) => {
  const [{ showSubsections, isCollapsed, options }, setArgs] = useArgs();

  const handleOptionClick = (optionIndex: number, isSubsection: boolean) => {
    const updatedOptions = options.map((opt: any, idx: number) => ({
      ...opt,
      isActive: idx === optionIndex,
    }));

    if (isSubsection) {
      setArgs({ options: updatedOptions });
      return;
    }

    // If clicking "Labels" option (index 4), toggle subsections
    if (optionIndex === 4) {
      setArgs({ options: updatedOptions, showSubsections: !showSubsections });
    } else {
      setArgs({ options: updatedOptions, showSubsections: false });
    }
  };

  const handleToggleCollapse = args.onToggleCollapse
    ? () => {
        setArgs({ isCollapsed: !isCollapsed });
        args.onToggleCollapse?.();
      }
    : undefined;

  const optionsWithHandlers = options.map((option: any, index: number) => ({
    ...option,
    onClick: () => handleOptionClick(index, !!option.subsection),
  }));

  return (
    <Sidenav
      {...args}
      options={optionsWithHandlers}
      showSubsections={showSubsections}
      isCollapsed={isCollapsed}
      onToggleCollapse={handleToggleCollapse}
    />
  );
};

export const Default: Story = {
  render: InteractiveSidenav,
  args: {
    header: {
      logo: 'https://internxt.com/favicon.ico',
      title: 'Mail',
      onClick: () => console.log('Header clicked'),
    },
    primaryAction: (
      <Button className="flex flex-row items-center w-full gap-2" onClick={() => console.log('New message clicked')}>
        <NotePencilIcon size={24} />
        <p>New message</p>
      </Button>
    ),
    collapsedPrimaryAction: (
      <Button onClick={() => console.log('New message clicked')}>
        <NotePencilIcon size={20} />
      </Button>
    ),
    suiteLauncher: {
      suiteArray: SUITE_ARRAY,
      soonText: 'Soon',
    },
    options: MAIL_OPTIONS.map((opt, idx) => ({ ...opt, isActive: idx === 0 })),
    showSubsections: false,
    isCollapsed: false,
    storage: {
      usage: '2.8 GB',
      limit: '4 GB',
      percentage: 70,
      upgradeLabel: 'Upgrade',
      onUpgradeClick: () => console.log('Upgrade clicked'),
      isLoading: false,
    },
    onToggleCollapse: () => {},
  },
};

export const Collapsed: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    isCollapsed: true,
  },
};

export const WithSubsectionsExpanded: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    options: MAIL_OPTIONS.map((opt, idx) => ({ ...opt, isActive: idx === 4 })),
    showSubsections: true,
  },
};

export const WithoutPrimaryAction: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    primaryAction: undefined,
    collapsedPrimaryAction: undefined,
  },
};

export const WithoutStorage: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    storage: undefined,
  },
};

export const HighStorageUsage: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    storage: {
      usage: '9.5 GB',
      limit: '10 GB',
      percentage: 95,
      upgradeLabel: 'Upgrade now',
      onUpgradeClick: () => console.log('Upgrade clicked'),
      isLoading: false,
    },
  },
};

export const Minimal: Story = {
  render: InteractiveSidenav,
  args: {
    header: {
      logo: 'https://internxt.com/favicon.ico',
      title: 'Drive',
      onClick: () => console.log('Header clicked'),
    },
    options: [
      {
        label: 'All files',
        icon: FileIcon,
        iconDataCy: 'sidenav-all-files',
        isVisible: true,
        isActive: true,
      },
      {
        label: 'Trash',
        icon: TrashIcon,
        iconDataCy: 'sidenav-trash-minimal',
        isVisible: true,
        isActive: false,
      },
    ],
    showSubsections: false,
    isCollapsed: false,
    onToggleCollapse: () => {},
  },
};

export const WithoutCollapseButton: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    onToggleCollapse: undefined,
  },
};

export const LoadingStorage: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    storage: {
      usage: '0 GB',
      limit: '0 GB',
      percentage: 0,
      upgradeLabel: 'Upgrade',
      onUpgradeClick: () => console.log('Upgrade clicked'),
      isLoading: true,
    },
  },
};
