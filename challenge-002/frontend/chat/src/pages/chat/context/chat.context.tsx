import { createContext, ReactNode, useState } from "react";
import { MessageBase } from "../../../@core/types";

type ChatContextData = {
    messages: MessageBase[];
    users: string[];
    onSetMessages: (msg: MessageBase) => void;
    onSetUsers: (users: string[]) => void;
}

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatContext = createContext({} as ChatContextData);

export const ChatProvider: React.FC<ChatProviderProps> = ({children}) => {

    const [messages, setMessages] = useState<MessageBase[]>([]);

    const [users, setUsers] = useState<string[]>([]);

    const onSetMessages = (msg: MessageBase) => {
        setMessages(prev => ([...prev, msg]));
    }

    const onSetUsers = (users: string[]) => {
        setUsers(users);
    }

    return <ChatContext.Provider 
                value={{ 
                    messages, 
                    users, 
                    onSetMessages, 
                    onSetUsers 
                }}>
                    {children}
                </ChatContext.Provider>
}