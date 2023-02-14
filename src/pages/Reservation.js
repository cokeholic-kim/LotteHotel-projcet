import React, { startTransition, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/Title';
import { dataUpdate } from '../modules/reserve';
import Example from './Example';
import "./Reservation.css";
import RoomContainer from '../container/RoomContainer';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { Route, Routes } from 'react-router-dom';
import ReservationSign from './ReservationSign';

const Reservation = () => {
    const [isShow,setIsShow] = useState(false)
    // 체크인 체크아웃 스토어에서 받아오기
    const rv_date = useSelector(state=>state.reserve.rv_date)
    const dispatch = useDispatch()

    //예약이 불가능한 방목록 --> 이미 그 날짜에 예약이 된 객실번호 배열
    const [reserveRoom,setReserveRoom] = useState([])

    const hideDiv = (start,end) =>{
        if(start && end){
            dispatch(dataUpdate({
                name:"rv_date",
                value:{
                    checkin: start,
                    checkout: end
                }
            }))
           
            console.log(rv_date)
            setIsShow(false)
        }else{
            return
        }
    }

    const onChange = (e) =>{
        const {name,value} = e.target
        dispatch(dataUpdate({
            name:name,
            value:value
        }))
        console.log(rv_date)
    }

    //해당 날짜에 예약이 되어있는 객실번호 불러오기
    const searchRoom = (start,end)  => {
        axios.get(`${API_URL}/serchRoom?start=${start}&end=${end}`)
        .then(res=>{
            console.log(res.data)
            setReserveRoom(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className='inner'>
            <Title title = "Reservation"/>
            <Routes>
                <Route path="/*" element={
                                    <div>
                                    <div className='reservation'>
                                        <ul className='reservsearch'>
                                            <li>
                                                <div>
                                                    <span>Check in</span>
                                                    <input name='rv_ckeckin' onChange={onChange} onClick={()=>setIsShow(!isShow)} value={rv_date.checkin}/>
                                                </div>
                                                <div>
                                                    <span>Check out</span>
                                                    <input name='rv_ckeckout' onChange={onChange} onClick={()=>setIsShow(!isShow)} value={rv_date.checkout}/>
                                                </div>
                                                <div  className='checkdate'>
                                                    {isShow && <Example hideDateDiv={hideDiv}/>}
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span>Adults</span>
                                                    <select name='rv_adult'  onChange={onChange}>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span>Children</span>
                                                    <select name='rv_child'  onChange={onChange}>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <div onClick={()=>searchRoom(rv_date.checkin,rv_date.checkout)}>
                                                    검색
                                                </div>
                                            </li>
                                        </ul>    
                                    </div>  
                                    <RoomContainer isreserve={true} reserveRoom={reserveRoom}/>          
                                </div>
                
                }/>
                <Route path="/register" element={<ReservationSign/>}/>
            </Routes>
        </div>
    );
};

export default Reservation;