import { useUserStore } from "./store";

function Form() {
  const { username, email, setUserName, setEmail } = useUserStore();

  return (
    <div className="flex flex-col items-center gap-y-1">
      <input
        type="text"
        value={username}
        placeholder="username"
        className="bg-gray-300 p-3 rounded-2xl"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        value={email}
        placeholder="email"
        className="bg-gray-300 p-3 rounded-2xl w-100 text-center"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
}

export default function App() {
  const { username, email, setUserName, setEmail } = useUserStore();
  return (
    <div className="flex flex-col items-center gap-y-5">
      <Form />
      <div className="text-5xl text-gray-600 font-bold">{username}</div>
      <div className="text-4xl text-gray-600 font-bold">{email}</div>
    </div>
  );
}
