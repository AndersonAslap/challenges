import { MessageBase } from '../../../@core/types';

interface MessageProps {
    isMyMessage: boolean;
    message: MessageBase;
    prevMessageUsername: string;
}

const Message: React.FC<MessageProps> = ({ message, isMyMessage, prevMessageUsername }) => {
    return (
        <div className={`${isMyMessage ? 'self-end' : 'self-start'} max-w-72 px-2 py-1`}>
            {prevMessageUsername !== message?.username && <span>{message?.username}</span>}
            <p className='bg-zinc-700 rounded-2xl p-2'>
                {message?.content}
            </p>
        </div>
    )
}

export default Message;