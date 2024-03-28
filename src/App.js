
import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import ListItem from './Components/ListItem';

function App() {

  let [list,setList] = useState([])
 const addList = (item) =>{
  setList([...list,item])
 }

  return (
   <div className='mainDiv'>
    <Form onAddList={addList}></Form>
      <div className='listOfItem'>
      <ul>
        {list.map((listItem)=><ListItem key={listItem.id} item={listItem}></ListItem>)}
      </ul>
      </div>
     
   </div>
  );
}

export default App;
