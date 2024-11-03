import axios from "axios";
import { useState } from "react";

export function AuthTodo() {
  const [todo, setTodo] = useState(''); // Set the initial state to an empty string
  const [id, setId] = useState(''); // Set the ID if needed

  async function todoHandle() {
    try {
      const response = await axios.post(`http://localhost:3004/api/user/todo/${id}`, { todo });
      console.log(response.data);
      alert('Todo added successfully');
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Failed to add todo, please try again');
    }
  }

  return (
    <>
      <h1>TODO LIST</h1>

      <form onSubmit={(e) => { e.preventDefault(); todoHandle(); }}>
        <div className="input-group">
          <label htmlFor="todo">Add Todo</label>
          <input
            type="text"
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
