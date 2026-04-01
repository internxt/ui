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
    onClick: (id: string, isRead?: boolean) => void;
}
declare const MessageCheap: ({ email, active, selected, onClick }: MessageCheapProps) => import("react/jsx-runtime").JSX.Element;
export default MessageCheap;
