//리덕스 액션타입, 초기값, 액션함수 생성,리듀서

import { API_URL } from "../config/apiurl";
import axios from "axios";

// 1.액션타입
const GET_DATAS = "special/GET_DATAS"; //요청
const GET_DATAS_SUCCESS = "special/GET_DATAS_SUCCESS"; //요청성공
const GET_DATAS_ERROR = "special/GET_DATAS_ERROR"; //요청실패
const GET_DATA = "special/GET_DATA"; //요청1개
const GET_DATA_SUCCESS = "special/GET_DATA_SUCCESS"; //요청1개 성공
const GET_DATA_ERROR = "special/GET_DATA_ERROR"; //요청1개 실패

//2.초기값
const initialState = {
    specials:{
        loading:false,
        data:null,
        error:null
    },
    special:{
        loading:false,
        data:null,
        error:null
    }
}
//redux middlewear thunk함수 생성
//thunk함수를 사용해서 액션객체를 디스패치 하기.
export const getDatas = ()=> async dispatch =>{ //getDatas를 하면 함수를 리턴해줌.
    dispatch({type:GET_DATAS}) //요청시작
    //에러 핸들링
    try{
        // API_URL = "http://localhost:8080"
        const response = await axios.get(`${API_URL}/special`);
        const data = response.data
        dispatch({type: GET_DATAS_SUCCESS , data:data})
    }
    catch(e){
        dispatch({type:GET_DATAS_ERROR,error:e})
    }
}
export const getData = no => async dispatch =>{
    dispatch ({type: GET_DATA});
    try{
        const response = await axios.get(`${API_URL}/special/${no}`)
        const data = response.data
        dispatch({type:GET_DATA_SUCCESS,data})
    }
    catch(e){
        dispatch({type:GET_DATA_ERROR,error:e})
    }
}
//3.리듀서 만들기
export default function special(state=initialState,action){
    switch(action.type){
        case GET_DATAS:
            return{
                ...state,
                specials:{
                    loading:true,
                    data:null,
                    error:null
                }
            };
        case GET_DATAS_SUCCESS:
            return{
                ...state,
                specials:{
                    loading:false,
                    data:action.data,
                    error:null
                }
            };
        case GET_DATAS_ERROR:
            return{
                ...state,
                specials:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            };
        // 데이터한개
        case GET_DATA:
            return{
                ...state,
                special:{
                    loading:true,
                    data:null,
                    error:null
                }
            };
        case GET_DATA_SUCCESS:
            return{
                ...state,
                special:{
                    loading:false,
                    data:action.data,
                    error:null
                }
            };
        case GET_DATA_ERROR:
            return{
                ...state,
                special:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            };

    
        default:
            return state
    }
}