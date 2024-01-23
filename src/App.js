import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "one bag of rice"
    },
    {
        id: 2,
        checked: false,
        item: "item 2"
    },
    {
        id: 3,
        checked: false,
        item: "item 3"
    }
]);

const handleCheck = (id)=>{
  const listitems = items.map((item)=>item.id===id ? {...item,
  checked: !item.checked}:item);
  setItems(listitems);
  localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}

const handleDelete = (id)=>{
 const listitems = items.filter((item)=>item.id !== id);
 setItems(listitems);
 localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}



  return (
    <div className="App">
      <Header title="Groceries list"/>
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
