import React from 'react';
import './Specialoffer.css';

const SpecialLists = ({list})=>{
    console.log(list)
    return(
        <li>
            <div className='imgdiv'>
                <img src={list.img} alt="" />
            </div>
            <div className='textdiv'>
                <h3>{list.title}</h3>
                <p>
                    {list.desc}
                </p>
                <div>
                    +<br/>
                    Fuck You BitXX
                </div>
            </div>
        </li>
    )
}

const Specialoffer = ({data}) => {
    console.log(data)
    return (
        <div className='special'>
            <div className='inner'>
                <h2><span>스페셜 오퍼</span>생각 밖의 선물, 마이다스 호텔 & 리조트</h2>
                <ul>
                    {data.map(d=><SpecialLists key={d.id} list={d}/>)}
                </ul>
             </div>
        </div>
    );
};

export default Specialoffer;