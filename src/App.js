import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from './actions'

function App() {
    
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment()) } >increment</button>
        <button onClick={()=> dispatch(decrement()) } >decrement</button>
        </>
    )
}

export default App
