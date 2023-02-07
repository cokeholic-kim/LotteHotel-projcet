import axios from 'axios';
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';

const EditPassword = () => {
    const userid = useSelector(state=>state.logincheck.updateId)
    const navigate =useNavigate()
    const [formData ,setFormData] = useState({
        m_pass:"",
        m_passch:"",
        m_email:userid,
    })

    const onChange = (e) =>{
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        //get(조회),post(입력),put(전부업데이트) ,patch(일부업데이트)
        if(formData.m_pass === formData.m_passch){
            axios.patch(`${API_URL}/updatePw`,formData) //변경요청 update == put(전부업데이트),patch(일부 업데이트) 
            .then(res=>{
                if(res.data){
                    alert('패스워드가 변경되었습니다.') //
                    navigate('/login')
                }
            })
            .catch(e=>{console.log(e)})
        }else{
            alert('비밀번호가 일치하지 않습니다.')
        }
    }

    return (
        <div className='inner'>
            <Title title="Update password"/>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="m_pass" value = {formData.m_pass} onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td>비밀번호 확인</td>
                            <td><input type="password" name="m_passch" value = {formData.m_passch} onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">변경</button>
                                <button type='reset'>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default EditPassword;