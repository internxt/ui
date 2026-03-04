import { v4 as uuidv4 } from 'uuid';

type EmailAttachment = {
  filename: string;
  mimeType: string;
  size: number;
};

type Recipient = {
  email: string;
  name: string;
  avatar?: string;
};

export type EmailProps = {
  id: string;
  from: {
    email: string;
    name: string;
    avatar?: string;
  };
  to: Recipient[];
  cc?: Recipient[];
  bcc?: Recipient[];
  subject: string;
  body: string;
  attachments: EmailAttachment[];
  isHtml?: boolean;
  timestamp?: string;
  read: boolean;
};

const randomEmail = (): string => {
  const domain = 'internxt.com';
  return `user${Math.floor(Math.random() * 1000)}@${domain}`;
};

const randomName = (): string => {
  const names = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Davis',
    'Diana Evans',
    'Edward Wilson',
    'Fiona White',
    'George Clark',
    'Hannah Scott',
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const randomAvatar = (): string | undefined => {
  return Math.random() < 0.5 ? `https://picsum.photos/seed/${Math.random()}/200` : undefined;
};

const randomSubject = (): string => {
  const subjects = [
    'Meeting Reminder',
    'Project Update',
    'Invoice Attached',
    'Welcome to the Team',
    'Your Subscription Details',
    'Password Reset Request',
    'Special Offer Just for You',
    'Upcoming Webinar Details',
    'Happy Birthday!',
    'Security Alert',
  ];
  return subjects[Math.floor(Math.random() * subjects.length)];
};

const randomBody = (): string => {
  const bodies = [
    'This is a reminder for your upcoming meeting.',
    'Please find the attached document for your review.',
    'Your subscription will expire soon. Renew now!',
    'Welcome aboard! We are excited to have you on our team.',
    'Here are the details of your recent purchase.',
    'Click the link below to reset your password.',
    'Do not miss this exclusive offer, valid only for today.',
    'Join us for an exciting webinar on the latest trends.',
    'Happy Birthday! We hope you have a wonderful day.',
    'We detected an unusual login attempt on your account.',
  ];
  return bodies[Math.floor(Math.random() * bodies.length)];
};

const randomReadStatus = (): boolean => Math.random() < 0.5;

const generateRandomRecipients = (count: number): Recipient[] => {
  return Array.from({ length: count }, () => ({
    email: randomEmail(),
    name: randomName(),
    avatar: randomAvatar(),
  }));
};

const generateMocks = (): Record<string, EmailProps[]> => {
  const mocks: Record<string, EmailProps[]> = {
    basicEmails: [],
    emailsWithAttachments: [],
    emailsWithMultipleRecipients: [],
    invalidEmails: [],
    emailsWithHTML: [],
    notificationEmails: [],
    emailsWithLongBody: [],
  };

  for (let i = 0; i < 10; i++) {
    mocks.basicEmails.push({
      id: uuidv4(),
      from: {
        email: randomEmail(),
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(1),
      subject: randomSubject(),
      body: randomBody(),
      attachments: [],
      timestamp: new Date(
        Math.floor(Math.random() * (2023 - 2021 + 1) + 2021),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28),
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60),
      ).toISOString(),
      read: randomReadStatus(),
    });

    mocks.emailsWithAttachments.push({
      id: uuidv4(),
      from: {
        email: randomEmail(),
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(2),
      subject: randomSubject(),
      body: randomBody(),
      attachments: [
        {
          filename: `file${Math.floor(Math.random() * 5)}.pdf`,
          mimeType: 'application/pdf',
          size: Math.floor(Math.random() * 20480 + 1024),
        },
        {
          filename: `image${Math.floor(Math.random() * 5)}.png`,
          mimeType: 'image/png',
          size: Math.floor(Math.random() * 10240 + 2048),
        },
      ],
      read: randomReadStatus(),
    });

    mocks.emailsWithMultipleRecipients.push({
      id: uuidv4(),
      from: {
        email: randomEmail(),
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(3),
      cc: generateRandomRecipients(3),
      bcc: generateRandomRecipients(1),
      subject: randomSubject(),
      timestamp: new Date(
        Math.floor(Math.random() * (2023 - 2021 + 1) + 2021),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28),
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60),
      ).toISOString(),
      body: randomBody(),
      attachments: [],
      read: randomReadStatus(),
    });

    mocks.invalidEmails.push({
      id: uuidv4(),
      from: {
        email: 'invalid-email',
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: [],
      subject: '',
      body: '',
      attachments: [],
      read: randomReadStatus(),
    });

    mocks.emailsWithHTML.push({
      id: uuidv4(),
      from: {
        email: randomEmail(),
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(1),
      subject: randomSubject(),
      body: `<h1>${randomSubject()}</h1><p>${randomBody()}</p>`,
      isHtml: true,
      attachments: [],
      read: randomReadStatus(),
    });

    mocks.notificationEmails.push({
      id: uuidv4(),
      from: {
        email: 'no-reply@system.com',
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(2),
      subject: randomSubject(),
      body: randomBody(),
      timestamp: new Date(
        Math.floor(Math.random() * (2023 - 2021 + 1) + 2021),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28),
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60),
      ).toISOString(),
      attachments: [],
      read: randomReadStatus(),
    });

    mocks.emailsWithLongBody.push({
      id: uuidv4(),
      from: {
        email: randomEmail(),
        name: randomName(),
        avatar: randomAvatar(),
      },
      to: generateRandomRecipients(3),
      subject: randomSubject(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(50),
      attachments: [],
      read: randomReadStatus(),
    });
  }

  return mocks;
};

export const emailMocks = generateMocks();

/**
 * Updates the 'read' status of an email by its ID.
 * @param mocks - The collection of email mocks.
 * @param id - The ID of the email to update.
 * @param newReadStatus - The new value for the 'read' field.
 * @returns The updated email, or null if not found.
 */
export const updateEmailReadStatus = (
  mocks: Record<string, EmailProps[]>,
  id: string,
  newReadStatus: boolean,
): EmailProps | null => {
  for (const category in mocks) {
    const email = mocks[category].find((email) => email.id === id);
    if (email) {
      email.read = newReadStatus;
      return email;
    }
  }
  return null;
};

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isYesterday =
    date.getDate() === today.getDate() - 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isToday) {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleTimeString('en-US', options);
  } else if (isYesterday) {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString('en-US', options);
  } else {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }
}
