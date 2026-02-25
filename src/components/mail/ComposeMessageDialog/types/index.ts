export interface Attachment {
  id: string;
  name: string;
  size: number;
}

export interface Recipient {
  id: string;
  email: string;
  displayName?: string;
}
