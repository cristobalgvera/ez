import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold">EZ React</h1>
      </div>
      <div className="text-center">
        <p className="text-2xl">{count}</p>
      </div>
      <div className="flex justify-center gap-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
