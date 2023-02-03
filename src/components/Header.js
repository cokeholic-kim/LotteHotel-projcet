import React from 'react';
import { MdFace } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1><Link to="/"><img src="/imgages/logo2.png" alt=""/> MIDAS</Link></h1>
            <ul className='menu'>
                <li><Link to="/special">스페셜 오퍼</Link></li>
                <li>홈</li>
                <li>객실안내</li>
                <li>객실예약</li>
                <li>이용안내</li>
            </ul>
            <div>
                <div className='iconDiv'>
                    <MdFace/>
                    <ul className='membermenu'>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;