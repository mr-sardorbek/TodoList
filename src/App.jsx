import { useState } from "react";
import './index.css'

function App() {
   const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Portfolio" },
    { id: 3, text: "Apply for Job" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (!text) return;
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSave = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
    setEditingId(null);
    setText("");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-2xl font-sans">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide">
        My Todo List
      </h2>

      
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3a2613] transition shadow-sm"
        />
        <button
          onClick={handleAdd}
          className="bg-[#603f1f] hover:bg-[#3a2613] cursor-pointer text-white font-semibold px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Add
        </button>
      </div>

     
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
          >
            {editingId === todo.id ? (
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            ) : (
              <span className="text-gray-700 font-medium">{todo.text}</span>
            )}

            <div className="flex gap-2 ml-4">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-4 py-1 rounded-lg shadow transition-all"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setText(todo.text);
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white px-4 py-1 rounded-lg shadow transition-all"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-1 rounded-lg shadow transition-all"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
