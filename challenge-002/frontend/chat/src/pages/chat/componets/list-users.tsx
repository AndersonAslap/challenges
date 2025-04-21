import { getUserFromStorage } from "@/lib/storage/storage";
import UserItem from "./user";

const ListUsers: React.FC = () => {

    const users = [getUserFromStorage()];

    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-6">
                <p>Usuários na sala</p>
                <div className="flex flex-col gap-1">
                    <div className="">
                        {users?.map((user) => (
                            <UserItem user={user!} key={user?.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListUsers;