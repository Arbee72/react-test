import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' button='b1' />
      <Todo text='Master React' button='b2' />
      <Todo text='Explore the full React course' button='b3' />
    </div>
  );
}

export default App;
