import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

const [newItem, setNewItem]=useState('')
const [search, setSearch] = useState('')


useEffect(()=>{
  localStorage.setItem('shoppinglist', JSON.stringify(items));
},[items])




const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listitems = [...items, myNewItem];
  setItems(listitems);
}

const handleCheck = (id)=>{
  const listitems = items.map((item)=>item.id===id ? {...item,
  checked: !item.checked}:item);
  setItems(listitems);
}

const handleDelete = (id)=>{
 const listitems = items.filter((item)=>item.id !== id);
 setItems(listitems);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  setNewItem('');
}



  return (
    <div className="App">
      <Header title="Groceries list"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
