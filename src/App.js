import './App.css';
import UseMemo from './components/UseMemo';
import CallAPI from './components/CallAPI';
import { useReducer } from 'react';
import { increse, decrese } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import useFormInput from './customHooks/FormInputs';
import ParentComponent from './sendDataFromChildToParent';
import { useDataOfContext } from './context';
import SendAndGetContext from './components/sendAndGetContext';
import ReducerHook from './ReducerHook';
import ReducerFromRedux from './ReducerFromRedux';


function App() {
  // !custom hooks
  const { inputValue, handleInputChanges } = useFormInput();
  const { stateValue } = useDataOfContext();

  const handleFieldChangeValue = (e) => {
    const { name, value } = e;
    handleInputChanges(name, value)
  }

  // ! calling api
  // const apiURI = 'https://picsum.photos/200/300';
  // const { loading, data, error } = CallAPI(apiURI);

  // if (loading) { return <div>Loading ...</div> }

  // return <img src={'https://picsum.photos/200/300'} alt="" />

  // !use reducer
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'INCREMENT': return { count: state.count + 1 }
  //     case 'DECREMENT': return { count: state.count - 1 }
  //     default: return state
  //   }
  // }

  // const initialState = { count: 0 }
  // const [state, dispatch] = useReducer(reducer, initialState)


  // ! redux method
  const myState = useSelector(state => state.updateNumbers);
  const dispatch = useDispatch();


  return <div className='App'>
    <button onClick={() => dispatch(decrese())}>-</button>
    <input type="text" placeholder='Your Number' value={myState} />
    <button onClick={() => dispatch(increse())}>+</button>

    {/* <p>useReducer ?</p>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    <span>{state.count}</span>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button> */}

    <div>Fibonacci ?</div>
    <UseMemo />

    {/* <input type="text" placeholder='Your Name' name='inputField1' value={inputValue.inputField1 || ''} onChange={handleFieldChangeValue} />
    <input type="text" placeholder='Your Name' name='inputField2' value={inputValue.inputField2 || ''} onChange={handleFieldChangeValue} /> */}

    <ParentComponent />
    <SendAndGetContext />

    <div>{stateValue?.name} </div>

    <div>Only reducer</div>
    <ReducerHook />

    <div>ReducerTORedux</div>
    <ReducerFromRedux />
  </div>

}

export default App;
