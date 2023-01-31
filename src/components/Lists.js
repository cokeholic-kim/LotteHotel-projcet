import React from 'react';

const Lists = ({lists,deleteLists,delList,Toggle}) => {
    const nameArr = [<div>aa</div>,<div>bb</div>,<div>cc</div>,<div>dd</div>]
    return (
        <ul>
            {lists.map((list,index)=>
            <div key={index} style={{background: list.isToggle? 'pink':'yellow'}}><span onClick={()=>Toggle(index)}>{list.nickname} / {list.name}</span>
            <button onClick={()=>delList(index)}>
                삭제
            </button></div>)}
        </ul>
    );
};

export default Lists;