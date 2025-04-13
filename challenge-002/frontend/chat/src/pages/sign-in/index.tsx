import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserFromStorage } from "@/lib/storage/storage";
import { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

interface SignInProps {
    onUserLogged: (value: boolean) => void
}

const SignIn: React.FC<SignInProps> = ({ onUserLogged }) => {

    const [username, setUsername] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setUserFromStorage(uuid(), `@${username}`);
        onUserLogged(true);
        setUsername("");
    }

    return (
        <form className="flex flex-col gap-2 w-md p-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <Input 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
            </div>
            <Button type="submit" className="cursor-pointer">Login</Button>
        </form>
    )
}

export default SignIn;