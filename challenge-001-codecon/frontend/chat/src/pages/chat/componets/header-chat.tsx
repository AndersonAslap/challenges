import { getUserFromStorage } from "@/lib/storage/storage";

const HeaderChat: React.FC = () => {
    const user = getUserFromStorage();

    return (
        <div className="h-12 flex items-center p-2 border-b-1">
            <span>Sala publica: ({user?.username})</span>
        </div>
    )
}

export default HeaderChat;