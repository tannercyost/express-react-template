// import { useEffect, useState } from 'react'

import '../styles/App.css'

type Item = { 
  id : number,
  title : string,
  description : string,
  completed : boolean
}

function Items(props: { items: Item }) {
  // const [count, setCount] = useState(0)
  // const [items, setItems] = useState<Item[]>([]);
  const things = props.items

  return (
    <> 
        {things.map((item) => (
          <p key={item.id}>{item.id} : {item.description}</p>
        ))}
    </>
  )
}

export default Items