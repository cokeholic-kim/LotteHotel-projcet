import React, { useState } from 'react';
import SpecialContainer from '../container/SpecialContainer';
import Promotion from './Promotion';
import VisualSlider from './VisualSlider';

const Main = () => {
    const [special,setSpecial] = useState([
        {
            id:1,
            title:"트니 어드벤처 패키지",
            img:"images/banner1.jpg",
            desc:"아무설명이나넣음1",
            link:"미정"
        },
        {
            id:2,
            title:"마이다스 키즈잼 패키지",
            img:"images/banner2.png",
            desc:"아무설명이나넣음2",
            link:"미정"
        },
        {
            id:3,
            title:"굿모닝 어드벤처 패키지",
            img:"images/banner3.jpg",
            desc:"아무설명이나넣음3",
            link:"미정"
        },
    ])
    return (
        <div>
            <VisualSlider/>
            <SpecialContainer/>
            <Promotion/>
        </div>
    );
};

export default Main;