import React from "react"
import reactDom from "react-dom";
import App from "./App";
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {counterReducer} from './reducer'
import logger from 'redux-logger';

// const myLogger = (store) => {
//     return next => {
//         return action => {
//             console.log("MIDDLEWARE RAN");
//             return next(action)
//         }
//     }
// }

// ### SHORT HAND ###  
const myLogger = store => next => action => {
        // console.log(" 1st MIDDLEWARE RAN",action);
        return next(action);
}

const secondMiddleware = store => next => action => {
    // console.log("2nd MIDDLEWARE RAN",action);
    return next(action);
}

const capAtTen = store => next => action => {
    //modifing action on the fly
    if(store.getState() >= 10){
        return next({type : "DECREMENT"});
    }
    return next(action);
}

/* ##########################################
                Third party middlewares 
   ##########################################*/
//  npm i redux-logger



const store = createStore(counterReducer,applyMiddleware(myLogger,secondMiddleware,capAtTen,logger));

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);