import './App.css';
import Counter from './Counter';
import Increment from './Increment';
import Decrement from './Decrement';
import ResetCount from './ResetCount'; 



function App() {
  return (
    <div className="App">

      <ResetCount/>
      <Decrement/>    
      <Counter/>
      <Increment/>      

    </div>
  );
}

export default App;
