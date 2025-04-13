export type User = {
    id: string;
    username: string;
}

export type MessageBase = {
    messageId: string;
    username: string;
    dateSend: string;
    content: string;
}