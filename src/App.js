import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const doSomething =() => {
    dispatch(increment())
  }

  const undoSomething =() => {
    dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={doSomething}>+</button>
      <button onClick={undoSomething}>-</button>
      {isLogged ? <h3>Valuable info I should not see</h3> : ''}
    </div>
  );
}

export default App;
