import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/navbar'
import Thing from './components/thing'

type Item = { 
  id : number,
  title : string,
  description : string,
  completed : boolean
}

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<Item[]>([]);
  
  // useEffect is called twice in dev mode so that state update side effects are more obvious
  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setItems(data));
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
      <Navbar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <h1>Users</h1>
        {items.map((item) => (
          <Thing items={item} count={count} />
        ))}
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
