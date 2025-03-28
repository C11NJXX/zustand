import { useUserStore } from "./store";
export default function App() {
  const useStore = useUserStore();

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl text-blue-400">{useStore.username}</div>
      <div className="text-4xl text-blue-500">{useStore.email}</div>
    </div>
  );
}
