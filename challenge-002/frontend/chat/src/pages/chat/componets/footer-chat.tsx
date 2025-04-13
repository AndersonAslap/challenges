import { MessageBase } from "@/@core/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUserFromStorage } from "@/lib/storage/storage";
import { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

interface FooterChatProps {
    onSendMessage: (msg: MessageBase) => Promise<void>
}

const FooterChat: React.FC<FooterChatProps> = ({ onSendMessage }) => {

    const user = getUserFromStorage();

    const [message, setMessage] = useState('');

    const handleSendMessage = async (event: FormEvent) => {
        event.preventDefault();
        const msg: MessageBase = {
            messageId: uuid(),
            username: user?.username ?? '',
            dateSend: new Date().toString(),
            content: message
        };
        await onSendMessage(msg);
        setMessage('');
    }
     
    return (
        <form 
            className="h-16 pt-4 pb-2 px-2 flex items-center gap-2 border-t-1" 
            onSubmit={handleSendMessage}
        >
            <Input 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <Button 
                type="submit"
                size="sm" 
                className="cursor-pointer"
            >
                Enviar
            </Button>
        </form>
    )
}

export default FooterChat;