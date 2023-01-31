import React,{ useReducer}  from 'react';


function reducer(state,action){
    let newList;
    switch(action.type){
      case "ADDLIST":
        return [
          ...state,
          action.list
        ];
      case "DELLIST":
        newList = state.filter((li,index) => index !== action.delindex)
        return newList
      case "TOGGLELIST":
        newList= state.map((li,index)=> index === action.toggleindex ? {...li,isToggle:!li.isToggle}:li)
        return newList
      default:
        return state
    }
  }

  

const useLists = () => {
    const [state,dispatch] = useReducer(reducer,[])
  
    // const [lists,setLists] = useState([])
    const addLists=(nickname,name)=>{
      dispatch({
        type:"ADDLIST",
        list:{nickname,name,isToggle:false}
      })
    }
    
    // //인덱스를 받아서 배열의 인덱스가 같으면 삭제
    const delList = (delindex)=>{
      //[{nickname:"a",name:"b"},{nickname:"c",name:"d"}]
      dispatch({
        type:"DELLIST",
        delindex:delindex
      })
    }
  
    const Toggle = (toggleindex) =>{                         
      dispatch({
        type:"TOGGLELIST",
        toggleindex
      })
    }
  
  
    return [state,addLists,delList,Toggle]
};

export default useLists;