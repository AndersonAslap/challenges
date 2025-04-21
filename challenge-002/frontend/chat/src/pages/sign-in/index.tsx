import { avatares } from "@/@core/data/avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserFromStorage } from "@/lib/storage/storage";
import { clsx } from "clsx";
import { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

interface SignInProps {
    onUserLogged: (value: boolean) => void
}

const SignIn: React.FC<SignInProps> = ({ onUserLogged }) => {

    const [username, setUsername] = useState("");
    const [avatarSelected, setAvatarSelected] = useState("/assets/avatares/1.png");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setUserFromStorage(uuid(), `@${username}`, avatarSelected);
        onUserLogged(true);
        setUsername("");
    }

    return (
        <form className="flex flex-col gap-4 w-md p-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username:</label>
                <Input 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
            </div>
            <div>
                <div className="grid grid-cols-4 gap-2">
                    {avatares?.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "rounded-full w-20 h-20 p-1 cursor-pointer mx-auto",
                                avatarSelected === imageUrl && "border-3 border-green-500"
                            )}
                            onClick={() => setAvatarSelected(imageUrl)}
                        >
                            <Avatar className="w-full h-full object-cover">
                                <AvatarImage src={imageUrl} />
                            </Avatar>
                        </div>
                    ))}
                </div>
            </div>
            <Button type="submit" className="cursor-pointer">Login</Button>
        </form>
    )
}

export default SignIn;