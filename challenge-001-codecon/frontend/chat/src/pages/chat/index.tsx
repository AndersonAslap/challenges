import { useEffect, useState } from "react";
import ContentChat from "./componets/content-chat";
import FooterChat from "./componets/footer-chat";
import HeaderChat from "./componets/header-chat";
import * as signalR from '@microsoft/signalr';
import { MessageBase } from "@/@core/types";
import useChat from "./hooks/use-chat";

const Chat: React.FC = () => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);

    const { onReceiveMessage } = useChat();

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
          .withUrl('https://localhost:7288/ws-chat')
          .withAutomaticReconnect()
          .build();
    
        setConnection(newConnection);
      }, []);
    
    useEffect(() => {
        if (connection) {
          connection
            .start()
            .then(() => {
              console.log('✅ Conectado ao SignalR');

              connection.on('ReceiveMessage', onReceiveMessage);
            })
            .catch(err => console.error('Erro na conexão:', err));
        }
    }, [connection]);
    
    const sendMessage = async (message: MessageBase) => {
        if (connection && connection.state === signalR.HubConnectionState.Connected) {
            await connection.invoke('SendMessage', message);
        }
    };

    return (
        <div className="w-full flex h-full gap-1">
            <div className="w-full rounded-md p-2 flex flex-col">
                <HeaderChat />
                <ContentChat />
                <FooterChat onSendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;