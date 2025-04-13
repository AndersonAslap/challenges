import { getUserFromStorage } from "@/lib/storage/storage";

const ListUsers: React.FC = () => {

    const users = [getUserFromStorage()];

    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-6">
                <p>Usuários na sala</p>
                <div className="flex flex-col gap-1">
                    <div className="">
                        {users?.map((user) => (
                            <div key={user?.id}>{user?.username}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListUsers;