import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

const [newItem, setNewItem]=useState('')

const setAndSaveItems = (newItems)=>{
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems));
}

const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listitems = [...items, myNewItem];
  setAndSaveItems(listitems);
}

const handleCheck = (id)=>{
  const listitems = items.map((item)=>item.id===id ? {...item,
  checked: !item.checked}:item);
  setAndSaveItems(listitems);
}

const handleDelete = (id)=>{
 const listitems = items.filter((item)=>item.id !== id);
 setAndSaveItems(listitems);
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
      <Content 
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
