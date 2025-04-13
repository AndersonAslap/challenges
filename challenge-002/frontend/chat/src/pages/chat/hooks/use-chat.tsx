import { useContext, useRef } from "react";
import { ChatContext } from "../context/chat.context";
import { MessageBase } from "@/@core/types";

const useChat = () => {

    const { messages, onSetMessages } = useContext(ChatContext);

    const audio = useRef(new Audio('/assets/notification.wav'));

    const playNotification = () => {
        audio.current.play().catch((err) => {
            console.warn("Não foi possível reproduzir o som:", err);
        });
    }

    const onReceiveMessage = (message: MessageBase) => {
        onSetMessages(message);
    }

    return { messages, playNotification, onReceiveMessage };
}

export default useChat;