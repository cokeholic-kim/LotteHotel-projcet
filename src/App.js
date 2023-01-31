import './App.css';
import InputSample from './components/InputSample';
import TextSample from './components/TextSample';
import { useReducer} from 'react';
import Lists from './components/Lists';
import useLists from './Hooks/useLists';
import Members from './components/Members';


function App() {  
  // const deleteLists = (name)=>{
  //   const newList = lists.filter(list=> list.name !== name)
  //   console.log(newList)
  //   setLists(newList)
  // }
  const [state,addLists,delList,Toggle] = useLists()

  return (
    <div className="App">
      {/* <InputSample title="green" addLists={addLists}><TextSample/></InputSample>
      <Lists lists={state}  delList={delList} Toggle={Toggle}/> */}
      <Members/>
    </div>
  );
}

export default App;
