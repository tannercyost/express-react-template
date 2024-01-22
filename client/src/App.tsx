import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  type User = { 
    id : number,
    username : string 
  }

  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([]);
  // useEffect is called twice in dev mode so that state update side effects are more obvious
  useEffect(() => {
    fetch(`/api/whoami`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <h1>Users</h1>
        {users.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
