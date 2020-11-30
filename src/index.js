import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware  from 'redux-logger';
import thunkMiddleware  from 'redux-thunk';


const middlewares = applyMiddleware(loggerMiddleware, thunkMiddleware );

const defaultState = {
  count: 0,
  value: 'text',
  isAdmin: true,
  posts: []
};

const mainReducer = (state = defaultState , action)=> {
  
  switch (action.type){

    case "RESETCOUNT":{
      return{
         ...state,
         count:0
      };
    }

    case "ADD_VALUE":{
      return{
        ...state,
        count: state.count + action.value
     };
    }
    
    case "SUB_VALUE":{
      return{
        ...state,
        count: state.count - action.value
     };
    }

    
    case "DECREMENT":{
      return{
        ...state,
        count: state.count -1
     };
    }

    case "INCREMENT":{
      return{
        ...state,
        count: state.count + 1
     };
    }

    case "GET_POSTS": {
      return {
        ...state,
        posts:action.data
      }
    }

    default: return state;
  }

};
 // if(action.type === "ADD_VALUE"){
   // return{
      // ...state,
      // count: state.count + action.value
    //};
  //}

  //if(action.type === "SUB_VALUE"){
    //return{
      // ...state,
      // count: state.count - action.value
    //};
 // }

  //if(action.type === "DECREMENT"){
   // return{
      // ...state,
      // count: state.count - 1
    //};
 // }
  
 // if(action.type === "INCREMENT"){
    //return{
       //...state,
      // count: state.count + 1
    //};
  //}

 // if(action.type === "RESETCOUNT"){
   // return{
      // count: 0
    //};
  //}
   //return state;
//};
 
  const store = createStore(mainReducer, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
