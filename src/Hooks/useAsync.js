import axios from "axios"
import { useEffect, useReducer } from "react"

function reducer(state,action){
    switch(action.type){
        case'LOADING':
            return{
                loading:true,
                data:null,
                err:null
            }
        case'SUCCESS':
            return{
                loading:false,
                data:action.data,
                err:null
            }
        case'ERROR':
            return{
                loading:false,
                data:null,
                err:action.err
            }
        default:
            return state
    }    
}
function useAsync(callback){
    const[state,dispatch] =useReducer(reducer,{
        loading:false,
        data:null,
        err:null
    })

    const fetchData= async ()=>{
        dispatch({type:"LOADING"}); //상태변경
        try{
            const {data} = await callback(); //객체로 받아옴 data키에 데이터들이 담긴다. ,,변수로 여러가지 axios요청을 할수있음
            dispatch({type:"SUCCESS",data:data})
        }
        catch(e){
            dispatch({type:"ERROR" ,err:e})
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]) //useAsync를 불렀을때 마운트되고 fetchData를 실행해줌.
    return [state,fetchData] 
}
export default useAsync;