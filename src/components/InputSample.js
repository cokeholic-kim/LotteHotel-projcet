import React, { useState } from 'react';

const InputSample = ({title,children,addLists}) => {
    
    const [inputs,setInputs] = useState({
        userName:"",
        userNickName:"",
    })
    const {userName,userNickName} = inputs
    const onChange=(e)=>{
        const {name,value} = e.target
        setInputs({
            ...inputs,
            [name]:value //username:value ,userNickName:value 각각 인풋이벤트에게 밸류값을 넣어줌
        })
    }
    const onClick=()=>{
        addLists(userName,userNickName)
        setInputs({
            userName:"",
            userNickName:"",    
        })
    }
    return (
        <div>
            <h2>{title}</h2>
            {children}
            <input type="text" name="userName" value={inputs.userName} onChange={onChange} placeholder="userName"/><br/>
            <input type="text" name="userNickName" value={inputs.userNickName} onChange={onChange} placeholder="userNickName"/><br/>
            <button onClick={onClick}>추가</button>
        </div>
    );
};

export default InputSample;