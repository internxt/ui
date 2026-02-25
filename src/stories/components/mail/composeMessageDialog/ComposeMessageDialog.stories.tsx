import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { useState } from 'react';
import { ComposeMessageDialog } from '../../../../components/mail/ComposeMessageDialog/ComposeMessageDialog';
import { Button } from '@/components/button';
import { Attachment, Recipient } from '@/components/mail/ComposeMessageDialog/types';

const interactiveDecorator: Decorator = (Story, context) => {
  const [{ isOpen }, setArgs] = useArgs();
  const [mailValue, setMailValue] = useState('');
  const [toRecipients, setToRecipients] = useState<Recipient[]>([]);
  const [ccRecipients, setCcRecipients] = useState<Recipient[]>([]);
  const [bccRecipients, setBccRecipients] = useState<Recipient[]>([]);
  const [subject, setSubject] = useState('');

  const addRecipient = (setter: React.Dispatch<React.SetStateAction<Recipient[]>>, email: string) => {
    setter((prev) => [...prev, { id: crypto.randomUUID(), email, displayName: email.split('@')[0] }]);
  };

  const removeRecipient = (setter: React.Dispatch<React.SetStateAction<Recipient[]>>, id: string) => {
    setter((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div style={{ padding: '20px', minHeight: '600px' }}>
      <Button onClick={() => setArgs({ isOpen: true })}>Open New Mail Dialog</Button>
      {Story({
        ...context,
        args: {
          ...context.allArgs,
          isOpen,
          mailValue,
          toRecipients,
          ccRecipients,
          bccRecipients,
          subject,
          onClose: () => setArgs({ isOpen: false }),
          onMailChange: (html: string) => setMailValue(html),
          onAddToRecipient: (email: string) => addRecipient(setToRecipients, email),
          onRemoveToRecipient: (id: string) => removeRecipient(setToRecipients, id),
          onAddCcRecipient: (email: string) => addRecipient(setCcRecipients, email),
          onRemoveCcRecipient: (id: string) => removeRecipient(setCcRecipients, id),
          onAddBccRecipient: (email: string) => addRecipient(setBccRecipients, email),
          onRemoveBccRecipient: (id: string) => removeRecipient(setBccRecipients, id),
          onSubjectChange: setSubject,
        },
      })}
    </div>
  );
};

const defaultText = {
  to: 'To',
  cc: 'CC',
  bcc: 'BCC',
  subject: 'Subject',
  send: 'Send',
};

const meta: Meta<typeof ComposeMessageDialog> = {
  title: 'Components - Mail/Compose Message Dialog',
  component: ComposeMessageDialog,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [interactiveDecorator],
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    isLoading: { control: 'boolean' },
    primaryActionColor: { control: 'select', options: ['primary', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'New message',
    isOpen: false,
    isLoading: false,
    primaryActionColor: 'primary',
    text: defaultText,
    onPrimaryAction: () => console.log('send'),
    onSecondaryAction: () => console.log('attach'),
  },
};

export const Loading: Story = {
  args: {
    title: 'Sending...',
    isOpen: false,
    isLoading: true,
    primaryActionColor: 'primary',
    text: defaultText,
    onPrimaryAction: () => console.log('send'),
  },
};

const sampleAttachments: Attachment[] = [
  { id: '1', name: 'document.pdf', size: 1024 * 1024 * 2.5 },
  { id: '2', name: 'image.png', size: 1024 * 512 },
  { id: '3', name: 'very-long-filename-that-should-be-truncated-in-the-ui.xlsx', size: 1024 * 1024 * 10 },
  { id: '4', name: 'presentation.pptx', size: 1024 * 1024 * 5 },
  { id: '5', name: 'data.csv', size: 1024 * 100 },
];

export const WithAttachments: Story = {
  args: {
    title: 'New message',
    isOpen: false,
    isLoading: false,
    primaryActionColor: 'primary',
    text: defaultText,
    attachments: sampleAttachments,
    onPrimaryAction: () => console.log('send'),
    onSecondaryAction: () => console.log('attach'),
    onRemoveAttachment: (id: string) => console.log('remove attachment:', id),
  },
};

const sampleRecipients: Recipient[] = [
  { id: '1', email: 'bea@internxt.com', displayName: 'Bea D.' },
  { id: '2', email: 'anna@internxt.com', displayName: 'Anna M.' },
];

export const WithRecipients: Story = {
  args: {
    title: 'New message',
    isOpen: false,
    isLoading: false,
    primaryActionColor: 'primary',
    text: defaultText,
    toRecipients: sampleRecipients,
    subject: 'Trip to Korea 🇰🇷',
    onPrimaryAction: () => console.log('send'),
    onSecondaryAction: () => console.log('attach'),
  },
};
