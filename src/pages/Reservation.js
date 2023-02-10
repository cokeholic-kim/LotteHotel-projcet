import React, { startTransition, useState } from 'react';
import Title from '../components/Title';
import Example from './Example';
import "./Reservation.css";

const Reservation = () => {
    const [isShow,setIsShow] = useState(false)
    const [reservData,setReservData] = useState({
        rv_checkin:"",
        rv_checkout:"",
        rv_adult:"",
        rv_child:""
    })

    const hideDiv = (start,end) =>{
        setReservData({
            ...reservData,
            rv_checkin : start,
            rv_checkout: end
        })
        setIsShow(false);
        console.log(reservData)
    }

    const onChange = (e) =>{
        const {name,value} = e.target
        setReservData({
            ...reservData,
            [name]:value
        })
        console.log(reservData)
    }
    return (
        <div className='inner'>
            <Title title = "Reservation"/>
            <div className='reservation'>
                <ul className='reservsearch'>
                    <li>
                        <div>
                            <span>Check in</span>
                            <input name='rv_ckeckin' onChange={onChange} onClick={()=>setIsShow(!isShow)}/>
                        </div>
                        <div>
                            <span>Check out</span>
                            <input name='rv_ckeckout' onChange={onChange} onClick={()=>setIsShow(!isShow)}/>
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
                        <div>
                            검색
                        </div>
                    </li>
                </ul>    
            </div>            
        </div>
    );
};

export default Reservation;