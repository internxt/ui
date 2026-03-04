import { EmailProps } from '../../mocks';

export const MessageInbox = ({ subject, body }: Pick<EmailProps, 'subject' | 'body'>) => (
  <div className="flex flex-col py-5 gap-2.5">
    <p className="text-2xl font-semibold text-gray-100">{subject}</p>
    <p className="text-gray-100">{body}</p>
  </div>
);
