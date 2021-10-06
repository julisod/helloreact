import React, { useState } from 'react';
import "./App.css";

const Todolist = () => {
  //cd Documents/Koulu/Front end/helloreact
  const [input, setInput] = useState({desc:"", date:""});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setInput({...input, [event.target.name]: event.target.value});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
  }

  const deleteItem = (id) => {
    const newArray = todos.filter((todo, i) => i !== id)
    setTodos(newArray);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label for="date">Date:</label>
        <input type="date" name="date" onChange={inputChanged} value={input.date}/>
        <label for="desc">Description:</label>
        <input type="text" name="desc" onChange={inputChanged} value={input.desc}/>
        <input type="submit" value="Add"/>
      </form>
      <table><tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
        {todos.map((todo, index) =>
        <tr key={todo.id}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </tr>)
        }
      </tbody></table>   
    </div>
  );
};

export default Todolist;
