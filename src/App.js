import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    // dispatch({ type: 'INC' }) old version
    // redux toolkit
    dispatch(actions.increment());
  }

  const decrement = () => {
    // dispatch({ type: 'DEC' })
    // redux toolkit
    dispatch(actions.decrement());
  }

  const addBy = () => {
    // dispatch({ type: 'ADD', payload: 10 })
    dispatch(actions.addBy(10));
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add 10</button>

    </div>
  );
}

export default App;
