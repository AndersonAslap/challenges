import SignIn from "./pages/sign-in"
import { getUserFromStorage } from "./lib/storage/storage";
import { useEffect, useState } from "react";
import Chat from "./pages/chat";
import { ChatProvider } from "./pages/chat/context/chat.context";

const App: React.FC = () => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (getUserFromStorage()) {
      setUserLogged(true);
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center">
      <main className="h-[70vh] w-[80vw] flex justify-center items-center bg-zinc-900 rounded-md">
        {userLogged ? <ChatProvider><Chat /></ChatProvider> : <SignIn onUserLogged={setUserLogged} />}
      </main>
    </div>
  )
}

export default App