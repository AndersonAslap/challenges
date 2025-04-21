import { User } from "@/@core/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface UserProps {
    user: User
}

const UserItem: React.FC<UserProps> = ({ user }) => {
    return (
        <div key={user?.id} className="flex items-center gap-3 p-2 bg-zinc-800 rounded-md">
            <Avatar className="w-12 h-12">
                <AvatarImage src={user?.avatarUrl} />
            </Avatar>
            {user?.username}
        </div>
    )
}

export default UserItem;