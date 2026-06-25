export interface MessageCheapProps {
    email: {
        id: string;
        from: {
            name: string;
            avatar: string;
        };
        subject: string;
        createdAt: string;
        body: string;
        read: boolean;
    };
    active?: boolean;
    selected?: boolean;
    participants?: string[];
    onClick: (id: string, isRead?: boolean) => void;
    onSelect?: (id: string) => void;
}
declare const MessageCheap: ({ email, active, selected, participants, onClick, onSelect }: MessageCheapProps) => import("react/jsx-runtime").JSX.Element;
export default MessageCheap;
