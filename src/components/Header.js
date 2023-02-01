import React from 'react';
import { MdFace } from "react-icons/md";
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>MIDAS</h1>
            <ul className='menu'>
                <li>스페셜 오퍼</li>
                <li>홈</li>
                <li>객실안내</li>
                <li>객실예약</li>
                <li>이용안내</li>
            </ul>
            <div>
                <div className='iconDiv'>
                    <MdFace/>
                    <ul className='membermenu'>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;