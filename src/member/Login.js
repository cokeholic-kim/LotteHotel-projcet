import React,{useState} from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import axios from 'axios';
import { setCookie } from '../util/cookie';
import { useDispatch } from 'react-redux';
import { goToHome, setLogin } from '../modules/logincheck';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData , setLoginData] = useState({
        useremail:"",
        userpass:"",
    })
    const onChange = (e)=>{
        const {name,value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        //인풋에 입력되어있는지 췤
        if(loginData.useremail === '' || loginData.userpass === ''){
            alert('이메일과 비밀번호를 입력해주세요')
        }else{
            axios.post(`${API_URL}/login`,loginData)
            .then(result => {
                const {m_email,m_name} = result.data[0]
                if(m_email && m_name){
                    alert("로그인 되었습니다.");
                    //현재시간 객체 생성
                    let expires = new Date();
                    //60분 더한값으로 변경
                    expires.setMinutes(expires.getMinutes()+60)
                    setCookie('useremail',`${m_email}`,{path:'/',expires});
                    setCookie('username',`${m_name}`,{path:'/',expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate));
                }
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }
    return (
        <div className='inner' id="login">
            <Title title="Login"/>
            <form onSubmit={onSubmit}>
                <table className='defaulttable small'>
                    <tbody>

                        <tr>
                            <td>아이디(이메일주소)</td>
                            <td><input type="text" name="useremail" value={loginData.useremail} onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="userpass" value={loginData.userpass} onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type='submit'>로그인</button>
                                <button>회원가입</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Link to="/findid"><span>아이디 찾기</span></Link> <Link to="/findpass"><span>비밀번호 찾기</span></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
        </div>
    );
};

export default Login;