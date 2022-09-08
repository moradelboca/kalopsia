import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import Item from './Item';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    let itemPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id:0, name:'Collar kalopsia', price:1200, imageURL:'./' },
          { id:1, name:'Pulsera rainbow', price:700, imageURL:'./' },
          { id:2, name:'Collar happiness', price:1000, imageURL:'./' },
        ])
      }, 2000)
    })
  
    itemPromise
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <p>{loading ? 'Loading...' : null}</p>
      <p>{error ? 'Error!' : null}</p>
      <ItemList items={items} />
    </div>
  )
}
