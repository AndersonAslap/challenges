import Message from './message';
import useChat from '../hooks/use-chat';
import { getUserFromStorage } from '@/lib/storage/storage';
import { useEffect, useRef } from 'react';
import Scroller from '@/components/app/Scroller';

const ContentChat: React.FC = () => {

    const { messages, playNotification } = useChat();

    const chatRef = useRef<HTMLDivElement>(null);

    const user = getUserFromStorage();

    useEffect(() => {
        if (messages.length > 0 && messages[messages?.length - 1]?.username !== user?.username) {
            playNotification();
        } 

        if (chatRef.current) {
            //chatRef.current.scrollTop = chatRef.current.scrollHeight;
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages])

    return (
        <Scroller ref={chatRef} className="flex-1 p-2">
            <div className='flex flex-col'>
                {messages?.map((msg, index) => (
                    <Message 
                        key={msg?.messageId} 
                        message={msg} 
                        isMyMessage={user?.username === msg?.username}
                        prevMessageUsername={index > 0 ? messages[index-1]?.username : ''}
                    />
                ))}
            </div>
        </Scroller>
    )
}

export default ContentChat;