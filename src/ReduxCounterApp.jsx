import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/counter/CounterSlice";

export const ReduxCounterApp = () => {

  // useSelector para leer data del store
  const count = useSelector((state) => state.counter.value);

  // Dispatch para disparar acciones
  const dispatch = useDispatch();

  return (
    <>
     <a href="https://vitejs.dev" target="_blank">
          <img src="/redux.png" className="logo" alt="Redux logo" />
        </a>

        <h1>Counter: { count }</h1>
    
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          onClick={ () => dispatch( incrementByAmount(2) ) }
        >
          Increment by value
        </button>

        <button
          onClick={ () => dispatch( decrement() ) }
        >
          Decrement
        </button>

    </>
  )
}
