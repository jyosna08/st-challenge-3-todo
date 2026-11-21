import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    onAddTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-neutral-950 border border-neutral-800 focus:border-blue-500 outline-none rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}