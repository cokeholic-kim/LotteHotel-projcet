import React, { useEffect } from 'react';
import { MdFace } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'
import { removeCookie ,  getCookie  } from '../util/cookie';
import { setlogout,setLogin } from '../modules/logincheck';

const Header = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const username = getCookie("username");
    const dispatch = useDispatch();
    const logoutClick = ()=>{
        removeCookie('username');
        removeCookie('useremail');
        dispatch(setlogout()); 
    }
    useEffect(()=>{
        if(username){
            dispatch(setLogin()); //헤더에서 다시 디스패치 해주면 새로고침해도 로그아웃안됨
        }
    },[])
    return (
        <header>
            <h1><Link to="/"><img src="/imgages/logo2.png" alt=""/> MIDAS</Link></h1>
            <ul className='menu'>
                <li><Link to="/special">스페셜 오퍼</Link></li>
                <li><Link to="/room">객실안내</Link></li>
                <li>객실예약</li>
                <li>이용안내</li>
                {isLogin && username == 'admin' ? 
                <>
                    <li><Link to='/writeevent'>이벤트 등록</Link></li>
                    <li><Link to="/writeroom">객실등록</Link></li>
                </>
                :null}
            </ul>
            <div>
                <div className='iconDiv'>
                    <MdFace/>
                    <ul className='membermenu'>
                        {isLogin ? 
                        <>
                            <li onClick={logoutClick}><Link to="/login">로그아웃</Link></li>
                            <li><Link to="/join">회원정보</Link></li>
                        </>:
                        <>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/join">회원가입</Link></li>
                        </>    
                    }
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;