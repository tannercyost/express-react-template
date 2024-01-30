// import { useEffect, useState } from 'react'

import '../styles/App.css'

type Item = { 
  id : number,
  title : string,
  description : string,
  completed : boolean
}

function Thing(props: { items: Item, count: number }) {
  // const [count, setCount] = useState(0)
  // const [items, setItems] = useState<Item[]>([]);
  const item = props.items
  const count = props.count
  return (
    <> 
      <h1>Current count from above: {count}</h1>
      <p key={item.id}>{item.id} : {item.description}</p>
    </>
  )
}

export default Thing
