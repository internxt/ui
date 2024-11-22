export default function Dialog({ isOpen, onClose, onPrimaryAction, onSecondaryAction, title, subtitle, primaryAction, secondaryAction, primaryActionColor, isLoading, }: {
    isOpen: boolean;
    onClose: () => void;
    onPrimaryAction: () => void;
    onSecondaryAction: () => void;
    title: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    primaryActionColor: 'primary' | 'danger';
    isLoading?: boolean;
}): JSX.Element;
