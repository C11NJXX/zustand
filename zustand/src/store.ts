import { create } from "zustand"; 
import { devtools } from "zustand/middleware";

export interface UserStore {
    username: string;
    email: string;
    setUserName: (username: string) => void;
    setEmail: (email: string) => void;
}

export const useUserStore = create(
    devtools<UserStore>((set) => ({
        username: 'c11njxx',
        email: 'c11njxxsmailbox@gmail.com', 
        setUserName: (username: string) => set(() => ({username})),
        setEmail: (email: string) => set(() => (({email})))
    }))
)