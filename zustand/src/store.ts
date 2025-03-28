import { create } from "zustand"; 

export interface UserStore {
    username: string;
    email: string;
    setUserName: (username: string) => void;
    setEmail: (email: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    username: 'c11njxx',
    email: 'c11njxxsmailbox@gmail.com', 
    setUserName: (username: string) => set(() => ({username})),
    setEmail: (email: string) => set(() => (({email})))
}))