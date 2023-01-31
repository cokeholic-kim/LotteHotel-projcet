import React from 'react';
import useAsync from '../Hooks/useAsync';
import axios from 'axios';

const getMembers = async()=>{
    const response = axios.get("http://localhost:8080/member")
    return response
}

const Members = () => {
    const [state,fetchData] = useAsync(getMembers);
    const {loading,data,err} = state;
    if(loading) return <div>로딩중</div> 
    if(err) return <div>에러발생</div> 
    if(!data) return <div>데이터가 없습니다.</div> 
    return (
        <ul>
            {data.map(d=><li key={d.m_no}>{d.m_name}</li>)}
        </ul>
    );
};

export default Members;